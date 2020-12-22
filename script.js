const knock = "Knock, knock!"
const reply = "Who's there?"
let jokes = {
    "Orange": "Orange-ya glad I didn't say banana?!",
    "KGB": "*SLAP* VEE VILL ASK ZE QUESTIONS!",
    addJoke (knocker, punchLine) {
        this[knocker] = punchLine
    }
}

jokeKeys = Object.keys(jokes)
let randIndex = Math.floor(Math.random() * (jokeKeys.length -1))
let randKey = jokeKeys[randIndex]

function tellJoke(knocker = randKey, punchLine = jokes[randKey]) {
    console.log(knock)
    console.log(reply)
    console.log(knocker)
    console.log(knocker + " who?")
    console.log(punchLine)
}

tellJoke()
jokes.addJoke('Wa', 'What are you so excited about?')
tellJoke('Wa', 'What are you so excited about?')