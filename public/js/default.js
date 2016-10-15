$(function(){
    $("#typed").typed({
        strings: [
         "I am an iOS developer.",
         "Based in London.",
         "Swift | Obj -C | Node.js",
         "Git | GOCD | CI",
         "I make iOS Apps.",
         "I make Node.js Apps."
         ],
        typeSpeed: 45,
        backDelay: 400,
        loop: true,
        contentType: 'html',
        loopCount: false,
        resetCallback: function() { newTyped(); }
    });
});
