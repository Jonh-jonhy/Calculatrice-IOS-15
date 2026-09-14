/**
 * Met a jours l'ecran de la calculatrice
 * @param {string} terme 
 * @returns 
 */
export function updateDisplay(terme){
    const bigScreen = document.querySelector('.firsrtScreen')

    if (terme === "") {
        bigScreen.innerText = '0'
        return
    }

    bigScreen.innerHTML = terme
    console.log(terme)
}


/**
 * Retourne true si le terme est decimal et false sinon
 * @param {string} terme 
 * @returns {Boolean}
 */
export function isDecimal(terme){
    return terme.includes('.')
}

/**
 * Calcule le resultat total du nombre en parametre
 * @param {string} terme 
 */
export function calculate(terme){
    return "voici le resultat: a developper plus tard "
}