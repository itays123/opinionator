from repository.kneset_member_repository import KnesetMemberRepository
from repository.opinion_repository import OpinionRepository
from repository.topic_repository import TopicRepository
from service.kneset_member_service import KnesetMemberService
from service.opinion_service import OpinionService
from service.topic_service import TopicService

# Inject repositories
mkRepo = KnesetMemberRepository()
topicRepo = TopicRepository()
opinionRepo = OpinionRepository()

# Create services for controllers to use
mkService = KnesetMemberService(mkRepo, opinionRepo)
topicService = TopicService(topicRepo, opinionRepo)
opinionService = OpinionService(opinionRepo)