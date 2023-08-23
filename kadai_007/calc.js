for( var i = 1; i <=20; i++){
    //numに値を代入
    let num = i;
    
    if(((num%3) === 0) && ((num%5) !== 0)){
        console.log("3の倍数です");
    }
    else if (((num%3) !== 0) && ((num%5) === 0)) {
        console.log("5の倍数です");
    }
    else if (((num%3) === 0) && ((num%5) === 0)) {
        console.log("3と5の倍数です");
    }
    else {
        console.log(num);
    }
}



