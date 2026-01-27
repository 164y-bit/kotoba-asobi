// event.js
function handleStart() {
    usedWords = [];
    resetDisplay();
    const startCandidates = wordsData.filter(w => !w.kana.endsWith("ん"));
    const firstWord = startCandidates[Math.floor(Math.random() * startCandidates.length)];
    usedWords.push(firstWord.kana);
    aiTurn(firstWord);
}

function handleUserSelect(word, lastChar) {
    // 尻頭でない場合（設計図No.6）
    if (!word.kana.startsWith(lastChar)) {
        showWarning("ちがうよ");
        return;
    }

    usedWords.push(word.kana);
    updateUserDisplay(word.kana); // 「今出した感じ」をつける
    speak(word.kana);

    // 「ん」がついた（設計図No.5）
    if (word.kana.endsWith("ん")) {
        setTimeout(() => endGame("「ん」ついたよ。", "ai", word.kana), 800);
        return;
    }

    const thinkingTime = Math.floor(Math.random() * 1500) + 1000;
    document.getElementById('msgArea').innerText = "じじAIが かんがえちゅう...";

    setTimeout(() => {
        const nextWord = getAiNextWord(word.kana);
        if (!nextWord) {
            // じじAIカード切れ（設計図No.2）
            endGame("きみの勝ち", "user", word.kana);
        } else {
            // じじAIが「ん」を出した（設計図No.4）
            if (nextWord.kana.endsWith("ん")) {
                aiTurn(nextWord);
                setTimeout(() => endGame("きみの勝ち", "user", nextWord.kana), 1000);
            } else {
                aiTurn(nextWord);
            }
        }
    }, thinkingTime);
}
