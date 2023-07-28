from ..models.topic import Topic, TopicId

class TopicRepository():

    def get_all() -> list[Topic]:
        """
        Returns all topics saved
        """
        raise "Method not implemented"
    
    def get_by_id(topicId: TopicId) -> TopicId | None:
        """
        Searches for knesset member with particular id
        """
        raise "Method not implemented"
    
    def search_by_name(topicId: TopicId) -> list[Topic]:
        """
        Searches for knesset members with particular name
        """
        raise "Method not implemented"
    
    def insert(topic: Topic) -> None:
        """
        Inserts new knesset member
        """
        raise "Method not implemented"
    
    def update(topicId: TopicId, topic: Topic) -> None:
        """
        Updates knesset member info
        """
        raise "Method not implemented"
    
    def delete(topicId: TopicId) -> Topic | None:
        """
        Deletes kneset member with particular id if exists and returns it.
        Returns none if does not exist
        """
