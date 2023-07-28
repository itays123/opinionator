from flask import Blueprint, abort, request
from models.opinion import Opinion, OpinionType
from inject import opinionService

opinionApi = Blueprint('opinionApi', __name__)

def getOpinionDataFromRequest():
    data = request.json
    opinionType = data.get("opinionType", type=OpinionType)
    source = data.get("source")
    if None in (opinionType, source):
        abort(422)
    return opinionType, source

@opinionApi.post('/api/opinion/<mkId>/<topicId>')
def upsertTopic(mkId, topicId):
    (opinionType, source)= getOpinionDataFromRequest()
    return opinionService.upsert(Opinion(mkId, topicId, opinionType, source))

@opinionApi.delete('/api/opinion/<mkId>/<topicId>')
def deleteTopic(mkId, topicId):
    return opinionService.delete(mkId, topicId)
