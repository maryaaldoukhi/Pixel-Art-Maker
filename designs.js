const theCanvas = document.getElementById("pixelCanvas");
/**
 * A grid should be displayed when
 * a user submits the width and the height
 */
function makeGrid() {
    const theHeight = document.getElementById('inputHeight').value;
    const theWidth = document.getElementById('inputWidth').value;
    theCanvas.innerHTML = "";
    // A grid with the selected Height and Width should be dispalyed.
    for (var r = 1; r <= theHeight; r++) {
        var row = document.createElement("tr");
        theCanvas.appendChild(row);
        for (var c = 1; c <= theWidth; c++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
    }

}
/**
 * the background color of the cell should change
 * when the cell is clicked
 */
theCanvas.addEventListener("click", function colorCell(event) {
    if (event.target.nodeName === 'TD') {
        colorOfCell = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = colorOfCell;
    }
});
const formPicker = document.getElementById("sizePicker");
//A grid should appear when the user clicks submit
formPicker.addEventListener("submit", function grid(event) {
    event.preventDefault();
    makeGrid();
})