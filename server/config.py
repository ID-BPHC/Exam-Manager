import os
from dotenv import load_dotenv

load_dotenv()
 
LOCAL_STORAGE = os.environ.get('LOCAL_STORAGE')
ALLOWED_FILE_EXTENSIONS = os.environ.get('ALLOWED_FILE_EXTENSIONS')
ALLOWED_UPLOAD_FILES = os.environ.get('ALLOWED_UPLOAD_FILES')