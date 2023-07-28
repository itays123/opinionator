from typing import NewType

TopicId = NewType('TopicId', int)

class Topic():
    openid = 0
    def __init__(self, topicName: str, description: str):
        self.topicId = openid
        openid+=1 
        self.topicName = topicName
        self.description = description