# 🚀 CodeQuest: Your Ultimate Quiz Adventure Builder! 🧠

Welcome to CodeQuest, the quiz game that's more addictive than trying to fix a bug at 3 AM! Born from the cosmic depths of [OpenEHR Quest](https://github.com/gmickel/openehr-quest) which in turn was originally created as part of an internal company presentation at [Cistec](https://github.com/cistec-com)., CodeQuest is here to turn your boring old quiz into a thrilling adventure through the realms of knowledge!

![CodeQuest Screenshot](/images/screenshot.png)

## 🌟 Features That'll Make Your Brain Do a Happy Dance

- 🧠 **Dynamic Question Loading**: Questions appear like magic, no rabbit (or developer) required!
- ⏱️ **Time-based Challenges**: Race against the clock! (It's totally cool to pretend you're defusing a bomb)
- 🔀 Flexible Answer Options: Support for both single and multiple correct answers in your questions
- 🏋️ **Difficulty Levels**: From "I just learned to code" to "I dream in binary"
- 🎨 **Snazzy Code Highlighting**: Making your code snippets look prettier than a sunset
- 🔊 **Sound Effects**: Auditory dopamine hits for your correct answers!
- 🎖️ **Badges**: Award badges for completing levels and mastering the game
- 🎊 **Confetti**: Celebrate your achievements with a rainbow of confetti!
- 🏆 **Score Sharing**: Brag about your big brain energy on social media
- 📱 **Responsive Design**: Looks great on everything from your smartwatch to your smart fridge
- 🧙‍♂️ **Question Generation**: Generate question creation prompts to use with your favorite LLM!

## 🎭 Question Features (The Real Stars of the Show)

- 📝 **Markdown Support**: Write questions and answers in Markdown for easy formatting
- 🔥 **Code Snippets**: Include code snippets to test your knowledge
- 🖼️ **Images**: Include images to spice up your questions
- 🧩 Multiple Choice: Create questions with single or multiple correct answers
- 📚 Explanations: Give detailed explanations for answers, including all correct options for multiple-answer questions
- ⏳ **Time Limits**: Set time limits for each question to keep players on their toes
- 🔢 **Difficulty Levels**: Assign difficulty levels to questions
- 💡 **Hints**: Provide hints for when players get stuck
- 📚 **Explanations**: Give detailed explanations for answers to enhance learning

Check out `example-question.md` for a comprehensive example of all these features in action! `example-question-two.md` shows how to create a question with multiple correct answers.

## 🧙‍♂️ Question Generation and Management (Let AI Do the Heavy Lifting)

Too busy debugging to craft questions? Fear not! We've conjured up magical scripts to help you generate and manage questions faster than you can say "Stack Overflow":

### Generate Question Prompts

1. Wave your wand (or just type in your terminal):
   ```
   bun run question-prompt
   ```

2. Answer the mystical prompt asking how many questions you desire (choose wisely, young wizard!)

3. Behold as a perfectly crafted prompt materializes before your eyes!

4. Feed this prompt to your favorite AI familiar (we recommend Claude 3.5 Sonnet or GPT-4 for best results) and watch in awe as it conjures up quiz questions that would make even Merlin jealous.

Want to save your prompt for later? Use the `-o` flag:
```
bun run question-prompt -o prompt.md
```

Need a helping hand? Just ask:
```
bun run question-prompt -h
```

### Create Question Files Automatically

Got a bunch of AI-generated questions? Turn them into properly formatted files with a flick of your wand:

1. Copy your AI-generated questions into a single text file.

2. Cast the file creation spell:
   ```
   python create_question_files.py
   ```

3. When prompted, paste your entire block of questions into the terminal and press Enter, followed by Ctrl+D (or Cmd+D on Mac) to signal the end of input.

4. Watch in amazement as individual `.md` files appear in your `src/questions/` directory, each named according to its level and title!

Need to customize the script? Find it in `create_question_files.py` in the root directory and tweak to your heart's content!

Remember, with great power comes great responsibility. Use these features wisely, and may your questions be ever engaging and your quizzes eternally awesome! 🧙‍♂️✨

## 🚀 Quick Start Guide (No Rocket Science Degree Required)

1. Clone this repo:
   ```
   git clone https://github.com/gmickel/codequest.git
   ```

2. Navigate into your new quest headquarters:
   ```
   cd codequest
   ```

3. Install the magical dependencies:
   ```
   bun install
   ```
   (No bun? No problem! `npm install` works too, but it's less fun to say)

4. Embark on your development journey:
   ```
   bun run dev
   ```

5. Open `http://localhost:5173` and watch your quiz come to life!

## 🛠️ Customization (aka. Make It Yours)

1. Head to `src/config.ts` and change the title, description, and other details. It's like redecorating, but for your quiz!

2. Add your own questions in `src/questions/`. Each `.md` file is a new adventure waiting to happen!

3. Want to change the looks? Dive into `src/components/Quiz/styles.css` and make it prettier than a double rainbow!

## 🌐 Deploying Your Quest to the World (aka. GitHub Pages)

## Deployment Steps

1. Push your changes to GitHub:

```bash
git add .
git commit -m "Made my quiz awesome"
git push
```

2. Go to your repository settings on GitHub, find the "Pages" section.

3. Under "Source", select "GitHub Actions" instead of a branch.

4. Modify your `vite.config.ts` file to include the correct base path:

```typescript
export default defineConfig({
  // ... other config options
  base: '/your-repo-name/', // Replace with your actual repository name
});
```

5. Commit these changes and push to GitHub:

```bash
git add vite.config.ts
git commit -m "Configure GitHub Actions deployment"
git push
```

6. GitHub Actions will now automatically build and deploy your site when you push to the main branch.

8. Watch in awe as your quiz magically appears at `https://yourusername.github.io/your-repo-name/`!

**Note**: The first deployment might take a few minutes. You can check the progress in the "Actions" tab of your GitHub repository.

## 🧠 Quizzes made with CodeQuest

- [OpenEHR Quest](https://github.com/gmickel/openehr-quest): A quiz game for learning about OpenEHR
- [TypeScript Quest](https://github.com/gmickel/typescript-quest): A quiz game for learning TypeScript

## 🤝 Contributing (Because Teamwork Makes the Dream Work)

Got an idea that's so good it keeps you up at night?

Please refer to the [contributing guidelines](CONTRIBUTING.md) for more information.

But in short:

1. Fork this repo (it's like adopting, but for code)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request and wait for the internet high-fives!

### If you use CodeQuest to make your own quests 🚀

Feel free to add your quests to the list above!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. It's basically the "do whatever you want, just don't blame me" license.

## 🙏 Acknowledgments

- A big, cosmic thank you to [OpenEHR Quest](https://github.com/gmickel/openehr-quest) for being the primordial soup from which CodeQuest evolved!
- Shoutout to caffeine, the true MVP of this project
- High-five to our awesome community for suggesting and helping implement the multiple correct answers feature!
- And finally, thanks to you, for reading this far. You're the real hero! 🦸‍♂️

Now go forth and create quizzes that'll make people forget about doomscrolling! 🚀🧠🎉
