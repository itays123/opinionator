from flask import abort, request
from models.topic import Topic
from .. import app, topicService

@app.get('/api/topic')
def get_all_topics():
    return topicService.get_all()

@app.get('/api/topic/<id>')
def get_topic_by_id(id):
    topic = topicService.get_by_id(id)
    if (topic == None):
        abort(404)
    return topic

def getTopicDataFromRequest():
    data = request.json
    name = data.get("topicName")
    description = data.get("description")
    if None in (name, description):
        abort(422)
    return Topic(name, description)

@app.post('/api/topic')
def insert_topic():
    topic = getTopicDataFromRequest()
    return topicService.insert(topic)

@app.patch('/api/topic/<id>')
def update_topic(id):
    topic = getTopicDataFromRequest()
    return topicService.update(id, topic)

@app.delete('/api/topic/<id>')
def delete_topic(id):
    return topicService.delete(id)