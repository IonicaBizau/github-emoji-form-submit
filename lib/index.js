// ==UserScript==
// @name         GitHub Emoji Form Submit
// @version      1.0.0
// @description  Autocomplete selected Emoji when submitting forms on GitHub.
// @author       Ionică Bizău <bizauionica@gmail.com> (http://ionicabizau.net)
// @match        https://github.com/*
// @grant        none
// ==/UserScript==
'use strict';

// Add the form submit handler
$(document).on("submit", function(e) {
    var $emojis = $(".suggestions.emoji-suggestions li.navigation-focus");
    if ($emojis.is(":visible")) {
        $(".suggestions.emoji-suggestions li.navigation-focus").click();
    }
});

// Prioritize the submit handlers
// https://github.com/IonicaBizau/jQuery-prioritize
var _submit = $._data(document).events.submit;
_submit.unshift(_submit.pop());
