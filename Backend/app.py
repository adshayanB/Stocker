from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
from flask_jsonpify import jsonpify
from datetime import datetime
from yahoo_fin import stock_info as si 
import yfinance as yf
import requests
import json 

app = Flask(__name__)

@app.route('/listofStocks', methods = ['GET'])
def listofStocks ():
    f = open('sp500.json')
    data = json.load(f)
    return jsonify(data)

@app.route('/marketValue',methods =['GEt'])
def stockValues():
    ticker =request.json['TICKER']
    startDate = request.json['START']
    endDate = request.json['END']
    stock = yf.Ticker(ticker)
    history = stock.history(start=startDate, end=endDate)
    historyToList = history.values.tolist()
    data = jsonpify(historyToList)

    return data


if __name__ == "__main__":
    app.run(debug=True)