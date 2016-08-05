/**
 * Created by I326950 on 8/5/2016.
 */
var boundLeft = document.documentElement.clientWidth,
    boundTop = document.documentElement.clientHeight;
var menu = document.querySelector("#menu");
var menuWidth = menu.offsetWidth, menuHeight = menu.offsetHeight;

EventUtil.addEventHandler(document, "contextmenu", function (evt) {
    evt = EventUtil.getEvent(evt);
    EventUtil.preventDefaultEvent(evt);

    menu.style.left = (evt.clientX + menuWidth) > boundLeft ? (boundLeft - menuWidth) + "px" : evt.clientX + "px";
    menu.style.top = (evt.clientY + menuHeight) > boundTop ? (boundTop - menuHeight) + "px" : evt.clientY + "px";
    menu.style.visibility = "visible";
});

EventUtil.addEventHandler(menu, "click", function (evt) {
    evt = EventUtil.getEvent(evt);
    var target = EventUtil.getTarget(evt);

    alert(target.id);
});