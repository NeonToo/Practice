/**
 * Created by I326950 on 6/2/2016.
 */
(function () {
    var CalculateResidenceTime = function (elem) {
        this.elem = elem;
        this.inTime = null;
        this.residenceTime = 0;
    };

    CalculateResidenceTime.prototype = {
        constructor: CalculateResidenceTime,
        init: function () {
            var that = this;
            var startHandler = function () {
                this.inTime = new Date();
            };
            var endHandler = function () {
                var residenceTime = (new Date()).getTime() - this.inTime.getTime();
                that.showResidenceTime(residenceTime);
            };

            EventUtil.addHandler(this.elem, "mouseover", startHandler);
            EventUtil.addHandler(this.elem, "mouseout", endHandler);
            //this.elem.addEventListener("mouseout", endHandler);
            //this.elem.addEventListener("mouseover", startHandler);
        },
        showResidenceTime: function (residenceTime) {
            this.residenceTime += residenceTime;
            console.log("Stay in " + this.elem.getAttribute("id") + " for " + this.residenceTime + " ms");
        }
    };

// 考虑跨浏览器
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        }
    };

    var aDiv = document.getElementsByClassName("mod-spm");

    for (var i = 0, iLen = aDiv.length; i < iLen; i++) {
        var divElem = new CalculateResidenceTime(aDiv[i]);
        divElem.init();
    }
//var div1 = new CalculateResidenceTime(aDiv[0]),
//    div2 = new CalculateResidenceTime(aDiv[1]),
//    div3 = new CalculateResidenceTime(aDiv[2]);
//
//div1.init();
//div2.init();
//div3.init();
})();
