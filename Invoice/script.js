const getDate2 = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = day + "/" + month + "/" + year;

  document.getElementById("date-top").innerHTML = fullDate;
};
getDate2();

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const getElement = el => {
  return document.getElementById(el);
};

const getElementValue = el => {
  return document.getElementById(el).value;
};

let bool;
let buttonClicked;

const evaluate = p => {
  p === "add" ? (bool = true) : (bool = false);
};

const addClicked = () => {
  buttonClicked = getElementValue("add");

  evaluate(buttonClicked);
};

const focClicked = () => {
  buttonClicked = getElementValue("foc");

  evaluate(buttonClicked);
};
const addRow = () => {
  const quantity = getElementValue("inputfield");
  const hyaldews = getElementValue("hyaldews");
  //changing qunatity of type text into quantity of type Int
  var quantityInt = parseInt(quantity, 10);
  console.log(quantityInt);
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
        bool ? (price = 63) : (price = 0),
        (exp = "4/2021"),
        (batch = "FHDMD1CLN181102"),
        (mid += quantityInt);
      break;
    case "shine":
      (name = "HyalDew Shine"),
        bool ? (price = 68) : (price = 0),
        (exp = "9/2021"),
        (batch = "HDSH2GLN19041"),
        (shine += quantityInt);
      break;
    case "all":
      (name = "HyalDew All"),
        bool ? (price = 65) : (price = 0),
        (exp = "8/2021"),
        (batch = "HDAL1CLN19031"),
        (oll += quantityInt);
      break;
    case "fine-5-18123":
      (name = "HyalDew fine"),
        bool ? (price = 61) : (price = 0),
        (exp = "5/2021"),
        (batch = "HDFN1CLN18123"),
        (fine += quantityInt);
      break;
    case "fine-6-19012":
      (name = "HyalDew fine"),
        bool ? (price = 61) : (price = 0),
        (exp = "6/2021"),
        (batch = "HDFN1CLN19012"),
        (fine += quantityInt);
      break;
    case "fine-10-19051":
      (name = "HyalDew fine"),
        bool ? (price = 61) : (price = 0),
        (exp = "10/2021"),
        (batch = "HDFN1CLN19051"),
        (fine += quantityInt);
      break;
  }

  const tablez = document.getElementById("tablez");
  const t = document.createElement("table");
  const tr = document.createElement("tr");
  tablez.appendChild(t);
  t.appendChild(tr);
  const total = quantity * price;
  const totalStyled = formatNumber(total);
  const createCell = (element, value, styles) => {
    tr.appendChild(element);
    element.innerHTML = value;
    element.classList.add(styles);
  };
  const td = document.createElement("td");
  createCell(td, name, "h3-style-table");
  const td1 = document.createElement("td");
  createCell(td1, quantity, "h3-style-table");
  const td2 = document.createElement("td");
  createCell(td2, dollar + price, "h3-style-table");
  const td3 = document.createElement("td");
  createCell(td3, batch, "h3-style-table-wider");
  const td4 = document.createElement("td");
  createCell(td4, exp, "h3-style-table");
  const td5 = document.createElement("td");
  createCell(td5, dollar + totalStyled, "h3-style-table");
  totalArray.push(total);
};

// ------------------------------------------------------------------------------
// grabbing the info here (STATE)
// ------------------------------------------------------------------------------
const totalArray = [];
const dollar = "$";
var total;
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

var centerNameText;
var centerAddress;
var centerPhone;
var country;
// ------------------------------------------------------------------------------
// ADD Function
// ------------------------------------------------------------------------------
function add() {
  addClicked();
  addRow();
  addinfo();
  done();
}

// ------------------------------------------------------------------------------
// FOC Function
// ------------------------------------------------------------------------------

function foc() {
  focClicked();
  addRow();
  addinfo();
  done();
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

  const grandtotal = document.getElementById("grandtotal");

  grandtotal.innerHTML = dollar + numTextStyled;

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
  const centerNameropdown = getElementValue("center-name-dropdown");

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

  const dateEntry = getElementValue("date");

  const centerName = getElementValue("center-name-dropdown");

  const phone = getElement("phone-top");
  phone.innerHTML = centerPhone;

  const addressField = getElement("address-top");
  addressField.innerHTML = centerAddress;

  getElement("centername-top").innerHTML = centerNameText;

  const countryEntry = getElement("country-top");
  countryEntry.innerHTML = country;

  if (dateEntry === "") {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const fullDate = day + "/" + month + "/" + year;

    getElement("date-top").innerHTML = fullDate;
  } else {
    const date1 = getElement("date-top");
    date1.innerHTML = dateEntry;
  }
}

// ------------------------------------------------------------------------------
// HIDE AND PRINT function
// ------------------------------------------------------------------------------

function hide(medname, number) {
  const interactiveSection = getElement("container-interactive");
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
function discounted() {
  // LOGICAL PART
  // -------------------------
  //grabbing the value of the discount input field
  const selectDiscountInput = getElementValue("discountz");
  //converting entered discount amount form a whole number to a decimal number
  const discountInputDecimal = selectDiscountInput / 100;

  //getting discountAmount after discount by multiplying total * discountEntryDecimal
  const discountAmount = discountInputDecimal * total;
  const endResultAfterDiscount = total - discountAmount;

  // DOM PART
  // -------------------------
  //grabbing the hidden table that holds the discount information
  const pickTable = getElement("hide-seek");
  //removing hide-seek class that sets div to hidden, which will make div visible on click
  pickTable.classList.remove("hide-seek");
  //grabbing the subtotal element
  const subtotal = getElement("subtotal-value");
  //setting subtotal value to the total before discount
  const subtotalValue = total;
  //corrects subtotal value to a whole number
  const subtotalValueStyled = formatNumber(subtotalValue);
  //adding dollar sign to the subtotal
  subtotal.innerHTML = "$" + subtotalValueStyled;
  //grabbing the div that will hold percentage of discount
  const discountValue = getElement("discount-value");
  //converting the decimal value to a whole number
  const discountConverted = discountInputDecimal * 100;
  //converting whole number from an integer to a string
  const discountText = discountConverted.toString();
  //adding perentage sign to the whole number to show amount of discount in percentage
  discountValue.innerHTML = discountText + "%";
  //grabbing grand total div
  const totalAfterDiscount = getElement("grandtotal");
  //adding decimal points to show grand total in cents
  const numTextStyled = formatNumber(endResultAfterDiscount);

  //converting subtotal in cents from an integer to a string
  const endResultText = numTextStyled.toString();
  //setting the div to the value of grand total in cents as a string
  totalAfterDiscount.innerHTML = dollar + endResultText;
}
