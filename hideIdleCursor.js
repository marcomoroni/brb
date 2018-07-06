//https://stackoverflow.com/questions/31798922/hide-mouse-cursor-if-idle-inside-a-div-after-some-seconds/31798987

$(function() {
    var timer;
    var fadeInBuffer = false;
    $(document).mousemove(function() {
        if (!fadeInBuffer) {
            if (timer) {
                //console.log("clearTimer");
                clearTimeout(timer);
                timer = 0;
            }

            //console.log("fadeIn");
            $('html').css({
                cursor: ''
            });
        } else {
            $('body').css({
                cursor: 'default'
            });
            fadeInBuffer = false;
        }


        timer = setTimeout(function() {
            //console.log("fadeout");
            $('body').css({
                cursor: 'none'
            });

            fadeInBuffer = true;
        }, 5000)
    });
    $('.body').css({
        cursor: 'default'
    });
});
