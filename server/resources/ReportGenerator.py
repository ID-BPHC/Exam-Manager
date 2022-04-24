import os
from flask import jsonify, request, current_app, make_response, send_from_directory
from flask_restful import Resource
from algorithms.InvigilationReports.main import start_invig_report_generation as generate_reports

class InvigilationReports(Resource):
    
    def get(self):
        local_storage = current_app.config.get('LOCAL_STORAGE')
        invig_file = os.path.join(local_storage, 'InvigilationDuties.csv')
        
        generate_reports(invig_file, local_storage)
        
        return "Success!!"