FROM python:3

WORKDIR /server

ENV FLASK_APP=app.py 

ENV FLASK_ENV=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "app.py" ]