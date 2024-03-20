const resultat = document.getElementById('resultat');
const taux = 6.55957;
document.getElementById('euros').addEventListener('input', function () {

    const valeurEuros = this.value;
    if (isNaN(valeurEuros)) {
        resultat.textContent = 'Veuillez entrer une valeur numérique !';
        return;
    }
    else if (this.value === '') {
        resultat.textContent = '';
    }
    else {
        const valeurFrancs = valeurEuros * taux;
        resultat.textContent = valeurFrancs.toFixed(2) + " Franc(s).";
    }
});