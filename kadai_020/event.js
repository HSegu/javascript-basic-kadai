
//btn(オブジェクト)を定数に格納
const changeBtn = document.getElementById("btn");

//btnのイベントの設定
setTimeout(()=>{
    const text = document.querySelector("h2");
    text.innerHTML = "ボタンをクリックしました";
}, 2000);
