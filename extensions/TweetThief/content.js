function getSelectionText() {
var text = "";
if (window.getSelection) {
    text = window.getSelection().toString();
} else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
}
return text;
}
$(document).ready(function () {
$('body').mouseup(function (e) {
    if (getSelectionText() != "") {
        window.open('https://twitter.com/intent/tweet?text='+encodeURI(getSelectionText()) + ' (Via TweetThief) URL: ' + encodeURI(document.URL));
    }
})
});

$('body, p, div, *').addClass('cursor');