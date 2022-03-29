
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
        answers: ["Pork", "Pasta", "Lamb", "Breakfast"]
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
        for (let i = 0; i < question.answers.length; i++) {
          const answer = question.answers[i];
            console.log(answer)
        }
    question.answers.forEach(function(answer) {
        console.log(answer)
    });
});


request.send(); 

//IMDB movie API
var getMovieInfo = function (movieData) {
    var apiMovieUrl = 'https://imdb-api.com/en/API/Top250TVs/k_6day5f3p';
    fetch(
        apiMovieUrl
    )
        .then(function(movieResponse) {
            return movieResponse.json();
        })
        .then(function (movieResponse) {
            console.log(movieResponse)
            var rank = movieResponse;

            var movie = movieResponse;
            
            return fetch('https://imdb-api.com/en/API/Top250TVs/k_6day5f3p')
        })
        .then(function (response) {
            return response.json();
        })
        .then(function(response) {
           console.log(response);
           displayMovie(response);
       });
     

 };
// Food Api
 var getfoodInfo = function (foodData) {
    var apifoodUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(
        apifoodUrl
    )
        .then(function(foodResponse) {
           return foodResponse.json();
       })
        .then(function (foodResponse) {
            console.log(foodResponse)
            var rank = foodResponse;

            var food = foodResponse;
            
            return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        })
       .then(function (response) {
            return response.json();
        })
        .then(function(response) {
           console.log(response);
           displayfood(response);
        });
     

};




