// ==UserScript==
// @name         Request Approval Button
// @namespace    reddit.com/r/science
// @version      1.7
// @description  AoS Approval Request
// @author       glr123
// @match        https://reddit.com/r/ScienceTest/*
// @match		 https://reddit.com/r/science/*
// @include      https://reddit.com/r/ScienceTest/*
// @include		 https://reddit.com/r/science/*
// @grant        none
// @updateURL	 https://github.com/Doomhammer458/request/raw/master/approvalRequest.user.js
// @downloadURL  https://github.com/Doomhammer458/request/raw/master/approvalRequest.user.js
// ==/UserScript==

$(document).ready(function(){
    $(".pretty-button" && ".positive").html("Request Approval");
    $(".pretty-button" && ".positive").removeAttr("onclick"); 
    var user = $('span.user').children('a').text();
    
    $('a.pretty-button' && 'a.positive').click(function(event){
       
          var SubID = $(this).closest('ul').find('a.bylink').attr('href');
          var post = 'New Approval Request:\n>Username - '+user+'\n>Permalink - <'+SubID+'>';
        
          $.ajax({
            type: 'post',
            context: this,
            url: 'https://hooks.slack.com/services/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',
              data: 'payload=' + JSON.stringify({'text': post}),
            success: function () {
              $(this).html("Request Sent!");
              $(this).css("color","blue").css("background-color","#eee").css("background-image","none");
              $(this).removeAttr("href");
            }
          });
          return false;
    });
});

//rev1