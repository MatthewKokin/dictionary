// Select the grid container
const gridContainer = document.getElementById('grid-container');

// Total squares = 13 rows * 16 columns
const rows = 13;
const columns = 16;

// Create squares and add labels for specific ones
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Label squares in the first row from 1 to 15, starting with the 2nd square
        if (row === 0 && col > 0 && col <= 15) {
            square.textContent = col;  // Label with numbers 1 to 15
            square.classList.add('labeled'); // Add labeled class
        }

        // Label squares in the first column from 1 to 12, starting with the 2nd square
        if (col === 0 && row > 0 && row <= 12) {
            square.textContent = row;  // Label with numbers 1 to 12
            square.classList.add('labeled'); // Add labeled class
        }
        
        if (row == 0 && col == 0){
            square.classList.add('labeled');
        }
        gridContainer.appendChild(square);
    }
}
