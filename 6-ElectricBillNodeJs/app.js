const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('billForm', {total: null});
});

app.post('/calculate', (req, res) => {  
    let unit = req.body.unit;
    let total = 0;

    if (unit > 0) {
        total += calculate(unit, [1, 50], 3.50);
        total += calculate(unit, [51, 150], 4);
        total += calculate(unit, [151, 250], 5.20);
        total += calculate(unit, [251, Number.MAX_SAFE_INTEGER], 6.50);
    }

    res.render('billForm', {total: total.toFixed(2)});
});

function calculate(unit, range, price) {
    let minUnit = Math.min(unit, range[1]);
    let unitsToCalculate = minUnit - range[0] + 1;
    if (unitsToCalculate < 0) {
        unitsToCalculate = 0;
    }
    return unitsToCalculate * price;
}

app.listen(3000, () => {console.log("Server is running on port 3000")});