from flask import Blueprint, abort, request
from models.kneset_member import KnesetMember
from inject import mkService

mkApi = Blueprint('mkApi', __name__)

@mkApi.get('/api/mk')
def get_all_mk():
    return mkService.get_all()

@mkApi.get('/api/mk/<id>')
def get_mk_by_id(id):
    (mk, opinions) = mkService.get_by_id(id)
    if (None in (mk, opinions)):
        abort(404)
    return {
        'mpId': id,
        'mpName': mk.mpName,
        'partyName': mk.partyName,
        'personalInfo': mk.personalInfo,
        'opinions': opinions
    }

@mkApi.get('/api/search')
def search_mks():
    query = request.args.get('query')
    if (query == None):
        return []
    return mkService.search_by_name(query)

def getDataFromRequest():
    data = request.json
    name = data.get("name")
    partyName = data.get("partyName")
    personalInfo = data.get("personalInfo")
    if None in (name, partyName, personalInfo):
        abort(422)
    return KnesetMember(name, partyName, personalInfo)

@mkApi.post('/api/mk')
def insert_mk():
    mk = getDataFromRequest()
    return mkService.insert(mk)

@mkApi.patch('/api/mk/<id>')
def update_mk(id):
    mk = getDataFromRequest()
    return mkService.update(id, mk)

@mkApi.delete('/api/mk/<id>')
def delete_mk(id):
    return mkService.delete(id)
