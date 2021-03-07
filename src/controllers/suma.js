exports.renderAdderPage = (req, res) => {
    const title = "Sumandoando"
    res.render("index", {
        title: title,
        header: title
    });
}

exports.getSuma = (req, res) => {
    let total = 0;
    let numbers = req.body.nums;
    for (i=1; i<= numbers.length; i++)
    if (i%2 == 0) {
	total += i;
    }
    res.end(`Total = ${total}`);
}