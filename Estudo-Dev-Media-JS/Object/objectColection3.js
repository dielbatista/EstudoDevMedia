let chuckNorrisCuriosities =
    [
        { title: "Dental hygiene care", content: "Chuck Norris uses barbed wire as dental floss." },
        { title: "Formula for binge-watching series", content: "Chuck Norris can watch a 60-minute episode in 22 seconds." },
        { title: "Suicidal but doesn't die", content: "Chuck Norris has been a suicide bomber 34 times." },
        { title: "Eyes that see everything", content: "Chuck Norris has seen the invisible man." },
        { title: "Manipulating time", content: "Chuck Norris doesn't use a watch. He decides what time it is." },
        { title: "Practicing extreme sports", content: "Chuck Norris bungee jumps without a rope." },
        { title: "No crying allowed", content: "Chuck Norris makes onions cry." },
        { title: "Fire seasoning", content: "Chuck Norris uses gunpowder as seasoning." },
        { title: "Extinction of dinosaurs", content: "Chuck Norris faced dinosaurs once, just once." },
        { title: "Counting endlessly", content: "Chuck Norris counted to infinity. Twice." }
    ]

let colectionLenght = chuckNorrisCuriosities.length

let sortAnumber = Math.floor(Math.random() * colectionLenght)

let selectedCuriosity = chuckNorrisCuriosities[sortAnumber]

let curiosityTitle = selectedCuriosity.title

let curiosityContent = selectedCuriosity.content

console.log("!>CHUCK NORRIS CURIOSITIES<!")

console.log(`Title: ${curiosityTitle}`)
console.log(`Content: ${curiosityContent}`)