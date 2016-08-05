/**
 * Created by I326950 on 8/5/2016.
 */
var EventUtil = {
    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    addEventHandler: function (elem, type, fn) {
        if (elem.addEventListener) {
            elem.addEventListener(type, fn, false);
        } else if (elem.attachEvent) {
            elem.attachEvent("on" + type, fn);
        } else {
            elem["on" + type] = fn;
        }
    },

    removeEventHandler: function (elem, type, fn) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, fn, false);
        } else if (elem.detachEvent) {
            elem.detachEvent("on" + type, fn);
        } else {
            elem["on" + type] = null;
        }
    },

    preventDefaultEvent: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};