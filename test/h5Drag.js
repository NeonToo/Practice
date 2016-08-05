/**
 * Created by I326950 on 8/5/2016.
 */
var HTML5Drag = function () {
    var draggingElement = null,
        offX = 0, offY = 0;

    function activateEvt(evt) {
        evt = EventUtil.getEvent(evt);
        var target = EventUtil.getTarget(evt);

        switch (evt.type) {
            case "dragstart" :
                draggingElement = target;
                offX = evt.clientX - target.offsetLeft;
                offY = evt.clientY - target.offsetTop;
                break;
            case "drag":
                if (draggingElement) {
                    draggingElement.style.left = (evt.clientX - offX) > 0 ? (evt.clientX - offX) + "px" : 0;
                    draggingElement.style.top = (evt.clientY - offY) > 0 ? (evt.clientY - offY) + "px" : 0;
                }
                break;
            case "dragend":
                draggingElement = null;
                break;
            case "dragenter" :
                EventUtil.preventDefaultEvent(evt);
                break;
            case "dragover":
                EventUtil.preventDefaultEvent(evt);
                break;
            case "drop":
                EventUtil.preventDefaultEvent(evt);
                break;
            default:
                break;
        }
    }

    return {
        start: function () {
            EventUtil.addEventHandler(document, "dragstart", activateEvt);
            EventUtil.addEventHandler(document, "drag", activateEvt);
            EventUtil.addEventHandler(document, "dragend", activateEvt);
            EventUtil.addEventHandler(document, "dragenter", activateEvt);
            EventUtil.addEventHandler(document, "dragover", activateEvt);
            EventUtil.addEventHandler(document, "drop", activateEvt);
        },
        end: function () {
            EventUtil.removeEventHandler(document, "dragstart", activateEvt);
            EventUtil.removeEventHandler(document, "drag", activateEvt);
            EventUtil.removeEventHandler(document, "dragend", activateEvt);
            EventUtil.removeEventHandler(document, "dragenter", activateEvt);
            EventUtil.removeEventHandler(document, "dragover", activateEvt);
            EventUtil.removeEventHandler(document, "drop", activateEvt);
        }
    }
}();

HTML5Drag.start();