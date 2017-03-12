function findHeightSymbol() {

    // figure out the height the user typed
    heightStr = document.getElementById('height').value;

    // convert the string to an int
    height = parseInt(heightStr);

    //set the range counter equal to the height
    document.getElementById("rangeHeight").innerHTML = height;

    //get the symbol that was typed as input
    var symbol = document.getElementById("symbol").value;

    // draw the pyramid with the given height and selected symbol
    drawPyramid(height, symbol);
}

function drawPyramid(height, symbol) {

    // print that pyramid!, but first clear out the old one
    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            if (symbol == "@")
                var spaceChar = "\xa0\xa0\xa0";  // code for non-breaking space
            else {
                spaceChar = "\xa0\xa0";
            }
            rowStr += spaceChar
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        textElem = document.createTextNode(rowStr);  // have to create Element and also create TextNode

               // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

               // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);

        }
}
