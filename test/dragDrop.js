/**
 * Created by I326950 on 8/5/2016.
 */
var DragBox = function () {
    var draggingElement = null,
        offX = 0, offY = 0;

    function activateEvt(evt) {
        evt = EventUtil.getEvent(evt);
        var target = EventUtil.getTarget(evt);

        switch (evt.type) {
            case "mousedown" :
                draggingElement = target;
                offX = evt.clientX - target.offsetLeft;
                offY = evt.clientY - target.offsetTop;
                EventUtil.addEventHandler(document, "mousemove", activateEvt);
                EventUtil.addEventHandler(document, "mouseup", activateEvt);
                break;
            case "mousemove":
                if (draggingElement) {
                    draggingElement.style.left = (evt.clientX - offX) > 0 ? (evt.clientX - offX) + "px" : 0;
                    draggingElement.style.top = (evt.clientY - offY) > 0 ? (evt.clientY - offY) + "px" : 0;
                }
                break;
            case "mouseup":
                draggingElement = null;
                EventUtil.removeEventHandler(document, "mousemove", activateEvt);
                break;
            default:
                break;
        }
    }

    return {
        start: function () {
            EventUtil.addEventHandler(document, "mousedown", activateEvt);
        },
        end: function () {
            EventUtil.removeEventHandler(document, "mousedown", activateEvt);
            EventUtil.removeEventHandler(document, "mousemove", activateEvt);
            EventUtil.removeEventHandler(document, "mouseup", activateEvt);
        }
    }
}();

DragBox.start();
