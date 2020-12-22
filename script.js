const knock = "Knock, knock!"
const reply = "Who's there?"
let jokes = {
    "Orange": "orange-ya glad I didn't say banana?!",
    "KGB": "*SLAP* VEE VILL ASK ZE QUESTIONS!",
    addJoke (knocker, punchLine) {
        this[knocker] = punchLine
    }
}

jokeKeys = jokes.keys()

const randomJoke () => {
    let randIndex = Math.floor(Math.random()*jokeKeys.length-2)
    let randKey = jokeKeys[randIndex]
    console.log(knock)
    console.log(reply)
    console.log(randKey)
    console.log(randKey + ", who?")
    console.log(jokes[randKey])
}

