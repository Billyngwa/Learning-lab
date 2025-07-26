from flask import Flask
name = "Professor"
# print("Hello " + name + "!")
def greet_some_body(name_of_person:str)-> None:{
print("Hello " + name_of_person + "!")
}
greet_some_body("professor")

# the duncode
app = Flask(__name__)
app.config["DEBUG"] = True
@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

def add(a:int,b:int)-> int:
    print("Adding " + str(a) + " and " + str(b) + ": " + str(a+b))
    return a+b

add(1,2)