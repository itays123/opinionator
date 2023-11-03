

class TokenRepository:

    def tokenize(self, username) -> str:
        raise "Method not Implemented"
    
    def validate(self, jwt) -> str | None: 
        raise "Method not implemented"