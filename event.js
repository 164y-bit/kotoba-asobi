// event.js - ゲーム進行と演出

function handleStart() {
    usedWords = [];
    resetDisplay(); // ui.js(index内)で定義
    
    const startCandidates = wordsData.filter(w => !w.kana.endsWith("ん"));
    const firstWord = startCandidates[Math.floor(Math.random() * startCandidates.length)];
    aiTurn(firstWord);
}

function handleUserSelect(word, lastChar) {
    if (!word.kana.startsWith(lastChar)) {
        speak("あれ？ちがうよ！");
        return;
    }

    usedWords.push(word.kana);
    updateUserDisplay(word.kana); // ui.js(index内)で定義
    speak(word.kana);

    if (word.kana.endsWith("ん")) {
        setTimeout(() => endGame("「ん」がついたよ。", "ai"), 800);
        return;
    }

    // AIの番へ
    setTimeout(() => {
        const nextWord = getAiNextWord(word.kana);
        if (!nextWord) {
            endGame("じじの まけ！", "user");
        } else {
            aiTurn(nextWord);
        }
    }, 1000);
}
