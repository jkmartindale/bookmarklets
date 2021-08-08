// Test against http://www.androidnotworking.com/2018/06/19/google-play-store-reinstalling-on-android/
// Review https://github.com/wp-plugins/wp-content-copy-protector/blob/master/preventer-index.php for things to look at

var _ = document;
_.ondragstart = null;
_.oncontextmenu = null;
_.onkeydown = null;
_.onselectstart = null;
_.onmousedown = null;
_.onclick = null;
_.body.onselectstart = null;
_.body.onmousedown = null;
_.body.classList.remove("unselectable");
_.documentElement.style.userSelect = "auto";
_.body.style.cursor = "auto";
