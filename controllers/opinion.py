from flask import abort, request
from models.opinion import Opinion, OpinionType
from .. import app, opinionService

def getOpinionDataFromRequest():
    data = request.json
    opinionType = data.get("opinionType", type=OpinionType)
    source = data.get("source")
    if None in (opinionType, source):
        abort(422)
    return opinionType, source

@app.post('/api/opinion/<mkId>/<topicId>')
def upsertTopic(mkId, topicId):
    (opinionType, source)= getOpinionDataFromRequest()
    return opinionService.upsert(Opinion(mkId, topicId, opinionType, source))

@app.delete('/api/opinion/<mkId>/<topicId>')
def deleteTopic(mkId, topicId):
    return opinionService.delete(mkId, topicId)
