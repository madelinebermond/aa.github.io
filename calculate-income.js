function calculateIncome() {
	
	document.getElementById("enter").innerHTML = "working";
	
	fetch("https://current-config.json")           //api for the get request
		.then(response => response.json())
		.then(data => console.log(data));
	
	//document.getElementById("enter").innerHTML = jsonData;
	
	// Get the container element where the table will be inserted
	let container = document.getElementById("container");
				 
	// Create the table element
	let table = document.createElement("table");
	
	// Loop through the JSON data and create table rows for each power
	/*jsonData.forEach((item) => {
	let tr = document.createElement("tr");
	
	// Get the values of the current object in the JSON data
	let vals = Object.values(item);
	
	// Put the power name in the cell
	let td = document.createElement("td");
	td.innerText = vals[0];
	
	// Append the cell to the table row
	tr.appendChild(td);
	
	//do all the math
	let vals2 = Object.values(vals[1]);
	let sum = 0;
	vals2.forEach((elem) => {
		sum += parseInt(elem);
	});
	
	// Put the sum in the cell
	let td2 = document.createElement("td");
	td2.innerText = sum;
	
	// Append the cell to the table row
	tr.appendChild(td2);
	
	table.appendChild(tr); // Append the table row to the table
 });
 container.appendChild(table); // Append the table to the container element*/
}

function calculateIncome2() {
	
	// Sample JSON data
				 let jsonData = [
						{
							 "name": "Saurabh",
							 "age": "20",
							 "city": "Prayagraj"
						},
						{
							 "name": "Vipin",
							 "age": "23",
							 "city": "Lucknow",
						},
						{
							 "name": "Saksham",
							 "age": "21",
							 "city": "Noida"
						}
				 ];
				 
				 // Get the container element where the table will be inserted
				 let container = document.getElementById("container");
				 
				 // Create the table element
				 let table = document.createElement("table");
				 
				 // Loop through the JSON data and create table rows
				 jsonData.forEach((item) => {
						let tr = document.createElement("tr");
						
						// Get the values of the current object in the JSON data
						let vals = Object.values(item);
						
						// Loop through the values and create table cells
						vals.forEach((elem) => {
							 let td = document.createElement("td");
							 td.innerText = elem; // Set the value as the text of the table cell
							 tr.appendChild(td); // Append the table cell to the table row
						});
						table.appendChild(tr); // Append the table row to the table
				 });
				 container.appendChild(table); // Append the table to the container element
			}