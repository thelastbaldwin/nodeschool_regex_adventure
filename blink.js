var marked = require('marked')

//first pass
// module.exports = function (str) {
//   var initialOutput = marked(str);
//   var openTag = true;
//   return initialOutput.replace(/@@/g, function(){
//     var tag = (openTag? '<blink>' : '</blink>');
//     openTag = !openTag;
//     return tag;
//   })
// }

module.exports = function(str){
  var md = marked(str);
  return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>');
}