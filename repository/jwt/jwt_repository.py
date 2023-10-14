from jwt import encode, decode, InvalidSignatureError
from repository.token_repository import TokenRepository
from config.env import jwt_secret

algorithm = "HS256"

class JWTRepository(TokenRepository):

    def tokenize(self, username) -> str:
        return encode({ "user": username }, jwt_secret, algorithm=algorithm)
    
    def validate(self, jwt) -> str | None:
        try:
            payload = decode(jwt, jwt_secret, algorithms=[algorithm])
            return payload["user"]
        except InvalidSignatureError:
            return None
        