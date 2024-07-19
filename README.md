# 🚀 CodeQuest: Your Ultimate Quiz Adventure Builder! 🧠

Welcome to CodeQuest, the quiz game that's more addictive than trying to fix a bug at 3 AM! Born from the cosmic depths of [OpenEHR Quest](https://github.com/gmickel/openehr-quest) which in turn was originally created as part of an internal company presentation at [Cistec](https://github.com/cistec-com)., CodeQuest is here to turn your boring old quiz into a thrilling adventure through the realms of knowledge!

![CodeQuest Screenshot](/images/screenshot.png)

## 🌟 Features That'll Make Your Brain Do a Happy Dance

- 🧠 **Dynamic Question Loading**: Questions appear like magic, no rabbit (or developer) required!
- ⏱️ **Time-based Challenges**: Race against the clock! (It's totally cool to pretend you're defusing a bomb)
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
- 🧩 **Multiple Choice**: Create questions with multiple answer options
- ⏳ **Time Limits**: Set time limits for each question to keep players on their toes
- 🔢 **Difficulty Levels**: Assign difficulty levels to questions
- 💡 **Hints**: Provide hints for when players get stuck
- 📚 **Explanations**: Give detailed explanations for answers to enhance learning

Check out `example-question.md` for a comprehensive example of all these features in action!

## 🧙‍♂️ Question Generation (Let AI Do the Heavy Lifting)

Too busy debugging to craft questions? Fear not! We've conjured up a magical script to help you generate question prompts faster than you can say "Stack Overflow":

1. Wave your wand (or just type in your terminal):
   ```
   bun run question-prompt
   ```

2. Answer the mystical prompt asking how many questions you desire (choose wisely, young wizard!)

3. Behold as a perfectly crafted prompt materializes before your eyes!

4. Feed this prompt to your favorite AI familiar (we recommend Claude 3.5 Sonnet or GPT-4o for best results) and watch in awe as it conjures up quiz questions that would make even Merlin jealous.

5. Copy the AI-generated questions into new `.md` files in your `src/questions/` directory, and voilà! Your quiz just got a whole lot smarter.

Want to save your prompt for later? Use the `-o` flag:
```
bun run question-prompt -o prompt.md
```

Need a helping hand? Just ask:
```
bun run question-prompt -h
```

Remember, with great power comes great responsibility. Use this feature wisely, and may your questions be ever engaging and your quizzes eternally awesome! 🧙‍♂️✨

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

1. Push your changes to GitHub. (Don't forget to `git add .` and `git commit -m "Made my quiz awesome"`)

2. Go to your repository settings, find the "Pages" section, and set the source to the `gh-pages` branch.

3. Run the deployment spell:
   ```
   bun run deploy
   ```

4. Watch in awe as your quiz magically appears at `https://yourusername.github.io/codequest`!

## 🤝 Contributing (Because Teamwork Makes the Dream Work)

Got an idea that's so good it keeps you up at night? Here's how to make it a reality:

1. Fork this repo (it's like adopting, but for code)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request and wait for the internet high-fives!

Check out the [contribution guide](CONTRIBUTING.md) for more details on adding questions and features!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. It's basically the "do whatever you want, just don't blame me" license.

## 🙏 Acknowledgments

- A big, cosmic thank you to [OpenEHR Quest](https://github.com/gmickel/openehr-quest) for being the primordial soup from which CodeQuest evolved!
- Shoutout to caffeine, the true MVP of this project
- And finally, thanks to you, for reading this far. You're the real hero! 🦸‍♂️

Now go forth and create quizzes that'll make people forget about doomscrolling! 🚀🧠🎉
