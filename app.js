const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByTagName("h5")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}


var navLinks = document.getElementById("navLinks");

function hidemenu() {
    navLinks.style.right = "-200px";
}
function showmenu() {
    navLinks.style.right = "0";
}