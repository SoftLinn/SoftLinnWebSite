/* ==================================================
    Contact Form-newsletter
================================================== */
        document.getElementById('my-form').target = 'my-response-iframe';
        document.getElementById('news').target = 'response-news';
        var iframe = document.getElementById('my-response-iframe');
        var iframenews = document.getElementById('response-news');
        var msg =document.getElementById("alertmsg");
        msg.style.display="none";
        var newsmsg=document.getElementById("news-msg");
        newsmsg.style.display="none";

        if (iframe) {

           iframe.onload = function () {
             document.getElementById('my-form').onsubmit=function(){
               msg.style.display="block";
             }
           document.getElementById("name").value="";
           document.getElementById("email").value="";
           document.getElementById("phone").value="";
           document.getElementById("comments").value="";
           setTimeout(function(){msg.style.display="none"; }, 3000);

          }
        }
        if (iframenews) {

           iframenews.onload = function () {
             document.getElementById('news').onsubmit=function(){
               newsmsg.style.display="block";
             }
             document.getElementById("newsinput").value="";
             setTimeout(function(){newsmsg.style.display="none"; }, 3000);
          }
        }
