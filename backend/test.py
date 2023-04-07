from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)

@app.route("/test", methods=["GET"])
def test():
    print("Received GET request")

    data = '{"name": "John"}'
    return json.loads(data)

if __name__ == "__main__":
    app.run(debug=True)
