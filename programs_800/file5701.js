/* This file has been generated by yabbler.js */
require.define({
"program": function(require, exports, module) {
var test = require('test');
test.assert(require('a/b/c/d').foo() == 1, 'nested module identifier');
test.print('DONE', 'info');

}}, ["test", "a/b/c/d"]);