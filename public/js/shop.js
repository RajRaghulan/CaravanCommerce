var db = firebase.firestore();
var products = db.collection("Stores").doc("BeyondActive").collection("products");
var number = 0;
var productList = [];
var html = products.get().then(function (querySnapshot) {
    var add = "";

    querySnapshot.forEach(function (doc) {
        if (number == 3) {

            add += createProductHTML(productList);


            productList = [];


        }

        var product = getProduct(doc);
        productList[number] = product;
        number++;


    });
    return add;

}).then(function (add) {

    generateHTML(add);
});






function getProduct(doc) {
    var data = doc.data();

    if (data.hasOwnProperty('Image Src')) {
        var imageData = data["Image Src"];
        var titleData = "";
        if (data.hasOwnProperty("Title")) {
            titleData = data["Title"];
        }

        var typeData = "";
        if (data.hasOwnProperty("Type")) {
            typeData = data["Type"];
        }

        var priceData = "";
        if (data.hasOwnProperty("Cost per item")) {
            priceData = data["Cost per item"];
        }
        var product = new Object();
        product["image"] = imageData;
        product["title"] = titleData;
        product["type"] = typeData;
        product["price"] = priceData;
        return product;

    }
}

function createProductHTML(productList) {
    var productHTML = "";
    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];
        productHTML += '<div class="product flex-column col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex"> <div> <a href="shopaccessories.html" class="img-prod"> <img class="img-fluid" id="img5" /> <div class="overlay"></div> </a> <div class="text py-3 pb-4 px-3"> <div class="d-flex"> <div class="cat"> <span>Skirts</span> </div> <div class="rating"> <p class="text-right mb-0"> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> </p> </div> </div> <h3> <a href="#"> <p id="title5"></p> </a> </h3> <div class="pricing"> <p class="price"> $ <t id="price5"></t> </p> </div> <p class="bottom-area d-flex px-3"> <a href="#" id="six" class=" add-to-cart text-center py-2 mr-1"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a> </p> </div> </div> </div>';

    }
    return productHTML;
}

function generateHTML(productHTML) {
    console.log(productHTML)
    // document.getElementById("productList").innerHTML = final;
    $("#productList").append(productHTML);
};