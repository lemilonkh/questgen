'use strict';
// index.js
// Part of project QuestGen
// (c) 2017 by Milan Gruner
// All rights reserved.

var lineCount = 30;

var QuestGen = require('./questgen');
var grammarData = require('./grammar.json');

var q = new QuestGen(grammarData);

for(var i = 0; i < lineCount; i++) {
	console.log(q.generate('#origin#'));
}
