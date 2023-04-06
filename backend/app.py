from flask import Flask, Response, send_from_directory





"""AI MODULE END"""

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug=True)