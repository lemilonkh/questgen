// questgen.js
// Part of project QuestGen
// (c) 2017 by Milan Gruner
// All rights reserved.

var tracery = require('tracery-grammar');

class QuestGen {
	constructor(grammarData) {
		this.grammar = tracery.createGrammar(grammarData);
		this.grammar.addModifiers(tracery.baseEngModifiers);
	}

	generate(startingRule) {
		return this.grammar.flatten(startingRule);
	}
}

module.exports = QuestGen;
