from jwt import encode, decode, InvalidSignatureError
from repository.token_repository import TokenRepository
from config.env import jwt_secret

class JWTRepository(TokenRepository):

    def tokenize(self, username) -> str:
        return encode({ "user": username }, jwt_secret)
    
    def validate(self, jwt) -> str | None:
        try:
            payload = decode(jwt, jwt_secret)
            return payload["user"]
        except InvalidSignatureError:
            return None
        