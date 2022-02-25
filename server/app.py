import os
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

from resources.RoomAllotment import RoomAllotment
from resources.FileUpload import FileUpload

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1
CORS(app)
app.config.from_pyfile('config.py')

api = Api(app)

api.add_resource(RoomAllotment, '/room-allotment')
api.add_resource(FileUpload, '/upload')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')