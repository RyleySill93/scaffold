FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000

CMD ["gunicorn", "--bind", ":8000", "emojis.wsgi:application"]
