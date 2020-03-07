'use strict';


var cartsNew = [];

// stor data from the local storage using JSON anf localStorage.getItem() methods
function itemRestore() {
    cartsNew = JSON.parse(localStorage.getItem("newItem"));
    for (var i = 0; i < cartsNew.length; i++) {
        var newCat = new Cart(cartsNew[i].name, cartsNew[i].quantity);
        console.log(newCat);
    }
}
itemRestore();

// get access to the container of the table and the head of the table in html
var cartTable = document.getElementById('cart');
var tableHead = document.getElementById('head');

// function to render the table of the orderd cart
function tableRender() {

    for (var i = 0; i < cartsNew.length; i++) {
        var trE1 = document.createElement('tr')
        trE1.setAttribute('id', 'removeTr')
        cartTable.appendChild(trE1);
        trE1.textContent = "X";
        var tdE1 = document.createElement('td');
        trE1.appendChild(tdE1);
        tdE1.textContent = `${cartsNew[i].quantity }`;
        var tdE2 = document.createElement('td');
        trE1.appendChild(tdE2);
        tdE2.textContent = `${cartsNew[i].name }`;
    }
}
tableRender();

// to store the cart data in the localStorage to keep it rendered on the page after refrishing the page
function tableRefresh() {
    var table2 = JSON.stringify(cartsNew);
    localStorage.setItem('mytable', table2);
    tableRender();
}
tableRefresh();

// add an event click to remove the cart 
cartTable.addEventListener('click', deleteTrow);

function deleteTrow(event) {
    if (event.target.id == 'removeTr') {
        alert("you will remove the first cart!!");
        var x = document.getElementById('cart').deleteRow(1); //this method will delete a spisfic row in the table
    }
}