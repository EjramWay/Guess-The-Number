Guess the Number Game
A simple and fun web-based game where the computer guesses a number you've thought of by asking a series of questions. The player provides feedback (greater, less, or correct) to help the computer narrow down the possibilities, using a binary search approach.

Features
Interactive Gameplay: The player thinks of a number, and the computer attempts to guess it by asking questions.
Binary Search Algorithm: The computer guesses the number by halving the search range with each step, ensuring an efficient guessing process.
Responsive Design: Playable on all devices with a sleek, modern interface.
How to Play
Start: Click "Start" to begin the game.
Answer the Computer’s Questions: The computer will guess a number. You will answer:
Greater if your number is higher than the computer's guess.
Less if your number is lower than the computer's guess.
Correct when the computer guesses your number.
Game Ends: The game will end when the computer guesses your number correctly, and you can restart the game to play again.
How It Works
Initial Guess: The game starts with a number in the middle of the range (e.g., 50 for 1-100).
Refinement: Based on your feedback, the game refines its guesses, adjusting the possible range for the next guess.
Efficiency: The binary search algorithm allows the game to guess your number in as few as 7 tries for a range of 1 to 100.
Technologies Used
HTML: Structure of the webpage.
CSS: Styling and layout for the game interface.
JavaScript: Logic for the guessing algorithm and interactive gameplay.


Installation
To run this project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/guess-the-number.git
Open the index.html file in your web browser to play the game.
