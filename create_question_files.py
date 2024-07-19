import re
import os

def create_question_files(content):
    # Define the path for the questions directory
    questions_dir = os.path.join('src', 'questions')

    # Ensure the questions directory exists
    os.makedirs(questions_dir, exist_ok=True)

    # Split the content into individual questions
    questions = re.split(r'(?=---\ntitle:)', content.strip())

    for question in questions:
        if question.strip():
            # Extract the title and level from the question
            title_match = re.search(r'title:\s*(.*)', question)
            level_match = re.search(r'level:\s*(\d+)', question)

            title = title_match.group(1) if title_match else "Untitled Question"
            level = level_match.group(1) if level_match else "0"

            # Create a valid filename
            filename = re.sub(r'[^\w\-_\. ]', '_', title)
            filename = f"{level.zfill(3)}_{filename}.md"

            # Write the question to a markdown file
            file_path = os.path.join(questions_dir, filename)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(question.strip())

            print(f"Created file: {file_path}")

content = """
[Paste your entire block of questions here]
"""

create_question_files(content)
