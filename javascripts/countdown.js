(function() {
  var init_countdown;

  $(function() {
    $('a[rel=external]').bind('click', function() {
      return this.target = "_blank";
    });
    return init_countdown();
  });

  init_countdown = function() {
    var interval, release;
    release = moment($('time.release-date').attr('datetime'));
    return interval = setInterval(function() {
      var days, hours, minutes, seconds;
      seconds = release.diff(moment(new Date()), 's');
      days = Math.floor(seconds / 86400);
      seconds -= days * 86400;
      hours = Math.floor(seconds / 3600);
      hours = hours < 10 ? "0" + hours : hours;
      seconds -= hours * 3600;
      minutes = Math.floor(seconds / 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds -= minutes * 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return $('time.countdown').html("" + days + " days " + hours + ":" + minutes + ":" + seconds);
    }, 1000);
  };

}).call(this);
