const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

const random = Math.floor(Math.random() * (3 - 0) + 0);

router.get('/',(req,res)=>{
  const question = triviaQuestions[random].question;
  console.log(random);
  res.send( `Question: ${question}`);
});

router.post('/',(req,res)=>{
  const answer = triviaQuestions[random].answer;
  res.send( `Message: ${answer}`);
})


module.exports = router;