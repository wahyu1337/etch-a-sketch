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
    const userInput = parseInt(prompt("Enter a number: ", 0));

    while (userInput === isNaN(userInput)){
        userInput = parseInt(prompt('you must enter a number!', 0))
    }
})