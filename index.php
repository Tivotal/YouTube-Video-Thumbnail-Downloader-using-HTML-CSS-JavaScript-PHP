<?php 
if(isset($_POST['button'])){
  //if the button clicked
  $imgUrl = $_POST['imgurl'];
  $ch = curl_init($imgUrl);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  //transferring data as return value of curl
  $downoadThumb = curl_exec($ch);
  curl_close($ch);
  header('Content-type: image/jpg');
  header('Content-Disposition: attachment;filename="thumbnail.jpg"');
  echo $downoadThumb;
}
?>


<!DOCTYPE html>
<!--Created by Tivotal-->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thumbnail Downloader | Tivotal</title>

    <!--font awesome-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    <!--css file-->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
      <header>Thumbnail Downloader</header>
      <div class="url-input">
        <span class="title">Paste Video Url:</span>
        <div class="field">
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=PYj8r-Mtp00"
            required
          />
          <input type="hidden" class="hidden-input" name="imgurl"/>
          <span class="bottom-line"></span>
        </div>
      </div>
      <div class="preview-area">
        <img src="" alt="" class="thumbnail" />
        <i class="icon fas fa-cloud-download-alt"></i>
        <span>Paste video url to get preview</span>
      </div>
      <button class="download-btn" type="submit" name="button">Download Thumbnail</button>
    </form>

    <script src="app.js"></script>
  </body>
</html>
