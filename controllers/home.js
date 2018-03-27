const Calculator = require ('C:/Users/IBM_ADMIN/WebstormProjects/New folder/06. JavaScript-ExpressJS-Overview-Lab-Calculator-Skeleton/models/calculator')
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) =>{
        let calculatorBody = req.Body;
        let calculatorParams = calculatorBody('calculator');
        let calculator = new Calculator();
        calculator.leftOperand = Number(calculatorParams.leftOperand);
        calculator.operator = calculatorParams.operator;
        calculator.rightOperand = Number(calculator.rightOperand);
        let result = calculator.calculateResul();
        res.render('home/index', {'calculator':calculator, 'resulta':result}); //home/index specifies which view to return,
        //{'calculator':calculator, 'resulta':result} is JavaScript Object, which specifies what we're going to send to the view(key->value pairs)
    }

};