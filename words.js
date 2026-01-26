const wordsData = [
    {kana:"りんご"}, {kana:"ごりら"}, {kana:"らっぱ"}, {kana:"ぱんだ"}, {kana:"だんご"}, {kana:"ごま"}, {kana:"まくら"}, {kana:"らくだ"}, {kana:"だるま"}, {kana:"まつり"},
    {kana:"りぼん"}, {kana:"んげん"}, {kana:"いちご"}, {kana:"ごはん"}, {kana:"はさみ"}, {kana:"みかん"}, {kana:"んこ"}, {kana:"こま"}, {kana:"まり"}, {kana:"りす"},
    {kana:"すいか"}, {kana:"かば"}, {kana:"ばなな"}, {kana:"なす"}, {kana:"すず"}, {kana:"ずぼん"}, {kana:"んぷ"}, {kana:"ぷりん"}, {kana:"んち"}, {kana:"ちーず"},
    {kana:"ずく"}, {kana:"くるま"}, {kana:"まりも"}, {kana:"もんきー"}, {kana:"きりん"}, {kana:"んぷれ"}, {kana:"れもん"}, {kana:"んが"}, {kana:"がらす"}, {kana:"すぷーん"},
    {kana:"んし"}, {kana:"しんぶん"}, {kana:"んき"}, {kana:"きつね"}, {kana:"ねこ"}, {kana:"こあら"}, {kana:"らく"}, {kana:"くま"}, {kana:"まめ"}, {kana:"めだか"},
    {kana:"かめ"}, {kana:"めがね"}, {kana:"ねじ"}, {kana:"じか"}, {kana:"からす"}, {kana:"すめし"}, {kana:"しお"}, {kana:"おに"}, {kana:"にじ"}, {kana:"じかたび"},
    {kana:"びーだま"}, {kana:"まり"}, {kana:"りか"}, {kana:"かまきり"}, {kana:"りん"}, {kana:"んこん"}, {kana:"んたい"}, {kana:"いか"}, {kana:"かめら"}, {kana:"らくご"},
    {kana:"ごま"}, {kana:"まつ"}, {kana:"つみき"}, {kana:"きもの"}, {kana:"のり"}, {kana:"りぼん"}, {kana:"んしょう"}, {kana:"うし"}, {kana:"しか"}, {kana:"かさ"},
    {kana:"さる"}, {kana:"るびー"}, {kana:"びわ"}, {kana:"わに"}, {kana:"にんじん"}, {kana:"んま"}, {kana:"まり"}, {kana:"りす"}, {kana:"すずめ"}, {kana:"めだか"},
    {kana:"かえる"}, {kana:"るす"}, {kana:"すいどう"}, {kana:"うみ"}, {kana:"みみず"}, {kana:"ずかん"}, {kana:"んげ"}, {kana:"げーむ"}, {kana:"むし"}, {kana:"しか"},
    {kana:"かめ"}, {kana:"めだか"}, {kana:"かに"}, {kana:"にわとり"}, {kana:"りす"}, {kana:"すいか"}, {kana:"からす"}, {kana:"すず"}, {kana:"ずぼん"}, {kana:"んぶ"},
    {kana:"ぶた"}, {kana:"たぬき"}, {kana:"きつね"}, {kana:"ねこ"}, {kana:"こま"}, {kana:"まつ"}, {kana:"つばめ"}, {kana:"めだか"}, {kana:"から"}, {kana:"らくだ"},
    {kana:"だるま"}, {kana:"まり"}, {kana:"りぼん"}, {kana:"んま"}, {kana:"まくら"}, {kana:"らっぱ"}, {kana:"ぱせり"}, {kana:"りぼん"}, {kana:"んぱ"}, {kana:"ぱん"},
    {kana:"んこ"}, {kana:"こあら"}, {kana:"らくだ"}, {kana:"だんご"}, {kana:"ごま"}, {kana:"まめ"}, {kana:"めだか"}, {kana:"から"}, {kana:"らっぱ"}, {kana:"ぱんつ"},
    {kana:"つみき"}, {kana:"きん"}, {kana:"んご"}, {kana:"ごりら"}, {kana:"らくだ"}, {kana:"だるま"}, {kana:"まり"}, {kana:"りす"}, {kana:"すず"}, {kana:"ずぼん"},
    {kana:"んぴ"}, {kana:"ぴあの"}, {kana:"のり"}, {kana:"りす"}, {kana:"すず"}, {kana:"ずぼん"}, {kana:"んぷ"}, {kana:"ぷりん"}, {kana:"んま"}, {kana:"まくら"},
    {kana:"らっぱ"}, {kana:"ぱんだ"}, {kana:"だるま"}, {kana:"まつり"}, {kana:"りす"}, {kana:"すいか"}, {kana:"かば"}, {kana:"ばなな"}, {kana:"なす"}, {kana:"すず"},
    {kana:"ずぼん"}, {kana:"んま"}, {kana:"まめ"}, {kana:"めだか"}, {kana:"かえる"}, {kana:"るびー"}, {kana:"びわ"}, {kana:"わに"}, {kana:"にじ"}, {kana:"じか"},
    {kana:"からす"}, {kana:"すめし"}, {kana:"しお"}, {kana:"おに"}, {kana:"にじ"}, {kana:"じかたび"}, {kana:"びーだま"}, {kana:"まり"}, {kana:"りか"}, {kana:"かまきり"},
    {kana:"りん"}, {kana:"んこん"}, {kana:"んたい"}, {kana:"いか"}, {kana:"かめら"}, {kana:"らくご"}, {kana:"ごま"}, {kana:"まつ"}, {kana:"つみき"}, {kana:"きもの"}
];

function getChoices(lastKana) {
    const lastChar = lastKana.slice(-1);
    // 未使用単語から、その文字で始まるものを抽出（index.html側のusedWordsを参照するため、簡易的に全抽出。選別はindex側で行う）
    return wordsData.filter(word => word.kana.startsWith(lastChar));
}
