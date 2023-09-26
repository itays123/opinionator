from typing import NewType

MpId = NewType('MpId', int)

class KnesetMember():
    openid = 0

    def __init__(self, mpName: str, partyName: str, role:str ,presonalInfo: str):
        self.mpId = openid
        openid+=1
        self.mpName = mpName
        self.partyName = partyName
        self.role = role
        self.presonalInfo = presonalInfo
    
    @property
    def mpName(self):
        return self.mpName
    
    @property
    def partyName(self):
        return self.partyName
    
    @property
    def personalInfo(self):
        return self.personalInfo