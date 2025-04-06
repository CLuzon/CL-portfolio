const textEl = document.getElementById("introText");
let shinarioNum = 0;
let typing = false;

const shinarioTxt = [
    "はじめまして！",
    "わたしはCluzon（クルソン）と言います",
    "現在Web制作の学習をしています",
    "このサイトはその学習の一環として制作したものです",
    "ご意見がありましたら、ご気軽にお知らせください！",
    "また、私の制作物は「Report」からご覧いただけます",
    "文章はここまでです",
    "再度初めからお読みになる際は繰り返しエンターキーを押してください\nそれでは、良い一日を！",
    " "
];
// shinarioTxtの配列を作成

function typeText(text) { //typeText(text)は const text = shinariTxt[shinarioNum]; と同じ意味

    typing = true;
    textEl.innerHTML = ""; // テキストを消去
    let index = 0;

    function type () {
        if (index < shinarioTxt[shinarioNum].length) {
            const char = text.charAt(index);
            // shinarioTxt[shinarioNum]のindex番目の文字を取得
            if (char === "\n") {
                textEl.innerHTML += "<br>";
            } else {
                textEl.innerHTML += char;
            }
            index++;
            setTimeout(type, 50);
        } else {
            typing = false;
        }
    }
    type();
}

document.addEventListener("keydown", function(event) {

    console.log(shinarioNum);

    if (event.key === "Enter" && !typing) {
        console.log("Enter key pressed");
        shinarioNum = (shinarioNum + 1) % (shinarioTxt.length); 
        // shinarioNumを1増やす
        
        typeText(shinarioTxt[shinarioNum]);
        // shinarioTxt[shinarioNum]を引数に渡す
    }
    
});
