// 待做事項: 先做好旋轉，然後在旋轉的同時改變button內的文字
    // 好像可以加上onclick=""，有搞頭
// 之後在做好旋轉時如何估計抽到幾號

let click_count = 0;
let rotation = 0;
const angle = 90;

document.getElementById("btn").addEventListener("click", function(){
    click_count++;
    this.innerText = "Clicked " + click_count;
    
    const picture = document.getElementById("rotate_pic");
    if(picture){
        console.log("clicked");
        rotation = (rotation + angle) % 360;
        picture.style.transition = 'transform 2s';
        picture.style.transform = `rotate(${rotation}deg)`;
    } else {
        console.error("Picture not found");
    }
})

