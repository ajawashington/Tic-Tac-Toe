// Restart Game Button
var restart = document.querySelector("#b");

// Grab all the squares
var squares = document.querySelectorAll('td');

//Clear all squares
//loops through cells on table and clear them
function clearBoard(){
    for (var i = 0; i< squares.length; i++){
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);

//Check the square marker
function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if (this.textContent === 'X'){
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

//For Loop to add event listeners to all squares

for (var i = 0; i< squares.length; i++){
  squares[i].addEventListener('click', changeMarker)
}
