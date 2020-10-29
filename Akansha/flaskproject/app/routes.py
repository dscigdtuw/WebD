from app import app
from flask import render_template
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/project')
def project():
    return render_template('project.html',data="Blue")

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/Experience')
def Experience():
    return render_template('Experience.html')