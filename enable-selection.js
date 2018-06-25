# Test against http://www.androidnotworking.com/2018/06/19/google-play-store-reinstalling-on-android/
# Review https://github.com/wp-plugins/wp-content-copy-protector/blob/master/preventer-index.php for things to look at

document.ondragstart = null;
document.oncontextmenu = null;
document.onkeydown = null;
document.onselectstart = null;
document.onmousedown = null;
document.onclick = null;
document.body.onselectstart = null;
document.body.onmousedown = null;
document.body.classList.remove("unselectable");
document.documentElement.style.userSelect = "auto";
document.body.style.cursor = "auto";
