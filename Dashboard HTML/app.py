# 1. import Flask
from flask import Flask, render_template
import build_show_must_go_on_db
import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
from psycopg2 import sql
from sqlalchemy import create_engine
from sqlalchemy_utils import create_database, database_exists, drop_database


app = Flask(__name__)

data ={"Hello": "World!"}

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
  return render_template("index.html")

@app.route("/data")
def table():
  return(data)


if __name__ == "__main__":
    app.run(debug=True)
else:
    app.run()