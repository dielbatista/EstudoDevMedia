let series_colection = [
    { name: "Breaking Bad", time: "09-PM", synpose: "A chemistry teacher is transformed when he discovers he has terminal cancer. So he uses his skills in favor of crime" }, 
    { name: "Forgo", time: "10-PM", synpose: "Uma sequência de crimes saem errado e são investigados por uma detetive." }, 
    { name: "Black Mirror", time: "08-PM", synpose: "Science fiction tales that reflect the dark side of technology, showing that not every new thing brings only benefits." }, 
    { name: "Pessoa de interesse", time: "11-PM", synpose: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto." }, 
    { name: "Lost", time: "11-PM", synpose: "A plane crashes on a desert island and soon a group of passengers must fight to survive." },
    { name: "Prision Break", time: "08-PM", synpose: "A man creates a plan to free his brother sentenced to death for the alleged murder of the US vice president" },
    { name: "Dark", time: "10-PM", synpose: "The disappearance of children in the German city of Winden refers to identical events that occurred 33 years ago and 66 years ago." },
]

/**
 * Sunday index[0]
 * monday index[1]
 * tuesday index[2]
 * wednesday index[3]
 * thursday index[4]
 * friday index[5]
 * saturday index[6]
 */

let actual_date = new Date() //Get the actual weekly day(today its tuesday)
let weekly_day = actual_date.getDay()

let daily_series = series_colection[weekly_day]

var series_name = daily_series.name

var series_time = daily_series.time
var synpose_serie = daily_series.synpose

console.log(`Today the serie is ${series_name}, ${series_time}`)

console.log(`Below is an overview of the series: ${synpose_serie}`)