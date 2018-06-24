# bookmarklets
Bookmarklets are little snippets of JavaScript hiding in a bookmark. Think of them as miniature browser extensions that also work on mobile devices and have more security restrictions imposed upon them by browsers. I've made a bunch of really simple ones to help with various things.

[test]({{"/test" | prepend: site.url}})

## Add to Pocket
Strips gross GET variables from the URL and adds the page to Pocket. Doesn't work on webpages with a Content Security Policy, but instead of failing silently it'll 1) tell you that a CSP is in place and 2) strip GET variables from the URL so that you can save to Pocket with the Share menu or otherwise.
```javascript
javascript:(function(){document.addEventListener("securitypolicyviolation",function(t){t.stopImmediatePropagation();alert("This bookmarklet is not compatible with this webpage's content security policy :(");history.pushState(void 0,void 0,window.location.pathname)});var a=/([^?]+)/.exec(window.location.href)[1],b=document.createElement("script");b.type="text/javascript";var c=a,d=[1335250,6543542,3442575,3096362,1070828,4418221,2412824,2787039,2494417,4533862],e=0,f=0,g=[],h=0,k={a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"/":47,":":58,"?":63,"=":61,"-":45,_:95,"&":38,$:36,"!":33,".":46};c=1335250+c;for(var m=0;274>m;m++){for(var n=0;n<c.length;n++){(l=k[c[n]]?k[c[n]]:c.charCodeAt(n))||(l=3);var p=l*(d[e]+l*d[f%25d.length]);g[h]=(g[h]?g[h]+p:p)+m+f;var q=p%2550;if(g[q]){var r=g[h];g[h]=g[q];g[q]=r}f+=p;h=50==h?0:h+=1;e=e==d.length-1?0:e+1}c=f+"";f=0}var u="";for(n=0;n<g.length;n++)u+=String.fromCharCode(g[n]%2525+97);b.src="https://getpocket.com/b/r4.js?h="+(u+"efcc82e294")+"&u="+encodeURIComponent(a)+"&t="+encodeURIComponent(document.title);(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(b)})()
```

## Archive.org Lookup
Searches archive.org for captures of the current webpage.
```javascript
javascript:window.open("https://web.archive.org/web/*/"+window.location.href)
 
```

## Archive.org Save
Adds a capture of the current page to archive.org.
```javascript
javascript:window.open("https://web.archive.org/save/"+window.location.href)
 
```

## Google Play App Beta
Activate this bookmarklet on a Google Play app page to enroll in the beta program (if there is one).
```javascript
javascript:window.location="https://play.google.com/apps/testing/"+window.location.href.match(/https:\/\/play\.google\.com\/store\/apps\/details\?id=([\w.]+)/)[1]
```

## Google Play Music Cover Art
Activate this bookmarklet on an album page on Google Play to grab some high-resolution cover art.
```javascript
javascript:open(document.getElementsByClassName("cover-image")[0].src.replace("w300-rw", "w16383-rw"))
```

## ICANN WHOIS
Looks up the WHOIS record of the current domain.
```javascript
javascript:window.open("https://whois.icann.org/en/lookup?name="+window.location.hostname)
```

## PageSpeed Insights
Runs the current webpage through Google PageSpeed Insights to get suggestions for making the webpage faster.
```javascript
javascript:window.open("https://developers.google.com/speed/pagespeed/insights/?url="+window.location.href)
```

## Unhide Reddit Downvote Arrows
For those times when subreddit moderators have disabled downvotes but you still gotta be a jerk anyway.
```javascript
javascript:(function(){var a=document.getElementsByClassName("down"),b;for(b in a)a[b].style.display="block"})()
```

## Vine Downloader
Opens the MP4 from a single Vine's page.
```javascript
javascript:open("http://v.cdn.vine.co/r/videos_dashhd/"+/https:\/\/v\.cdn\.vine\.co\/r\/videos\/(.*).jpg/.exec(document.getElementsByTagName("video")[0].poster)[1])
```

## Wavo Stems Downloader
Grabs stems from Wavo.me remix contests even after the contest is over, while bypassing the download gate.
```javascript
javascript:(function(){var a;for(var b in _r)/\/contests\/\w+/.test(b)&&(a=b);window.location=_r[a].downloadPackageUrl})()
```

## Web of Trust
Opens the Web of Trust reputation page for the current domain or subdomain.
```javascript
javascript:open("https://www.mywot.com/scorecard/"+window.location.host)
 
```

## Website Grader
Runs the current domain through HubSpot's Website Grader, checking for basic performance and SEO issues.
```javascript
javascript:window.open("https://website.grader.com/results/"+window.location.hostname)
 
```
