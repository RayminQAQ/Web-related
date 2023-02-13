// 取得並操作html元素：DOM
var title = document.getElementsByClassName("title")[0]; 
    // NOTICE: document.getElementsByClassName() return a node list
    console.log(title + "For Debug purpose");
title.innerText = "更改後的content標題";
title.style.backgroundColor = "red";    

// Event listener：(1) insert into html tag, or (2) use AddEventListener("attribute", function(){...})
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    this.innerText = "changed";
    this.style.color = "red";
})

document.getElementById("pic").addEventListener("mouseover", function(){
    this.src = "http://fakeimg.pl/70x70/?text=mouseover";
})

document.getElementById("pic").addEventListener("mouseout", function(){
    this.src = "http://fakeimg.pl/100x100/?text=mouseout";
})