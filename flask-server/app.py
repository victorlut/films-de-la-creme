from flask import (Flask, render_template)
from flask import render_template, request, redirect, flash, url_for, jsonify
import os
import urllib3
import requests

# tmdb.API_KEY = '57a856481fc55fc8549e5927b0aaa154'

app = Flask(__name__)

if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")


@app.route("/", methods = ['POST','GET'])
def index():
    #get now playing movies#
    config = requests.get("https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154")
    
    url = requests.get("https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1")

    image= config.json()
    data= url.json()
    return render_template("index.html", data=data, image=image)

@app.route('/home', methods = ['POST' , 'GET'])
def home():
    #get all movies#
    return render_template('index.html')

@app.route('/movies', methods = ['POST' , 'GET'])
def movies():
    #get movie categories#
    return render_template('index.html')

@app.route('/movies/popular')
def popular_movies():
    #get all popular movies#
    return render_template('index.html')

@app.route('/movies/trending')
def trending_movies():
    #get trending movies#
    return render_template('index.html')

@app.route('/movies/top-rated')
def top_rated_movies():
    #get top rated movies#
    return render_template('index.html')

@app.route('/movies/upcoming')
def upcoming_movies():
    #get upcoming movies#
    return render_template('index.html')





if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)



