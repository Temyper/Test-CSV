// 20210209TODO:CSVファイルの入力

"use strict";

// 20210210BOM無しver
$("#output-csv__english-without-bom").click(function (e) {
  let originString =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptate non. Rerum labore tenetur itaque eveniet iure. Perferendis odio, quos deleniti eius vero ducimus architecto suscipit fugit officiis sed culpa.";

  let text = originString.replace(/ /g, ",");

  let content = new Blob([text], { type: "text/csv" });

  let newDownloader = document.createElement("a");

  document.body.appendChild(newDownloader);

  newDownloader.href = URL.createObjectURL(content);
  newDownloader.download = "test.csv";

  newDownloader.click();
  document.body.removeChild(newDownloader);
  e.preventDefault();
});

// 20210210BOM付き。日本語混在対策にBOM付けるのをデフォルトにしよう
$("#output-csv__english-and-japanese-with-bom").click(function (e) {
  let originString =
    "Lorem ipsum dolor あ 唖 ア ああ sit amet consectetur, い adipisicing elit. Aut, voluptate non. Rerum labore tenetur itaque eveniet iure. Perferendis odio, quos deleniti eius vero ducimus architecto suscipit fugit officiis sed culpa.";

  let text = originString.replace(/ /g, ",");

  let bom = new Uint8Array([0xef, 0xbb, 0xbf]);

  let content = new Blob([bom, text], { type: "text/csv" });

  let newDownloader = document.createElement("a");

  document.body.appendChild(newDownloader);

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

  newDownloader.href = URL.createObjectURL(content);
  newDownloader.download = "test.csv";

  newDownloader.click();
  document.body.removeChild(newDownloader);
  e.preventDefault();
});

$("#input-csv__text-file-all").click(function (e) {
  $("#input-csv__text-file-all").load("../resource/test.csv");
  e.preventDefault();
});
