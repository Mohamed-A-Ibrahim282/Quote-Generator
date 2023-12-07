// var quoteArray = [
//     "1- “Be yourself; everyone else is already taken.” \n― Oscar Wilde",
//     "2- “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” \n― Albert Einstein",
//     "3- “So many books, so little time.” \n― Frank Zappa",
//     "4- “A room without books is like a body without a soul.” \n― Marcus Tullius Cicero",
//     "5- “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” \n― Ralph Waldo Emerson",
//     "6- “The most courageous act is still to think for yourself. Aloud.” \n― Coco Chanel",
//     "7- “I will not let anyone walk through my mind with their dirty feet.” \n― mahatma gandhi",
//     "8- “I, myself, am made entirely of flaws, stitched together with good intentions.” \n― Augusten Burroughs",
//     "9- “I'm not in this world to live up to your expectations and you're not in this world to live up to mine.” \n― Bruce Lee",
//     "10- “why are trying so hard to fit in, when you're born to stand out” \n― Oliver James",
// ]

// var lastQuoteNum = 0;
// var previousQuoteNum = [];

// function nextBtn() {

//     var quote = Math.floor(Math.random() * 10);

//     for (var i = 0; i < quoteArray.length; i++) {

//         if (i == quote) {

//             if (quote != lastQuoteNum) {
//                 document.getElementById('quotes').innerHTML = quoteArray[i];

//                 previousQuoteNum.push(quote);

//                 lastQuoteNum = quote;
//             }
//             else {
//                 quote = Math.floor(Math.random() * 10);
//                 i = -1;
//             }
//         }
//     }

// }

// function previousBtn() {

//     for (var j = 0; j < previousQuoteNum.length; j++) {

//         if (j == previousQuoteNum.length - 1 && previousQuoteNum.length > 1) {
//             document.getElementById('quotes').innerHTML = quoteArray[previousQuoteNum[j - 1]];

//             previousQuoteNum.pop(1)
//         }

//     }
// }


/////////////////////////////////////////////////////////////////////////////////

var quoteObject = [
    {
        quoteText: "1- “Be yourself; everyone else is already taken.”",
        Writer: "― Oscar Wilde"
    },
    {
        quoteText: "2- “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        Writer: "― Albert Einstein"
    },
    {
        quoteText: "3- “So many books, so little time.”",
        Writer: "― Frank Zappa"
    },
    {
        quoteText: "4- “A room without books is like a body without a soul.”",
        Writer: "― Marcus Tullius Cicero"
    },
    {
        quoteText: "5- “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        Writer: "― Ralph Waldo Emerson"
    },
    {
        quoteText: "6- “The most courageous act is still to think for yourself. Aloud.”",
        Writer: "― Coco Chanel"
    },
    {
        quoteText: "7- “I will not let anyone walk through my mind with their dirty feet.”",
        Writer: "― mahatma gandhi"
    },
    {
        quoteText: "8- “I, myself, am made entirely of flaws, stitched together with good intentions.”",
        Writer: "― Augusten Burroughs"
    },
    {
        quoteText: "9- “I'm not in this world to live up to your expectations and you're not in this world to live up to mine.”",
        Writer: "― Bruce Lee"
    },
    {
        quoteText: "10- “why are trying so hard to fit in, when you're born to stand out”",
        Writer: "― Oliver James"
    },
]

var lastQuoteNum = 0;
var previousQuoteNum = [];

function nextBtn() {

    var quote = Math.floor(Math.random() * 10);

    for (var i = 0; i < quoteObject.length; i++) {

        if (i == quote) {

            if (quote != lastQuoteNum) {
                document.getElementById('quotes').innerHTML = quoteObject[i].quoteText;
                document.getElementById('writer').innerHTML = quoteObject[i].Writer;

                previousQuoteNum.push(quote);

                lastQuoteNum = quote;
            }
            else {
                quote = Math.floor(Math.random() * 10);
                i = -1;
            }
        }
    }

}

function previousBtn() {

    for (var j = 0; j < previousQuoteNum.length; j++) {

        if (j == previousQuoteNum.length - 1 && previousQuoteNum.length > 1) {
            document.getElementById('quotes').innerHTML = quoteObject[previousQuoteNum[j - 1]].quoteText;
            document.getElementById('writer').innerHTML = quoteObject[previousQuoteNum[j - 1]].Writer;

            previousQuoteNum.pop(1)
        }

    }
}
