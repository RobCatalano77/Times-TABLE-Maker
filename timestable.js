var readNumber = function () {
var inputBox = document.getElementById("score");
var inputStr = inputBox.value;
return parseInt(inputStr);
};

var products = [];

function makeTimesTable (n) {
	var increase = 0;
	for (var i = 0; i <= 10; i++) {
		var answer = n * increase;
		products.push(answer);
		increase = increase +1;
	}
	return products;
};

var buildTable = function(data) {
var table = document.createElement('table');
	
	products.forEach(function(n) {
		var tableRow = document.createElement('tr');
		var textNode = document.createTextNode(n)
		tableRow.appendChild(textNode);
		table.appendChild(tableRow);
 /*     
        var cell = document.createElement('td');
      	
        cell.textContent = data[n];
        tableRow.appendChild(cell);
		table.appendChild(tableRow);
    
    
});
*/

    
    return table;
});

};
var run = function() {
	var num = readNumber();
	var final = makeTimesTable(num);
	var outElement = document.getElementById('result').innerHTML = buildTable(makeTimesTable(readNumber));
};

var button = document.getElementById('runner');
button.onclick = run;