from dotenv import dotenv_values

config = dotenv_values(".env")
jwt_secret = config["JWT_SECRET"] # will throw if not exists
debug = config.get("DEBUG") == "1"