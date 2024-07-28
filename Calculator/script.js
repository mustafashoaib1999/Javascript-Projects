const calculate = (n1, operator, n2) => {
    let result= '';
    if (operator === 'add') {
      result= parseFloat(n1) + parseFloat(n2);
    }
    else if (operator === 'subtract') 
   {result= parseFloat(n1) - parseFloat(n2); }

    else if (operator === 'multiply') 
    {result= parseFloat(n1) * parseFloat(n2);

    } 
    
    else if (operator === 'divide') 
    {let divided = parseFloat(n1) /  parseFloat(n2)
    result= divided.toFixed(2)}
    
    return result
};
    
    const calculator= document.querySelector('.calculator')
    const keys= document.querySelector('.calculator_keys')
    const display= document.querySelector('.calculator_display')

    keys.addEventListener('click', (e) => {
        if (e.target.matches('button')){
        const key= e.target
        const action= key.dataset.action
        const displayedNum= display.textContent
        const keyContent= key.textContent
        const prevKey = calculator.dataset.prevKey


        if (!action){
          if (displayedNum==='0' || prevKey==='operator' || prevKey === 'calculate'){
            display.textContent= keyContent
          }
          else{
            display.textContent= displayedNum + keyContent
          }
          calculator.dataset.prevKey = 'number' // adding this removed th error

}

   if ( action === "add" ||  action === "subtract"|| action === "multiply" ||
        action === "divide")
    
    {
        calculator.dataset.firstValue= displayedNum;
        calculator.dataset.operator= action;
        calculator.dataset.prevKey ='operator';


       console.log('operator pressed');
  
    }



    if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (prevKey === 'operator') {
                display.textContent = '0.'
            }
            calculator.dataset.prevKey = 'decimal'
        }


   if (action=== 'calculate'){
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    display.textContent= calculate(firstValue , operator, secondValue,)

    calculator.dataset.prevKey = 'calculate'

   
}
   Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')) // added this

   if (action ==="turnOff"){
    display.textContent=''

      calculator.dataset.prevKey = '';
      calculator.dataset.firstValue = '';
     calculator.dataset.operator = '';
   }

   if (action ==="turnOn"){
    display.textContent='0'
           
      calculator.dataset.prevKey = '';
      calculator.dataset.firstValue = '';
     calculator.dataset.operator = '';
   }
   Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')) // added this
}})