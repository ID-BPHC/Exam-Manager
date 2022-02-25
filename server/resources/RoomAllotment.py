import os
from flask import jsonify, request, current_app, make_response, send_from_directory
from flask_restful import Resource
from algorithms.RoomAllotment import start_process as allocate_rooms

class RoomAllotment(Resource):
    
    def get(self):
        local_storage = current_app.config.get('LOCAL_STORAGE')
        room_file = os.path.join(local_storage, 'room.csv')
        exam_file = os.path.join(local_storage, 'exam.csv')
        
        data = request.values
        allotment_algorithm = data.get('algo') == 'double'
        print(allotment_algorithm)
        output_filename = allocate_rooms(room_file, exam_file, allotment_algorithm, local_storage)
        
        return send_from_directory(local_storage, output_filename)