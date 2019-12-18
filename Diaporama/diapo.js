function chargerImage(tableau, indice) {
    //fonction qui change l'image de fond
    image.style.backgroundImage = "url('images/" + tableau[indice - 1] + "')";
}

function suivant() {
    // fonction qui permet de passer à la photo suivante
    if (photoActuelle == mesImages.length)
        photoActuelle = 1;
    else
        photoActuelle += parseInt(1);
    nbPhoto.value = photoActuelle;
    chargerImage(mesImages, photoActuelle);
}

function precedent() {
    // fonction qui permet de passer à la photo précédente
    if (photoActuelle == 1)
        photoActuelle = mesImages.length;
    else
        photoActuelle -= 1;
    nbPhoto.value = photoActuelle;
    chargerImage(mesImages, photoActuelle);
};


var mesImages = [
    "image.jpg",
    "image1.jpg",
    "image2.JPG",
    "image5.jpg",
    "image8.JPG",
    "image9.JPG",
    "mer2.jpg",
    "mer3.jpg"
];

var image = document.getElementById("image");
var nbPhoto = document.getElementById("nbPhoto");
var nbPhotoMax = document.getElementById("nbPhotoMax");
var boutonStart = document.getElementById("boutonStart");
var temps = document.getElementById("temps");
var boutonPreced = document.getElementById("boutonPreced");
var boutonSuiv = document.getElementById("boutonSuiv");
var photoActuelle = nbPhoto.value;
photoActuelle = parseInt(photoActuelle);
var timer = null;

nbPhotoMax.innerHTML = mesImages.length;
chargerImage(mesImages, photoActuelle);

boutonPreced.onclick = precedent;

boutonSuiv.onclick = suivant;

boutonStart.onclick = function() {
    if (boutonStart.innerHTML == "START") {
        timer = setInterval(suivant, parseInt(temps.value) * 1000);
        temps.disabled = true;
        boutonStart.innerHTML = "STOP";
    } else {
        clearInterval(timer);
        temps.disabled = false;
        boutonStart.innerHTML = "START";
    }
};

temps.onchange = function() {
    if (isNaN(temps.value) || temps.value < 0) {
        alert("Entrez un NOMBRE POSITIF pour régler la durée de chaque diapo");
        temps.value = 5;
    }
}

nbPhoto.onchange = function() {
    if (!isNaN(nbPhoto.value)) {
        if (nbPhoto.value <= mesImages.length && nbPhoto.value >= 1) {
            photoActuelle = parseInt(nbPhoto.value);
            chargerImage(mesImages, photoActuelle);
        } else {
            alert("Il n'y a pas de photo correspondant à ce numéro");
        }
        nbPhoto.value = photoActuelle;
    } else {
        alert("Entrez un numéro valide de photo");
        nbPhoto.value = photoActuelle;
    }
};
