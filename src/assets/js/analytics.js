// This site uses the Google Analytics by ExactMetrics plugin v6.2.2 - Using Analytics tracking - https://www.exactmetrics.com/

//var em_version         = '6.2.2';
var em_track_user      = true;
var em_no_track_reason = '';

var disableStr = 'ga-disable-UA-138710331-1';

/* Function to detect opted out users */
function __gaTrackerIsOptedOut() {
return document.cookie.indexOf(disableStr + '=true') > -1;
}

/* Disable tracking if the opt-out cookie exists. */
if ( __gaTrackerIsOptedOut() ) {
window[disableStr] = true;
}

/* Opt-out function */
function __gaTrackerOptout() {
document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
window[disableStr] = true;
}

window.gaOptout = function() {
	__gaTrackerOptout();
}

if ( em_track_user ) {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','__gaTracker');

var __gaTracker = window.__gaTracker;
window.ga = __gaTracker;		__gaTracker('create', 'UA-138710331-1', 'auto');
__gaTracker('set', 'forceSSL', true);
__gaTracker('send','pageview');
__gaTracker( function() { window.ga = __gaTracker; } );
} else {
(function() {
console.log( "" );
	/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
	var noopfn = function() {
		return null;
	};
	var noopnullfn = function() {
		return null;
	};
	var Tracker = function() {
		return null;
	};
	var p = Tracker.prototype;
	p.get = noopfn;
	p.set = noopfn;
	p.send = noopfn;
	var __gaTracker = function() {
		var len = arguments.length;
		if ( len === 0 ) {
			return;
		}
		var f = arguments[len-1];
		if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
			console.log( 'Not running function __gaTracker(' + arguments[0] + " ....) because you are not being tracked. " + em_no_track_reason );
			return;
		}
		try {
			f.hitCallback();
		} catch {
			noopfn();
		}
	};
	__gaTracker.create = function() {
		return new Tracker();
	};
	__gaTracker.getByName = noopnullfn;
	__gaTracker.getAll = function() {
		return [];
	};
	__gaTracker.remove = noopfn;
	window['__gaTracker'] = __gaTracker;
	window.ga = __gaTracker;		})();
}
