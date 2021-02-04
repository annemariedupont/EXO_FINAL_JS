window.onload = function(){
    let bodyHtml = document.querySelector('body');

let typeCarte = ["pique","coeur","carreau","trefle"];
let Nomcarte = ["As","Roi","Dame","Valet",10,9,8,7,6,5,4,3,2];
let JeuCartes=[];
for(let i =0; i<4;i++){
    for(let j = 0;j<4;){
        let carte = {typeCarte,Nomcarte};
        JeuCartes.push(carte);
    }
}
console.log(JeuCartes);


    let jeuCarte = [];
for(let k=0; k<52; k++){
    
    let imageHtml = document.createElement('img');
    bodyHtml.appendChild(imageHtml);
    imageHtml.src = "https://via.placeholder.com/150?text=Mystery+Card";
    //imageHtml.id = k;
    imageHtml.addEventListener('click',FaceCarte);
    imageHtml.addEventListener('dblclick', FaceCache);
    jeuCarte.push(imageHtml);
    console.log(imageHtml.src);
    
}
console.log(jeuCarte);
console.log(imageHtml.src);


function FaceCarte(event){
    console.log(event.id);
        let urlImage = 'https://via.placeholder.com/150/';
        let color = "FF0000/000000";
        let text = "?text=";
        event.src = urlImage + color + text + JeuCartes.Nomcarte;

}

function FaceCache(event) {
    console.log('dblclick on ' + event.id);
    event.src = 'https://via.placeholder.com/150?text=Mistery+Card';



}



}