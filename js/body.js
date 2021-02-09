// 20210209TODO:CSVファイルの入力

"use strict";

// 20210210BOM無しver
$("#output-csv__english-without-bom").click(function (e) {
  // 英語オンリー
  let originString =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptate non. Rerum labore tenetur itaque eveniet iure. Perferendis odio, quos deleniti eius vero ducimus architecto suscipit fugit officiis sed culpa.";

  let text = originString.replace(/ /g, ",");

  let content = new Blob([text], { type: "text/csv" });

  let newDownloader = document.createElement("a");
  document.body.appendChild(newDownloader);
  // 20210207 非推奨らしいttps://www.tcmobile.jp/dev_blog/programming/webrtc-%E3%81%A7-url-createobjecturl%E3%81%AF%E3%81%BE%E3%82%82%E3%81%AA%E3%81%8F%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8B/
  newDownloader.href = URL.createObjectURL(content);
  newDownloader.download = "test.csv";

  newDownloader.click();
  document.body.removeChild(newDownloader);
  e.preventDefault();
});

// 20210210BOM付き。日本語混在対策にBOM付けるのをデフォルトにしよう
$("#output-csv__english-with-bom").click(function (e) {
  // 英語オンリー
  let originString =
    "Lorem ipsum dolor あ 唖 ア ああ sit amet consectetur, い adipisicing elit. Aut, voluptate non. Rerum labore tenetur itaque eveniet iure. Perferendis odio, quos deleniti eius vero ducimus architecto suscipit fugit officiis sed culpa.";

  let text = originString.replace(/ /g, ",");

  let bom = new Uint8Array([0xef, 0xbb, 0xbf]);

  let content = new Blob([bom, text], { type: "text/csv" });

  let newDownloader = document.createElement("a");
  document.body.appendChild(newDownloader);
  // 20210207 非推奨らしいttps://www.tcmobile.jp/dev_blog/programming/webrtc-%E3%81%A7-url-createobjecturl%E3%81%AF%E3%81%BE%E3%82%82%E3%81%AA%E3%81%8F%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8B/
  newDownloader.href = URL.createObjectURL(content);
  newDownloader.download = "test.csv";

  newDownloader.click();
  document.body.removeChild(newDownloader);
  e.preventDefault();
});

// 20210210日本語はBOM付きで出力しないと文字化けする
$("#output-csv__japanese").click(function (e) {
  var bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  let originString = "あ い う え お";

  let text = originString.replace(/ /g, ",");

  let content = new Blob([bom, text], { type: "text/csv" });

  let newDownloader = document.createElement("a");
  document.body.appendChild(newDownloader);
  // 20210207 非推奨らしいttps://www.tcmobile.jp/dev_blog/programming/webrtc-%E3%81%A7-url-createobjecturl%E3%81%AF%E3%81%BE%E3%82%82%E3%81%AA%E3%81%8F%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8B/
  newDownloader.href = URL.createObjectURL(content);
  newDownloader.download = "test.csv";

  newDownloader.click();
  document.body.removeChild(newDownloader);
  e.preventDefault();
});
