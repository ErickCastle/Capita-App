from flask import Flask
# from flask_cors import CORS
from flask import request
import openai
from dotenv import load_dotenv
import json
import os

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
# cors = CORS(app)

@app.route("/test", methods=["POST"])
def test():
    print("Received POST request")
    received_data = request.json
    print(f"received_data: {received_data}")
    



    data = '{"name": "John"}'
    return json.loads(data)

if __name__ == "__main__":
    app.run(debug=True)
