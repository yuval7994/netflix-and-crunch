
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

// async function getData() {
    // const response = await fetch('https://apilist.fun/api/food-api')
    // const data = await response.json()

var request = newXMLHttpRequest (); 
request.open ('GET', 'https://api.themoviedb.org/3/movie/550?api_key=a26ce62c6e6cd655c98fc5e5ec229567', true);
request.onload = function (){
    // JSON data begins 
    var data = JSON.parse (this.response);
    
}


