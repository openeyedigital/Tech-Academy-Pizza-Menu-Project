var priceList = {
  "Personal Pizza": 6.00,
  "Medium Pizza": 10.00,
  "Large Pizza": 14.00,
  "Extra Large Pizza": 16.00,
  "Extra Cheese": 3.00,
  "Cheese Stuffed Crust": 3.00,
}

function sumObj(obj) {
  var sum = 0
  for (var key in obj) {
    sum += obj[key]
  }
  return sum
}

var receipt = {}

$(".btn").click(function () {
  //Adds Size option to the receipt.
  var sizeArray = document.getElementsByClassName("Size")
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      receipt[sizeArray[i].value] = priceList[sizeArray[i].value]
    }
  }
  //END - Adds Size option to receipt


  //Adds Meats option to the receipt
  var meatArray = document.getElementsByClassName("Meats");
  var freeMeat = false

  for (var i = 0; i < meatArray.length; i++) {
    if (meatArray[i].checked) {
      if (freeMeat === true) {
        receipt[meatArray[i].value] = 1
      } else {
        receipt[meatArray[i].value] = 0
        freeMeat = true
      }
    }
  }
  //END - Adds Meats option to receipt


  //Adds Veggies to receipt
  var veggiesArray = document.getElementsByClassName("Veggies");
  var freeVeggies = false

  for (var i = 0; i < veggiesArray.length; i++) {
    if (veggiesArray[i].checked) {
      if (freeVeggies === true) {
        receipt[veggiesArray[i].value] = 1
      } else {
        receipt[veggiesArray[i].value] = 0
        freeVeggies = true
      }
    }
  }
  //END - Adds Veggies to receipt


  //Adds Cheese to receipt
  var cheeseArray = document.getElementsByClassName("Cheese");

  for (var i = 0; i < cheeseArray.length; i++) {
    if (cheeseArray[i].checked) {
      if (cheeseArray[i].value === "Extra Cheese") {
        receipt[cheeseArray[i].value] = 3
      } else {
        receipt[cheeseArray[i].value] = 0
      }
    }
  }
  //END - Adds Meats option to receipt


  //Adds Sauce to receipt
  var sauceArray = document.getElementsByClassName("Sauce");

  for (var i = 0; i < sauceArray.length; i++) {
    if (sauceArray[i].checked) {
      receipt[sauceArray[i].value] = 0
    }
  }
  //END - Adds Sauce option to receipt


  //Adds Crust to receipt
  var crustArray = document.getElementsByClassName("Crust");

  for (var i = 0; i < crustArray.length; i++) {
    if (crustArray[i].checked) {
      if (crustArray[i].value === "Cheese Stuffed Crust") {
        receipt[crustArray[i].value] = 3
      } else {
        receipt[crustArray[i].value] = 0
      }
    }
  }
  //END - Adds Crust option to receipt


  // Grand Total:
  var total = "$" + sumObj(receipt) + ".00"
  // END - GRAND TOTAL


  // Makes sure that the receipt updates each time a new order is placed, instead of appending
  $('.table').find('tbody:last').html('');
  for (key in receipt) {
    var item = '<th class="item">' + key + '</th>'
    var price = '<th class="item">' + receipt[key] + '</th>'

    $('.table').find('tbody:last').append('<tr>' + item + price + '</tr>')
  }

  $('.table').find('tbody:last').append('<tr><th class="total">Total:</th><th class="total">' + total + '</th></tr>')

  $('.receipt').css("opacity", "1")


  // Reset
  receipt = {}
  freeMeat = false
  var freeVeggies = false
})