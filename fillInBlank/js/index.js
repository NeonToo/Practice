/**
 * Created by I326950 on 4/22/2016.
 */
//var MyApp = function() {
//    function move(event) {
//        var newY = event.clientY;
//        var top = $("#container").offset().top;
//        var newHeight = newY - top;
//
//        $("#container").height(newHeight > 10 ? newHeight : 10);
//    }
//
//    function up(event) {
//        $(document).off("mousemove", move).on("mouseup", up);
//    }
//
//    return {
//        init: function() {
//            $("#container").mousedown(function(event) {
//                var top = event.clientY;
//
//                if(top > ($(this).offset().top + $(this).height()) - 10) {
//                    $(document).on("mousemove", move).on("mouseup", up);
//                }
//            });
//        }
//    }
//}();

//(function() {
//    MyApp = function() {
//
//    };
//
//    function move(event) {
//        var newY = event.clientY;
//        var top = $("#container").offset().top;
//        var newHeight = newY - top;
//
//        $("#container").height(newHeight > 10 ? newHeight : 10);
//    }
//
//    function up(event) {
//        $(document).off("mousemove", move).on("mouseup", up);
//    }
//
//    MyApp.prototype.init = function() {
//        $("#container").mousedown(function(event) {
//                var top = event.clientY;
//
//                if(top > ($(this).offset().top + $(this).height()) - 10) {
//                    $(document).on("mousemove", move).on("mouseup", up);
//                }
//            });
//    };
//})();

function MyApp() {
    function move(event) {
        var newY = event.clientY;
        var top = $("#container").offset().top;
        var newHeight = newY - top;

        $("#container").height(newHeight > 10 ? newHeight : 10);
    }

    function up(event) {
        $(document).off("mousemove", move).on("mouseup", up);
    }

    this.init = function() {
        $("#container").mousedown(function(event) {
            var top = event.clientY;

            if(top > ($(this).offset().top + $(this).height()) - 10) {
                $(document).on("mousemove", move).on("mouseup", up);
            }
        });
    };
}

$(function() {
    //MyApp.init();
    var myApp = new MyApp();

    myApp.init();
});