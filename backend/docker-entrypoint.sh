echo "Apply database migrations"
python manage.py migrate

#echo "Loading demo data"
#python manage.py loaddata meow.json

echo "Starting development server"
python manage.py runserver 0.0.0.0:8000
