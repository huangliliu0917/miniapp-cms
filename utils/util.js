const REGX_HTML_DECODE = /&\w{1,};|&#\d{1,};/g;
const HTML_DECODE = {
  "&lt;"  : "<", 
  "&gt;"  : ">", 
  "&amp;" : "&", 
  "&nbsp;": " ", 
  "&quot;": "\"", 
  "&copy;": "©"
};

function decodeHtml(str){
  return (typeof str != "string") ? str :
    str.replace(REGX_HTML_DECODE,function($0){
      var c  = HTML_DECODE[$0]
      if(c === undefined){
          var m = $0.match(/\d{1,}/);
          if(m){
              var cc = m[0];
              cc = (cc === 0xA0) ? 0x20 : cc;
              c = String.fromCharCode(cc);
          }else{
              c = $0;
          }
      }
      return c;
    }) 
}

function parseNews(newsList){
  return newsList.map(news => {
      var {id: id, title: title, summary: summary, author: author, layoutCode: code, newsFiles: images, createTime: time} = news
      return {id, title: decodeHtml(title), summary, author, code, images, time}
  })
}

function parseBanner(bannerList) {
  return bannerList.map(banner => {
    var {id: id, imgSrc: src, title: title} = banner;
    return {id, src, title: decodeHtml(title)}
  })
}

function parseDetail(details) {
  let {id: id, title: title, summary: summary, content: content, createTime: time, author: author } = details
  return {id, title: decodeHtml(title), summary, content: content, time, author }
}

module.exports = {
  decodeHtml,
  parseNews,
  parseBanner,
  parseDetail
}
