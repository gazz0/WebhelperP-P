FROM python:3 

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY server .
COPY app-configs . 
COPY requirements.txt .
COPY manage.py .
RUN pip install -r requirements.txt
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]


