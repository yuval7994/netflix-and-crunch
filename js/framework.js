//declaring questions & choices

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
        question: "Which ingredient do you enjoy the most?",
        answers: ["Sugar", "Garlic", "Lemon", "Spaghetti"]
    },

    {
        question: "Pick a number",
        answers: ["13", "59", "43", "93"]
    },
]

var choices = {
    category: "", 
    area: "",
    ingredient: "", 
    movieNumber: "",
} 

// defining behavior for results 

function makeChoice(choice, question){
    choices[question] = choice
    console.log(choices); 
    const {category, area, ingredient, movieNumber} = choices
    if (category && area && ingredient && movieNumber) {
       getResults() 
    } 
}


async function getResults() {
    var foodResult = await getFoodInfo(choices.category, choices.area, choices.ingredient)
    var movieResult = await getMovieInfo(choices.movieNumber)
    var foodResultElement = document.getElementById('food-result')
    var movieResultElement = document.getElementById('movie-result')
    var foodTitleElement = document.createElement('h3')
        foodTitleElement.className = "food-title"
        foodTitleElement.innerHTML=foodResult.strMeal
    var movieTitleElement = document.createElement('h3')
        movieTitleElement.className = "movie-title"
        movieTitleElement.innerHTML=movieResult.fullTitle
    var foodImageElement = document.createElement('img')
        foodImageElement.className = "food-image"
        foodImageElement.src=foodResult.strMealThumb
    var movieImageElement = document.createElement('img')
        movieImageElement.className = "movie-image"
        movieImageElement.src=movieResult.image
    foodResultElement.appendChild(foodTitleElement)
    foodResultElement.appendChild(foodImageElement)
    movieResultElement.appendChild(movieTitleElement)
    movieResultElement.appendChild(movieImageElement)
    document.getElementById('results').classList.remove('hide')
}

// defining behavior for questions 

const questionOne = questions[0]
const questionOneTitleElement = document.getElementById('question1-title')
questionOneTitleElement.innerHTML = questionOne.question
const questionOneChoicesElement = document.getElementById('category')
questionOne.answers.forEach(answer => {
    const answerContainer = document.createElement('div')
    answerContainer.className = "flex-line-1 choice-btn"
    answerContainer.innerHTML = `<h3 class="card-header text-lowercase">${answer}</h3>`
    answerContainer.onclick = () => makeChoice(answer, questionOneChoicesElement.id)
    questionOneChoicesElement.appendChild(answerContainer)
}
)
const questionTwo = questions[1]
const questionTwoTitleElement = document.getElementById('question2-title')
questionTwoTitleElement.innerHTML = questionTwo.question
const questionTwoChoicesElement = document.getElementById('area')
questionTwo.answers.forEach(answer => {
    const answerContainer = document.createElement('div')
    answerContainer.className = "flex-line-1 choice-btn"
    answerContainer.innerHTML = `<h3 class="card-header text-lowercase">${answer}</h3>`
    answerContainer.onclick = () => makeChoice(answer, questionTwoChoicesElement.id)
    questionTwoChoicesElement.appendChild(answerContainer)
}
)
const questionThree = questions[2]
const questionThreeTitleElement = document.getElementById('question3-title')
questionThreeTitleElement.innerHTML = questionThree.question
const questionThreeChoicesElement = document.getElementById('ingredient')
questionThree.answers.forEach(answer => {
    const answerContainer = document.createElement('div')
    answerContainer.className = "flex-line-1 choice-btn"
    answerContainer.innerHTML = `<h3 class="card-header text-lowercase">${answer}</h3>`
    answerContainer.onclick = () => makeChoice(answer, questionThreeChoicesElement.id)
    questionThreeChoicesElement.appendChild(answerContainer)
}

)

const questionFour = questions[3]
const questionFourTitleElement = document.getElementById('question4-title')
questionFourTitleElement.innerHTML = questionFour.question
const questionFourChoicesElement = document.getElementById('movieNumber')
questionFour.answers.forEach(answer => {
    const answerContainer = document.createElement('div')
    answerContainer.className = "flex-line-1 choice-btn"
    answerContainer.innerHTML = `<h3 class="card-header text-lowercase">${answer}</h3>`
    answerContainer.onclick = () => makeChoice(answer, questionFourChoicesElement.id)
    questionFourChoicesElement.appendChild(answerContainer)
}
)

//IMDB movie API
var getMovieInfo = async function (movieNumber) {
    var apiMovieUrl = 'https://imdb-api.com/en/API/Top250TVs/k_6day5f3p';
    return fetch(
        apiMovieUrl
    )
        .then(function (movieResponse) {
            return movieResponse.json();
        })
        .then(function (movieResponse) {
            console.log(movieResponse.items)
            var movie = movieResponse.items.find(movie => movie.rank === movieNumber)
            return movie;
        })


};

// Food API
var getFoodInfo = async function (category, area, ingredient) {
    var apifoodUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&a=${area}&i=${ingredient}`;
    return fetch(
        apifoodUrl
    )
        .then(function (foodResponse) {
            return foodResponse.json();
        })
        .then(function (foodData){
            return foodData.meals[0];
        })
};


