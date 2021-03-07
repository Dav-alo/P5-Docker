exports.renderDivPage = (req, res) => {
    const title = "Divisor"
    res.render("index", {
        title: title,
        header: title
    });
}

exports.getDiv = (req, res) => {
    let nums = req.body.nums
    let numToDiv = req.body.numToDiv
    for(cont = 0; cont < nums.length; cont++){
        numToDiv = numToDiv / nums[cont] 
    }
    res.end(`Total Dividido :  ${numToDiv}`)


}