let AllNumbers = [];
let AllSelectedNumbers = [];

for (i = 0; i < 75; i++) AllNumbers.push(i);

var tbl = document.createElement("board");
tbl.innerText = AllNumbers;
document.body.appendChild(tbl);
