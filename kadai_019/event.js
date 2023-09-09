
//btn(オブジェクト)を定数に格納
const changeBtn = document.getElementById("btn");

//btnのイベントの設定
changeBtn.addEventListener("click",()=>{
    const text = document.querySelector("h2");
    text.innerHTML = "ボタンをクリックしました";
    console.log(text);
});
