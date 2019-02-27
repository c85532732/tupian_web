var totalheight = 0;
var pageindex = 1;

function loadData() {
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    var num = $(document).height() - totalheight;
    if (num < 300) {
        var forum = GetForumId(current_sel_forumid);
        if (pageindex <= 3) {
            var url = "tools/ForumHandler.ashx?t=GetDirectTopic&pageindex=" + pageindex + "&forum=" + forum;
            showDigestTopic(url);
            $('#Digestnomore').hide();
        }
        else {
            $('#Digestnomore').show();
        }
    }
    else {
        $('#Digestnomore').show();
    }
}