
var arr = [];
// var arr2 = [];


const netCost = 20;

var oll;
var mid;
var fine;
var shine;
var allItemsCount;


var tt;
var opnop;

var netProfit;
var totalCost;

var oldCapital = 0;
var oldProfit = 0;

var capitalUp;
var profitUp;



// var acctotal;


function addRow(p1, p2, p3, p4, p5) {

	const createTable = document.createElement("table");
	const div = document.getElementById("div")

	const createTd1 = document.createElement("td");
	const text1 = document.createTextNode(p1);

	const createTd2 = document.createElement("td");
	const text2 = document.createTextNode(p2);

	const createTd3 = document.createElement("td");
	const text3 = document.createTextNode(p3);

	const createTd4 = document.createElement("td");
	const text4 = document.createTextNode(p4);

	const createTd5 = document.createElement("td");
	const text5 = document.createTextNode(p5);

	// const createTd6 = document.createElement("td");
	// const text6 = document.createTextNode(p6);




	div.appendChild(createTable);
	createTable.appendChild(createTd1);
	createTd1.appendChild(text1);

	createTable.appendChild(createTd2);
	createTd2.appendChild(text2);

	createTable.appendChild(createTd3);
	createTd3.appendChild(text3);

	createTable.appendChild(createTd4);
	createTd4.appendChild(text4);


	createTable.appendChild(createTd5);
	createTd5.appendChild(text5);

	// createTable.appendChild(createTd6);
	// createTd6.appendChild(text6);



}












// ASSIGNING THE DATA WE GET FROM THE SERVER TO ARR ARRAY TO PREPARE IT FOR USE
fetch('http://localhost:3002/list')
.then((res) => res.json())
.then((data) => {


	// console.log(data);
	arr = data;
	console.log(arr);

const length = arr.length
const indexLength = length - 1






for (i = 0; i < length; i++) {

const no = i + 1;
// const ids = arr[i].id;
const invoiceNumbers = arr[i].invoicenumber;
const centerNames = arr[i].centername;
const dates = arr[i].datee;
const total = arr[i].total


addRow(no, centerNames, invoiceNumbers,dates, total)

	
}

	})












// ----------------------------------------------------------------------------
// ASYNCRHONOUS AND SYNCHRONOUS FETCHING
// ----------------------------------------------------------------------------


// -----------------------------------
// ASYNCRHONOUS WAY
// -----------------------------------


// function obtain() {

// 	const acctotal = document.getElementById("acctotal").value;
// 	const invoicenumber = document.getElementById("invoiceNumber").value;
// 	// console.log(acctotal)
// 	// console.log(invoicenumber)

	







// 	fetch('http://localhost:3002/list', {
// 			method: 'put',
// 			headers: {'content-type': 'application/json'},
// 			body: JSON.stringify({
// 			invoicenumber: invoicenumber,	
// 			acctotal: acctotal,	
// 			obtainednotyetobtained: true
		

// 			})

// 	}).then(respone => respone.json())
// 	.then(data => {
// 		// console.log(data)
// 		// arr2 = data
// 		// console.log(arr2)

// 		var olllo = data[0].oll
// 		var mid = data[0].mid
// 		var fine = data[0].fine
// 		var shine = data[0].shine
// 		var tt = data[0].acctotal
// 		// var ttparsed = parseInt(tt,10)
// 		var opnop = data[0].obtainednotyetobtained

	
// 		oll = olllo

// 		console.log(olllo)
// 		console.log(mid)
// 		console.log(fine)
// 		console.log(shine)
// 		console.log(tt)
// 		console.log(opnop)



// 		var allPieces = oll + mid + fine + shine;
// 		console.log(allPieces)
// 		totalCost = allPieces * netCost
// 		console.log(totalCost)
// 		totalCost = totalCost
// 		netProfit = tt - totalCost
// 		console.log(netProfit)
// 		netProfit = netProfit



// 	})





// }





// -----------------------------------
// SYNCRHONOUS WAY
// -----------------------------------

const request = async () => {

	const acctotal = document.getElementById("acctotal").value;
	const invoicenumber = document.getElementById("invoiceNumber").value;

const response = await fetch('http://localhost:3002/list', {
			method: 'put',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
			invoicenumber: invoicenumber,	
			acctotal: acctotal,	
			obtainednotyetobtained: true
			})
		});


const json = await response.json();
console.log(json);

	

		var olllo = json[0].oll
		var midlo = json[0].mid
		var finelo = json[0].fine
		var shinelo = json[0].shine
		var ttlo = parseInt(json[0].acctotal,10)
		// var ttparsed = parseInt(tt,10)
		var opnoplo = json[0].obtainednotyetobtained

	
		oll = olllo
		mid = midlo
		fine = finelo
		shine = shinelo
		tt = ttlo
		opnop = opnoplo

		console.log(oll)
		console.log(mid)	
		console.log(fine)
		console.log(shine)
		console.log(tt)
		console.log(opnop)



		var allItemsCountlo = oll + mid + fine + shine;
		// console.log(allPieces)

		allItemsCount = allItemsCountlo

		totalCostlo = allItemsCountlo * netCost
		totalCost = totalCostlo
		console.log(totalCost)

		netProfitlo = tt - totalCost
		netProfit = netProfitlo
		console.log(netProfit)

		console.log(allItemsCount)











		//GETTING DATA AGAIN FROM DATABASE
		const response2 = await fetch('http://localhost:3002/listSecGet');
		const json2 = await response2.json();
		console.log(json2);

		var oldCapitallo = json2.capital;
		var oldCapitalloparsed = parseInt(oldCapitallo, 10)
		oldCapital = oldCapitalloparsed

		var oldProfitlo = json2.profit;
		var oldProfitloloparsed = parseInt(oldProfitlo, 10)
		oldProfit = oldProfitloloparsed

		// console.log(oldCapital)
		// console.log(oldProfit)




		//preparing data to be sent to database
		var capitalUplo = netCost * allItemsCount
		console.log(capitalUplo)

		var profitUplo =  tt - capitalUplo
		console.log(profitUplo)




		var capitalUp = oldCapital + capitalUplo

		var profitUp = oldProfit +  profitUplo





		console.log(capitalUp)
		console.log(profitUp)
		console.log(tt)
















		//SENDING DATA TO DATABASE

			fetch('http://localhost:3002/listPost', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				profit: profitUp,
				capital: capitalUp,
				amount: tt
			

			})

	}).then(respone => respone.json())
	.then(console.log);
}












