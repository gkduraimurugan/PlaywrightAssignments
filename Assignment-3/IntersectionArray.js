let intersection = (arr1, arr2) => {

    let resultingArray = [];

    for (let i=0; i<=arr1.length-1; i++) {
        for (let j=0; j<=arr2.length-1; j++) {
            if (arr1[i]===arr2[j]) {
                let dupCheck = resultingArray.includes(arr2[j]);
                if(dupCheck===false) {
                    resultingArray.push(arr2[j]);
                }
            }
        }
    } 
    if (resultingArray.length!=0) {
        console.log(resultingArray);
    } else {
        console.log("No common elements found");
    }
}

intersection([9, 18, 27, 36, 45], [54, 63, 72, 81, 90]);
intersection([9, 18, 27, 36, 45], [9, 18, 27, 36, 45]);
intersection([9, 18, 27, 36, 45], [18, 36, 54, 63, 72]);
intersection([9, 18, 27, 36, 45], [18, 18, 36, 54, 63, 72]);