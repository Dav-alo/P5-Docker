exports.renderSubPage = (req, res) => {
    const title = "Subtraction"
    res.render("index", {
        title: title,
        header: title
    });
}

exports.getSub = (req, res) => {
    let numToSub = req.body.numToSubs;
    let nums = req.body.nums

    for(cont = 0; cont < nums.length ; cont++){
        numToSub = numToSub - nums[cont];
    }
    res.end(`Resultado de la resta:  ${numToSub}`)
}