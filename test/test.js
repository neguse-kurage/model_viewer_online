window.onload = function(){
	var cvs = document.getElementById("cvs");
	var ctx = cvs.getContext('2d');

	var img = new Image();
  	img.src = "inu.png";

  	//画像をcanvasに設定
  	img.onload = function(){
    ctx.drawImage(img, 0, 0, 400, 300);  //400x300に縮小表示
  	}
};
