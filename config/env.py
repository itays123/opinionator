from dotenv import dotenv_values

config = dotenv_values(".env")
jwt_secret = config["JWT_SECRET"]
