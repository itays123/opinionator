from models.kneset_member import MpId
from models.topic import TopicId
from models.opinion import Opinion

class OpinionRepository():

    def get_all_on_topic(self, topicId: TopicId) -> list[Opinion]:
        """
        Returns all opinions saved on topic
        """
        raise "Method not implemented"
    
    def get_all_of_mk(self, mpId: MpId) -> list[Opinion]:
        """
        Returns all opinions saved of mk
        """
        raise "Method not implemented"
    
    def upsert(self, mpId: MpId, topicId: TopicId, opinion: Opinion) -> None:
        """
        Updates (if exists) or inserts (if not) a record of an opinion of an mk on a topic
        """
        raise "Method not implemented"
    
    def delete(self, mpId: MpId, topicId: TopicId) -> Opinion | None:
        """
        Deletes opinion of particular mp on particular topic it.
        Returns none if does not exist
        """
        raise "Method not implemented"
    
    def delete_of_mk(self, mpId: MpId) -> None:
        """
        Deletes all topics related to a particular mp
        """
        raise "Method not implemented"
    
    def delete_of_topic(self, topicId: TopicId) -> None:
        """
        Deletes all topics related to a particular topic
        """
        raise "Method not implemented"