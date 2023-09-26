from models.topic import Topic, TopicId
from hardcoded_data.dummy_hard_data import *

topics = [topic_education, topic_inflation, topic_Transportation, topic_security, topic_iran, topic_Israeli_Palestinian]

class TopicRepository():

    def get_all(self) -> list[Topic]:
        """
        Returns all topics saved
        """
        return topics
    
    def get_by_id(self, topicId: TopicId) -> TopicId | None:
        """
        Searches for knesset member with particular id
        """
        results = [topic for topic in topics if topic.topicId == topicId]
        if len(results) == 0:
            return None
        return results[0]
    
    def search_by_name(self, name: str) -> list[Topic]:
        """
        Searches for knesset members with particular name
        """
        results = [topic for topic in topics if name in topic.topicName]
        if len(results) == 0:
            return None
        return results[0]
    
    def insert(self, topic: Topic) -> None:
        """
        Inserts new knesset member
        """
        topics.append(topic)
    
    def update(self, topicId: TopicId, topic: Topic) -> None:
        """
        Updates knesset member info
        """
        for currTopic in topics:
            if currTopic.topicId == topicId:
                currTopic.topicName = topic.topicName
                currTopic.description = topic.description
    
    def delete(self, topicId: TopicId) -> Topic | None:
        """
        Deletes kneset member with particular id if exists and returns it.
        Returns none if does not exist
        """
        for topic in topics:
            if topic.topicId == topicId:
                topics.remove(topic)
