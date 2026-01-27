// logic.js
let usedWords = [];

function getNextFirstChar(kana) {
    let lastChar = kana.slice(-1);
    if (lastChar === "ー" && kana.length > 1) {
        lastChar = kana.slice(-2, -1);
    }
    return lastChar;
}

function getAiNextWord(userKana) {
    const headChar = getNextFirstChar(userKana);
    let aiMatches = wordsData.filter(w => w.kana.startsWith(headChar) && !usedWords.includes(w.kana));
    if (aiMatches.length === 0) return null;
    const selected = aiMatches.find(w => !w.kana.endsWith("ん")) || aiMatches[0];
    usedWords.push(selected.kana); 
    return selected;
}

function createChoices(lastKana) {
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
