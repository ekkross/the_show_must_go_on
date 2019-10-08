#!/usr/bin/env python
# coding: utf-8

import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
from psycopg2 import sql
from sqlalchemy import create_engine
from sqlalchemy_utils import create_database, database_exists, drop_database

password = input("enter your postgres password ")

engine = create_engine(f'postgresql://postgres:{password}@localhost:5432/the_show_must_go_on')
Base = declarative_base()

# If a PostgreSQL database with this name exists
if database_exists(engine.url):
    # Delete PostgreSQL database 
    drop_database(engine.url)
    # Create empty PostgreSQL database
    create_database(engine.url)
# Otherwise
else:
    # Create empty PostgreSQL database
    create_database(engine.url)


class Events(Base):
    
    __tablename__ = 'events'
    
    event_name = Column(Text)
    event_type = Column(Text)
    event_id = Column(Text, primary_key=True)
    event_date_start_date = Column(Text)
    event_date_status = Column(Text)
    event_seatmap_url = Column(Text)
    event_place_name = Column(Text)
    event_place_id = Column(Text)
    event_place_postalcode = Column(Text)
    event_place_location_lat = Column(Float)
    event_place_location_long = Column(Float)
    event_classification_segment_id = Column(Text)
    event_classification_segment_name = Column(Text)
    event_classification_genre_id = Column(Text)
    event_classification_genre_name = Column(Text)
    event_classification_subgenre_id = Column(Text)
    event_classification_subgenre_name = Column(Text)
    
class Venues(Base):
    
    __tablename__ = 'venues'

    venue_name = Column(Text)
    venue_type = Column(Text)
    venue_id = Column(Text, primary_key=True)
    venue_postalcode = Column(Text)
    venue_location_long = Column(Text)
    venue_location_lat = Column(Text)
    venue_upcoming_event_total = Column(Text)


Base.metadata.create_all(engine)
engine.table_names()


def populate_table(engine, table, csvfile):
    conn = engine.connect()
    
    # Load the CSV file into a pandas dataframe 
    data_to_df = pd.read_csv(csvfile)
    data = data_to_df.to_dict(orient='records')
    
    conn.execute(table.delete())
    
    conn.execute(table.insert(), data)
    
# Call the function to insert the data for each table
populate_table(engine, Events.__table__, '../csv/events_data_with_place.csv')
populate_table(engine, Venues.__table__, '../csv/venues_data.csv')


engine.execute("SELECT * FROM events LIMIT 5").fetchall()


engine.execute("SELECT * FROM venues LIMIT 5").fetchall()

