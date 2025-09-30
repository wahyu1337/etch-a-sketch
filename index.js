console.log('PROJECT: Etch-a-Sketch')

// Add title to the webpage (h1)
const title = document.createElement('h1');
    title.textContent = 'Project Etch-a-Sketch'
    title.style.marginLeft = "15px";
    document.body.append(title);

// adding button for ask user how many square ()
const buttonInput = document.createElement('button');
    buttonInput.textContent = "ENTER SQUARE";
    buttonInput.classList.add('btn');
    // some style
        buttonInput.style.marginBottom = '25px';
        buttonInput.style.marginLeft = "15px";
    document.body.append(buttonInput);

// adding a divs
const div = document.querySelector('div');
const container = document.createElement('div')
    container.classList.add('container');
    document.body.append(container);

// add a square to the container 256 times and add to container
for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        // create square 
        const square = document.createElement('div');
        square.classList.add('square')
        
        // adding the listener when the mouse hover the square
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background-color: black;")
        })

        // append the square to container
        container.appendChild(square);
    }
}

// add event listener to ask how many user want the square
buttonInput.addEventListener('click', () => {
    
    // Ask user to input a number for how much square 
    let userInput = parseInt(prompt("Enter a number: "));
    // case handle if user's input
        while (isNaN(userInput)){
            userInput = parseInt(prompt("Please enter a number only!"));
        }
    // case hundle if more than 100
        while (userInput > 100){
            userInput = parseInt(prompt("Number max is 100, please re-enter the number!"))
        }
    console.log(userInput); // logs the user input

    let squareSize = 960 / userInput;
    console.log(`square size is: ${squareSize}`);
    container.replaceChildren();

    for(let i = 0; i < userInput; i++){
        for(let j = 0; j < userInput; j++){
            // Create square after user input
            const square = document.createElement('div');
            square.classList.add('square')
            square.style.height = squareSize+'px';
            square.style.width = squareSize+'px';

            // adding the listener when the mouse hover the square (after user input)
            square.addEventListener('mouseover', () => {
                square.setAttribute('style', 'background-color: blue;')
                square.style.height = squareSize+'px';
                square.style.width = squareSize+'px';
            })

            // append the square to container (after user input)
            container.appendChild(square);
        }
    }
})