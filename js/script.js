var article_aviao = window.document.querySelector("article.viagem-aviao")
var article_hotel = window.document.querySelector("article.viagem-hotel")
var article_rental = window.document.querySelector("article.viagem-rental")
var item_dois = window.document.querySelector("li#item_dois")
var item_um = window.document.querySelector("li#item_um")

item_um.style.backgroundColor = "#FA553F"

function exibir1(){
    item_um.style.backgroundColor = "#FA553F"
    item_dois.style.backgroundColor = ""
    item_tres.style.backgroundColor = ""

    article_aviao.style.display = "block"
    article_hotel.style.display = "none"
    article_rental.style.display= "none"
}

function exibir2(){
    item_dois.style.backgroundColor = "#FA553F"
    item_um.style.backgroundColor = ""
    item_tres.style.backgroundColor = ""

    article_hotel.style.display = "block"
    article_aviao.style.display = "none"
    article_rental.style.display= "none"
}

function exibir3(){
    item_dois.style.backgroundColor = ""
    item_um.style.backgroundColor = ""
    item_tres.style.backgroundColor = "#FA553F"

    article_rental.style.display = "block"
    article_aviao.style.display = "none"
    article_hotel.style.display= "none"
}