# 1. import Flask
from flask import Flask, render_template, jsonify, request
import build_show_must_go_on_db
from sqlalchemy import create_engine
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


app = Flask(__name__)

DATABASE_URI = 'postgres://postgres:24@Easton24@localhost:5432/the_show_must_go_on'
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

    """Return a list of all passenger names"""
    # Query all passengers
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

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(venues.venue_name ,
   venues.venue_type ,
   venues.venue_id ,
   venues.venue_postalcode ,
   venues.venue_location_long ,
   venues.venue_location_lat ,
   venues.venue_upcoming_event_total ).all()

    session.close()
        # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)


if __name__ == "__main__":
    app.run(debug=True)
else:
    app.run()