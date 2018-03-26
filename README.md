# bookmarklets
Bookmarklets are little snippets of JavaScript hiding in a bookmark. Think of them as miniature browser extensions that also work on mobile devices and have more security restrictions imposed upon them by browsers. I've made a bunch of really simple ones to help with various things.

## Add to Pocket
Strips gross GET variables from the URL and adds the page to Pocket
```javascript
javascript:(function(){var a=document.createElement("script");a.type="text/javascript";
var b=document.location.href,c=[1335250,6543542,3442575,3096362,1070828,4418221,2412824,2787039,2494417,4533862],d=0,e=0,f=[],g=0,h={a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"/":47,":":58,"?":63,"=":61,"-":45,
_:95,"&":38,$:36,"!":33,".":46};b=1335250+b;for(var k=0;274>k;k++){for(var m=0;m<b.length;m++){(l=h[b[m]]?h[b[m]]:b.charCodeAt(m))||(l=3);var n=l*(c[d]+l*c[e%25c.length]);f[g]=(f[g]?f[g]+n:n)+k+e;var p=n%2550;if(f[p]){var q=f[g];f[g]=f[p];f[p]=q}e+=n;g=50==g?0:g+=1;d=d==c.length-1?0:d+1}b=e+"";e=0}var r="";for(m=0;m<f.length;m++)r+=String.fromCharCode(f[m]%2525+97);a.src="https://getpocket.com/b/r4.js?h="+(r+"efcc82e294")+"&u="+encodeURIComponent(document.location.href)+"&t="+encodeURIComponent(document.title);
(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(a)})()
```

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
javascript:(function(){var a=document.getElementsByClassName("down"),b;for(b in a)a[b].style.display="block"})()
```

## Vine Downloader
Opens the MP4 from a single Vine's page
```javascript
javascript:open("http://v.cdn.vine.co/r/videos_dashhd/"+/https:\/\/v\.cdn\.vine\.co\/r\/videos\/(.*).jpg/.exec(document.getElementsByTagName("video")[0].poster)[1])
```

## Wavo Stems Downloader
Grabs stems from Wavo.me remix contests even after the contest is over, while bypassing the download gate
```javascript
javascript:(function(){var a;for(var b in _r)/\/contests\/\w+/.test(b)&&(a=b);window.location=_r[a].downloadPackageUrl})()
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
