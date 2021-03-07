//Método para hacer render de la página del Free
exports.renderFreePage = (req, res) => {
    const title = "Lo que sea"
    res.render("index", {
        title: title,
        header: title
    });
}

exports.getFree = (req, res)=> {
    let operation = req.body.operation
    let array = operation.split(" ")
    let result = array[0]
    let foundOperator;
    for(cont = 1; cont < array.length; cont++ ){
        foundOperator = array[cont]

        if (foundOperator == '*'){
            result = result * array[cont+1]
        }
        if (foundOperator == '/'){
            result = result / array[cont+1]
        }
        if (foundOperator == '+'){
            result = parseInt(result) + parseInt(array[cont+1])
        }
        if (foundOperator == '-'){
            result = result - array[cont+1]
        }

    }


    res.end(`Total :  ${result}`)
}