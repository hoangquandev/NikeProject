var qlsp = new ServiceProducts()
const getIDFromURL = () => window.location.search.substr(1).split("=")[1];
// console.log(getIDFromURL());

// const getEle = (id) => document.getElementById(id);

function showAllProduct() {
    qlsp.getAllProduct()//=> promise
        .then(function (res) {
            // console.log(res.data);
            renderAllProducts(res.data);
            // console.log(res.data);
        })
        .catch(function (err) {
            console.log(err.message);
        })
}
showAllProduct()

const renderAllProducts = (list) => {
    let content = "";
    list.forEach((item) => {
        // console.log(item.img);
        content += `
            <a href="${item._id}">
            <div class="product">
            <img src="${item.img}" alt="" />
          </div>
            </a>
            `
    });
    getEle("showProducts").innerHTML = content;
}