// validation variables /////////////
var validname = false;
var validbrand = false;
var validprice = false;
var validdate = false;
var validtype = false;
var validpromotion = false;

//   outside add function variables  ///////////
var name = document.getElementById("name"); // inputs
var brand = document.getElementById("brand");
var price = document.getElementById("price");
var type = document.getElementById("type");
var radio = document.querySelectorAll('input[name="typeradio"]');
var date = document.getElementById("date");
var nameOutput = document.getElementById("nameOutput"); // output
var brandOutput = document.getElementById("brandOutput");
var priceOutput = document.getElementById("priceOutput");
var typeOutput = document.getElementById("typeOutput");
var radioOutput = document.getElementById("radioOutput");
var dateOutput = document.getElementById("dateOutput");

//  Name function //////////////////////////////
document.getElementById("name").addEventListener("input", namefun);
function namefun() {
  var name = document.getElementById("name");
  nameOutput.innerHTML = "";

  if (
    !name.value.match(/^[a-z A-Z]+$/) ||
    name.value.length > 30 ||
    name.value == ""
  ) {
    validname = false;
    nameOutput.innerHTML = "Le nom ne doit pas dépassé 30 caractères";
  } else {
    name.style.border = "solid 0px black";
    validname = true;
  }
}
//  brand function //////////////////////////////
document.getElementById("brand").addEventListener("input", brandfun);
function brandfun() {
  brandOutput.innerHTML = "";
  if (
    !brand.value.match(/^[a-z A-Z]+$/) ||
    brand.value.length > 30 ||
    brand.value == ""
  ) {
    validbrand = false;
    brandOutput.innerHTML = "La marque ne doit pas dépassé 30 caractères";
  } else {
    brand.style.border = "solid 0px black";
    validbrand = true;
  }
}
//  price function //////////////////////////////
document.getElementById("price").addEventListener("input", pricefun);
function pricefun() {
  priceOutput.innerHTML = "";
  if (!price.value.match(/(^[0-9]+)([.,][0-9]+)?$/)) {
    validprice = false;
    priceOutput.innerHTML = "Le prix doit etre un reel";
  } else {
    price.style.border = "solid 0px black";
    validprice = true;
  }
}
//  add function  START //////////////////////////////
var counterA = 0;
function add() {
  counterA++;
  // Empty variables after click /////////////////////////

  // type validation ////////////////////////
  var counter = 0;
  typeOutput.innerHTML = "";
  for (var i = 1; i < type.options.length; i++) {
    if (type.options[i].selected === true) {
      counter++;
    }
  }
  if (counter == 0) {
    typeOutput.innerHTML = "Choisie un type";
    validtype = false;
  } else {
    validtype = true;
  }

  // promotion validation ////////////////////////

  radioOutput.innerHTML = "";
  for (var k = 0; k < radio.length; k++) {
    if (
      !(
        document.getElementById("yes").checked ||
        document.getElementById("no").checked
      )
    ) {
      radioOutput.innerHTML = "Choisie un radio";
      validradio = false;
    } else {
      validradio = true;
    }
  }

  //  Date function //////////////////////////////

  dateOutput.innerHTML = "";
  if (!date.value) {
    validdate = false;
    dateOutput.innerHTML = "choisie une date";
  } else if (date.value) {
    date.style.border = "solid 0px black";
    validdate = true;
  }

  // border style error mesage ////
  if (
    document.getElementById("name").value == "" ||
    validname === false
  ) {
    document.getElementById("name").style.border = "solid 1px red";
  }
  if (brand.value == "" || validbrand === false) {
    brand.style.border = "solid 1px red";
  }
  if (price.value == "" || validprice === false) {
    price.style.border = "solid 1px red";
  }
  if (date.value == "" || validdate === false) {
    date.style.border = "solid 1px red";
  }
  //  Validation ///////////////////////////////
  if (
    validname === true &&
    validbrand === true &&
    validprice === true &&
    validdate === true &&
    validradio === true &&
    validtype === true
  ) {
    // variabme storing ////
    nameval = document.getElementById("name").value;
    brandval = brand.value;
    priceval = price.value;
    dateval = date.value.split("-").reverse().join("-");
    // input empty ///
    document.getElementById("name").value = "";
    brand.value = "";
    price.value = "";
    date.value = "";

    document.getElementById("form").style.boxShadow = "0px 0px 0px black";
    // Table function  start ////////////////////////////////

    // variables ///
    document.getElementById("table").style.display = "block";
    var row = -1;
    var table = document.getElementById("table");
    var trr = document.createElement("tr");
    var td = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    td6.setAttribute("class", "btnCell");
    td7.setAttribute("class", "btnCell");

    // linking element to table ////
    table.appendChild(trr);
    trr.appendChild(td);
    trr.appendChild(td1);
    trr.appendChild(td2);
    trr.appendChild(td3);
    trr.appendChild(td4);
    trr.appendChild(td5);
    trr.appendChild(td6);
    trr.appendChild(td7);

    // table values ////////////////////////////////////////
    td.innerHTML = nameval;
    td1.innerHTML = brandval;
    td2.innerHTML = priceval;
    td3.innerHTML = dateval;

    //   td4 outputs ////
    for (j = 0; j < type.length; j++) {
      if (type.options[j].selected) {
        td4.innerHTML = type.options[j].value;
      }
    }

    //   td5 outputs ////
    if (document.getElementById("yes").checked) {
      td5.innerHTML = "Oui";
    } else {
      td5.innerHTML = "Non";
    }

    // buttons  ////

    // edit btn ////
    var edit = document.createElement("input");
    edit.setAttribute("type", "button");
    edit.setAttribute("value", "modifier");
    edit.setAttribute("id", "editbtn");
    td6.appendChild(edit);
    // delet btn ////
    var delet = document.createElement("input");
    delet.setAttribute("type", "button");
    delet.setAttribute("value", "suprimmer");
    delet.setAttribute("id", "delet");
    td7.appendChild(delet);
    // Table function  End ////////////////////////////////
  } else {
    document.getElementById("form").style.boxShadow = "2px 2px 2px red";
  }

  //  add function  END //////////////////////////////


  // to delet row  //
  var table = document.getElementById("table");
  delet.onclick = deleteBtn;
  function deleteBtn() {
    document.getElementById("ajouter").disabled = true;
    document.getElementById('delet').disabled = true
    document.getElementById('editbtn').disabled = true
    document.getElementById("modal").style.display = "flex";
    var modalDelet = document.getElementById("modalDelet");
    modalDelet.onclick = confirm;
    function confirm() {
      table.removeChild(trr);
      document.getElementById("modal").style.display = "none";
      document.getElementById("ajouter").disabled = false;
      document.getElementById('delet').disabled = false
      document.getElementById('editbtn').disabled = false
    }
    var modalCancel = document.getElementById("modalCancel");
    modalCancel.onclick = cancel;
    function cancel() {
      document.getElementById("modal").style.display = "none";
      document.getElementById("ajouter").disabled = false;
      document.getElementById('delet').disabled = false
      document.getElementById('editbtn').disabled = false
    }
  }
  // to edit table //
  edit.onclick = editBt;
  function editBt() {
    document.getElementById("name").value =
      table.rows[trr.rowIndex].cells[0].innerText;
    brand.value = table.rows[trr.rowIndex].cells[1].innerText;
    price.value = table.rows[trr.rowIndex].cells[2].innerText;
    date.value = table.rows[trr.rowIndex].cells[3].innerText
      .split("-")
      .reverse()
      .join("-");
    type.value = table.rows[trr.rowIndex].cells[4].innerText;

    if (td5.innerText == "Oui") {
      document.getElementById("yes").checked = true;
    } else {
      document.getElementById("no").checked = true;
    }
    document.getElementById("ajouter").value = "Modifier";
    document.getElementById("ajouter").style.backgroundColor = "#2E88E5";

    document.getElementById("ajouter").onclick = edited;
    function edited() {
      table.rows[trr.rowIndex].cells[0].innerText =
        document.getElementById("name").value;
      table.rows[trr.rowIndex].cells[1].innerText = brand.value;
      table.rows[trr.rowIndex].cells[2].innerText = price.value;
      table.rows[trr.rowIndex].cells[3].innerText = date.value
        .split("-")
        .reverse()
        .join("-");
      table.rows[trr.rowIndex].cells[4].innerText = type.value;
      if (document.getElementById("yes").checked) {
        td5.innerHTML = "Oui";
      } else {
        td5.innerHTML = "Non";
      }

      document.getElementById("ajouter").value = "Ajouter";
      document.getElementById("ajouter").style.backgroundColor =
        "#F05951";
      document.getElementById("ajouter").onclick = add;
    }
  }
}
