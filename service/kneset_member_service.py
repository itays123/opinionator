from typing import NewType
from models.kneset_member import KnesetMember, MpId
from models.opinion import Opinion
from repository.kneset_member_repository import KnesetMemberRepository
from repository.opinion_repository import OpinionRepository

OpinionatedKnesetMember = NewType('OpinionatedKnesetMember', (KnesetMember, list[Opinion]))

class KnesetMemberService():

    def __init__(self, mkRepo: KnesetMemberRepository, opinionRepo: OpinionRepository) -> None:
        self.mkRepo = mkRepo
        self.opinionRepo = opinionRepo
    
    def get_all(self) -> list[KnesetMember]:
        """
        Returns a list of saved kneset members
        """
        return self.mkRepo.get_all()
    
    def get_by_id(self, mpId: MpId) -> OpinionatedKnesetMember | None:
        """
        Returns individual kneset member info, including opinions
        """
        mp = self.mkRepo.get_by_id(mpId)
        if (mp == None):
            return None, None
        opinions = self.opinionRepo.get_all_of_mk(mpId) # should contain topic name
        return mp, opinions
    
    def search_by_name(self, name: str) -> list[KnesetMember]:
        """
        Searches an mk by name
        """
        return self.mkRepo.search_by_name(name)
    
    def insert(self, mk: KnesetMember) -> None:
        return self.mkRepo.insert(mk)
    
    def update(self, mpId: MpId, mk: KnesetMember) -> None:
        """
        Updates knesset member info
        """
        return self.mkRepo.update(mpId, mk)
    
    def delete(self, mpId: MpId) -> KnesetMember | None:
        """
        Deletes kneset member with particular id, including all related opinions, if exists and returns it.
        Returns none if does not exist
        """
        mp = self.mkRepo.delete(mpId)
        if (mp != None):
            self.opinionRepo.delete_of_mk(mpId)
            return mp