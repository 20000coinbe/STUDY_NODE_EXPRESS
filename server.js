const app = require('./index');
const port = 3030;

app.listen(port, () => {
    console.log(`Strat Server PORT number: ${port}`);
})