function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    console.log(http)
    return http.status != 404;

  }
  async function setChapterCookies(chapternumber,seriesname) {
    var i = 1
    if(document.cookie.includes(`pages+${chapternumber}+${seriesname}`)) return 0;
    for(i = 1; imageExists(`./${chapternumber}/${i}.jpg`) && i < 150;i++) {}//increments i until no
    document.cookie = `pages+${chapternumber}+${seriesname}=${i}; path=/`
  }
  onmessage = function(e) {
    console.log('Message received from main script');
    setChapterCookies(e[0], e[1])
  }