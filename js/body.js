"use strict";

$("#output-csv").click(function (e) {
  let content = new Blob(["aiueo"], { type: "text" });

  let newDownloader = document.createElement("a");
  document.body.appendChild(newDownloader);
  // 20210207 非推奨らしいttps://www.tcmobile.jp/dev_blog/programming/webrtc-%E3%81%A7-url-createobjecturl%E3%81%AF%E3%81%BE%E3%82%82%E3%81%AA%E3%81%8F%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8B/
  newDownloader.href = URL.createObjectURL(content);
  newDownloader.download = "test.txt";

  // let newDownloader = $('<a id="download-maker">');
  // 20210208↓とりあえず以前からのやり方を採用するので見送り
  // newDownloader.srcObject = content;

  newDownloader.click();
  document.body.removeChild(newDownloader);
  e.preventDefault();
});
