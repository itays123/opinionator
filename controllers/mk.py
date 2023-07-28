from flask import abort
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