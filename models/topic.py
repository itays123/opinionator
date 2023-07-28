class Topic():
    openid = 0
    def __init__(self, topicName, description):
        self.topicId = openid
        openid+=1 
        self.topicName = topicName
        self.description = description