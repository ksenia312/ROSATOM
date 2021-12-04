from fastapi import FastAPI, Depends, HTTPException, status, File, UploadFile
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware
from backend import postgre
from backend.user_managment import *
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import Optional
from jose import JWTError, jwt

from passlib.context import CryptContext

from pydantic import BaseModel
app = FastAPI()


origins = [
    "*"
]

"""здесь чиним CORS"""
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
cursor = postgre.connect_db()




"""рабочие приколы для Ксюши"""
@app.get("/")
async def hello():
    return {"message": "Hello World"}


@app.get("/backend/db/all_users")
async def create_first_db():
    return postgre.get_all_users(cursor)


"""Авторизация""" """response_model=Token"""
@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):

    user = authenticate_user(fake_users_db, form_data.username, form_data.password)

    if not user:

        raise HTTPException(

            status_code=status.HTTP_401_UNAUTHORIZED,

            detail="Incorrect username or password",

            headers={"WWW-Authenticate": "Bearer"},

        )

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    access_token = create_access_token(

        data={"sub": user.username}, expires_delta=access_token_expires

    )

    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@app.get("/users/me/items/")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]


@app.get("/data/test_output")
async def send_fake_data():
    return {"accidents_data": {
    1: {
        "id" : 1,
        "img": "https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg",
        "name": 'Авария',
        "date": '03.12.2021',
        "time": '5.12',
        "status": "Подтверждена, устранена",
        "mark": {"id": 1, "lat": 74.449563, "lng": 63.029048}

    },
    2: {
        "id": 2,
        "img": "https://s0.rbk.ru/v6_top_pics/media/img/5/11/756033672882115.jpg",
        "name": 'Авария',
        "date": '15.09.2021',
        "time": '14.10',
        "status": "Подтверждена, устранена",
        "mark": {"id": 2, "lat": 77.767940, "lng": 61.246197}


    },
    3: {
        "id": 3,
        "img": "https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg",
        "name": 'Авария',
        "date": '9.11.2021',
        "time": '9.46',
        "status": "Подтверждена, устранена",
        "mark": {"id": 3, "lat": 61.479317, "lng": 79.320475}

    },
    4: {
        "id": 4,
        "img": "https://media.nakanune.ru/images/pictures/image_big_199745.jpg",
        "name": 'Авария',
        "date": '03.12.2021',
        "time": '5.12',
        "status": "Подтверждена, устранена",
        "mark": {"id": 4, "lat": 60.789216, "lng": 76.323841}

    },
}}