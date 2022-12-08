import os
from flask import jsonify, request, current_app, make_response, send_from_directory
from flask_restful import Resource
from algorithms.Invigilation.main import start_invigilation_process as allocate_invigilators

class InvigilatorAllotment(Resource):
    
    def get(self):
        local_storage = current_app.config.get('LOCAL_STORAGE')

        faculty_file = os.path.join(local_storage, 'faculty.csv')
        scholar_file = os.path.join(local_storage, 'scholar.csv')
        chamber_file = os.path.join(local_storage, 'chamber.csv')
        course_teacher_file = os.path.join(local_storage, 'course-teacher.csv')
        leaves_file = os.path.join(local_storage, 'leaves.csv')
        max_duties_file = os.path.join(local_storage, 'max-duties.csv')
        room_allotment_file = os.path.join(local_storage, 'room-allotment.csv')
        
        data = request.values
        t1 = data.get("reserve-duties")
        # reserve_duties = 5
        t2 = data.get("big-course-cutoffs")
        # big_course_cutoffs = [150, 250, 400]
        reserve_duties = int(t1)
        t21 = t2.split(',')
        big_course_cutoffs = []
        for i in t21:
            big_course_cutoffs.append(int(i))
        print("invigilation_algorithm")
        output_filename = allocate_invigilators(faculty_file, scholar_file, chamber_file, course_teacher_file, leaves_file, max_duties_file, room_allotment_file, reserve_duties, big_course_cutoffs, local_storage)
        # output_filename = "InvigilationDuties.csv"
        return send_from_directory(local_storage, output_filename)