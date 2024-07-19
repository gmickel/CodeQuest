const fs = require('node:fs').promises;
const path = require('node:path');
const process = require('node:process');
const { program } = require('commander');
const { number } = require('@inquirer/prompts');

async function readFiles(dir) {
  const files = await fs.readdir(dir);
  return Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(dir, file), 'utf8');
      return { name: file, content };
    }),
  );
}

async function generatePrompt(numQuestions) {
  try {
    const questionsDir = path.join(__dirname, 'src', 'questions');
    const existingQuestions = await readFiles(questionsDir);
    const exampleQuestion = await fs.readFile(path.join(__dirname, 'example-question.md'), 'utf8');

    return `
You are an expert quiz creator for the CodeQuest quiz game. Your task is to create ${numQuestions} new question(s) for our fun, engaging and playful quiz game. Here are the guidelines:

1. Each question should be in Markdown format, similar to the example provided below.
2. Questions should increase in difficulty as they progress.
3. Questions can be about code snippets, concepts, problems, or anything else that is relevant to quiz's topic.
4. The title and description should be fun, descriptive and engaging. Use alliterations and wordplay to make them stand out.
5. Use some timed questions, but not too many
6. Use the following features where appropriate:
   - Markdown formatting (bold, italics, code blocks, lists etc.)
   - Multiple choice answers
   - Time limits (optional)
   - Difficulty levels (Beginner, Intermediate, Expert) (optional)
   - Hints
   - Explanations
7. Surround each markdown question file with ~~~ and ~~~
8. Use \`\`\`lang for code blocks or \` for inline code inside the markdown question files


9. The structure should be exactly as follows:
   ---
   title: [Question Title]
   description: [Brief description]
   level: [number, determines order]
   correctAnswer: [number, 1-based index of correct answer]
   difficulty: [Beginner/Intermediate/Expert]
   timeLimit: [optional, in seconds]
   ---

   ## Context

   ### Introduction
   [Optional: Only include if necessary to understand the question]

   ### Question
   [The actual question goes here]

   ### Outro
   [Optional: Include only to provide additional resources or information]

   ## Answers
   - [Answer option 1]
   - [Answer option 2]
   - [Answer option 3]
   - [Answer option 4]

   ## Explanation
   [Detailed explanation of the correct answer]

   ## Hint
   [Optional hint for the question]

10. Prefer short answer options, but use code fences for longer code snippets if it's necessary for the question.
11. Ensure questions are relevant to the topic of the quiz.
12. Be creative and make the questions engaging and fun!

Here's an example question for reference:

${exampleQuestion}

Now, based on the existing questions and this example, please create ${numQuestions} new question(s). Ensure they fit well with the existing set and increase in difficulty appropriately.

Existing questions for context:
${existingQuestions.map(q => q.content).join('\n\n')}
`;
  }
  catch (error) {
    console.error('Error generating prompt:', error);
  }
}

async function main() {
  program
    .option('-o, --output <file>', 'output file')
    .helpOption('-h, --help', 'display help for command')
    .parse(process.argv);

  const options = program.opts();

  if (options.help) {
    program.outputHelp();
    process.exit(0);
  }

  try {
    const numQuestions = await number({ message: 'How many questions do you want to generate?' }, { min: 1, max: 5 });
    const prompt = await generatePrompt(numQuestions);

    if (options.output) {
      await fs.writeFile(options.output, prompt);
      // eslint-disable-next-line no-console
      console.log(`Prompt written to ${options.output}`);
    }
    else {
      process.stdout.write(prompt);
    }
  }
  catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

main();
