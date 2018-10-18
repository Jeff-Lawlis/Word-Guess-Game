var words = [
    "Jump",
    "Lift",
    "Run",
    "Boxing",
    "Swimming",
    "Hiking"
]
var wins = 0
var losses = 0
var guesses = 10
var currentWord = words[Math.floor(Math.random() * words.length)]
console.log(currentWord)

var dashes = ""

function createDashes(){
    for(var i = 0; i < currentWord.length; i++){
        dashes += "-"
    }
}
createDashes()
var letterGuess = $("<section>").text(dashes)
$("main").append(letterGuess)
$("body").keypress(function(e) {
    guesses--
    var letter = e.key
    console.log(letter)
    if(currentWord.toLowerCase().indexOf(letter) !== -1){
        for(var i = 0; i < currentWord.length; i++){
            if(currentWord[i].toLowerCase() === letter.toLowerCase()){
                var splitDashes = dashes.split("")
                splitDashes[i] = letter
                dashes = splitDashes.join("")
                console.log(dashes)
                $("section").text(dashes)
            }
        }
    } else {
        var wrongLetters = ""
        wrongLetters += letter
        var wrongOnes = $("<aside>").text(wrongLetters)
        $("main").append(wrongOnes)
    }
    if(guesses === 0){
        losses++
        console.log(losses)
    }
    // if(dashes.indexOf("-") === -1){
    //     wins++
    //     currentWord = words[Math.floor(Math.random() * words.length)]
    //     console.log(currentWord)
    // }
    // if(guesses === 0 && dashes.indexOf("-")!==-1){
    //     losses++
    //     currentWord = words[Math.floor(Math.random() * words.length)]
    //     console.log(currentWord)
    // }
})

// checkFinished()