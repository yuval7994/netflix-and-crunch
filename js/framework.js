
var questions = [
    {
        question: "placeholder question 1",
        answers: ["place holder1", "place holder2", "place holder3", "place holder4"]
    },
    {
        question: "placeholder question 2",
        answers: ["place holder1", "place holder2", "place holder3", "place holder4"]
    },
    {
        question: "placeholder question 3",
        answers: ["place holder1", "place holder2", "place holder3", "place holder4"]
    },
    {
        question: "placeholder question 4",
        answers: ["place holder1", "place holder2", "place holder3", "place holder4"]
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