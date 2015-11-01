var settings = {
    save: function() {
        var bg_color, bg_type, tumblr_page, default_tumblr,
            settings;

        bg_color = $("#bg_color").val();
        bg_type = $("#bg_type").val();
        tumblr_page = $("#tumblr_page").val();
        default_tumblr = $("#default_tumblr").val();
        
        settings = {};
        settings.bg_color = bg_color;
        settings.bg_type = bg_type;
        settings.tumblr_page = tumblr_page;
        settings.default_tumblr = default_tumblr;

        localStorage.setItem("new_tab", JSON.stringify(settings));
    },

    load: function() {
        var settings = localStorage.getItem("new_tab");

        if (settings != null && settings != undefined) {
            settings = JSON.parse(settings);
        } else {
            settings = {
                bg_color: "#000000",
                bg_type: "tumblr",
                tumblr_page: "nbcnews",
                default_tumblr: "y"
            };
            localStorage.setItem("new_tab", JSON.stringify(settings));
        }

        $("#bg_color").val(settings.bg_color);
        $("#bg_type").val(settings.bg_type);
        $("#tumblr_page").val(settings.tumblr_page);
        $("#default_tumblr_" + settings.default_tumblr).attr("selected", "true");
    }
};

$(document).ready(function() {
    settings.load();
});
