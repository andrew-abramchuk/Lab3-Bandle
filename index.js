var lodash = require('lodash');
var names = ['Bruce Wayne', 'Wally West', 'John Jones', 'KyleRayner', 'Arthur Curry', 'Clark Kent'];
var otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'DianaPrince', 'Ray Palmer', 'Oliver Queen'];
lodash.each([names, otherNames], function(nameGroup) {
  findSuperman(nameGroup);
});

function findSuperman(values) {
  lodash.find(values, function(name) {
       if (name === 'Clark Kent') {
              alert(name + ': It\'s Superman!');
            } else {
                   alert(name + '... No superman!');
                            } 
                           });}
