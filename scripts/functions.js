"use strict";

//load the header and footer from external files
//after loading header, apply current page styles on nav
$(document).ready(() => {
    $("#header").load("include/header.html", applyCurrentPageNavStyles);
    $("#footer").load("include/footer.html");
});

//apply coloredNavSelection class to current corresponding nav link
//and remove/add whiteLinks class as needed
function applyCurrentPageNavStyles(response, status, xhr) {
    if (window.location) {
        let url = window.location.href;
        if (url.search("index") != -1 || url == "https://f-shirley.github.io/portfolio/") {
            $("#aboutmeNav").addClass("coloredNavSelection");
            $("#aboutmeNav").removeClass("whiteLinks");

            $("#resumeNav").removeClass("coloredNavSelection");
            $("#resumeNav").toggleClass("whiteLinks", true);
            $("#projectsNav").removeClass("coloredNavSelection");
            $("#projectsNav").toggleClass("whiteLinks", true);
        }
        else if (url.search("resume") != -1) {
            $("#resumeNav").addClass("coloredNavSelection");
            $("#resumeNav").removeClass("whiteLinks");

            $("#aboutmeNav").removeClass("coloredNavSelection");
            $("#aboutmeNav").toggleClass("whiteLinks", true);
            $("#projectsNav").removeClass("coloredNavSelection");
            $("#projectsNav").toggleClass("whiteLinks", true);
        }
        else if (url.search("projects") != -1) {
            $("#projectsNav").addClass("coloredNavSelection");
            $("#projectsNav").removeClass("whiteLinks");

            $("#aboutmeNav").removeClass("coloredNavSelection");
            $("#aboutmeNav").toggleClass("whiteLinks", true);
            $("#resumeNav").removeClass("coloredNavSelection");
            $("#resumeNav").toggleClass("whiteLinks", true);
        }
    }
};