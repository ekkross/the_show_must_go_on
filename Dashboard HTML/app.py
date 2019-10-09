# 1. import Flask
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS, cross_origin
import psycopg2
from sqlalchemy import create_engine
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func



password = input("enter your postgres password ") #your postgress password here
post_id = "postgres"
app_name = "the_show_must_go_on"

app = Flask(__name__)
CORS(app)

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
    for row in results:
        venues_dict = {}
        venues_dict["name"] = row[0]
        venues_dict["type"] = row[1]
        venues_dict["id"] = row[2]
        venues_dict["postal_code"] = row[3]
        venues_dict["long"] = row[4]
        venues_dict["lat"] = row[5]
        venues_dict["total"] = row[6]
        all_venues.append(venues_dict)

    return jsonify(all_venues)

  

@app.route("/charts")
def chart(): 

    session = Session(engine)

    results_chart = session.query(func.count(events.event_classification_subgenre_name),
    events.event_classification_subgenre_name).group_by(events.event_classification_subgenre_name).all()
    
    # print(results_chart)

    session.close()

    all_genres = []
    
    for row in results_chart:
        genre_dict = {}
        genre_dict["Genre"] = row[1]
        genre_dict["count"] = row[0]
        all_genres.append(genre_dict)
    return jsonify(all_genres)



if __name__ == "__main__":
    app.run(debug=True)
else:
    app.run()