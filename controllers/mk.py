from flask import abort, request
from models.kneset_member import KnesetMember
from .. import app, mkService

@app.get('/api/mk')
def get_all_mk():
    return mkService.get_all()

@app.get('/api/mk/<id>')
def get_mk_by_id(id):
    mk = mkService.get_by_id(id)
    if (mk == None):
        abort(404)
    return mk

@app.get('/api/search')
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

@app.post('/api/mk')
def insert_mk():
    mk = getDataFromRequest()
    return mkService.insert(mk)

@app.patch('/api/mk/<id>')
def update_mk(id):
    mk = getDataFromRequest()
    return mkService.update(id, mk)

@app.delete('/api/mk/<id>')
def delete_mk(id):
    return mkService.delete(id)
