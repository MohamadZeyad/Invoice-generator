const getDate2 = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = day + "/" + month + "/" + year;

  document.getElementById("date-top").innerHTML = fullDate;
};
getDate2();

const getElement = el => {
  return document.getElementById(el);
};

const getElementValue = el => {
  return document.getElementById(el).value;
};

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const totalArray = [];
const dollar = "$";
var total;

// grabbing the info here
var getTotal;
var getInvoiceNo;
var getDate = "14/6/2019";
var getCenterName;
var getCountry;

var oll = 0;
var mid = 0;
var fine = 0;
var shine = 0;

var database;

var totalDue = 0;

var preInvNo;
// ------------------------------------------------------------------------------
// ADD Function
// ------------------------------------------------------------------------------
function add() {
  const quantity = getElementValue("inputfield");

  const hyaldews = getElementValue("hyaldews");

  var integer = parseInt(quantity, 10);
  console.log(integer);

  var name;
  var price;
  var exp;
  var batch;

  var olllo;
  var midlo;
  var finelo;
  var shinelo;

  switch (hyaldews) {
    case "mid":
      (name = "HyalDew Mid"),
        (price = 63),
        (exp = "4/2021"),
        (batch = "FHDMD1CLN181102"),
        (mid += integer);
      break;

    case "shine":
      (name = "HyalDew Shine"),
        (price = 68),
        (exp = "9/2021"),
        (batch = "HDSH2GLN19041"),
        (shine += integer);
      break;

    case "all":
      (name = "HyalDew All"),
        (price = 65),
        (exp = "8/2021"),
        (batch = "HDAL1CLN19031"),
        (oll += integer);
      break;

    case "fine-5-18123":
      (name = "HyalDew fine"),
        (price = 61),
        (exp = "5/2021"),
        (batch = "HDFN1CLN18123"),
        (fine += integer);

      break;

    case "fine-6-19012":
      (name = "HyalDew fine"),
        (price = 61),
        (exp = "6/2021"),
        (batch = "HDFN1CLN19012"),
        (fine += integer);
      break;

    case "fine-10-19051":
      (name = "HyalDew fine"),
        (price = 61),
        (exp = "10/2021"),
        (batch = "HDFN1CLN19051"),
        (fine += integer);
      break;
  }

  console.log(mid);
  console.log(oll);
  console.log(fine);
  console.log(shine);

  const tablez = document.getElementById("tablez");
  const t = document.createElement("table");
  const tr = document.createElement("tr");

  tablez.appendChild(t);
  t.appendChild(tr);

  const total = quantity * price;

  const totalStyled = formatNumber(total);

  const td = document.createElement("td");
  tr.appendChild(td);
  td.innerHTML = name;
  td.classList.add("h3-style-table");

  const td1 = document.createElement("td");
  tr.appendChild(td1);
  td1.innerHTML = quantity;
  td1.classList.add("h3-style-table");

  const td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.innerHTML = dollar + price;
  td2.classList.add("h3-style-table");

  const td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.innerHTML = batch;
  td3.classList.add("h3-style-table-wider");

  const td4 = document.createElement("td");
  tr.appendChild(td4);
  td4.innerHTML = exp;
  td4.classList.add("h3-style-table");

  const td5 = document.createElement("td");
  tr.appendChild(td5);
  td5.innerHTML = dollar + totalStyled;
  td5.classList.add("h3-style-table");

  totalArray.push(total);
}

// ------------------------------------------------------------------------------
// FOC Function
// ------------------------------------------------------------------------------

function foc() {
  const quantity = document.getElementById("inputfield").value;
  // console.log(quantity);
  const hyaldews = document.getElementById("hyaldews").value;
  // console.log(hyaldews);

  var integer = parseInt(quantity, 10);
  console.log(integer);

  var name;
  var price;
  var exp;
  var batch;

  var olllo;
  var midlo;
  var finelo;
  var shinelo;

  switch (hyaldews) {
    case "mid":
      (name = "HyalDew Mid"),
        (price = 0),
        (exp = "4/2021"),
        (batch = "FHDMD1CLN181102"),
        (mid += integer);
      break;

    case "shine":
      (name = "HyalDew Shine"),
        (price = 0),
        (exp = "9/2021"),
        (batch = "HDSH2GLN19041"),
        (shine += integer);
      break;

    case "all":
      (name = "HyalDew All"),
        (price = 0),
        (exp = "8/2021"),
        (batch = "HDAL1CLN19031"),
        (oll += integer);
      break;

    case "fine-5-18123":
      (name = "HyalDew fine"),
        (price = 0),
        (exp = "5/2021"),
        (batch = "HDFN1CLN18123"),
        (fine += integer);

      break;

    case "fine-6-19012":
      (name = "HyalDew fine"),
        (price = 0),
        (exp = "6/2021"),
        (batch = "HDFN1CLN19012"),
        (fine += integer);
      break;

    case "fine-10-19051":
      (name = "HyalDew fine"),
        (price = 0),
        (exp = "10/2021"),
        (batch = "HDFN1CLN19051"),
        (fine += integer);
      break;
  }

  console.log(mid);
  console.log(oll);
  console.log(fine);
  console.log(shine);

  const tablez = document.getElementById("tablez");
  const t = document.createElement("table");
  const tr = document.createElement("tr");

  tablez.appendChild(t);
  t.appendChild(tr);

  const total = quantity * price;

  const td = document.createElement("td");
  tr.appendChild(td);
  td.innerHTML = name;
  td.classList.add("h3-style-table");

  const td1 = document.createElement("td");
  tr.appendChild(td1);
  td1.innerHTML = quantity;
  td1.classList.add("h3-style-table");

  const td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.innerHTML = dollar + price;
  td2.classList.add("h3-style-table");

  const td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.innerHTML = batch;
  td3.classList.add("h3-style-table-wider");

  const td4 = document.createElement("td");
  tr.appendChild(td4);
  td4.innerHTML = exp;
  td4.classList.add("h3-style-table");

  const td5 = document.createElement("td");
  tr.appendChild(td5);
  td5.innerHTML = dollar + total;
  td5.classList.add("h3-style-table");

  totalArray.push(total);
}

// ------------------------------------------------------------------------------
// DONE Function
// ------------------------------------------------------------------------------

function done() {
  var holder = 0;
  var i;

  for (i in totalArray) {
    holder += totalArray[i];
  }

  total = holder;

  const holderText = holder.toString();

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const numTextStyled = formatNumber(holderText);

  const totalcalc = document.getElementById("totalcalc");

  totalcalc.innerHTML = dollar + numTextStyled;

  // const randomNumber = Math.floor(Math.random() * 10000);
  // console.log(randomNumber);
  var manualInv = document.getElementById("manualInvoice").value;
  const invoiceNo = document.getElementById("invoice-no");

  if (manualInv === "") {
    const newInvNo = preInvNo + 1;
    console.log(newInvNo);

    invoiceNumber = invoiceNo.innerHTML = newInvNo;
  } else {
    invoiceNumber = invoiceNo.innerHTML = manualInv;
    console.log(manualInv);
  }

  // if (invoiceNo === "") {

  // 	// const newInvNo = preInvNo + 1;
  // 	console.log("one")

  // 	// const invoiceNumber = invoiceNo.innerHTML = newInvNo;

  // } else {
  // 	console.log("two")
  // 	// const invoiceNo = document.getElementById("invoice-no");
  // 	// const invValue = document.getElementById("manualInvoice").value;
  // 	// const invoiceNumber = invoiceNo.innerHTML = invValue;

  // }

  // updating gobal variables getInvoiceNo and getTotal
  getInvoiceNo = invoiceNumber;
  getTotal = holder;
}

const finishLine = document.getElementById("finish-line");
const div = document.createElement("div");
finishLine.appendChild(div);
div.classList.add("finish-line");

// ------------------------------------------------------------------------------
// ADDINFO Function
// ------------------------------------------------------------------------------

function addinfo() {
  var centerNameText;
  var centerAddress;
  var centerPhone;
  var country;

  const centerNameropdown = document.getElementById("center-name-dropdown")
    .value;

  switch (centerNameropdown) {
    case "Manesa-Beauty-Center":
      (centerNameText = "Manesa Beauty Center"),
        (centerAddress = "Ainkawa"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "Bahecsi-Beauty-Center":
      (centerNameText = "Bahcesi Beauty Center"),
        (centerAddress = "Doctors St."),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "zanko":
      (centerNameText = "Zanko Hospital"),
        (centerAddress = "Zanko"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "dr-haval-clinic":
      (centerNameText = "Dr.Haval Clinic"),
        (centerAddress = "40m Shahrazad Pharmacy"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "noorjran":
      (centerNameText = "Noorjan Beauty Center"),
        (centerAddress = "Ainkawa"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "ramzi":
      (centerNameText = "Manesa Beauty Center-Dr.Ramzi"),
        (centerAddress = "Ainkawa"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "free":
      (centerNameText = "Free of Sale"),
        (centerAddress = ""),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "marveen":
      (centerNameText = "Marveen Beauty Center"),
        (centerAddress = "Koya St. / Hewa city / villa No.E328"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "waleed-hadithi":
      (centerNameText = "Waleed Al-Hadithi Clinic"),
        (centerAddress = "Kirkuk / Doctors St. / Dr.Sheet Building"),
        (centerPhone = ""),
        (country = "Kirkuk");
      break;

    case "zanist":
      (centerNameText = "Dr.Zanist Clinic"),
        (centerAddress = "Parliament St. / Meddy Care 2 "),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "sami":
      (centerNameText = "Dr.Sami Wali Clinic"),
        (centerAddress = "40m St. / Top Med"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "sarmad":
      (centerNameText = "Dr.Sarmad Clinic"),
        (centerAddress = "Italian City 1"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "bahzad":
      (centerNameText = "Dr.Bahzad Clinic"),
        (centerAddress = "Italian City 1"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "ban":
      (centerNameText = "Dr.Ban Clinic"),
        (centerAddress = "40m St. / Al-Wafaa"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "Direct-Sales":
      (centerNameText = "Al-Jamal Scientific Bureau"),
        (centerAddress = "Basra"),
        (centerPhone = "");
      break;

    case "Free-Of-Sales-Erbil":
      (centerNameText = "Free of sale"),
        (centerAddress = "Erbil"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "Free-Of-Sales-Duhok":
      (centerNameText = "Free of sale"),
        (centerAddress = "Duhok"),
        (centerPhone = ""),
        (country = "Duhok");
      break;

    case "Free-Of-Sales-Kirkuk":
      (centerNameText = "Free of sale"),
        (centerAddress = "Kirkuk"),
        (centerPhone = ""),
        (country = "Kirkuk");
      break;

    case "Free-Of-Sales-Sulaymania":
      (centerNameText = "Free of sale"),
        (centerAddress = "Sulaymania"),
        (centerPhone = ""),
        (country = "Sulaymania");
      break;

    case "nadia":
      (centerNameText = "Dr.Nadia Clinic"),
        (centerAddress = "Algomhorea St. / Al-Razi M.C."),
        (centerPhone = ""),
        (country = "Kirkuk");
      break;

    case "xawer":
      (centerNameText = "Dr.Ahmed Kamal Xawer Clinic"),
        (centerAddress = "40m / Buxari mosque St. / Medicano Hospital"),
        (centerPhone = "0750 432 5887"),
        (country = "Erbil");
      break;

    case "kamil":
      (centerNameText = "Dr.Kamil Ahmed Clinic"),
        (centerAddress = ""),
        (centerPhone = ""),
        (country = "Sulaymania");
      break;

    // case "duhok":
    // centerNameText = "Duhok",
    // centerAddress = "",
    // centerPhone = "",
    // country = "Duhok";
    // break;

    case "aeub":
      (centerNameText = "Dr.Aeub Abdulhama"),
        (centerAddress = "Aynda pharmacy-Orzdi street"),
        (centerPhone = ""),
        (country = "Sulaymania");
      break;

    case "la jour":
      (centerNameText = "La Jour Beauty Center"),
        (centerAddress = "Vital city"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "free-erbil":
      (centerNameText = "Free of sale"),
        (centerAddress = "Erbil"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "free-duhok":
      (centerNameText = "Free of sale"),
        (centerAddress = "Duhok"),
        (centerPhone = ""),
        (country = "Duhok");
      break;

    case "direct-duhok":
      (centerNameText = "Direct Invoice"),
        (centerAddress = "Duhok"),
        (centerPhone = ""),
        (country = "Duhok");
      break;

    case "free-kirkuk":
      (centerNameText = "Free of sale"),
        (centerAddress = "Kirkuk"),
        (centerPhone = ""),
        (country = "Kirkuk");
      break;

    case "free-suli":
      (centerNameText = "Free of sale"),
        (centerAddress = "Sulaymania"),
        (centerPhone = ""),
        (country = "Sulaymania");
      break;

    case "saman ameen":
      (centerNameText = "Dr.Saman Ameen Clinic"),
        (centerAddress = "Doctors Street"),
        (centerPhone = ""),
        (country = "Sulaymania");
      break;

    case "maram":
      (centerNameText = "Dr.Maram Clinic"),
        (centerAddress = "Doctors Street"),
        (centerPhone = ""),
        (country = "Kirkuk");
      break;

    case "wise":
      (centerNameText = "Wise Beauty Center"),
        (centerAddress = "Baxtiari"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "asim":
      (centerNameText = "Dr.Asim Clinic"),
        (centerAddress = "Doctors St. /Almarkazi M.C."),
        (centerPhone = ""),
        (country = "Kirkuk");
      break;

    case "jalal":
      (centerNameText = "Dr.Jalal Clinic"),
        (centerAddress = "C.M.C Hospital"),
        (centerPhone = ""),
        (country = "Erbil");
      break;

    case "alan":
      (centerNameText = "Dr.Alan Clinic"),
        (centerAddress = "Dream City"),
        (centerPhone = ""),
        (country = "Erbil");
      break;
    case "zryan":
      (centerNameText = "Dr.Zryan Clinic"),
        (centerAddress = " 40m/ Aya M.C."),
        (centerPhone = ""),
        (country = "Erbil");
      break;
  }

  const dateEntry = document.getElementById("date").value;

  const centerName = document.getElementById("center-name-dropdown").value;
  getCenterName = centerName;
  console.log(getCenterName);

  const phone = document.getElementById("phone-top");
  phone.innerHTML = centerPhone;

  const addressField = document.getElementById("address-top");
  addressField.innerHTML = centerAddress;

  document.getElementById("centername-top").innerHTML = centerNameText;

  const countryEntry = document.getElementById("country-top");

  countryEntry.innerHTML = country;

  getCountry = country;

  if (dateEntry === "") {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const fullDate = day + "/" + month + "/" + year;
    // console.log(fullDate);

    document.getElementById("date-top").innerHTML = fullDate;

    getDate = fullDate;
  } else {
    const date1 = document.getElementById("date-top");
    date1.innerHTML = dateEntry;
    getDate = dateEntry;
  }
}

// ------------------------------------------------------------------------------
// HIDE AND PRINT function
// ------------------------------------------------------------------------------

function hide(medname, number) {
  const interactiveSection = document.getElementById("container-interactive");
  console.log(getCountry);
  switch (getCountry) {
    case "Erbil":
      document.getElementById("med-name").innerHTML = "Ayman Mamoon";
      document.getElementById("med-number").innerHTML = "0750 237 9719";
      break;

    case "Kirkuk":
      document.getElementById("med-name").innerHTML = "Mariwan Ali";
      document.getElementById("med-number").innerHTML = "0770 130 0551";
      break;
    case "Sulaymania":
      document.getElementById("med-name").innerHTML = "Noah Bakhtiyar";
      document.getElementById("med-number").innerHTML = "0770 061 0702";
      break;
  }

  interactiveSection.style.display = "none";

  window.print();
}

// ------------------------------------------------------------------------------
// DISCOUNT function
// ------------------------------------------------------------------------------
function discount() {
  // -------------------------
  // LOGICAL PART
  // -------------------------
  const discount = document.getElementById("discountz").value / 100;

  console.log("the total is " + total);
  console.log("the discount is " + discount);
  const afterDiscount = discount * total;
  const endResult = total - afterDiscount;
  console.log("amount discounted " + afterDiscount);
  console.log("end result " + endResult);

  // -------------------------
  // DOM PART
  // -------------------------

  const pickTable = document.getElementById("hide-seek");
  pickTable.classList.remove("hide-seek");

  const subtotal = document.getElementById("subtotal-value");
  const subtotalValue = total;
  const subtotalValueStyled = formatNumber(subtotalValue);

  subtotal.innerHTML = "$" + subtotalValueStyled;

  const discountValue = document.getElementById("discount-value");
  const discountConverted = discount * 100;
  const discountText = discountConverted.toString();
  discountValue.innerHTML = discountText + "%";

  const totalAfterDiscount = document.getElementById("totalcalc");

  const numTextStyled = formatNumber(endResult);

  getTotal = endResult;

  const endResultText = numTextStyled.toString();
  totalAfterDiscount.innerHTML = dollar + endResultText;
}

// ------------------------------------------------------------------------------
// SAVE FUNCTION
// ------------------------------------------------------------------------------
function save() {
  fetch("http://localhost:3002/save", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      InvoiceNo: getInvoiceNo,
      CenterName: getCenterName,
      country: getCountry,
      Datee: getDate,
      Total: getTotal,
      day: day,
      month: month,
      year: year,
      oll: oll,
      mid: mid,
      fine: fine,
      shine: shine
    })
  })
    .then(respone => respone.json())
    .then(console.log);
}

// function getInvoice() {

// fetch('http://localhost:3002')
// .then((res) => res.json())
// .then((data) => {

// 	var lastItem = data.length - 1
// 	preInvNo = parseInt(data[lastItem].invoicenumber,10)
// 	console.log(preInvNo);

// 	})

// }

// function updateTotalDue() {

// fetch('http://localhost:3002', {
// 			method: 'post',
// 			headers: {'content-type': 'application/json'},
// 			body: JSON.stringify({

// 				CenterName: getCenterName,
// 				Datee: getDate

// 			})

// 	}).then(respone => respone.json())
// 	.then(console.log);

// fetch('http://localhost:3002')
// .then((res) => res.json())
// .then((data) => {

// // totalDue = data;

// 	console.log(data);

// })

// -----------------------------------------------------
// GETTING TOTAL DUE
// -----------------------------------------------------

function due() {
  fetch("http://localhost:3002/due", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      CenterName: getCenterName
    })
  })
    .then(respone => respone.json())
    .then(data => {
      totalDue = data;
      console.log(totalDue);
      const totalDueFormatted = formatNumber(totalDue);
      const usd = document.getElementById("USD");
      usd.innerHTML = "USD $" + totalDueFormatted + ".00";
    });
}

//SETTING CLASS NAME TO AN ELEMENT
// document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

// function add () {

// const table = document.getElementById("table");
// const text = document.createTextNode("hyalDew All");
// const td = document.createElement("td");
// const tr = document.createElement("tr");
// table.appendChild(tr);
// tr.appendChild(td);
// td.appendChild(text);
//  td.classList.add("h3-style-table");

//NESTED DROPDOWN (dropdown that upon choosing an option, would update the second
//drop down)

// const hyaldews = document.getElementById("hyaldews").value;
// console.log(hyaldews);

// var price;
// var exp;
// var batch1;
// var batch2;

// switch (hyaldews) {
// 	case "fine":
// 	price = 20, exp = "10/2021", batch1 = "HDAL1CLN19012", batch2 = "FHDMD1CLN181101";
// 	break;
// 	case "mid":
// 	price = 21, exp = "9/2021", batch1 = "GKFHHFS887HH";
// 	break;
// 	case "all":
// 	price = 23, exp = "8/2021";
// 	break;
// 	case "shine":
// 	price = 25, exp = "7/2021";
// 	break;

// }

// console.log(price);
// console.log(exp);
// console.log(batch1);
// console.log(batch2);

// const batchDropDown = document.getElementById("batch");
// const option = document.createElement("option");
// batchDropDown.appendChild(option);
// option.innerHTML = batch1;
// option.setAttribute("value", "batch10");
// option.setAttribute("id", "ids");
// const it = document.getElementById("ids").value;
// console.log(it);

// }

// function sum (a,b,c,d) {
// 	const sum = a + b + c + d;
// 	console.log(sum);
// }
