from enum import Enum
from models.kneset_member import MpId
from models.topic import TopicId

OpinionType = Enum('OpinionType', ['STRONGLY OPPOSES', 'OPPOSES', 'NEUTRAL', 'SUPPORTS', 'STRONGLY SUPPORTS'])

class Opinion():

    def __init__(self, mpId: MpId, topicId: TopicId, opinion: OpinionType, source: str):
        self.mpId = mpId
        self.topicId = topicId
        self.opinion = opinion
        self.source = source
    
    @property
    def mpId(self):
        return self.mpId

    @property
    def topicId(self):
        return self.topicId

class OpinionWithTopicName(Opinion):
    def __init__(self, mpId: MpId, topicId: TopicId, topicName: str, opinion: OpinionType, source: str):
        super().__init__(mpId, topicId, opinion, source)
        self.topicName = topicName;

class OpinionWithMkName(Opinion):
    def __init__(self, mpId: MpId, mkName: str, topicId: TopicId, opinion: OpinionType, source: str):
        super().__init__(mpId, topicId, opinion, source)
        self.mkName = mkName;