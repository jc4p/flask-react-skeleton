import os
from flask import Flask, render_template, session, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html.tpl', PROD=False)

if __name__ == '__main__':
    app.run(port=os.environ.get('PORT', 8080))