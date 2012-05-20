javascript:
(function(){
  var load = function(u){
    if(!u.match(/\?/))
      u+='?'+(new Date()).getTime();
    var d=document;
    var e=d.createElement('script');
    e.charset='utf-8';
    e.src=u;
    d.getElementsByTagName('head')[0].appendChild(e);
  };
  load('http://code.jquery.com/jquery-1.7.2.min.js');
  load('https://raw.github.com/gist/105908/diff.js');
  load('https://raw.github.com/peccu/diff-for-gist.github/master/diff_for_gist.user.js');
})();
