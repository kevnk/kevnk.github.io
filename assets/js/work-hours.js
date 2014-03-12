    function daydiff(first, second) {
        return (second-first)/(1000*60*60*24)
    }
    function addZero(num){
        num = num+'';
        if(num.length == 1)
            return '0' + num;
        return num
    }
    function runTime(){

        var h = $hours.html();
        var m = $minutes.html();
        var s = $seconds.html();
        s++;
        if(s >= 60) {
            s = 0;
            m++;
            if(m >= 60) {
                m = 0;
                h++;
            }
        }
        $hours.html(addZero(h));
        $minutes.html(addZero(m));
        $seconds.html(addZero(s));

    }
    // Initial Hours and Date
    var initHours = 10180;
    var isCurrentlyEmployed = true;
    var initDate = new Date(2013,11,30);
    var now = new Date();
    var daysSince = daydiff(initDate, now) * 5/7;
    var hoursSince = daysSince * 8;
    var hours = initHours + hoursSince;
    var minutes = (hours - Math.floor(hours)) * 60;
    var seconds = (minutes - Math.floor(minutes)) * 60;
    var $hours = $('#work_hours').html(Math.floor(hours));
    var $minutes = $('#work_minutes').html(Math.floor(minutes));
    var $seconds = $('#work_seconds').html(Math.floor(seconds));
    var dayOfWeek = now.getDay();
    var hourOfDay = now.getHours();

    // if weekday between 9am-5pm, run it
    if(isCurrentlyEmployed && dayOfWeek != 0 && dayOfWeek != 6 && hourOfDay >= 9 && hourOfDay <= 17) {
        setInterval(runTime,1000);
    } else {
        $('#hour_count').find('span').hide().filter('#work_hours').show();
    }