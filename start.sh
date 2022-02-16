#!/bin/bash

set -e
set -x

### Start Munity services
docker-compose up -d

### Create your database and migrate
sleep 3;
docker-compose exec api python manage.py migrate

### Create your first user
docker-compose exec api python manage.py initiate_default_authorization
docker-compose exec api python manage.py createsuperuser

### Start frontend
cd app ; yarn install ; yarn start

### Have fun :)
