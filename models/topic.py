from typing import NewType

TopicId = NewType('TopicId', int)

class Topic():
    openid = 0
    def __init__(self, topicName: str, description: str):
        self.topicId = Topic.openid
        Topic.openid+=1 
        self._topicName = topicName
        self._description = description

    @property
    def topicName(self):
        return self._topicName
    
    @topicName.setter
    def topicName(self, topicName):
        self._topicName = topicName
    
    @property
    def description(self):
        return self._description
    
    @description.setter
    def description(self, description):
        self._description = description