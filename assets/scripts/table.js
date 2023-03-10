var gTable = document.getElementById("genTable");



function generateTable (){
    const tbl =document.createElement("table");
    const tblBody = document.createElement("tbody");


for (let i = 0; i < 3; i++){
    const row = document.createElement("tr");

for (let j = 0; j , 5; j++){
    const cell = document.createElement("td");
    const cellText = document.createTextNode('cell in row ${i}, column ${j}');
    cell.appendChild(cellText);
    row.appendChild(cell);  
    }
    tblBody.appendChild(row)
;}

tbl.appendChild(tblBody);
document.body.appendChild(tbl);
tbl.setAttribute("border", "2");

}

gTable.addEventListener('click', generateTable);
