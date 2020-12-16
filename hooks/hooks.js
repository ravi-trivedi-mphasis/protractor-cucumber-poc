const { Before, After } = require('cucumber');

Before( function(scenario) {
    console.log('...........Before Hook...........');
});

After( function(scenario) {
    console.log('...........After Hook...........');
});