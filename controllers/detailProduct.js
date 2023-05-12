const qlsp = new ServiceProducts()

const getIDFromURL = () => window.location.search.substr(1).split("=")[1] //id


const getDetailProduct = () => {
    qlsp.getProductbyID(getIDFromURL())
        .then((res) => {
            const price = res.data.price.toLocaleString("en-US")
            document.querySelector(".photos img").src = res.data.img
            document.querySelector(".info h3").innerHTML = res.data.name
            document.querySelector(".info p span").innerHTML = price + ' VNĐ'

        })
        .catch((error) => {
            console.log(error);
        })
}
getDetailProduct()