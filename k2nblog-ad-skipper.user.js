// ==UserScript==
// @name        k2nblog ad skipper
// @namespace   http://k2nblog.com/ad-skipper
// @description Skip ads at sh.st, adf.ly, j.gs and q.gs
// @include     http://sh.st/*
// @include     http://adf.ly/*
// @include     http://j.gs/*
// @include     http://q.gs/*
// @version     0.0.3
// @grant       none
// ==/UserScript==

// TODO: embedupload.
// NOTE: There are few known cases which currently can't be avoided by this user.js:
// * In order to skip `/ad/locked` redirects disable cookies for adf.ly, j.gs and q.gs
// * In order to skip ads at `sh.st/ab123` pages set user agent `curl/7.45.0` for site sh.st

// Written by deobfuscating adf.ly code.
function decodeLink(cipher) {
  var C = "";
  var Z = "";
  var i, len = cipher.length;
  for (i = 0; i < len; ++i) {
    if (i & 1) {
      Z = cipher[i] + Z;
    } else {
      C += cipher[i];
    }
  }
  return atob(C + Z).slice(2);
}

if (location.host === "sh.st") {
  var m = location.pathname.match(/\/(https?:.+)/);
  if (m) {
    location.href = m[1];
  }
} else if (location.host === "adf.ly" || location.host === "j.gs" || location.host === "q.gs") {
  var m = location.href.match(/\/ad\/locked.*\?url=(\w+)/);
  if (m) {
    // adf.ly doesn't reveal links too often.
    setTimeout(function() {
      location.href = "/" + m[1];
    }, 2000);
  } else if (window.ysmm) {
    location.href = decodeLink(ysmm);
  }
}