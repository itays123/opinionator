from models.kneset_member import MpId
from models.topic import TopicId
from models.opinion import Opinion
from repository.opinion_repository import OpinionRepository

class OpinionService():

    def __init__(self, opinionRepository: OpinionRepository) -> None:
        self.opinionRepository = opinionRepository

    def upsert(self, mpId: MpId, topicId: TopicId, opinion: Opinion) -> None:
        """
        Updates (if exists) or inserts (if not) a record of an opinion of an mk on a topic
        """
        return self.opinionRepository.upsert(mpId, topicId, opinion)
    
    def delete(self, mpId: MpId, topicId: TopicId) -> Opinion:
        """
        Deletes opinion of particular mp on particular topic it.
        Returns none if does not exist
        """
        return self.opinionRepository.delete(mpId, topicId)