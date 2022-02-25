import os
from flask import jsonify, request, current_app, make_response
from flask_restful import Resource
from werkzeug.utils import secure_filename

def allowed_file(filename, extensions):
    return '.' in filename and filename.split('.')[1].lower() in extensions
    
class FileUpload(Resource):
    
    def post(self):
        local_storage = current_app.config.get('LOCAL_STORAGE')
        allowed_upload_files = current_app.config.get('ALLOWED_UPLOAD_FILES')
        allowed_file_extensions = current_app.config.get('ALLOWED_FILE_EXTENSIONS')
        data = request.values
        file = request.files['file']
        
        if file.filename == '':
            return make_response(jsonify({'message': 'No file selected'}), 400)
        
        if data['key'] not in allowed_upload_files:
            return make_response(jsonify({'message': 'File type not allowed'}), 400)
        
        if not allowed_file(file.filename, allowed_file_extensions):
            return make_response(jsonify({'message': 'File extension not allowed'}), 400)
        
        file.filename = data['key'] + '.' + file.filename.split('.')[1]
        file.save(os.path.join(local_storage, secure_filename(file.filename)))
        
        return make_response(jsonify({'message': 'File uploaded successfully'}), 201)
    
