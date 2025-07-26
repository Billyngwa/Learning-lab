from flask import Flask
# the duncode
app = Flask(__name__)
app.config["DEBUG"] = True
@app.route('/')
def index():
    return '<h1>Good evening And welcome to my api!</h1>'


#this code is for the user and is dynamic. I t will return the name of the user
# when the user is called with the name in the url
# for example: http://localhost:7000/user/John will return "Hello John!"
# the name is passed as a parameter to the function
# and is used to return a personalized message
# the <name> part of the url is a variable that can be anything
# the function will return a string with the name of the user
# the @app.route decorator is used to define the route for the function
@app.route("/user/<name>")
def user(name):
    return f'<h1>Hello {name}!</h1>'
if __name__ == '__main__':
    app.run(host='0.0.0', port=7000, debug=True)