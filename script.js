function calculate(operator){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let result;

    if(isNaN(num1) || isNaN(num2)){
        result = 'Plese Provide Valid Numbers';
    }else{
        switch (operator){
            case '+':
        result= num1 + num2;
        break;
            case '-':
        result= num1 - num2;
        break;
            case '*':
        result= num1 * num2;
        break;
            case '/':
        result= num1 / num2;
        break;
    
        default :
            result = 'Please Provide Valid Numbers';
            break;
        }
    }

    document.getElementById('result').innerHTML = 'Result: ' + result;


}