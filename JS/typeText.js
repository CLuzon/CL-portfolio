const textEl = document.getElementById("introText");
// idがintroTextの要素を取得
let shinarioNum = 0;
// shinarioNumを初期化
document.addEventListener("keydown", function(event) {

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


    // Enterキーが押されたときの処理
    if (event.key === "Enter") {
        textEl.innerHTML = ""; // テキストを消去
        let index = 0;


        console.log("Enter key pressed");
        shinarioNum = (shinarioNum + 1) % (shinarioTxt.length); 
        // shinarioNumを1増やす
        // shinarioNumがshinarioTxtの長さ以上になったらリセット;
        console.log(shinarioNum);

        function type () {
            if (index < shinarioTxt[shinarioNum].length) {
                const char = shinarioTxt[shinarioNum].charAt(index);
                // shinarioTxt[shinarioNum]のindex番目の文字を取得
                if (char === "\n") {
                    textEl.innerHTML += "<br>";
                } else {
                    textEl.innerHTML += char;
                }
                index++;
                setTimeout(type, 50);
            }
        }
        type();
    }
    
});
