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

# Clean Ellucian Banner Transcript
Banner is hot garbage and their unofficial transcript page looks disgusting.
This helps make things look nicer for printing.
[[Unminified]](https://github.com/jkmartindale/bookmarklets/blob/master/clean-banner-transcript.js)
```javascript
javascript:function d(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}document.getElementsByClassName("pageheaderdiv1")[0].remove();document.getElementsByClassName("headerlinksdiv")[0].remove();document.getElementsByClassName("plaintable")[0].remove();document.getElementsByClassName("headerwrapperdiv")[0].style.paddingTop=0;
[].concat(function(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:d(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}(document.getElementsByClassName("pagebodydiv")[0].childNodes)).map(function(a){a.nodeType!=Node.TEXT_NODE&&"A"!=a.tagName||a.remove()});document.styleSheets[1].insertRule("tr{break-inside:avoid}");
```

# Copy Amazon Link
Copies a minified version of the current Amazon store page without all the gross tracking crap.
```javascript
javascript:(function(){var a=window.location.pathname,b=/(\/\w{0,3}\/\w+)\/?(ref)?/.exec(a);a=window.location.origin+(b?b[1]:a);history.pushState(void 0,void 0,a);b=document.createElement("textarea");b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)})()
```

# Enable Selection
For when websites are jerks and don't want you selecting stuff.
```javascript
document.g=null;document.oncontextmenu=null;document.onkeydown=null;document.onselectstart=null;document.onmousedown=null;document.onclick=null;document.body.onselectstart=null;document.body.onmousedown=null;document.body.classList.remove("unselectable");document.documentElement.style.userSelect="auto";document.body.style.cursor="auto";
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

# New York Times Paywall Bypass
```javascript
javascript:document.cookie="nyt-m=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.nytimes.com;path=/";location.reload()
```

# noquery
Removes from the address bar the crap after the question mark in the current URL.
```javascript
javascript:history.pushState({}, '', window.location.protocol + '//' + window.location.host + window.location.pathname)
```

# PageSpeed Insights
Runs the current webpage through Google PageSpeed Insights to get suggestions
for making the webpage faster.
```javascript
javascript:window.open("https://developers.google.com/speed/pagespeed/insights/?url="+window.location.href)
```

# Spotify Cover Art
Opens the cover art from a Spotify album page in a new tab.
```javascript
javascript:let srcset = document.body.querySelectorAll("img[srcset]")[0].srcset.split(", "); open(srcset[srcset.length - 1].split(" ")[0])
```

# Steam Gem Value
Activate this bookmarklet on an item listing in the Steam Community Market to find out how much an item is worth in gems. For details on how this works, see [this Arqade answer](https://gaming.stackexchange.com/a/351941/218385).
```javascript
javascript:var a=g_rgAssets[Object.keys(g_rgAssets)[0]],b=a[Object.keys(a)[0]],c=b[Object.keys(b)[0]],gem_action=c.owner_actions&&c.owner_actions.filter(function(d){return/javascript:GetGooValue/.test(d.link)})[0];if(gem_action){var matches=gem_action.link.match(/javascript:GetGooValue\( '%contextid%', '%assetid%', (\d+), (\d+), \d+ \)/);fetch("https://steamcommunity.com/auction/ajaxgetgoovalueforitemtype/?appid="+matches[1]+"&item_type="+matches[2]+"&border_color=0").then(function(d){return d.json()}).then(function(d){alert("This is worth "+d.goo_value+" gems")})["catch"](function(d){return console.error(d)})}else alert("This is worth 0 gems");
```

# Unhide Reddit Downvote Arrows
For those times when subreddit moderators have disabled downvotes but you still
gotta be a jerk anyway.
```javascript
javascript:(function(){var a=document.getElementsByClassName("down"),b;for(b in a)a[b].style.display="block"})()
```

# Targeter
Tap/click somewhere and get a best effort guess for a target to use to jump to that part of the page. Probably doesn't work very well.
```javascript
function b(a){document.body.style.cursor="default";document.removeEventListener("click",b,!1);a=a||window.event;a=a.target||a.srcElement;a=a==document.body?null:a.id?a.id:a.name?a.name:void 0;for(console.log("I think the ideal target would be "+a.id);!a.id;){console.log(a);if(a==document.body)return;a=a.previousElementSibling||a.parentNode}console.log(a)}document.addEventListener("click",b,!1);document.body.style.cursor="crosshair";
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
```

# WIRED Paywall Bypass
```javascript
javascript:document.cookie="pay_ent_smp=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.wired.com;path=/";location.reload()
```

# YELL
Uppercases the selected text.
```javascript
javascript:(()=>{var selection = window.getSelection();var original = selection.anchorNode.textContent;selection.anchorNode.textContent = selection.anchorNode.textContent.replace(original, original.toUpperCase());})();
```{% comment %}
-->{% endcomment %}
