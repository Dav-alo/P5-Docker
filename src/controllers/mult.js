//Método para hacer render de la página del Multiplier
exports.renderMultPage = (req, res) => {
    const title = "Multiplicador"
    res.render("index", {
        title: title,
        header: title
    });
}

exports.getMult = (req, res)=> {
    let nums = req.body.nums
    let result = 1
    for(cont = 0; cont < nums.length; cont++){
        result = nums[cont] * result
    }
    res.end(`Total Multiplicado:  ${result}`)
}