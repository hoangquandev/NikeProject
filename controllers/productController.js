var qlsp = new ServiceProducts()
// const getIDFromURL = () => window.location.search.substr(1).split("=")[1];
// console.log(getIDFromURL());

// const getEle = (id) => document.getElementById(id);

function showAllProduct() {
    qlsp.getAllProduct()//=> promise
        .then(function (res) {
            renderSixProducts(res.data.slice(104, 110));
        })
        .catch(function (err) {
            console.log(err.message);
        })
}
showAllProduct()

const renderSixProducts = (list) => {
    let content = "";
    list.forEach((item) => {
        // console.log(item.img);
        content += `
            <a href="/detail-product.html?id=${item._id}">
            <div class="product">
            <img src="${item.img}" alt="" />
          </div>
            </a>
            `
    });
    getEle("showProducts").innerHTML = content;
    //slug
}
