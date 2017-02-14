// index.js
// Part of project QuestGen
// (c) 2017 by Milan Gruner
// All rights reserved.

var lineCount = 30;

var tracery = require('tracery-grammar');
var grammarData = require('./grammar.json');

var grammar = tracery.createGrammar(grammarData);
grammar.addModifiers(tracery.baseEngModifiers);

for(var i = 0; i < lineCount; i++) {
	console.log(grammar.flatten('#origin#'));
}
