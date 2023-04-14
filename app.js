/* Created by Tivotal */

let urlInput = document.querySelector(".field input");
let hiddenInput = document.querySelector(".hidden-input");
let prevArea = document.querySelector(".preview-area");
let thumb = document.querySelector(".thumbnail");
let btn = document.querySelector(".download-btn");
let prevText = document.querySelector(".preview-area span");
let icon = document.querySelector(".icon");

urlInput.onkeyup = () => {
  //getting user entered value
  let imgUrl = urlInput.value;
  prevArea.classList.add("active");
  btn.style.pointerEvents = "auto";
  //checking entered url pattern
  if (imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1) {
    //getting video id by splitting url
    let vidId = imgUrl.split("v=")[1].substring(0, 11);

    //creating thumbnail url for the id we got
    let thumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;

    //passing thumbnail url to thumb image as source

    thumb.src = thumbUrl;
  } else if (imgUrl.indexOf("https://youtu.be/") != -1) {
    //if user pastes this type of url

    //getting video id by splitting url
    let vidId = imgUrl.split("be/")[1].substring(0, 11);

    //creating thumbnail url for the id we got
    let thumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;

    //passing thumbnail url to thumb image as source

    thumb.src = thumbUrl;
  } else if (imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
    //if user entered other image url

    //passing entered url as source
    thumb.src = imgUrl;
  } else {
    //if user entered url is invalid
    thumb.src = "";
    btn.style.pointerEvents = "none";
    prevArea.classList.remove("active");

    //showing error
    if (imgUrl.length != 0) {
      prevArea.style.borderColor = "red";
      icon.style.color = "red";
      prevText.innerText = "Please paste valid Url";
      prevText.style.color = "red";
    }
  }

  //passing img value to hidden input
  hiddenInput.value = thumb.src;
};
