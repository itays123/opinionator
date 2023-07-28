from flask import Flask, redirect, url_for
from repository.kneset_member_repository import KnesetMemberRepository
from repository.opinion_repository import OpinionRepository
from repository.topic_repository import TopicRepository
from service.kneset_member_service import KnesetMemberService
from service.opinion_service import OpinionService
from service.topic_service import TopicService

app = Flask('server')

# Inject repositories
mkRepo = KnesetMemberRepository()
topicRepo = TopicRepository()
opinionRepo = OpinionRepository()

mkService = KnesetMemberService(mkRepo, opinionRepo)
topicService = TopicService(topicRepo, opinionRepo)
opinionService = OpinionService(opinionRepo)

from controllers import *

@app.errorhandler(404)
def redirectTo404():
    return redirect(url_for('404'))