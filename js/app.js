var products = [
    'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
];

// get access to the elements inside html file
var product1 = document.getElementById('firstProduct');
var product2 = document.getElementById('secondProduct');
var product3 = document.getElementById('thirdProduct');
var mainContainer = document.getElementById('imagesOfProduct');

// give the imgs an attricutes
product1.setAttribute('src', `img/${products[0]}`);
product1.setAttribute('alt', products[0]);
product1.setAttribute('title', products[0]);

product2.setAttribute('src', `img/${products[1]}`);
product2.setAttribute('alt', products[1]);
product2.setAttribute('title', products[1]);


product3.setAttribute('src', `img/${products[2]}`);
product3.setAttribute('alt', products[2]);
product3.setAttribute('title', products[2]);


// the constructor
function Product(name) {
    this.name = name;
    this.imgPath = `img/${this.name}`
    this.click = 0;
    this.views = 0;
    this.votes = 0;
    Product.all.push(this);
}
Product.all = [];


for (var i = 0; i < products.length; i++) {
    new Product(products[i]);
}

function randomPick(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




var firstProduct, secondProduct, thirdProduct;

function renderOut() {
    firstProduct = Product.all[randomPick(0, Product.all.length - 1)];
    secondProduct = Product.all[randomPick(0, Product.all.length - 1)];
    thirdProduct = Product.all[randomPick(0, Product.all.length - 1)];

    product1.setAttribute('src', firstProduct.imgPath);
    product1.setAttribute('alt', firstProduct.name);
    product1.setAttribute('title', firstProduct.name);
    console.log(firstProduct.name);

    product2.setAttribute('src', secondProduct.imgPath);
    product2.setAttribute('alt', secondProduct.name);
    product2.setAttribute('title', secondProduct.name);

    product3.setAttribute('src', thirdProduct.imgPath);
    product3.setAttribute('alt', thirdProduct.name);
    product3.setAttribute('title', thirdProduct.name);

}
renderOut();


function resultVotes() {
    var ul1 = document.getElementById('theResult');
    for (var i = 0; i < Product.all.length; i++) {
        // deleting the extintion from the name using replacs()
        var newStr = Product.all[i].name.replace('.jpg', '');
        var li1 = document.createElement('li');
        li1.textContent = ` ${newStr} has ${Product.all[i].click} votes and ${Product.all[i].views} views`
        ul1.appendChild(li1);
    }
}

mainContainer.addEventListener('click', oneClickDone);
var numOfClick = 0;

function oneClickDone(e) {


    if (numOfClick < 25) {
        if (event.target.id != 'imagesOfProduct') {
            if (event.target.id === 'firstProduct') {
                firstProduct.click++;
            } else if (event.target.id === 'secondProduct') {
                secondProduct.click++;
            } else if (event.target.id === 'thirdProduct') {
                thirdProduct.click++;
            }
            numOfClick++;
            firstProduct.views++;
            secondProduct.views++;
            thirdProduct.views++;
            renderOut();
        }
        while (firstProduct.name === secondProduct.name || secondProduct.name === thirdProduct.name || thirdProduct.name === firstProduct.name) {
            oneClickDone(e)
        }

    } else {
        mainContainer.removeEventListener('click', oneClickDone);
        resultVotes();
    }
}