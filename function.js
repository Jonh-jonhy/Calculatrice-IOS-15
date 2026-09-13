/**
 * Met a jours l'ecran de la calculatrice
 * @returns 
 */
export function updateDisplay(){
    if (terme === "") {
        bigScreen.innerText = '0'
        return
    }

    bigScreen.innerHTML = terme
    console.log(terme)
}


/**
 * Retourne true si le terme est decimal et false sinon
 * @returns {Boolean}
 */
export function isDecimal(){
    return terme.includes('.')
}