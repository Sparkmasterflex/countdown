$ ->
	$('.flip-front').find('h1, h2, .countdown-container').hide()
	$('.flip-front').append "<span class='spinner'>Loading</span>"
	$('a[rel=external]').bind 'click', () -> this.target = "_blank"


	# $('a.twitter').click (e) ->
	# 	# status = " "
	# 	# window.location = "http://twitter.com/home?status=#{status}&has"
	# 	window.location = "http://twitter.com/share?url=http://countdown.ifkeithraymond.com&text=#{$('time.countdown').html()} till Rome Total War 2!&hashtag=RomeTotalWar2"
	# 	false

	init_countdown()

init_countdown = () ->
	get_countdown_attrs()
	build_timer()

get_countdown_attrs = () ->
	$.get "/javascripts/graduation.json", (data) ->
		$.each JSON.parse(data), (key, object) ->
			$('.title').addClass 'logo' if object.logo
			$('.title').html key

			$('time.release-date')
			.attr('datetime', object.date)
			.html moment(object.date).format("MMMM D, YYYY")
			
			$('a.learn-more').attr('href', object.link)

build_timer = () ->
	$.when($('time.countdown').html get_time_left()).then () ->
		$('span.spinner').fadeOut 'fast'
		$('.flip-front').find('h1, h2, .countdown-container').fadeIn 'fast'

	interval = setInterval () ->
		$('time.countdown').html get_time_left()
	, 1000

get_time_left = () ->
	release = moment $('time.release-date').attr('datetime')
	seconds = release.diff moment(new Date()), 's'
	days = Math.floor seconds/86400
	seconds -= days*86400
	hours = Math.floor seconds/3600
	hours = if hours < 10 then "0#{hours}" else hours
	seconds -= hours*3600
	minutes = Math.floor seconds/60
	minutes = if minutes < 10 then "0#{minutes}" else minutes
	seconds -= minutes*60
	seconds = if seconds < 10 then "0#{seconds}" else seconds

	"#{days} days #{hours}:#{minutes}:#{seconds}"