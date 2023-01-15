// ==UserScript==
// @name         ColoredManga+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Various improvements for coloredmanga.com
// @author       Ruuku
// @match        https://coloredmanga.com/mangas/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coloredmanga.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(() => {
    'use strict';

    let pages = document.querySelectorAll(".wp-manga-chapter-img");
    for (let idx = 0; idx < pages.length; idx++) {
        // Lazy loading
        pages[idx].loading = "lazy"
    }

    //[TODO]: Scrolling, Centering
    GM_addStyle(`
        .wp-manga-chapter-img {
            max-width: 100dvw;
            height: auto;
            max-height: 100dvh;
        }
    `);
})();