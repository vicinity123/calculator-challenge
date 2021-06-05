// Class
class Processor {
    constructor(_prevDisplay, _currDisplay) {
        this.prevDisplay = _prevDisplay
        this.currDisplay = _currDisplay
    }

    displayNumber(number) {
        this.currDisplay.textContent += number.textContent
        
    }

    operator(operator) {
        this.currDisplay.textContent += ` ${operator.textContent} `
        this.prevDisplay.textContent = this.currDisplay.textContent
        this.prevDisplay.style.opacity = '75%'
        this.prevDisplay.style.fontSize = '1.17rem'
        this.prevDisplay.style.marginBottom = '0.7rem'
        this.currDisplay.textContent = ''
        this.currDisplay.style.marginBottom = '1rem'
        // this.currDisplay.textContent += number.textContent
        // displayArea.style.height = '6rem'
        console.log(this.currDisplay.textContent = this.currDisplay.textContent.slice(0, -3))
        console.log('Prev')
    }
    
    delete() {
        this.currDisplay.textContent = this.currDisplay.textContent.slice(0, -1)    
    }

    reset() {
        this.currDisplay.textContent = ''
        this.prevDisplay.textContent = ''
        this.prevDisplay.style.marginBottom = '0rem'
    }

    compute() {
        const prevOperate = parseFloat(this.prevDisplay.textContent)
        const currOperate = parseFloat(this.currDisplay.textContent)
        const sum = prevOperate.valueOf() + currOperate.valueOf()
        const difference = prevOperate.valueOf() - currOperate.valueOf()
        const product = prevOperate.valueOf() * currOperate.valueOf()
        const quotient = prevOperate.valueOf() / currOperate.valueOf()
        console.log(sum)

        if(this.prevDisplay.textContent.includes('+')) {
            const sumFinal = sum.valueOf()
            this.currDisplay.textContent = parseFloat(sumFinal)
            this.prevDisplay.textContent = ''
            this.prevDisplay.style.marginBottom = '0rem'
        } else if(this.prevDisplay.textContent.includes('-')) {
            const diffFinal = difference.valueOf()        
            this.currDisplay.textContent = parseFloat(diffFinal)
            this.prevDisplay.textContent = ''
            this.prevDisplay.style.marginBottom = '0rem'
        } else if(this.prevDisplay.textContent.includes('x')) {
            const prodFinal = product.valueOf()
            this.currDisplay.textContent = parseFloat(prodFinal)
            this.prevDisplay.textContent = ''
            this.prevDisplay.style.marginBottom = '0rem'
        } else if(this.prevDisplay.textContent.includes('/')) {
            const divdFinal = quotient.valueOf()        
            this.currDisplay.textContent = parseFloat(divdFinal)
            this.prevDisplay.textContent = ''
            this.prevDisplay.style.marginBottom = '0rem'
        }

    }

    showDecimal() {
        if(this.currDisplay.textContent.includes('.')) return
        this.currDisplay.textContent += dataDecimal.textContent
    }
} 



/* Variables Section*/

// Buttons
const dataNumBtn = document.querySelectorAll('[data-num-btn]')
const dataOperator = document.querySelectorAll('[data-operator]')
const dataDelBtn = document.querySelector('[data-delete]')
const dataReset = document.querySelector('[data-reset]')
const dataEquals = document.querySelector('[data-equals]')
const dataDecimal = document.querySelector('[data-decimal]')

// Displays 
const displayArea = document.querySelector('.ans-display')
const previousDisplay = document.querySelector('[data-prev-display]')
const currentDisplay = document.querySelector('[data-curr-display]')



// OBJECT
const calculator = new Processor(previousDisplay, currentDisplay)



// EVENTS
dataNumBtn.forEach(value => {
    value.addEventListener('click', () => {
        calculator.displayNumber(value)
        //console.log(currentDisplay.innerText)
    })
})


dataOperator.forEach(value => {
    value.addEventListener('click', () => {
        calculator.operator(value)
        //console.log(currentDisplay.innerText)
    })
})


dataDelBtn.addEventListener('click', () => {
    calculator.delete()
})


dataReset.addEventListener('click', () => {
    calculator.reset()
})


dataEquals.addEventListener('click', () => {
    calculator.compute()
})


dataDecimal.addEventListener('click', () => {
    calculator.showDecimal()
    if(currentDisplay.textContent === '') {
        currentDisplay.textContent === '0.'
    }
})