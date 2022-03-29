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


questions.forEach(function (question) {
    console.log(question.question)
    for (let i = 0; i < question.answers.length; i++) {
        const answer = question.answers[i];
        console.log(answer)
    }
    question.answers.forEach(function (answer) {
        console.log(answer)
    });
});

/*
          <div class ="flex-line-1">
                <span>
                    <img class="question-1" src = "assets/images/veggies.jpeg">
                    <h3 class="card-header text-lowercase">Pick a number</h3>
                </span>
            </div>  
*/


const questionFive = questions[4]
const questionFiveTitleElement = document.getElementById('question5-title')
questionFiveTitleElement.innerHTML = questionFive.question
const questionFiveChoicesElement = document.getElementById('choices-5')
questionFive.answers.forEach(answer => {
    const answerContainer = document.createElement('div')
    answerContainer.className = "flex-line-1"
    answerContainer.innerHTML = `<h3 class="card-header text-lowercase">${answer}</h3>`
    answerContainer.onclick = () => console.log(getMovieInfo(answer))
    questionFiveChoicesElement.appendChild(answerContainer)
}
)


// request.send(); 

//IMDB movie API
var getMovieInfo = function (movieNumber) {
    var apiMovieUrl = 'https://imdb-api.com/en/API/Top250TVs/k_6day5f3p';
    fetch(
        apiMovieUrl
    )
        .then(function (movieResponse) {
            return movieResponse.json();
        })
        .then(function (movieResponse) {
            console.log(movieResponse.items)
            var movie = movieResponse.items.find(movie => movie.rank === movieNumber)

            console.log(movie);



        })


};

// Food Api
var getfoodInfo = function (foodData) {
    var apifoodUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(
        apifoodUrl
    )
        .then(function (foodResponse) {
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
        .then(function (response) {
            console.log(response);
            displayfood(response);
        });


};




