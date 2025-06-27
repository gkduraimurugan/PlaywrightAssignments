let mark = 7.5

function gradeCalc(mark) {
    switch(true) {
        case (mark > 9 && mark <= 10) :
            console.log ("The student's Grade is A")
            break
        case (mark > 7 && mark <= 9) :
            console.log("The student's Grade is B")
            break
        case (mark > 5 && mark <= 7) :
            console.log("The student's Grade is C")
            break
        case (mark >5 && mark <= 3) :
            console.log("The student's Grade is D")
            break
        default :
            console.log("The student's Grade is FAIL")
            break
    }
}

gradeCalc(mark)