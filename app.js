const bigScreen = document.querySelector('.firsrtScreen')

const digits = document.querySelectorAll('.digit')
const operations = document.querySelectorAll('.operation')
const actions = document.querySelectorAll('.action')

let result = 0
let terme = ""



actions.forEach( action =>{
    action.addEventListener('click', (e) => {
        switch (action.innerHTML){
            case 'AC':
                terme = ""
                updateDisplay()
                break
            case '←':
                let a = terme.split('')
                a.pop()
                terme = a.join("")
                console.log(terme)
                updateDisplay()
                break;
        }
    })
})

digits.forEach( digit =>{
    digit.addEventListener('click', (e)=>{
        if (digit.innerText === ',') {
            if (terme === '' || terme === '0') {

                terme = ' 0,'
                console.log(terme)
                updateDisplay()
                return
            }
            console.log('.')
            return
        }
        terme = terme + digit.innerText
        updateDisplay()
    })
})

operations.forEach( operation =>{
    operation.addEventListener('click', ()=>{
        console.log(operation.innerHTML)
    })
})

function updateDisplay(){
    
    if (terme === "") {
        bigScreen.innerHTML = '0'
        return
    }

    bigScreen.innerHTML = terme
    console.log(bigScreen.innerHTML)
}

