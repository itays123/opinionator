from models.kneset_member import MpId
from models.topic import TopicId
from models.opinion import Opinion
from hardcoded_data.dummy_hard_data import *

opinions = [benjaminn_edu, yifatsb_edu, yarivl_ilpl, itamar_ilpl, yoavg_sec, benjaming_sec, aryehd_trans, gideons_trans, yairl_iran, yorailh_iran, gadie_inf, amiro_inf, meravm_inf]

class OpinionRepository():

    def get_all_on_topic(self, topicId: TopicId) -> list[Opinion]:
        """
        Returns all opinions saved on topic
        """
        return [opinion for opinion in opinions if opinion.topicId == topicId]
    
    def get_all_of_mk(self, mpId: MpId) -> list[Opinion]:
        """
        Returns all opinions saved of mk
        """
        return [opinion for opinion in opinions if opinion.mpId == mpId]
    
    def upsert(self, mpId: MpId, topicId: TopicId, opinion: Opinion) -> None:
        """
        Updates (if exists) or inserts (if not) a record of an opinion of an mk on a topic
        """
        for currentOpinion in opinions:
            if currentOpinion.mpId == mpId and currentOpinion.topicId == topicId:
                currentOpinion.opinion = opinion.opinion
                currentOpinion.source = opinion.source
    
    def delete(self, mpId: MpId, topicId: TopicId) -> Opinion | None:
        """
        Deletes opinion of particular mp on particular topic it.
        Returns none if does not exist
        """
        for currentOpinion in opinions:
            if currentOpinion.mpId == mpId and currentOpinion.topicId == topicId:
                opinions.remove(currentOpinion)
    
    def delete_of_mk(self, mpId: MpId) -> None:
        """
        Deletes all topics related to a particular mp
        """
        for currentOpinion in opinions:
            if currentOpinion.mpId == mpId:
                opinions.remove(currentOpinion)
    
    def delete_of_topic(self, topicId: TopicId) -> None:
        """
        Deletes all topics related to a particular topic
        """
        for currentOpinion in opinions:
            if currentOpinion.topicId == topicId:
                opinions.remove(currentOpinion)