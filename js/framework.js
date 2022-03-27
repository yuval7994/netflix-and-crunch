
var questions = [
    {
        question: "What do you want to eat?",
        answers: ["Chicken", "Beef", "Seafood", "Vegetarian"]
    },
    {
        question: "What type of cuisine would you like tonight?",
        answers: ["Chinese", "American", "Italian", "Spanish"]
    },
    {
        question: "What category do you enjoy the most?",
        answers: ["Pork", "Pork", "Lamb", "Breakfast"]
    },
    {
        question: "What are you in the mood for?",
        answers: ["Low calorie", "Meat", "Fusion", "Soup"]
    },
    {
        question: "Pick a number",
        answers: ["213", "177", "25", "3"]
    },
]


questions.forEach(function(question) {
    console.log(question.question)
    // for (let i = 0; i < question.answers.length; i++) {
    //     const answer = question.answers[i];
    //     console.log(answer)
    // }
    question.answers.forEach(function(answer) {
        console.log(answer)
    });
});

function getApi() {
    var requestUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=68846c14fbb9ad592255787949832875&language=en-US&page=1';
    fetch(requestUrl) 
        .then(function(response) {
          return response.json();
        });
    
    }
    getApi()

function getApi() {
    var requestUrl = 'https://themealdb.com/api/json/v1/1/random.php'; 
    fetch(requestUrl) 
      .then(function(response) {
        return response.json();
      });
  
  }
  getApi()