//Get numbers from the DOM
function getInput() {

    //document.getElementById("alert").classList.add("invisible");
    
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)) {
        //Call checkDivisible function
        if ((fizzNumber > 0) && (buzzNumber > 0)) {
            let answers = checkDivisible(fizzNumber, buzzNumber);

            //Call the displayAnswer function
            displayAnswer(answers);
        } else {
            alert("You must enter numbers greater than 0.");
        }
    } else {
        alert("You must enter integers.");
    }
    }
    

//Calculate if the number is divisible by Fizz, Buzz, or both Fizz and Buzz
function checkDivisible(fizz, buzz) {

    let answers = [];

    //We want to get all numbers from start to end
    for(let index = 1; index <= 100; index++){
        //This will execute in a loop until index = endValue
        if ((index % fizz ==0) && (index % buzz ==0)) {
            answers[index] = "FizzBuzz";
        }   else if (index % buzz == 0) {
            answers[index] = "Buzz";
        }   else if (index % fizz == 0) {
            answers[index] = "Fizz";
        } else {
            answers[index] = index;
        }
    }

    return answers;



}

//Display the answers in a 5 x 20 table
function displayAnswer(answers) {
    
    let tableRows = "";

    for (let index = 1; index < answers.length; index++) {

        let answer = answers[index];

        tableRows += `<tr><td>${answer}</td></tr>`;
    }

    //Write the Answer to the page, in a table
    document.getElementById("results").innerHTML = tableRows;

    //Turn on the alert box
   // document.getElementById("alert").classList.remove("invisible");

}