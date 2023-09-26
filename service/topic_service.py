from typing import NewType
from models.topic import Topic, TopicId
from models.opinion import Opinion
from repository.topic_repository import TopicRepository
from repository.opinion_repository import OpinionRepository

OpinionatedTopic = NewType('OpinionatedTopic', (Topic, list[Opinion]))

class TopicService():

    def __init__(self, topicRepo: TopicRepository, opinionRepo: OpinionRepository) -> None:
        self.topicRepo = topicRepo
        self.opinionRepo = opinionRepo
    
    def get_all(self) -> list[Topic]:
        """
        Returns a list of saved topics
        """
        return self.topicRepo.get_all()
    
    def get_by_id(self, topicId: TopicId) -> OpinionatedTopic | None:
        """
        Returns individual topic info, including opinions
        """
        topic = self.topicRepo.get_by_id(topicId)
        if (topic == None):
            return None
        opinions = self.opinionRepo.get_all_of_mk(topicId) # should contain mk name
        return topic, opinions
    
    def insert(self, topic: Topic) -> None:
        return self.topicRepo.insert(topic)
    
    def update(self, topicId: TopicId, topic: Topic) -> None:
        """
        Updates topic info
        """
        return self.topicRepo.update(topicId, topic)
    
    def delete(self, topicId: TopicId) -> Topic | None:
        """
        Deletes topic with particular id if exists, including all related opinions and returns it.
        Returns none if does not exist
        """
        topic = self.topicRepo.delete(topicId)
        if (topic != None):
            self.opinionRepo.delete_of_topic(topicId)
            return topic