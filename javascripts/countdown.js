(function() {
  var build_timer, get_countdown_attrs, get_time_left, init_countdown;

  $(function() {
    $('.flip-front').find('h1, h2, .countdown-container').hide();
    $('.flip-front').append("<span class='spinner'>Loading</span>");
    $('a[rel=external]').bind('click', function() {
      return this.target = "_blank";
    });
    return init_countdown();
  });

  init_countdown = function() {
    get_countdown_attrs();
    return build_timer();
  };

  get_countdown_attrs = function() {
    return $.get("/javascripts/graduation.json", function(data) {
      return $.each(data, function(key, object) {
        if (object.logo != null) $('.title').addClass('logo');
        $('.title').html(key);
        $('time.release-date').attr('datetime', object.date).html(moment(object.date).format("MMMM D, YYYY"));
        return $('a.learn-more').attr('href', object.link);
      });
    });
  };

  build_timer = function() {
    var interval;
    $.when($('time.countdown').html(get_time_left())).then(function() {
      $('span.spinner').fadeOut('fast');
      return $('.flip-front').find('h1, h2, .countdown-container').fadeIn('fast');
    });
    return interval = setInterval(function() {
      return $('time.countdown').html(get_time_left());
    }, 1000);
  };

  get_time_left = function() {
    var days, hours, minutes, release, seconds;
    release = moment($('time.release-date').attr('datetime'));
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
    return "" + days + " days " + hours + ":" + minutes + ":" + seconds;
  };

}).call(this);
