import os

DROPBOX_APP_KEY = os.environ.get('DROPBOX_APP_KEY', '')
DROPBOX_APP_SECRET = os.environ.get('DROPBOX_APP_SECRET', '')

# If you don't have these go through https://www.dropbox.com/developers-v1/core/start/python
# to get them
DROPBOX_ACCESS_TOKEN = os.environ.get('DROPBOX_ACCESS_TOKEN', '')
DROPBOX_USER_ID = os.environ.get('DROPBOX_USER_ID', '')