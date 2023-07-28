from flask import Blueprint, abort, request
from models.topic import Topic
from inject import topicService

topicApi = Blueprint('topicApi', __name__)

@topicApi.get('/api/topic')
def get_all_topics():
    return topicService.get_all()

@topicApi.get('/api/topic/<id>')
def get_topic_by_id(id):
    (topic, opinions) = topicService.get_by_id(id)
    if (None in (topic, opinions)):
        abort(404)
    return {
        'topicId': id,
        'topicName': topic.topicName,
        'description': topic.description,
        'opinions': opinions
    }

def getTopicDataFromRequest():
    data = request.json
    name = data.get("topicName")
    description = data.get("description")
    if None in (name, description):
        abort(422)
    return Topic(name, description)

@topicApi.post('/api/topic')
def insert_topic():
    topic = getTopicDataFromRequest()
    return topicService.insert(topic)

@topicApi.patch('/api/topic/<id>')
def update_topic(id):
    topic = getTopicDataFromRequest()
    return topicService.update(id, topic)

@topicApi.delete('/api/topic/<id>')
def delete_topic(id):
    return topicService.delete(id)