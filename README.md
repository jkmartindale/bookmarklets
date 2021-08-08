<!--{% comment %}-->
# Bookmarklets
This repository holds the source code for the smattering of arbitrary
bookmarklets I've written. For details and installation, head over to my
[bookmarklets page](https://jkmartindale.github.io/bookmarklets/).

&nbsp;
<!--{% endcomment %}-->
{% comment %}
<!--{% endcomment %}
# Archive.org Lookup
Searches archive.org for captures of the current webpage.
```javascript
javascript:window.open("https://web.archive.org/web/*/"+window.location.href)
 
```

# Archive.org Save
Adds a capture of the current page to archive.org.
```javascript
javascript:window.open("https://web.archive.org/save/"+window.location.href)
 
```

# Clean Ellucian Banner Transcript
Banner is hot garbage and their unofficial transcript page looks disgusting.
This helps make things look nicer for printing.
[[Unminified]](https://github.com/jkmartindale/bookmarklets/blob/master/clean-banner-transcript.js)
```javascript
javascript:function d(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}document.getElementsByClassName("pageheaderdiv1")[0].remove();document.getElementsByClassName("headerlinksdiv")[0].remove();document.getElementsByClassName("plaintable")[0].remove();document.getElementsByClassName("headerwrapperdiv")[0].style.paddingTop=0;
[].concat(function(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:d(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}(document.getElementsByClassName("pagebodydiv")[0].childNodes)).map(function(a){a.nodeType!=Node.TEXT_NODE&&"A"!=a.tagName||a.remove()});document.styleSheets[1].insertRule("tr{break-inside:avoid}");
```

# Google Play App Beta
Activate this bookmarklet on a Google Play app page to enroll in the beta
program (if there is one).
```javascript
javascript:window.location="https://play.google.com/apps/testing/"+window.location.href.match(/https:\/\/play\.google\.com\/store\/apps\/details\?id=([\w.]+)/)[1]
```

# Google Play Music Cover Art
Activate this bookmarklet on an album page on Google Play to grab some
high-resolution cover art.
```javascript
javascript:open(document.getElementsByClassName("cover-image")[0].src.replace("w300-rw", "w16383-rw"))
```

# ICANN WHOIS
Looks up the WHOIS record of the current domain.
```javascript
javascript:window.open("https://whois.icann.org/en/lookup?name="+window.location.hostname)
```

# PageSpeed Insights
Runs the current webpage through Google PageSpeed Insights to get suggestions
for making the webpage faster.
```javascript
javascript:window.open("https://developers.google.com/speed/pagespeed/insights/?url="+window.location.href)
```

# Unhide Reddit Downvote Arrows
For those times when subreddit moderators have disabled downvotes but you still
gotta be a jerk anyway.
```javascript
javascript:(function(){var a=document.getElementsByClassName("down"),b;for(b in a)a[b].style.display="block"})()
```

# Vine Downloader
Opens the MP4 from a single Vine's page.
```javascript
javascript:open("http://v.cdn.vine.co/r/videos_dashhd/"+/https:\/\/v\.cdn\.vine\.co\/r\/videos\/(.*).jpg/.exec(document.getElementsByTagName("video")[0].poster)[1])
```

# Web of Trust
Opens the Web of Trust reputation page for the current domain or subdomain.
```javascript
javascript:open("https://www.mywot.com/scorecard/"+window.location.host)
 
```

# Website Grader
Runs the current domain through HubSpot's Website Grader, checking for basic
performance and SEO issues.
```javascript
javascript:window.open("https://website.grader.com/results/"+window.location.hostname)
 
```{% comment %}
-->{% endcomment %}
