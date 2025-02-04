from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/questions', methods=['GET'])
def get_questions():
    questions = [
        {"question": "5 + 3 = ?", "answers": ["7", "8", "9", "10"], "correct": 1},
        {"question": "9 - 4 = ?", "answers": ["3", "4", "5", "6"], "correct": 2},
        {"question": "6 * 2 = ?", "answers": ["8", "10", "12", "14"], "correct": 2},
    ]
    return jsonify(questions)

if __name__ == '__main__':
    app.run(debug=True)
