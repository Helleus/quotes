function generate() {
  let quotes = {
    "- اسلام  سمايلي":
      '"ابدأ بالضروري ثم انتقل الي  الممكن تجد نفسك تصنع المستحيل"',
    "- خالد سعيد العراقي": '"البحر الهادئ لا يصنع بحارا ماهر"',
    "- مروان ريوس": '"علي قدر اهل العزم تأتي العزائم"',
    "- بودا الاسكندراني": '"مفيش حياة سهلة بتصنع عبقري"',
    "- حمص": ['"كوباية شاي مرغية احسن من فدان في النوبارية "', "2.jpg"],
    "- كيما": '"قبل ما تحلم فوق احلم وانت فايق قبل ما تطلع فوق انزل للحقايق"',
    "- اسلام سمايلي": '"كسم الجافا سكريبت علي كسم  الجافا بس"',
  };

  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  // Check if quote is an array
  if (Array.isArray(quote)) {
    let [quoteText, imageUrl] = quote;
    document.getElementById("quote").innerHTML =
      quoteText + '<br><img src="' + imageUrl + '" alt="Image">';
  } else {
    document.getElementById("quote").innerHTML = quote;
  }
  document.getElementById("author").innerHTML = author;
}

// function generate() {
//   let quotes = {
//     "- اسلام  سمايلي":
//       '"ابدأ بالضروري ثم انتقل الي  الممكن تجد نفسك تصنع المستحيل"',
//     "- خالد سعيد العراقي": '"البحر الهادئ لا يصنع بحارا ماهر"',
//     "- مروان ريوس": '"علي قدر اهل العزم تأتي العزائم"',
//     "- بودا الاسكندراني": '"مفيش حياة سهلة بتصنع عبقري"',
//     "- حمص": ['"كوباية شاي مرغية احسن من فدان في النوبارية"', url("1.jpg")],
//   };

//   let authors = Object.keys(quotes);

//   let author = authors[Math.floor(Math.random() * authors.length)];
//   let quote = quotes[author];
//   document.getElementById("quote").innerHTML = quote;
//   document.getElementById("author").innerHTML = author;
// }
