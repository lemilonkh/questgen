# QuestGen
A procedural quest generator using [Tracery](http://tracery.io/). It builds random quest descriptions that you can use in a RPG oder roguelike style of game (or whereever else).
Future ideas include a markov chain based name generation system and support for the [Godot](https://godotengine.org/) engine (probably via C++ modules or a NodeJS or nw.js based browser solution).

## Usage
* Pull this git repository
* `npm install`
* `node index.js`
* ???
* Profit

## Use as a library
* Pull this git repository
* `npm install`
* Use the following code to generate text:
```javascript
var QuestGen = require('./questgen');
var grammarData = require('./grammar.json');
console.log(q.generate('#origin#'));
```
* Not yet available as a npm package

## Examples
For some example output see [examples.txt](examples.txt).
