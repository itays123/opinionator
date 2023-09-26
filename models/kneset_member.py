from typing import NewType

MpId = NewType('MpId', int)

class KnesetMember():
    openid = 0

    def __init__(self, mpName: str, partyName: str, role:str ,presonalInfo: str):
        self.mpId = KnesetMember.openid
        KnesetMember.openid+=1
        self._mpName = mpName
        self._partyName = partyName
        self._role = role
        self._presonalInfo = presonalInfo
    
    @property
    def mpName(self):
        return self._mpName
    
    @mpName.setter
    def mpName(self, mpName):
        self._mpName = mpName
    
    @property
    def partyName(self):
        return self._partyName
    
    @partyName.setter
    def partyName(self, partyName):
        self._partyName = partyName
    
    @property
    def role(self):
        return self.role
    
    @role.setter
    def role(self, role):
        self._role = role
    
    @property
    def personalInfo(self):
        return self.personalInfo
    
    @personalInfo.setter
    def personalInfo(self, personalInfo):
        self._presonalInfo = personalInfo