function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    console.log(http)
    return http.status != 404;

  }
  async function setChapterCookies(chapternumber,seriesname) {
    var i = 1
    for(i = 1; imageExists(`./${chapternumber}/${i}.jpg`) && i < 150;i++) {}//increments i until no
    postMessage(`pages+${chapternumber}+${seriesname}=${i}; path=/`)
  }
  onmessage = function(e) {
    console.log('Message received from main script');
    setChapterCookies(e[0], e[1])
  }