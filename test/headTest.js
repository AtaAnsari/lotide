const headHunter = require('../head');

const assertEqual = require('../assertEqual');

assertEqual(headHunter([5,6,7]), 5);
assertEqual(headHunter(["Hello", "Lighthouse", "Labs"]), "Hello");