
var db = firebase.firestore();
var products = db.collection("Stores").doc("BeyondActive").collection("products").where("Status", "==", "active").where("Image Src", "!=", "");;

var number = 0;
var productList = [];
products.get().then(function (querySnapshot) {
    var add = "";

    querySnapshot.forEach(function (doc) {

        if (number == 3) {
            add += createProductHTML(productList);
            productList = [];
            number = 0;
        }
        else {

            var product = getProduct(doc);
            productList[number] = product;
            number++;
        }






    });
    return add;

}).then(function (add) {

    generateHTML(add);
});

function getProduct(doc) {
    var data = doc.data();

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

function createProductHTML(productList) {
    var productHTML = "";
    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];

        productHTML += '<div class="col-sm-12 col-md-12 col-lg-4 d-flex"> <div class="product d-flex flex-column"> <a href="shopblazers.html" class="img-prod"> <img class="img-fluid" id="img3" src="' + product.image + '" /> </a> <div class="text py-3 pb-4 px-3"> <div class="d-flex"> <div class="cat"> <span>' + product.type + '</span> </div> <div class="rating"> <p class="text-right mb-0"> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star"></span></t> <t><span class="ion-ios-star-half"></span></t> </p> </div> </div> <h3> <a href="#"> <p id="title3">' + product.title + '</p> </a> </h3> <div class="pricing"> <p class="price"> $ <t id="price3">' + product.price + '</t> </p> </div> <p class="bottom-area d-flex px-3"> <a href="#" id="four" class="add-to-cart text-center py-2 mr-1"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a> </p> </div> </div> </div>'
    }
    return productHTML;
}

function generateHTML(productHTML) {
    $("#productList").append(productHTML);
};