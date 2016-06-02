/**
 * Created by I326950 on 6/2/2016.
 */
function obj(name) {
    if (this.obj) {       // For b, 'this' is 'obj'
        var obj = {};
        obj.name = name;
        return obj;
    }
}

obj.prototype.name = "name2";  // The point is 'prototype'

var a = obj("name1");
var b = new obj;

console.log(a.name);   // "name1"
console.log(b.name);   // "name2"