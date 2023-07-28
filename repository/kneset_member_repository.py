from ..models.kneset_member import KnesetMember, MpId

class KnesetMemberRepository():

    def get_all(self) -> list[KnesetMember]:
        """
        Returns all knesset members saved
        """
        raise "Method not implemented"
    
    def get_by_id(self, mpId: MpId) -> KnesetMember | None:
        """
        Searches for knesset member with particular id
        """
        raise "Method not implemented"
    
    def search_by_name(self, name: str) -> list[KnesetMember]:
        """
        Searches for knesset members with particular name
        """
        raise "Method not implemented"
    
    def insert(self, mk: KnesetMember) -> None:
        """
        Inserts new knesset member
        """
        raise "Method not implemented"
    
    def update(self, mpId: MpId, mk: KnesetMember) -> None:
        """
        Updates knesset member info
        """
        raise "Method not implemented"
    
    def delete(self, mpId: MpId) -> KnesetMember | None:
        """
        Deletes kneset member with particular id if exists and returns it.
        Returns none if does not exist
        """
        raise "Method not implemented"