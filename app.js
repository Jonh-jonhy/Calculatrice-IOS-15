import {isDecimal, updateDisplay} from './function.js'

const digits = document.querySelectorAll('.digit')
const operations = document.querySelectorAll('.operation')
const actions = document.querySelectorAll('.action')

let result = 0
let terme = ""
let decimal = false



actions.forEach( action =>{
    action.addEventListener('click', (e) => {
        switch (action.innerHTML){
            case 'AC':
                terme = ""
                decimal = false
                updateDisplay(terme)
                break
            case '←':
                let a = terme.split('')
                a.pop()
                terme = a.join("")
                updateDisplay(terme)
                break;
        }
    })
})

digits.forEach( digit =>{
    digit.addEventListener('click', (e)=>{

        // si l'utilisateur tape 0 plusieurs fois on bloque
        if (digit.innerText === '0' && terme === '') {
            return
        }

        // si l'utilisateur veut un nombre decimal
        if (digit.innerText === '.') {
            if (terme === '' || terme === '0') {
                terme = '0.'
                updateDisplay(terme)
                return
            }else if(isDecimal(terme)){
                return
            }
        }

        terme = terme + digit.innerText
        updateDisplay(terme)
    })
})

operations.forEach( operation =>{
    operation.addEventListener('click', ()=>{
        console.log(operation.innerHTML)
    })
    /**
     *  pour les operateurs +, -, /, x ajouter juste a terme et utiliser une methode calculer() qui decoupe la chaine et fait les calcules
     *  */
})


