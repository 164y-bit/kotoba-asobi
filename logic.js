// logic.js - 長音（ー）対応版

let usedWords = [];

// 次の頭文字を決定するロジック
function getNextFirstChar(kana) {
    let lastChar = kana.slice(-1);
    
    // もし最後が長音「ー」なら、その前の文字を取る
    if (lastChar === "ー" && kana.length > 1) {
        lastChar = kana.slice(-2, -1);
    }
    
    // 小さい「ぁぃぅぇぉゃゅょ」などの対応が必要ならここで変換も可能ですが、
    // まずは長音を解決しましょう。
    return lastChar;
}

function getAiNextWord(userKana) {
    // 長音を考慮した頭文字を取得
    const headChar = getNextFirstChar(userKana);
    
    let aiMatches = wordsData.filter(w => w.kana.startsWith(headChar) && !usedWords.includes(w.kana));
    
    if (aiMatches.length === 0) return null;

    const selected = aiMatches.find(w => !w.kana.endsWith("ん")) || aiMatches[0];
    usedWords.push(selected.kana); 
    return selected;
}

function createChoices(lastKana) {
    // ユーザーへの選択肢も、長音を考慮した頭文字から作成
    const headChar = getNextFirstChar(lastKana);
    
    let available = wordsData.filter(w => !usedWords.includes(w.kana));
    let correct = available.filter(w => w.kana.startsWith(headChar));
    let incorrect = available.filter(w => !w.kana.startsWith(headChar));

    let displayWords = [];
    let seen = new Set();

    correct.sort(() => Math.random() - 0.5);
    for(let w of correct) {
        if(displayWords.length < 2 && !seen.has(w.kana)) {
            displayWords.push(w);
            seen.add(w.kana);
        }
    }

    incorrect.sort(() => Math.random() - 0.5);
    for(let w of incorrect) {
        if(displayWords.length < 3 && !seen.has(w.kana)) {
            displayWords.push(w);
            seen.add(w.kana);
        }
    }
    
    return displayWords.sort(() => Math.random() - 0.5);
}
