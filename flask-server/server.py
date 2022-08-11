from crypt import methods
from distutils.log import debug
from urllib import request
from flask import Flask;

app = Flask(__name__)

# mambers API ROute
# @app.route("/members")
# def members():
#     return {"members": ["Member1", "Member2", "Member3"]}

# if __name__ == "__main__":
#     app.run(debug=True)

@app.route("/", methods=['POST', 'GET'])
def login():
    name = ""
    if request.method == 'POST':
        name = request.form['name']
    else:
        name = "Hello " + request.args.get('name')
    return name
if __name__ == '__main__':
    app.run(debug=True)
