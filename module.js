var nomCarte = [{nom : 'roi', url : "https://via.placeholder.com/150/FF0000/000000?text=Roi"},
{nom : 'dame',  url : "https://via.placeholder.com/150/0000FF/000000?text=Dame"}, 
{nom :'valet',  url : "https://via.placeholder.com/150/FF00FF/000000?text=Valet"},
{nom :'as',  url : "https://via.placeholder.com/150/FF0000/000000?text=As"}];

var typeCarte = [{nom : 'Coeur', url : "https://via.placeholder.com/150/FF0000/000000?text=Coeur"},
{nom : 'Carreau',  url : "https://via.placeholder.com/150/0000FF/000000?text=Carreau"}, 
{nom :'Pique',  url : "https://via.placeholder.com/150/FF00FF/000000?text=Pique"},
{nom :'Trefle',  url : "https://via.placeholder.com/150/FF0000/000000?text=Trefle"}];
var nombreType = [2,3,4,5,6,7,8,9,10];


for(i=0; i<52; i++){
    jeuCarte[i].push(nomCarte);
    
    

}
imageHtml.addEventListener("click", function(){
  imageHtml.src = nomCarte.url;
});

export()
