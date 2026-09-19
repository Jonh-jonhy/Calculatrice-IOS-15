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

    bigScreen.innerText = terme
    // console.log(terme)
    console.log(JSON.stringify(terme))
}




/**
 * Calcule le resultat total du nombre en parametre
 * @param {string} terme 
 */
export function calculate(terme){
    return `voici le resultat: a developper plus tard ${terme}`
}


/**
 * Verifie si l'expression se termine par un chiffre et non un operateur
 * @param {string} terme 
 * @returns boolean
 */
export function isIncompleted(terme){
    if(
        terme.endsWith('÷') ||
        terme.endsWith('×') ||
        terme.endsWith("−") ||
        terme.endsWith("+") ||
        terme.endsWith(".")
    ){
        return true
    }
    return false

}