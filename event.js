// event.js - 更新版

function handleStart() {
    usedWords = [];
    resetDisplay();
    
    const startCandidates = wordsData.filter(w => !w.kana.endsWith("ん"));
    const firstWord = startCandidates[Math.floor(Math.random() * startCandidates.length)];
    
    // 最初の単語も「使用済み」に入れる
    usedWords.push(firstWord.kana);
    aiTurn(firstWord);
}

function handleUserSelect(word, lastChar) {
    if (!word.kana.startsWith(lastChar)) {
        // 「ちがうよ」を目立たせる演出
        const msg = document.getElementById('msgArea');
        msg.style.color = "red";
        msg.style.fontSize = "1.5rem";
        speak("あれ？ちがうよ！");
        setTimeout(() => { 
            msg.style.color = "#D2691E"; 
            msg.style.fontSize = "1rem";
        }, 1000);
        return;
    }

    usedWords.push(word.kana);
    updateUserDisplay(word.kana); // 今出した感じをUI側でつける
    speak(word.kana);

    if (word.kana.endsWith("ん")) {
        setTimeout(() => endGame("「ん」がついたよ。", "ai"), 800);
        return;
    }

    // AIの番：思考時間をランダムにする（1000ms 〜 2500ms）
    const thinkingTime = Math.floor(Math.random() * 1500) + 1000;
    
    document.getElementById('msgArea').innerText = "じじAIが かんがえちゅう...";

    setTimeout(() => {
        const nextWord = getAiNextWord(word.kana);
        if (!nextWord) {
            endGame("じじの まけ！", "user");
        } else {
            aiTurn(nextWord);
        }
    }, thinkingTime);
}
