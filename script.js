// Message simple dans la console
console.log("Bienvenue sur mon Portfolio !");
// Fonction pour afficher plus d'informations sur les projets
const btnInfos = document.getElementById('btnInfos');
const infosSupp = document.getElementById('infosSupp');

btnInfos.addEventListener('click', () => {
    if (infosSupp.style.display === "none") {
        infosSupp.style.display = "block";
        btnInfos.textContent = "Masquer les informations";
    } else {
        infosSupp.style.display = "none";
        btnInfos.textContent = "Afficher plus d'informations";
    }
});
