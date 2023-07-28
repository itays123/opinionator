from enum import Enum
from kneset_member import MpId
from topic import TopicId

OpinionType = Enum('OpinionType', ['STRONGLY OPPOSES', 'OPPOSES', 'NEUTRAL', 'SUPPORTS', 'STRONGLY SUPPORTS'])

class Opinion():

    def __init__(self, mpId: MpId, topicId: TopicId, opinion: OpinionType, source: str):
        self.mpId = mpId
        self.topicId = topicId
        self.opinion = opinion
        self.source = source