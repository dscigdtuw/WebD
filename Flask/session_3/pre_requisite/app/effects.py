import cv2

class effects_lib (object):

    ds_factor = 0.8
    
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        frame_status, frame = self.video.read()
        ret, jpeg = cv2.imencode(".jpg", frame)
        return jpeg.tobytes()
    
    def effect1(self):
        frame_status, frame = self.video.read()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2LAB)
        frame = cv2.resize(frame,None, fx = self.ds_factor, fy = self.ds_factor, interpolation = cv2.INTER_AREA)
        ret, jpeg = cv2.imencode(".jpg", frame)
        return jpeg.tobytes()

    def effect2(self):
        frame_status, frame = self.video.read()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2LAB)
        frame = cv2.resize(frame,None, fx = self.ds_factor, fy = self.ds_factor, interpolation = cv2.INTER_AREA)
        ret, jpeg = cv2.imencode(".jpg", frame)
        return jpeg.tobytes()


    