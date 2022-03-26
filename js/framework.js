
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
        question: "Question 5?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        question: "Question 6",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        question: "Question 7",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        question: "Question 8",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
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

// async function getData() {
    // const response = await fetch('https://apilist.fun/api/food-api')
    // const data = await response.json()

var request = newXMLHttpRequest (); 
request.open ('GET', 'https://api.themoviedb.org/3/movie/550?api_key=a26ce62c6e6cd655c98fc5e5ec229567', true);
request.onload = function (){
    // JSON data begins 
    var data = JSON.parse (this.response);
    
}


