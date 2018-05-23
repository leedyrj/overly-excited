// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["The", "sealion", "jumped", "over", "the", "rocks", "in", "the", "light", "of", "the", "moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, punctuation) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += ` ${theWordArray[i]}`;
        if ((i+1) % 3 === 0) {
            buildMeUp += punctuation
        }
        // Print buildMeUp to the console
        //console.log(buildMeUp)
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(nextSentence, '&')