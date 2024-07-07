// Get travel view
const travel = (req, res) => {
    console.log("Travel route accessed");
    res.render('travel', { title: 'Travlr Getaway' });
};

module.exports = { travel };
