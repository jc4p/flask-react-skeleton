from flask import Flask, render_template, session, request, jsonify
import dropbox
from secrets import *

app = Flask(__name__)
client = dropbox.client.DropboxClient(DROPBOX_ACCESS_TOKEN)

@app.route('/')
def index():
    return render_template('index.html.tpl', PROD=False)

@app.route('/images')
def get_images():
    APP_FOLDER_PATH = '/Apps/Simple Booth/Photo Booth/Layouts/'
    folder_metadata = client.metadata(APP_FOLDER_PATH)
    images = []
    for img in folder_metadata['contents']:
        path = img['path']
        public_path = client.media(path)
        images.append(public_path['url'])
    return jsonify({"images": images})

@app.route('/webhook')
def dropbox_webhook():
    challenge = request.args.get('challenge', '')
    if challenge:
        return challenge
    return ''

if __name__ == '__main__':
    if not DROPBOX_ACCESS_TOKEN:
        print "Hey go get a dropbox access token please"
    app.run()