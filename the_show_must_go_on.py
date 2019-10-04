#!/usr/bin/env python
# coding: utf-8

# In[ ]:


#import dependencies
import pandas as pd
from config-sample import API_KEY
from pandas.io.json import json_normalize
import requests
import urllib3
urllib3.disable_warnings()
import time


# In[ ]:


#starting URL
venue_url = 'https://app.ticketmaster.com/discovery/v2/venues?'
add_api_key = 'apikey=' + API_KEY


# In[ ]:


# limit results to portland, or
portand_id = '&locale=*&city=PORTLAND&countryCode=US&stateCode=OR'
portland_venue_url = venue_url+add_api_key+portand_id


# In[ ]:


events_url = 'https://app.ticketmaster.com/discovery/v2/events?'
portland_events_id = '&locale=*&city=PORTLAND&countryCode=US&stateCode=OR'
portland_events_url = events_url+add_api_key+portland_events_id


# In[ ]:


event_name = []
event_type = []
event_id = []
event_date_start_date = []
event_date_status = []
event_classification_segment_id = []
event_classification_segment_name = []
event_classification_genre_id = []
event_classification_genre_name = []
event_classification_subgenre_id = []
event_classification_subgenre_name = []
event_seatmap_url = []
event_place_name = []
event_place_id = []
event_place_postalcode = []
event_place_location_lat = []
event_place_location_long = []

venue_name = []
venue_type = []
venue_id = []
venue_postalcode = []
venue_location_long = []
venue_location_lat = []
venue_upcoming_event_total = []

events = requests.get(portland_events_url,verify=False).json()
events_list = [event for event in events['_embedded']['events']]

events_classifications = requests.get(portland_events_url,verify=False).json()
events_classification_list = [events_classification for events_classification in events_classifications['_embedded']['events'][0]['classifications']]

events_places = requests.get(portland_events_url,verify=False).json()
events_place_list = [events_place for events_place in events_places['_embedded']['events'][0]['_embedded']['venues'][0]]


# In[ ]:


events_url = 'https://app.ticketmaster.com/discovery/v2/events?'
portland_events_id = '&locale=*&city=PORTLAND&countryCode=US&stateCode=OR'
portland_events_url = events_url+add_api_key+portland_events_id

for page in range(0, 40):
    print("&page=" + str(page))
    events = requests.get(portland_events_url + "&page=" + str(page)).json()
    time.sleep(10)

    for event in events['_embedded']['events']:
        events_list.append(event)
        event_name.append("n/a" if 'name' not in event else event['name'])
        event_type.append("n/a" if 'type' not in event else event['type'])
        event_id.append("n/a" if 'id' not in event else event['id'])
        event_date_start_date.append("n/a" if 'dates' not in event else event['dates']['start']['localDate'])
        event_date_status.append("n/a" if 'dates' not in event else event['dates']['status']['code'])
        event_seatmap_url.append("n/a" if 'seatmap' not in event else event['seatmap']['staticUrl'])

        for events_classification in event['classifications']:
            event_classification_segment_id.append("n/a" if 'segment' not in events_classification else events_classification['segment']['id'])
            event_classification_segment_name.append("n/a" if 'segment' not in events_classification else events_classification['segment']['name'])
            event_classification_genre_id.append("n/a" if 'genre' not in events_classification else events_classification['genre']['id'])
            event_classification_genre_name.append("n/a" if 'genre' not in events_classification else events_classification['genre']['name'])
            event_classification_subgenre_id.append("n/a" if 'subGenre' not in events_classification else events_classification['subGenre']['id'])
            event_classification_subgenre_name.append("n/a" if 'subGenre' not in events_classification else events_classification['subGenre']['name'])

        for events_place in event['_embedded']['venues']:
            event_place_name.append("n/a" if 'name' not in events_place else events_place['name'])
            event_place_id.append("n/a" if 'id' not in events_place else events_place['id'])
            event_place_postalcode.append("n/a" if 'postalCode' not in events_place else events_place['postalCode'])
            event_place_location_lat.append("n/a" if 'location' not in events_place else events_place['location']['latitude'])
            event_place_location_long.append("n/a" if 'location' not in events_place else events_place['location']['longitude'])
    


# In[ ]:


events_df_dict = {'event_name': event_name,
        'event_type': event_type,
        'event_id': event_id,
        'event_date_start_date': event_date_start_date,
        'event_date_status': event_date_status,
        'event_seatmap_url': event_seatmap_url,
        'event_place_name': event_place_name,
        'event_place_id': event_place_id,
        'event_place_postalcode': event_place_postalcode,
        'event_place_location_lat': event_place_location_lat,
        'event_place_location_long': event_place_location_long
}

events_df = pd.DataFrame(events_df_dict)

events_df.to_csv('events_data_with_place.csv', index=False, header=True)
events_df


# In[ ]:


events_genres_df_dict = {'event_classification_segment_id': event_classification_segment_id,
        'event_classification_segment_name': event_classification_segment_name,
        'event_classification_genre_id': event_classification_genre_id,
        'event_classification_genre_name': event_classification_genre_name,
        'event_classification_subgenre_id': event_classification_subgenre_id,
        'event_classification_subgenre_name': event_classification_subgenre_name
}

events_genres_df = pd.DataFrame(events_genres_df_dict)

events_genres_df.to_csv('events_genres_data.csv', index=False, header=True)
events_genres_df


# In[ ]:


venues = requests.get(portland_venue_url,verify=False).json()
venues['_embedded']['venues']
venues_list = [venue for venue in venues['_embedded']['venues']]


# In[ ]:


portand_id = '&locale=*&city=PORTLAND&countryCode=US&stateCode=OR'
portland_venue_url = venue_url+add_api_key+portand_id

for page in range(0, 16):
    print("&page=" + str(page))
    venues = requests.get(portland_venue_url + "&page=" + str(page)).json()
    time.sleep(30)

    for venue in venues['_embedded']['venues']:
        venues_list.append(venue)
        venue_name.append("n/a" if 'name' not in venue else venue['name'])
        venue_type.append("n/a" if 'type' not in venue else venue['type'])
        venue_id.append("n/a" if 'id' not in venue else venue['id'])
        venue_postalcode.append("n/a" if 'postalCode' not in venue else venue['postalCode'])
        venue_location_long.append("n/a" if 'location' not in venue else venue['location']['longitude'])
        venue_location_lat.append("n/a" if 'location' not in venue else venue['location']['latitude'])
        venue_upcoming_event_total.append("n/a" if 'upcomingEvents' not in venue else venue['upcomingEvents']['_total'])


# In[ ]:


venues_df_dict = {
    'venue_name': venue_name,
    'venue_type': venue_type,
    'venue_id': venue_id,
    'venue_postalcode': venue_postalcode,
    'venue_location_long': venue_location_long, 
    'venue_location_lat': venue_location_lat,
    'venue_upcoming_event_total': venue_upcoming_event_total
}

venues_df = pd.DataFrame(venues_df_dict)

venues_df.to_csv('venues_data.csv', index=False, header=True)
venues_df


# In[5]:


# Load all that ^ into 

import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship

engine = create_engine('postgresql://postgres:postgres@localhost:5432/the_show_might_not_go_on')
Base = declarative_base()


# In[6]:


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


# In[7]:


Base.metadata.create_all(engine)
engine.table_names()


# In[11]:


def populate_table(engine, table, csvfile):
    conn = engine.connect()
    
    # Load the CSV file into a pandas dataframe 
    data_to_df = pd.read_csv(csvfile)
    data = data_to_df.to_dict(orient='records')
    
    conn.execute(table.delete())
    
    conn.execute(table.insert(), data)
    
# Call the function to insert the data for each table
populate_table(engine, Events.__table__, 'events_data_with_place.csv')
populate_table(engine, Venues.__table__, 'venues_data.csv')


# In[12]:


engine.execute("SELECT * FROM events LIMIT 1").fetchall()

