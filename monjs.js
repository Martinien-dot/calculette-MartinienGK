// DOM
const touches = [...document.querySelectorAll('.bouton')];
const liste_keycode = touches.map(element => element.dataset.key);
let ecran_vue = document.querySelector('.ecran');
let ecran_cache = "";
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})
function gcd(a, b) {
    if (a == b && b == 0) {
        return "infinity";
    }
    while (b != 0) {
        let t = a;
        a = b;
        b = t % b;
    }
    return a;
}
const calculer = (valeur) => {
    if (liste_keycode.includes(valeur)) {
        switch (valeur) {
            case '46':
                ecran_vue.textContent = "";
                ecran_cache = "";
                break;
            case '8':
                if (ecran_vue.textContent[(ecran_vue.textContent.length) - 1] == "\u00B2") {
                    ecran_cache = ecran_cache.slice(0, -3);
                }
                else if (ecran_vue.textContent.substring(-4, 4) == "sqrt") {
                    ecran_cache = ecran_cache.slice(0, -9);
                }
                else {
                    ecran_cache = ecran_cache.slice(0, -1);
                }
                ecran_vue.textContent = ecran_vue.textContent.slice(0, -1);
                break;
            case '187':
                ecran_vue.textContent = (eval(ecran_cache)).toString();
                ecran_cache = (ecran_vue.textContent);
                break;
            case '67':
                if (ecran_vue.textContent.length <= 28) {
                    ecran_vue.textContent = ecran_vue.textContent + '\u00B2';
                    ecran_cache = ecran_cache + "**2";
                }
                break;
            case '82':
                if (ecran_vue.textContent.length <= 28) {
                    ecran_vue.textContent = ecran_vue.textContent + "sqrt";
                    ecran_cache = ecran_cache + "Math.sqrt";
                }
                break;
            default:
                if (ecran_vue.textContent.length <= 28) {
                    const ikc = liste_keycode.indexOf(valeur);
                    const tch = touches[ikc];
                    const a_mettre = tch.innerHTML;
                    ecran_cache = ecran_cache + a_mettre;
                    ecran_vue.textContent = ecran_vue.textContent + a_mettre;
                }
        }
    }
}
window.addEventListener('error', (e) => {
    alert("une erreur s'est produite: " + e.message);
})