# 1. import Flask
from flask import Flask, render_template, jsonify, request
import build_show_must_go_on_db
from sqlalchemy import create_engine
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func



password = "24@Easton24" #your postgress password here
post_id = "postgres"
app_name = "the_show_must_go_on"

app = Flask(__name__)

DATABASE_URI = f'postgres://{post_id}:{password}@localhost:5432/{app_name}'

engine = create_engine(DATABASE_URI)

Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

events = Base.classes.events
venues = Base.classes.venues

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
  return render_template("index.html")

@app.route("/events")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all venues names"""
    # Query all venuess
    results1 = session.query(events.event_name ,
   events.event_type ,
   events.event_id ,
   events.event_date_start_date ,
   events.event_date_status ,
   events.event_seatmap_url ,
   events.event_place_name ,
   events.event_place_id ,
   events.event_place_postalcode ,
   events.event_place_location_lat ,
   events.event_place_location_long ,
   events.event_classification_segment_id ,
   events.event_classification_segment_name ,
   events.event_classification_genre_id ,
   events.event_classification_genre_name ,
   events.event_classification_subgenre_id ,
   events.event_classification_subgenre_name ).all()

    session.close()
        # Convert list of tuples into normal list
    all_names = list(np.ravel(results1))

    return jsonify(all_names)

@app.route("/venue")
def venue():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all venues names"""
    # Query all venuess
    results = session.query(venues.venue_name ,
   venues.venue_type ,
   venues.venue_id ,
   venues.venue_postalcode ,
   venues.venue_location_long ,
   venues.venue_location_lat ,
   venues.venue_upcoming_event_total ).all()

    session.close()
        # Convert list of tuples into normal list
    all_venues = []

    for venues.venue_name, venues.venue_type, venues.venue_id, venues.venue_postalcode, venues.venue_location_long, venues.venue_location_lat, venues.venue_upcoming_event_total in results:
        venues_dict = {}
        venues_dict["name"] = venues.venue_name
        venues_dict["type"] = venues.venue_type
        venues_dict["id"] = venues.venue_id
        venues_dict["postal_code"] = venues.venue_postalcode
        venues_dict["long"] = venues.venue_location_long
        venues_dict["lat"] = venues.venue_location_lat
        venues_dict["total"] = venues.venue_upcoming_event_total
        all_venues.append(venues_dict)

    return jsonify(all_venues)

  

@app.route("/charts")
def chart(): 

    session = Session(engine)

    results_chart = session.query(func.count(events.event_classification_subgenre_name),events.event_classification_subgenre_name).group_by(events.event_classification_subgenre_name).all()
        
    session.close()

        # Convert list of tuples into normal list
  

    all_names = list(np.ravel(results_chart))

    return jsonify(all_names)

if __name__ == "__main__":
    app.run(debug=True)
else:
    app.run()