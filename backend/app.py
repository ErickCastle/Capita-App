import os
import openai
from dotenv import load_dotenv
from flask import Flask, Response, send_from_directory
from flask_sock import Sock
from json import loads as Loads

"""AI MODULE START"""

load_dotenv()

openai_key = os.getenv("OPENAI_API_KEY")
openai.api_key = openai_key
model_engine = "gpt-3.5-turbo" 
# This specifies which GPT model to use, as there are several models available, each with different capabilities and performance characteristics.

# Save the JSON user input once submitted
json_input = """
text = {
"Ingreso mensual (USD)": 5000,
"Estado Civil": "soltero",
"Edad": 28,
}
"""

# Collect the JSON user information and make it into a prompt for ChatGPT to be used
prompt_input = """Memorize the following (text) into a usable JSON format and tell me 'Done' when you are finished:

{input}
"""
prompt_input = prompt_input.format(input=json_input.strip())

# From now on, the system will be appending each user-machine interaction, so the system keeps track of the conversation, thus being sequential.

message_append = [
    {"role": "system", "content": "You are a helpful assistant with exciting, interesting things to say."},
    {"role": "user", "content": prompt_input},
]  

def ai_interaction():
    global message_append
    response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    n=1,
    messages=message_append,
    max_tokens=600,
    temperature=0.80
    )

    message = response.choices[0]['message']
    print(message)

    message_append.append({
        "role": "system", 
        "content": message["content"]
    })

    return message["content"]

"""AI MODULE END"""

app = Flask(__name__)
app.config['SOCK_SERVER_OPTIONS'] = {'ping_interval': 25}
app.config['SOCK_SERVER_OPTIONS'] = {'receive_bytes': 8192}
sock = Sock(app)

# Path for out main Svelte page
@app.route("/")
def base():
    return send_from_directory('../frontend/src', 'app.html')

# Path to all the static files (compiled JS/CSS, etc.)
@app.route("/<path:path>")
def home(path):
    return send_from_directory('../frontend/src', path)

@app.route("/after-submit-procedure")
def afterSubmitProcedure():
    print("SE LOGRO BB")
    while True:
        pass

@sock.route("/sent-package-frontend")
def sentPackageFrontend(ws):
    while True:
        current_response = ws.receive(timeout=0)
        if (current_response is not None):
            current_response = Loads(current_response)
            print(f"current_response: {current_response}")





if __name__ == "__main__":
    app.run(debug=True)