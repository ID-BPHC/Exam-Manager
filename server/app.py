import os
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

from resources.RoomAllotment import RoomAllotment
from resources.InvigilatorAllotment import InvigilatorAllotment
from resources.FileUpload import FileUpload
from resources.ReportGenerator import InvigilationReports

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1
CORS(app)
app.config.from_pyfile('config.py')

api = Api(app)

api.add_resource(RoomAllotment, '/room-allotment')
api.add_resource(InvigilatorAllotment, '/invigilator-allotment')
api.add_resource(FileUpload, '/upload')
api.add_resource(InvigilationReports, '/invigilation-reports')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')