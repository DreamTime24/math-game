# intelligent_system.py
import random

class IntelligentSystem:
    def generate_question(self):
        num1 = random.randint(1, 10)
        num2 = random.randint(1, 10)
        op = random.choice(['+', '-', '*'])
        question = f"{num1} {op} {num2} = ?"
        correct = eval(f"{num1} {op} {num2}")
        answers = [correct]
        while len(answers) < 4:
            fake = correct + random.randint(-2, 2)
            if fake not in answers:
                answers.append(fake)
        random.shuffle(answers)
        return {
            "question": question,
            "answers": answers,
            "correct": correct
        }

# Example Usage
system = IntelligentSystem()
print(system.generate_question())