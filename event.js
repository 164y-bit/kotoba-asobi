// event.js
function handleUserSelect(word, lastChar) {
    if (!word.kana.startsWith(lastChar)) {
        showWarning("ちがうよ");
        return;
    }

    usedWords.push(word.kana);
    updateUserDisplay(word.kana);
    speak(word.kana);

    if (word.kana.endsWith("ん")) {
        // 修正：負けても選択肢を残すため、endGameにfalseを渡す
        setTimeout(() => endGame("「ん」ついたよ。", "ai", word.kana, false), 800);
        return;
    }

    const thinkingTime = Math.floor(Math.random() * 1500) + 1000;
    document.getElementById('msgArea').innerText = "じじAIが かんがえちゅう...";

    setTimeout(() => {
        // 修正：AIが答える直前に「考え中」を消す
        document.getElementById('msgArea').innerText = "どれにする？";
        
        const nextWord = getAiNextWord(word.kana);
        if (!nextWord) {
            endGame("きみの勝ち", "user", word.kana, false);
        } else {
            if (nextWord.kana.endsWith("ん")) {
                aiTurn(nextWord);
                setTimeout(() => endGame("きみの勝ち", "user", nextWord.kana, false), 1000);
            } else {
                aiTurn(nextWord);
            }
        }
    }, thinkingTime);
}

// 修正：endGame関数の引数に keepButtons を追加
function endGame(msg, winner, lastWord, keepButtons = true) {
    document.getElementById('msgArea').innerText = msg;
    speak(msg);
    const btn = `<button class="retry-btn" onclick="handleStart()">もう一回</button>`;
    if(winner === "ai") {
        document.getElementById('aiWord').innerText = "もう一回";
        document.getElementById('userWord').innerText = lastWord;
        document.getElementById('aiRetry').innerHTML = btn;
    } else {
        document.getElementById('aiWord').innerText = lastWord;
        document.getElementById('userWord').innerText = "もう一回";
        document.getElementById('userRetry').innerHTML = btn;
    }
    // 修正：keepButtonsがfalseならボタンを消さない
    if (!keepButtons) {
        // 全ボタンを無効化するだけで、見た目は残す
        const buttons = document.querySelectorAll('.choice');
        buttons.forEach(b => b.disabled = true);
    } else {
        document.getElementById('choices').innerHTML = '';
    }
}
