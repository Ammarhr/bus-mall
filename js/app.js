var products = [
    'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
];

// get access to the elements inside html file
var product1 = document.getElementById('firstProduct');
var product2 = document.getElementById('secondProduct');
var product3 = document.getElementById('thirdProduct');
var mainContainer = document.getElementById('imagesOfProduct');

// give the imgs an attributeshahahahahahahahahahahahahahaha0000000

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


var subProduct = []; //new array for comparing images
var firstProduct, secondProduct, thirdProduct;

function renderOut() {

    firstProduct = Product.all[randomPick(0, Product.all.length - 1)];
    secondProduct = Product.all[randomPick(0, Product.all.length - 1)];
    thirdProduct = Product.all[randomPick(0, Product.all.length - 1)];

    // if statement condetion:
    // if (firstProduct === secondProduct || secondProduct === thirdProduct || thirdProduct === firstProduct) {
    //     renderOut();

    while (subProduct.includes(firstProduct) || subProduct.includes(secondProduct) || subProduct.includes(thirdProduct) || firstProduct.name === secondProduct.name || thirdProduct.name === secondProduct.name || firstProduct.name === thirdProduct.name) {

        firstProduct = Product.all[randomPick(0, Product.all.length - 1)];
        secondProduct = Product.all[randomPick(0, Product.all.length - 1)];
        thirdProduct = Product.all[randomPick(0, Product.all.length - 1)];

    }
    // return array  to empty :
    subProduct = [];
    // console.log('element of', subProduct);
    // then push the new images:
    subProduct.push(firstProduct);
    subProduct.push(secondProduct);
    subProduct.push(thirdProduct);
    // console.log(subProduct)

    product1.setAttribute('src', firstProduct.imgPath);
    product1.setAttribute('alt', firstProduct.name);
    product1.setAttribute('title', firstProduct.name);
    // console.log(firstProduct.name);
    product2.setAttribute('src', secondProduct.imgPath);
    product2.setAttribute('alt', secondProduct.name);
    product2.setAttribute('title', secondProduct.name);
    // console.log(secondProduct.name);
    product3.setAttribute('src', thirdProduct.imgPath);
    product3.setAttribute('alt', thirdProduct.name);
    product3.setAttribute('title', thirdProduct.nam);
    // console.log(thirdProduct.name);
}
renderOut();

// set item in local storage:
function localStorData() {
    var userData = JSON.stringify(Product.all);
    localStorage.setItem('newData', userData);
}

// add click event:
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
            localStorData()
            renderOut();
        }

    } else {
        mainContainer.removeEventListener('click', oneClickDone);
        resultVotes();
        renderChart();
        alert("your chocise finished")
    }
}

// list of results:
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

// pick a random number:
function randomPick(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// create chart:
function renderChart() {
    var viewsNumber = [];
    for (var i = 0; i < products.length; i++) {
        viewsNumber.push(Product.all[i].views);
    }

    var ckicksNumber = [];
    for (var i = 0; i < products.length; i++) {
        ckicksNumber.push(Product.all[i].click);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var newCart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: products,
            datasets: [{
                    label: '# of Votes',
                    data: ckicksNumber,
                    viewsNumber,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(241, 137, 0, 0.801)',
                        'rgba(96, 241, 0, 0.801)',
                        'rgba(241, 0, 221, 0.801)',
                        'rgba(0, 24, 241, 0.801)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(241, 137, 0, 0.801)',
                        'rgba(96, 241, 0, 0.801)',
                        'rgba(241, 0, 221, 0.801)',
                        'rgba(0, 24, 241, 0.801)',
                        'rgba(251, 255, 21, 0.932)'

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Views',
                    data: viewsNumber,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(241, 137, 0, 0.801)',
                        'rgba(96, 241, 0, 0.801)',
                        'rgba(241, 0, 221, 0.801)',
                        'rgba(0, 24, 241, 0.801)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(241, 137, 0, 0.801)',
                        'rgba(96, 241, 0, 0.801)',
                        'rgba(241, 0, 221, 0.801)',
                        'rgba(0, 24, 241, 0.801)',
                        'rgba(251, 255, 21, 0.932)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}



function restoreData() {
    var userData = localStorage.getItem('newData');
    if (userData) {
        Product.all = JSON.parse(userData);
        resultVotes();
        renderChart();
    }

}
restoreData();