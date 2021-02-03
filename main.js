window.onload = function(){
    var bodyHtml = document.querySelector('body');
    var jeuCarte = [];
for(var i=0; i<52; i++){
    
    var imageHtml = document.createElement('img');
    bodyHtml.appendChild(imageHtml);
    imageHtml.src="https://via.placeholder.com/150";
    jeuCarte.push(imageHtml);
    console.log(imageHtml.src);
    imageHtml.src = imageHtml.src + "?text=Mystery+Card";

}
console.log(jeuCarte);
console.log(imageHtml.src);
var urlImage = "https://via.placeholder.com/150";
var UrlRoi = {nom: "?text=Roi",couleur : "FF0000/000000"};
var UrlDame = {nom: "?text=Dame",couleur : "FF0000/000000"};
var UrlValet = {nom: "?text=Valet",couleur : "FF0000/000000"};
var UrlAs = {nom: "?text=As",couleur : "FF0000/000000"};



}