let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["The", "sealion", "jumped", "over", "the", "rocks", "in", "the", "light", "of", "the", "moon"]

let addExcitement = (theWordArray, punctuationMark) => {
    let buildMeUp = "";
    let char = punctuationMark
       for (let i = 0; i < theWordArray.length; i++) {
            buildMeUp += ` ${theWordArray[i]}`;      
        if ((i+1) % 3 === 0) {
            buildMeUp += char;
            char += punctuationMark;
        }
          console.log(buildMeUp)
    }
}
addExcitement(nextSentence, '&');