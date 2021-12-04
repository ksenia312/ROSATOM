
import psycopg2
from psycopg2 import Error
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
import os

def user_tup_to_dict(user_tup):
    return {
        "id": user_tup[0],
        "name": user_tup[1],
        "nickname": user_tup[2],
        "user_country_id": user_tup[3],
    }


def connect_db():

    DB_URI = "postgres://vhdmtgtkuzzffd:64c59f8613c5d7a6859c2e27cce5e53c0775a0dd8c90de02a83163a69c69b3bc@ec2-52-48-137-75.eu-west-1.compute.amazonaws.com:5432/deu8epl15li068"

    try:
        # Подключение к существующей базе данных
        connection = psycopg2.connect(DB_URI, sslmode='require')

    except (Exception, Error) as error:
        return {"ошибка": error}

    return connection.cursor()


def get_all_users(cursor):
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    users_dict = {}
    for i, tup in enumerate(users):
        users_dict[i + 1] = user_tup_to_dict(tup)
    return users_dict

