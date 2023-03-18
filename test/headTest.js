// IMPORT ASSERTEQUAL FUNCTION TO DO TESTS
const assertEqual = require("../assertEqual.js");
const head = require("../head.js");


// ASSERTEQUAL TEST CODE FOR `head.js`
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head(["tom", "dick", "harry"]), "tom");
assertEqual(head([28349, 183, 9834.86, 1]), 28349);
assertEqual(head(["2.34", 284, "cats"]), "2.34");

assertEqual(head(["Supercalifragilisticexpialidocious"]),"Supercalifragilisticexpialidocious");
assertEqual(head([]), undefined);

