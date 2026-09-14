import {updateDisplay, calculate, isIncompleted} from './function.js'

const digits = document.querySelectorAll('.digit')
const operations = document.querySelectorAll('.operation')
const actions = document.querySelectorAll('.action')

let result = 0
let terme = ""
let isDecimal = false



actions.forEach( action =>{
    action.addEventListener('click', (e) => {
        switch (action.innerHTML){
            case 'AC':
                terme = ""
                isDecimal = false
                updateDisplay(terme)
                break
            case '←':
                let a = terme.split('')
                a.pop()
                terme = a.join("")
                updateDisplay(terme)
                break;
            case '%':
                if(!terme.includes('%') && isIncompleted(terme)){
                    if (terme === "" || terme === "0") {
                        terme += '0%'
                        updateDisplay(terme)
                        break
                    }else{
                        terme += '%'
                        updateDisplay(terme)
                        break
                    }
                }else{
                    return
                }
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
            if (isDecimal || isIncompleted(terme)) {
                return
            }else if (terme === '' || terme === '0') {
                isDecimal = true
                terme = '0.'
                updateDisplay(terme)
                console.log(isDecimal)
                return
            }else{
                isDecimal = true
                terme = terme + digit.innerText
                updateDisplay(terme)
            }
        }else{
            terme = terme + digit.innerText
            updateDisplay(terme)
        }   
    })
})

operations.forEach( operation =>{
    operation.addEventListener('click', ()=>{
        isDecimal = false

        if (operation.innerHTML === '=') {
            if(isIncompleted(terme)){
                return
            }else{
                console.log(calculate(terme))
                console.log(!terme.endsWith("+"))
                return
            }
            
        }

        if (terme === "") {
            terme = 0;
            terme += operation.innerText
            updateDisplay(terme)
        }else if(isIncompleted(terme)){
            return
        }else{
            terme += operation.innerText
            updateDisplay(terme)
        }

    })
})

