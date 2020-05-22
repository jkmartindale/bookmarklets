document.getElementsByClassName("pageheaderdiv1")[0].remove();
document.getElementsByClassName("headerlinksdiv")[0].remove();  // Financial Aid tab title
document.getElementsByClassName("plaintable")[0].remove(); // Search box and menu items
document.getElementsByClassName("headerwrapperdiv")[0].style.paddingTop = 0; // Space under image header
[...document.getElementsByClassName("pagebodydiv")[0].childNodes].map(child => {
    if (child.nodeType == Node.TEXT_NODE || child.tagName == "A") {
        child.remove();
    }
}); // Document links
document.styleSheets[1].insertRule("tr {break-inside: avoid}"); // Keep rows on the same page
