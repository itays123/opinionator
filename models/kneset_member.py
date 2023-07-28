from typing import NewType

MpId = NewType('MpId', int)

class KnesetMember():
    openid = 0

    def __init__(self, mpName: str, partyName: str, presonalInfo: str):
        self.mpId = openid
        openid+=1
        self.mpName = mpName
        self.partyName = partyName
        self.presonalInfo = presonalInfo