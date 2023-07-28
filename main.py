from flask import Flask, redirect, url_for
from controllers.mk import mkApi
from controllers.opinion import opinionApi
from controllers.topic import topicApi

app = Flask('server')

# Register controllers

app.register_blueprint(mkApi)
app.register_blueprint(topicApi)
app.register_blueprint(opinionApi)

@app.errorhandler(404)
def redirectTo404():
    return redirect(url_for('404'))

if __name__ == '__main__':
    app.run()