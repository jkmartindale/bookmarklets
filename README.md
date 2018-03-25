# bookmarklets
Bookmarklets are little snippets of JavaScript hiding in a bookmark. Think of them as miniature browser extensions that also work on mobile devices and have more security restrictions imposed upon them by browsers. I've made a bunch of really simple ones to help with various things.

## Archive.org Lookup
Searches archive.org for captures of the current webpage
```javascript
javascript:window.open("https://web.archive.org/web/*/"+window.location.href)
```

## Archive.org Save
Adds a capture of the current page to archive.org
```javascript
javascript:window.open("https://web.archive.org/save/"+window.location.href)
```

## Google Play App Beta
Activate this bookmarklet on a Google Play app page to enroll in the beta program (if there is one)
```javascript
javascript:window.location="https://play.google.com/apps/testing/"+window.location.href.match(/https:\/\/play\.google\.com\/store\/apps\/details\?id=([\w.]+)/)[1]
```

## Google Play Music Cover Art
Activate this bookmarklet on an album page on Google Play to grab some high-resolution cover art
```javascript
javascript:open(document.getElementsByClassName("cover-image")[0].src.replace("w300-rw", "w16383-rw"))
```

## ICANN WHOIS
Looks up the WHOIS record of the current domain
```javascript
javascript:window.open("https://whois.icann.org/en/lookup?name="+window.location.hostname)
```

## PageSpeed Insights
Runs the current webpage through Google PageSpeed Insights to get suggestions for making the webpage faster
```javascript
javascript:window.open("https://developers.google.com/speed/pagespeed/insights/?url="+window.location.href)
```

## Unhide Reddit Downvote Arrows
For those times when subreddit moderators have disabled downvotes but you still gotta be a jerk anyway
```javascript
javascript:var a=document.getElementsByClassName("down"),b;for(b in a)a[b].style.display="block"
```

## Wavo Stems Downloader
Grabs stems from Wavo.me remix contests even after the contest is over, while bypassing the download gate
```javascript
javascript:var a;for(var b in _r)/\/contests\/\w+/.test(b)&&(a=b);window.location=_r[a].downloadPackageUrl
```

## Web of Trust
Opens the Web of Trust reputation page for the current domain or subdomain
```javascript
javascript:open("https://www.mywot.com/scorecard/"+window.location.host)
```

## Website Grader
Runs the current domain through HubSpot's Website Grader, checking for basic performance and SEO issues
```javascript
javascript:window.open("https://website.grader.com/results/"+window.location.hostname)
```
