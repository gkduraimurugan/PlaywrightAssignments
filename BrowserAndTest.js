let browser = "Chrome"

function launchBrowser(browser) {
    if(browser === "Chrome") {
        console.log("The " + browser + " browser has launched")
    } else {
        console.log ("The launched browser is not Chrome")
    }
}


let testType = "Sanity"

function runTest() {
    
    switch (testType){
        case "Sanity" :
            console.log("The test type is : " + testType)
            break
        case "Regression" :
            console.log("The test type is : " + testType)   
            break
        default :
            console.log("The test type is : Smoke Test")
            break
    }
}

launchBrowser(browser)
runTest(testType)