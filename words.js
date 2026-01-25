// しりとり用データ
const wordsData = [
  { kanji: "胡麻", kana: "ごま" },
  { kanji: "ゴリラ", kana: "ごりら" },
  { kanji: "御飯", kana: "ごはん" },
  { kanji: "喇叭", kana: "らっぱ" },
  { kanji: "ライオン", kana: "らいおん" },
  { kanji: "林檎", kana: "りんご" },
  { kanji: "独楽", kana: "こま" },
  { kanji: "枕", kana: "まくら" },
  { kanji: "ラッパ", kana: "らっぱ" }
];

// ゲームの動きを制御する関数（index.htmlから呼ばれます）
function getChoices(lastKana) {
  const lastChar = lastKana.slice(-1); // 「りんご」なら「ご」を取得
  
  // 「ご」から始まる言葉をデータから探す
  let matches = wordsData.filter(word => word.kana.startsWith(lastChar));
  
  // もし候補が足りない時のためにシャッフルして3つ選ぶ
  return matches.sort(() => 0.5 - Math.random()).slice(0, 3);
}

// 最初の言葉を決める
function getFirstWord() {
  return wordsData.find(w => w.kana === "りんご");
}
