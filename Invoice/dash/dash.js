


var a;
var b;
var total;

//inventory
var allTotal = 700;
var midTotal = 400;
var fineTotal = 500;
var shineTotal = 500;

var netPrice = 20;

//true values
var allarrTrue = []
var midarrTrue = []
var finearrTrue = []
var shinearrTrue = []

var allOnlyTrue = 0;
var midOnlyTrue = 0;
var fineOnlyTrue = 0;
var shineOnlyTrue = 0;

var allTrue = 0


//false values
var allarrFalse = []
var midarrFalse = []
var finearrFalse = []
var shinearrFalse = []

var allOnlyFalse = 0;
var midOnlyFalse = 0;
var fineOnlyFalse = 0;
var shineOnlyFalse = 0;

var allFalse = 0

//CAPITAL AND PROFIT
var capital;
var profit;











	async function gets() {

		//GETTING TRUE VALUES
		//--------------------------------------------------->>>>>>>>>>>>>
		const response = await fetch('http://localhost:3002/dashInvTrue');
		const json = await response.json();
		// console.log(json);

			

					var invLimitlo = json.length;




					//getting values of all mid fine and shine and placing them in a 
					//separate arrays

					for(i=0; i < invLimitlo; i++) {
						var all = json[i].oll
						allarrTrue.push(all)
		

						var mid = json[i].mid
						midarrTrue.push(mid)
		

						var fine = json[i].fine
						finearrTrue.push(fine)
	

						var shine = json[i].shine
						shinearrTrue.push(shine)
				
					}


						// console.log(allarrTrue)
						// console.log(midarrTrue)
						// console.log(finearrTrue)
						// console.log(shinearrTrue)



					
							for (i=0; i < invLimitlo; i++) {
							
							allOnlyTrue += allarrTrue[i]
							// console.log(allCounter)

							midOnlyTrue += midarrTrue[i]
							// console.log(midCounter)

							fineOnlyTrue += finearrTrue[i]
							// console.log(fineCounter)

							shineOnlyTrue += shinearrTrue[i]
							// console.log(shineCounter)


					 		 allTrue = allOnlyTrue + midOnlyTrue + fineOnlyTrue + shineOnlyTrue
						


						}
						

// console.log(allOnlyTrue)
// console.log(midOnlyTrue)
// console.log(fineOnlyTrue)
// console.log(shineOnlyTrue)	
// console.log(allTrue)	





		//GETTING FALSE VALUES
		//--------------------------------------------------->>>>>>>>>>>>>
		const response2 = await fetch('http://localhost:3002/dashInvFalse');
		const json2= await response2.json();


		var invLimitlo = json2.length;




					//getting values of all mid fine and shine and placing them in a 
					//separate arrays

					for(i=0; i < invLimitlo; i++) {
						var all = json2[i].oll
						allarrFalse.push(all)
		

						var mid = json2[i].mid
						midarrFalse.push(mid)
		

						var fine = json2[i].fine
						finearrFalse.push(fine)
	

						var shine = json2[i].shine
						shinearrFalse.push(shine)
				
					}


						// console.log(allarrFalse)
						// console.log(midarrFalse)
						// console.log(finearrFalse)
						// console.log(shinearrFalse)



					
							for (i=0; i < invLimitlo; i++) {
							
							allOnlyFalse += allarrFalse[i]
							// console.log(allCounter)

							midOnlyFalse += midarrFalse[i]
							// console.log(midCounter)

							fineOnlyFalse += finearrFalse[i]
							// console.log(fineCounter)

							shineOnlyFalse += shinearrFalse[i]
							// console.log(shineCounter)


					 		 allFalse = allOnlyFalse + midOnlyFalse + fineOnlyFalse + shineOnlyFalse
						


						}

// console.log(allOnlyFalse)
// console.log(midOnlyFalse)
// console.log(fineOnlyFalse)
// console.log(shineOnlyFalse)	
// console.log(allFalse)	









		//GETTING CAPITAL AND PROFIT
		const response3 = await fetch('http://localhost:3002/dashCap');
		const json3 = await response3.json();
		// console.log(json3);
		var lastItem = json3.length - 1

		capital = parseFloat(json3[lastItem].capital, 10)
		profit = parseFloat(json3[lastItem].profit, 10)

		// console.log(capital)
		// console.log(profit)











		//ASSIGNING
		const response4 = await assign()



		function assign() {

			function formatNumber(num) {
 			 return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

			//Grabbing elements
			const itemsInInventory = document.getElementById("items-in-inventory");
			const valueOfInventory = document.getElementById("value-of-inventory");

			const itemsInMarket = document.getElementById("items-in-market");
			const valueInMarket = document.getElementById("value-in-market");

			const itemsSold = document.getElementById("items-sold");

			const cash = document.getElementById("cash");
			const ofWhichProfit = document.getElementById("of-which-profit");
			const ofWhichCapital = document.getElementById("of-which-capital");
			const companyValue = document.getElementById("company-value");
			
			const all = document.getElementById("all");
			const mid = document.getElementById("mid");
			const fine = document.getElementById("fine");
			const shine = document.getElementById("shine");




			//Preparing data
			var allTotalOut = allOnlyTrue + allOnlyFalse
			var midTotalOut = midOnlyTrue + midOnlyFalse
			var fineTotalOut = fineOnlyTrue + fineOnlyFalse
			var shineTotalOut = shineOnlyTrue + shineOnlyFalse


			var inventoryTotal = allTotal + midTotal + fineTotal + shineTotal 
			var itemsInInventory2 = inventoryTotal - allTrue - allFalse
			var valueOfInventory2 = netPrice * itemsInInventory2

			var valueInMarket2 = allFalse * netPrice

			var cash2 = parseFloat((profit + capital).toFixed(2));
		
			var value = profit + capital + valueInMarket2 + valueOfInventory2

			var allfinal = allTotal - allTotalOut
			var midfinal = midTotal - midTotalOut
			var finefinal = fineTotal - fineTotalOut
			var shinefinal= shineTotal - shineTotalOut



			//Testing
			// console.log(allOnlyFalse)
			// console.log(allOnlyTrue)
			// console.log(allfinal)

			// console.log(midOnlyFalse)
			// console.log(midOnlyTrue)
			// console.log(midfinal)

			console.log(fineOnlyFalse)
			console.log(fineOnlyTrue)
			console.log(finefinal)
		



			//Fetching
			itemsInInventory.innerHTML = formatNumber(itemsInInventory2);
			valueOfInventory.innerHTML = "$" + formatNumber(valueOfInventory2) 

			itemsInMarket.innerHTML = formatNumber(allFalse)
			valueInMarket.innerHTML = "$" + formatNumber(valueInMarket2) 


			itemsSold.innerHTML = formatNumber(allTrue)

			cash.innerHTML = "$" + formatNumber(cash2) 

			ofWhichProfit.innerHTML = "$" + formatNumber(profit)
			ofWhichCapital.innerHTML = "$" + formatNumber(capital) 
			companyValue.innerHTML = "$" + formatNumber(value) 

			all.innerHTML = formatNumber(allfinal)
			mid.innerHTML = formatNumber(midfinal)
			fine.innerHTML = formatNumber(finefinal)
			shine.innerHTML = formatNumber(shinefinal)




		
// console.log(allTotalOut)

		
			
		}

	

	

}




gets()
















