from ..models.topic import Topic, TopicId

class TopicRepository():

    def get_all(self) -> list[Topic]:
        """
        Returns all topics saved
        """
        raise "Method not implemented"
    
    def get_by_id(self, topicId: TopicId) -> TopicId | None:
        """
        Searches for knesset member with particular id
        """
        raise "Method not implemented"
    
    def search_by_name(self, topicId: TopicId) -> list[Topic]:
        """
        Searches for knesset members with particular name
        """
        raise "Method not implemented"
    
    def insert(self, topic: Topic) -> None:
        """
        Inserts new knesset member
        """
        raise "Method not implemented"
    
    def update(self, topicId: TopicId, topic: Topic) -> None:
        """
        Updates knesset member info
        """
        raise "Method not implemented"
    
    def delete(self, topicId: TopicId) -> Topic | None:
        """
        Deletes kneset member with particular id if exists and returns it.
        Returns none if does not exist
        """
