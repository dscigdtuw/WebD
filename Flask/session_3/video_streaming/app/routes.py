from app import app
from flask import render_template, Response
from app.effects import effects_lib


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title = 'My Page')

def index():
    return render_template('index.html', title = 'My Page')

def gen(effects):
    while True:
        frame = effects.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video')
def video_feed():
    return Response(gen(effects_lib()), mimetype = 'multipart/x-mixed-replace; boundary=frame')

@app.route('/video1')
def video1():
    return render_template ('effect1.html')
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)