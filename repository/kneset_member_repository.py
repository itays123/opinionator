from models.kneset_member import KnesetMember, MpId
from hardcoded_data.dummy_hard_data import *

mks = [benjamin_N, yariv_l, yoav_g, amir_o, aryeh_d, itamar_bg, yair_l, yorai_lh, benjamin_g, gadi_e, gideon_s, yifat_sb, merav_m]

class KnesetMemberRepository():

    def get_all(self) -> list[KnesetMember]:
        """
        Returns all knesset members saved
        """
        return mks
    
    def get_by_id(self, mpId: MpId) -> KnesetMember | None:
        """
        Searches for knesset member with particular id
        """
        for mk in mks:
            if mk.mpId == int(mpId):
                return mk
        return None
    
    def search_by_name(self, name: str) -> list[KnesetMember]:
        """
        Searches for knesset members with particular name
        """
        results = [mk for mk in mks if name in mk.mpName]
        if len(results) == 0:
            return None
        return results[0]
    
    def insert(self, mk: KnesetMember) -> None:
        """
        Inserts new knesset member
        """
        mks.append(mk);
    
    def update(self, mpId: MpId, mk: KnesetMember) -> None:
        """
        Updates knesset member info
        """
        for currMk in mks:
            if currMk.mpId == mpId:
                currMk.mpName = mk.mpName
                currMk.partyName = mk.partyName
                currMk.role = mk.role
                currMk.personalInfo = mk.personalInfo
    
    def delete(self, mpId: MpId) -> KnesetMember | None:
        """
        Deletes kneset member with particular id if exists and returns it.
        Returns none if does not exist
        """
        for mk in mks:
            if mk.mpId == mpId:
                mks.remove(mk)