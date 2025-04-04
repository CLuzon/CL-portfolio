const textEl = document.getElementById("introText");
let shinarioNum = 0;
document.addEventListener("keydown", function(event) {

    const shinarioTxt = [
        "はじめまして！",
        "わたしはCluzon（クルソン）と言います",
        "現在Web制作の学習をしています",
        "このサイトはその学習の一環として制作したものです",
        "ご意見がありましたら、ご気軽にお知らせください！",
        "また、私の制作物は「Report」からご覧いただけます",
        "文章はここまでです",
        "再度初めからお読みになる際は二度エンターキーを押してください<br>それでは、良い一日を！",
        " "
    ];
    textEl.innerHTML = shinarioTxt[shinarioNum];
    // Enterキーが押されたときの処理
    if (event.key === "Enter") {
        console.log("Enter key pressed");
        shinarioNum = (shinarioNum + 1) % (shinarioTxt.length); 
        // shinarioNumを1増やす
        // shinarioNumがshinarioTxtの長さ以上になったらリセット;
        console.log(shinarioNum);
    }
    
});
