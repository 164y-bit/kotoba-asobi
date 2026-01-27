// logic.js - しりとりの中枢ロジック

// ゲームの状態管理
let usedWords = [];

// しりとり判定とAIの回答選択
function getAiNextWord(userKana) {
    const lastChar = userKana.slice(-1);
    let aiMatches = wordsData.filter(w => w.kana.startsWith(lastChar) && !usedWords.includes(w.kana));
    
    if (aiMatches.length === 0) return null; // 負け

    // 「ん」を避ける単語を優先。なければ諦めて「ん」を出す
    return aiMatches.find(w => !w.kana.endsWith("ん")) || aiMatches[0];
}

// ユーザーの選択肢を作る（知育ロジック）
function createChoices(lastKana) {
    const lastChar = lastKana.slice(-1);
    let available = wordsData.filter(w => !usedWords.includes(w.kana));
    let correct = available.filter(w => w.kana.startsWith(lastChar));
    let incorrect = available.filter(w => !w.kana.startsWith(lastChar));

    let displayWords = [];
    let seen = new Set();

    // 正解を最大2つ
    correct.sort(() => Math.random() - 0.5);
    for(let w of correct) {
        if(displayWords.length < 2 && !seen.has(w.kana)) {
            displayWords.push(w);
            seen.add(w.kana);
        }
    }

    // 残りを不正解で埋める
    incorrect.sort(() => Math.random() - 0.5);
    for(let w of incorrect) {
        if(displayWords.length < 3 && !seen.has(w.kana)) {
            displayWords.push(w);
            seen.add(w.kana);
        }
    }
    
    return displayWords.sort(() => Math.random() - 0.5);
}
