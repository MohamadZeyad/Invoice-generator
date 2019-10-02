


//Rebuidling
async function go() {

	var capital;
	var profit;
	var date;


	const response = await fetch('http://localhost:3002/calc')
	const json = await response.json()

	const lastItem = json.length - 1


	capital = parseInt(json[lastItem].capital, 10)
	// capital = parseInt(cap, 10);
	console.log(capital)

	profit = parseInt(json[lastItem].profit, 10)
	// capital = parseInt(cap, 10);
	console.log(profit)


	 date = document.getElementById("date").value;
	// console.log(date);




	const dropDown = document.getElementById("dropdown").value;

	const amountVal = document.getElementById("amount").value;
	console.log(amountVal)
	var  amountValInt= parseFloat(amountVal)
	console.log(amountValInt)

	const noteVal = document.getElementById("note").value;




	switch (dropDown) {
	case "expenses":
	profit = profit - amountValInt,
	type = "Expenses",
	note = noteVal,
	amount = amountValInt;	
	break;

	case "addCap":
	capital = capital + amountValInt,
	type = "adding to capital",
	note = noteVal,
	amount = amountValInt;
	break;

	case "withdrawCap":
	capital = capital - amountValInt,
	type = "withdrawing from capital",
	note = noteVal,
	amount = amountValInt;
	break;


}

console.log(capital)
console.log(profit)



const send = await fetch('http://localhost:3002/calc', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				type: type,
				note: note,
				profit: profit,
				capital: capital,
				amount: amount,
				datee: date

			})

	})






}




















