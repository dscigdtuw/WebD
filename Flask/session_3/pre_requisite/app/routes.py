from app import app
from flask import render_template, Response
from app.effects import effects_lib


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title = 'My Page')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)