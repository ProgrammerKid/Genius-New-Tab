$(document).ready(function() {
    var settings, link;

    settings = localStorage.getItem("new_tab");

    if (settings != null && settings != undefined) {
        settings = JSON.parse(localStorage.getItem("new_tab"));
    } else {
        settings = true;
    }

    if (settings || settings.bg_type == "tumblr") {
        if (settings || settings.default_tumblr == "y") {
            link = "http://api.tumblr.com/v2/blog/nbcnews.tumblr.com/posts?";
        } else if (settings.default_tumblr == "n") {
            link = "http://api.tumblr.com/v2/blog/" + settings.tubmlr_page + ".tumblr.com/posts?" 
        }
        
        console.log(link)
        $.ajax({
            type: "GET",
            url: link,
            dataType: "jsonp",
            data: {
                api_key: "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4"
            }
        }).done(function(data) {
            console.log(data);
            var img_url = data.response.posts[0].photos[0].original_size.url,
                caption;

            document.getElementsByClassName("container")[0].style.backgroundImage = "url('" + img_url + "')";

            caption = data.response.posts[0].caption;
            document.getElementById("image_caption").innerHTML = caption;
        });
    } else if (settings || settings.bg_type == "src") {
        //program this part when we have the feature
    }
});
