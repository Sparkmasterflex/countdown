$ ->
	$('a[rel=external]').bind 'click', () -> this.target = "_blank"
	init_countdown()


init_countdown = () ->
	release = moment $('time.release-date').attr('datetime')
	interval = setInterval () ->
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

		$('time.countdown').html "#{days} days #{hours}:#{minutes}:#{seconds}"
	, 1000
