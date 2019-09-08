$(function(){
    $("#typed").typed({
        strings: [
         "I am an iOS developer.",
         "Based in Cork.",
         "Swift | Obj -C | Node.js",
         "Git | VIPER | RxSwift",
         "I make iOS Apps.",
         ],
        typeSpeed: 45,
        backDelay: 400,
        loop: true,
        contentType: 'html',
        loopCount: false,
        resetCallback: function() { newTyped(); }
    });
});
