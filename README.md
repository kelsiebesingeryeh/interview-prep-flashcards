# Frontend Interview Flashcards

View the deployed site [here](https://interview-prep-flashcards.vercel.app/).

### Table of Contents
- [Introduction](#introduction)
- [Instructions](#set-up-instructions)
- [Features](#features)
- [Challenges and Wins](#challenges-and-wins)
- [Tech Stack](#tech-stack)

## Introduction
I created this project as a side project to deepen my understanding of React hooks. I used sample interview questions provided to me by the Turing School of Software and Design. I wanted to make an application that would be helpful for new grads to study and practice interview questions. I created it in a way so that a person can pick and choose what they wanted to work on rather than just listing all of the questions at once. 

## Set-Up Instructions
1. Clone the respository

```git@github.com:kelsiebesingeryeh/crypto-watch.git```

2. Install dependencies

```npm install```

3. Start the app in development mode

```npm start```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

5. Start the test suites

```npx cypress open```

6. To Run the testing suite hit 'run integration tests'

7. Cypress will open a new window to run all the tests. Watch the magic happen in real time!


## Features
When a user goes to the website, they are greeted on a homepage with two options to chose from for interview questions - either behavioral or technical.
![homepage](https://i.imgur.com/2JpMhPt.png)
![demo-video](https://media.giphy.com/media/fB7DjuTJerp03OYMJo/giphy.gif)

If a user selects behavioral, they are taken to a behavioral interview questions page and displayed a question. A user can then click on the left/right arrows to navigate through all of the questions. 

#### Behavioral
A user is displayed a behavioral question. They can click on the arrow to go back and forth between questions. Once they get to the end of the question list, they can either start over or go back to the main homepage. At any point in time, they can click the back arrow and are taken back to the homepage.
![behavioral](https://i.imgur.com/rCklodJ.png)

#### Technical Landing Page
If a user selects 'technical', they are taken to a technical landing page where they can choose from 4 different categorys of questions to practice. They can pick HTML/CSS, Computer Science, JavaScript and React. At any point in time a user can go back to the main homepage.
![technicallandingPage](https://i.imgur.com/C5lVcTH.png)

#### HTML/CSS, Computer Science, JavaScript, React
A user can select any of the 4 categories and they are taken to a page where questions will be displayed depending on the path they chose. The questions have been pre-categorized. They can navigate back and forth through the left and right arrows and can go back to the landing page at any time. Once they get to the end of the question list, they can either start over or go back to the main homepage
![subcategoryQuestions](https://i.imgur.com/he43UyA.png)


## Challenges and Wins
* **Challenges**: I would say my biggest challenge in this project was the logic of the application. I had some trouble getting the next card selection as well as making sure the DOM was up-to-date with the state. I had to create the logic and use the indices of the flashcard data array to go to the next card. I also had some trouble with react router as some of the routes take you to another page while other take you to a landing page. Figuring out which components I could re-use was also tricky.

* **Wins**: My biggest win in this project was being able to implement React Hooks. I started this side project as a way to learn and understand hooks and I was excited to try it out by using UseState and UseEffect in my project. It was cool to see it come to life and I am excited that I was able to learn this on my own. I was also excited to use conditional rendering for disabling the left and right arrows depending on if you were on the first card or last card.

## Tech Stack
Technologies used: 
* JavaScript
* React, React Hook, React Router
* CSS
* Cypress
* Vercel
* Circle CI
* GitHub Projects
