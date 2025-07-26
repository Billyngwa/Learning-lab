from flask import Flask
# the duncode
app = Flask(__name__)
app.config["DEBUG"] = True
@app.route('/')
def index():
    return '<h1>Good evening And welcome to my api!</h1>'

@app.route("/user/<name>")
def user(name):
    return f'<h1>Hello {name}!</h1>'
if __name__ == '__main__':
    app.run(host='0.0.0', port=7000, debug=True)