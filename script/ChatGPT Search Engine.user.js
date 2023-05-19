// ==UserScript==
// @name         ChatGPT Search Engine
// @namespace    https://chat.openai.com/
// @version      0.1
// @description  Adds querying support to ChatGPT
// @author       FireController#1847
// @match        *://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var log = function(str) {
        console.log("[SearchEngine Script] " + str);
    };

    log("Waiting for window load.");
    window.onload = function() {
        log("Window loaded. Waiting 0.750s delay prep time.");
        setTimeout(function() {
            log("Delay finished. Fetching query.");
            var params = new URLSearchParams(window.location.search);
            var query = params.get("q");
            log("Searching for \"" + query + "\"");
            var textarea = document.getElementById("prompt-textarea");
            textarea.value = query;
            var button = textarea.parentElement.getElementsByTagName("button")[0];
            button.removeAttribute("disabled");
            button.click();
            log("Query sent.");
        }, 750);
    };

})();