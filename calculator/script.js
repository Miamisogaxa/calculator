class Calculator {
    constructor(previousOperatorandTextElement, currentOperatorandeTextlement) {
        this.previousOperatorandTextElement = previousOperatorandTextElement
           this.currentOperatorandeTextlement = currentOperatorandeTextlement
           this.clear()

}

clear() {
    this,currentOperand =''
    this.previousOperand =''
    this.operation = undefined

}

delect() {

}

appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()

}

chooseOperation(operation){

}

compute() {

}

updatedisplay() {
    this.currentOperatorandeTextlement.innerText = this.currentOperatorandeTextlement

}

}
const numberButton = document.querySelectorAll('[data-numbered]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deletetButton = document.querySelectorAll('[data-delete]')
const AllClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperatorandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperatorandeTextlement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperatorandTextElement, currentOperatorandeTextlement)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updatedisplay()
    })
})