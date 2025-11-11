export interface Question {
  id: number;
  category: string;
  difficulty: number;
  text: string;
}

export const questions: Question[] = [
  // 語感（難易度1）
  { id: 1, category: "語感", difficulty: 1, text: "今日の気分を「味」にたとえると？理由も一言" },
  { id: 2, category: "語感", difficulty: 1, text: "今の季節を「色」で表すなら？" },
  { id: 3, category: "語感", difficulty: 1, text: "自分の名前の音から受けるイメージは？" },
  { id: 4, category: "語感", difficulty: 1, text: "好きな言葉の響きは？（例：さらさら、きらきら）" },
  { id: 5, category: "語感", difficulty: 1, text: "今の気持ちを「音」にたとえると？" },

  // 言い換え（難易度1）
  { id: 6, category: "言い換え", difficulty: 1, text: "「忙しい」を使わずに今日を表現すると？" },
  { id: 7, category: "言い換え", difficulty: 1, text: "「楽しい」を別の言葉で言うと？" },
  { id: 8, category: "言い換え", difficulty: 1, text: "「疲れた」を前向きな言葉に変えると？" },
  { id: 9, category: "言い換え", difficulty: 1, text: "「普通」を別の言い方で表すと？" },
  { id: 10, category: "言い換え", difficulty: 1, text: "「難しい」をポジティブに言い換えると？" },

  // 比喩（難易度2）
  { id: 11, category: "比喩", difficulty: 2, text: "今週の自分を天気にたとえると？その理由は？" },
  { id: 12, category: "比喩", difficulty: 2, text: "自分を動物にたとえるなら？なぜ？" },
  { id: 13, category: "比喩", difficulty: 2, text: "今の気持ちを乗り物にたとえると？" },
  { id: 14, category: "比喩", difficulty: 2, text: "学校（または仕事）を料理にたとえると？" },
  { id: 15, category: "比喩", difficulty: 2, text: "自分の性格を建物にたとえると？" },

  // 視点変換（難易度2）
  { id: 16, category: "視点変換", difficulty: 2, text: "今日あったことを、他の人の立場から説明すると？" },
  { id: 17, category: "視点変換", difficulty: 2, text: "苦手なことを「得意な人」の視点で見ると？" },
  { id: 18, category: "視点変換", difficulty: 2, text: "失敗を「成長のチャンス」として言い換えると？" },
  { id: 19, category: "視点変換", difficulty: 2, text: "嫌いな科目の良いところを3つ挙げるなら？" },
  { id: 20, category: "視点変換", difficulty: 2, text: "自分の短所を長所として言い換えると？" },

  // 抽象化（難易度3）
  { id: 21, category: "抽象化", difficulty: 3, text: "「友達」とは一言で言うと何？" },
  { id: 22, category: "抽象化", difficulty: 3, text: "「学ぶ」ってどういうこと？自分の言葉で" },
  { id: 23, category: "抽象化", difficulty: 3, text: "「成長」を別の言葉で定義すると？" },
  { id: 24, category: "抽象化", difficulty: 3, text: "「幸せ」を自分なりに説明すると？" },
  { id: 25, category: "抽象化", difficulty: 3, text: "「がんばる」とは具体的にどういうこと？" },

  // 具体化（難易度3）
  { id: 26, category: "具体化", difficulty: 3, text: "「優しさ」を行動で示すなら？具体例を1つ" },
  { id: 27, category: "具体化", difficulty: 3, text: "「丁寧」ってどんな様子？具体的に説明" },
  { id: 28, category: "具体化", difficulty: 3, text: "「落ち着く」とはどういう状態？詳しく" },
  { id: 29, category: "具体化", difficulty: 3, text: "「集中する」ってどうやる？あなたの方法は？" },
  { id: 30, category: "具体化", difficulty: 3, text: "「協力」を実際にやるとしたら？場面を想像して" },

  // メタ認知（難易度3）
  { id: 31, category: "メタ認知", difficulty: 3, text: "今、自分はどんな気持ち？その気持ちに名前をつけると？" },
  { id: 32, category: "メタ認知", difficulty: 3, text: "自分が一番集中できるのはどんな時？" },
  { id: 33, category: "メタ認知", difficulty: 3, text: "自分の考え方のクセは？良い面と改善点" },
  { id: 34, category: "メタ認知", difficulty: 3, text: "自分を客観的に見ると、どんな人？" },
  { id: 35, category: "メタ認知", difficulty: 3, text: "今の自分に必要なものは？理由も含めて" },

  // 価値観（難易度3）
  { id: 36, category: "価値観", difficulty: 3, text: "あなたが大切にしていることは？" },
  { id: 37, category: "価値観", difficulty: 3, text: "「良い一日」とはどんな日？" },
  { id: 38, category: "価値観", difficulty: 3, text: "あなたにとって「成功」とは？" },
  { id: 39, category: "価値観", difficulty: 3, text: "人に優しくするのはなぜ？あなたの考え" },
  { id: 40, category: "価値観", difficulty: 3, text: "何があると「やる気」が出る？" },

  // 語感（追加）
  { id: 41, category: "語感", difficulty: 1, text: "朝の空気を「手触り」で表すと？" },
  { id: 42, category: "語感", difficulty: 1, text: "自分の笑い声はどんな音？" },
  { id: 43, category: "語感", difficulty: 1, text: "今週を「温度」で表すなら？" },
  { id: 44, category: "語感", difficulty: 1, text: "好きな季節の「におい」は？" },
  { id: 45, category: "語感", difficulty: 1, text: "自分の歩き方を音で表すと？" },
  { id: 46, category: "語感", difficulty: 2, text: "今の心の状態を「天気」と「色」で表すと？" },
  { id: 47, category: "語感", difficulty: 2, text: "友達との会話を「音楽ジャンル」にたとえると？" },
  { id: 48, category: "語感", difficulty: 2, text: "今日の出来事を「香り」で表現すると？" },

  // 言い換え（追加）
  { id: 49, category: "言い換え", difficulty: 1, text: "「つまらない」を別の言葉で言うと？" },
  { id: 50, category: "言い換え", difficulty: 1, text: "「すごい」を使わずに感動を表すと？" },
  { id: 51, category: "言い換え", difficulty: 1, text: "「嬉しい」を体の感覚で表現すると？" },
  { id: 52, category: "言い換え", difficulty: 1, text: "「悲しい」を別の表現で言うと？" },
  { id: 53, category: "言い換え", difficulty: 2, text: "「面倒くさい」をポジティブに言い換えると？" },
  { id: 54, category: "言い換え", difficulty: 2, text: "「緊張する」を別の言い方で表すと？" },
  { id: 55, category: "言い換え", difficulty: 2, text: "「心配」を前向きな言葉に変えると？" },
  { id: 56, category: "言い換え", difficulty: 2, text: "「退屈」を別の視点から表現すると？" },

  // 比喩（追加）
  { id: 57, category: "比喩", difficulty: 2, text: "今の自分を植物にたとえると？なぜ？" },
  { id: 58, category: "比喩", difficulty: 2, text: "友達関係を食べ物にたとえると？" },
  { id: 59, category: "比喩", difficulty: 2, text: "自分の一日を映画にたとえると？ジャンルは？" },
  { id: 60, category: "比喩", difficulty: 2, text: "今の気分を楽器にたとえると？" },
  { id: 61, category: "比喩", difficulty: 2, text: "自分の部屋を天気にたとえると？" },
  { id: 62, category: "比喩", difficulty: 3, text: "人生を旅にたとえると、今はどんな場所？" },
  { id: 63, category: "比喩", difficulty: 3, text: "学びを料理にたとえると、どんなプロセス？" },
  { id: 64, category: "比喩", difficulty: 3, text: "自分の心を海にたとえると、今の状態は？" },

  // 視点変換（追加）
  { id: 65, category: "視点変換", difficulty: 2, text: "朝が苦手な理由を「朝の視点」から説明すると？" },
  { id: 66, category: "視点変換", difficulty: 2, text: "宿題を「未来の自分」の視点で見ると？" },
  { id: 67, category: "視点変換", difficulty: 2, text: "雨の日の良いところを3つ挙げると？" },
  { id: 68, category: "視点変換", difficulty: 2, text: "待つ時間を楽しむとしたら？" },
  { id: 69, category: "視点変換", difficulty: 3, text: "自分の悩みを「友達の悩み」として聞いたら？" },
  { id: 70, category: "視点変換", difficulty: 3, text: "失敗を「先生」にたとえると何を教えてくれる？" },
  { id: 71, category: "視点変換", difficulty: 3, text: "嫌いな人の良いところを5つ挙げるなら？" },
  { id: 72, category: "視点変換", difficulty: 3, text: "今の困りごとを「10年後の自分」はどう見る？" },

  // 抽象化（追加）
  { id: 73, category: "抽象化", difficulty: 3, text: "「やさしさ」とは一言で言うと？" },
  { id: 74, category: "抽象化", difficulty: 3, text: "「勇気」を自分の言葉で定義すると？" },
  { id: 75, category: "抽象化", difficulty: 3, text: "「つながり」ってどういうこと？" },
  { id: 76, category: "抽象化", difficulty: 3, text: "「自由」とは何？具体的に説明して" },
  { id: 77, category: "抽象化", difficulty: 3, text: "「信頼」を別の言葉で表すと？" },
  { id: 78, category: "抽象化", difficulty: 3, text: "「豊かさ」とは？お金以外で" },

  // 具体化（追加）
  { id: 79, category: "具体化", difficulty: 3, text: "「思いやり」を行動で示すなら？3つ例を" },
  { id: 80, category: "具体化", difficulty: 3, text: "「丁寧に話す」とは具体的にどうすること？" },
  { id: 81, category: "具体化", difficulty: 3, text: "「よく聞く」ってどういう様子？詳しく" },
  { id: 82, category: "具体化", difficulty: 3, text: "「前向き」な人の行動を3つ挙げると？" },
  { id: 83, category: "具体化", difficulty: 3, text: "「整理整頓」を具体的にやるとしたら？" },
  { id: 84, category: "具体化", difficulty: 3, text: "「健康的な生活」とは具体的に何をすること？" },

  // メタ認知（追加）
  { id: 85, category: "メタ認知", difficulty: 3, text: "自分が落ち込む時のパターンは？" },
  { id: 86, category: "メタ認知", difficulty: 3, text: "どんな時に自分は力を発揮できる？" },
  { id: 87, category: "メタ認知", difficulty: 3, text: "自分の「口癖」は？それは何を表してる？" },
  { id: 88, category: "メタ認知", difficulty: 3, text: "自分が最近成長したと思うことは？" },
  { id: 89, category: "メタ認知", difficulty: 3, text: "ストレスを感じた時、自分はどう反応する？" },
  { id: 90, category: "メタ認知", difficulty: 3, text: "自分の「強み」を3つ挙げると？" },
  { id: 91, category: "メタ認知", difficulty: 3, text: "自分が一番リラックスできる時は？" },
  { id: 92, category: "メタ認知", difficulty: 3, text: "今の自分に足りないものは？なぜ？" },

  // 価値観（追加）
  { id: 93, category: "価値観", difficulty: 3, text: "あなたにとって「友情」とは？" },
  { id: 94, category: "価値観", difficulty: 3, text: "「かっこいい」人ってどんな人？" },
  { id: 95, category: "価値観", difficulty: 3, text: "人生で一番大事なことは？" },
  { id: 96, category: "価値観", difficulty: 3, text: "「尊敬できる人」の条件は？" },
  { id: 97, category: "価値観", difficulty: 3, text: "あなたが「許せないこと」は？なぜ？" },
  { id: 98, category: "価値観", difficulty: 3, text: "10年後、どんな自分でいたい？" },
  { id: 99, category: "価値観", difficulty: 3, text: "「良い人間関係」とはどんなもの？" },
  { id: 100, category: "価値観", difficulty: 3, text: "自分が「これだけは譲れない」ことは？" },

  // 感情表現（新カテゴリ・難易度1）
  { id: 101, category: "感情表現", difficulty: 1, text: "今、胸のあたりはどんな感じ？" },
  { id: 102, category: "感情表現", difficulty: 1, text: "嬉しい時、体のどこが反応する？" },
  { id: 103, category: "感情表現", difficulty: 1, text: "怒りを色で表すなら？" },
  { id: 104, category: "感情表現", difficulty: 1, text: "安心した時の体の感覚は？" },
  { id: 105, category: "感情表現", difficulty: 2, text: "「モヤモヤ」を別の言葉で表現すると？" },
  { id: 106, category: "感情表現", difficulty: 2, text: "今の気持ちを天気と温度で表すと？" },
  { id: 107, category: "感情表現", difficulty: 2, text: "「ワクワク」する時、何が起きてる？" },
  { id: 108, category: "感情表現", difficulty: 2, text: "寂しさを感じる時、体はどう反応する？" },

  // 対人関係（新カテゴリ・難易度2）
  { id: 109, category: "対人関係", difficulty: 2, text: "友達に必要な3つの要素は？" },
  { id: 110, category: "対人関係", difficulty: 2, text: "「良い聞き手」ってどんな人？" },
  { id: 111, category: "対人関係", difficulty: 2, text: "人と仲良くなるコツは？" },
  { id: 112, category: "対人関係", difficulty: 2, text: "けんかした後、どう仲直りする？" },
  { id: 113, category: "対人関係", difficulty: 3, text: "「信頼される人」の特徴は？" },
  { id: 114, category: "対人関係", difficulty: 3, text: "苦手な人とどう接する？あなたの方法" },
  { id: 115, category: "対人関係", difficulty: 3, text: "人に感謝を伝える時、何を大切にする？" },
  { id: 116, category: "対人関係", difficulty: 3, text: "「良いチーム」に必要なものは？" },

  // 時間感覚（新カテゴリ・難易度2）
  { id: 117, category: "時間感覚", difficulty: 2, text: "時間が早く過ぎる時って？" },
  { id: 118, category: "時間感覚", difficulty: 2, text: "時間がゆっくり感じる時は？" },
  { id: 119, category: "時間感覚", difficulty: 2, text: "一日で一番好きな時間帯は？なぜ？" },
  { id: 120, category: "時間感覚", difficulty: 3, text: "過去・現在・未来、今一番大事なのは？" },
  { id: 121, category: "時間感覚", difficulty: 3, text: "「今を大切にする」とは具体的に？" },
  { id: 122, category: "時間感覚", difficulty: 3, text: "1年前の自分に何を伝える？" },

  // 創造的思考（新カテゴリ・難易度2）
  { id: 123, category: "創造的思考", difficulty: 2, text: "もし空を飛べたら、最初にどこへ行く？" },
  { id: 124, category: "創造的思考", difficulty: 2, text: "自分だけの「理想の一日」を設計すると？" },
  { id: 125, category: "創造的思考", difficulty: 2, text: "新しい祝日を作るなら、何の日？" },
  { id: 126, category: "創造的思考", difficulty: 2, text: "もし時間を止められたら何をする？" },
  { id: 127, category: "創造的思考", difficulty: 3, text: "100年後の学校はどうなってる？想像して" },
  { id: 128, category: "創造的思考", difficulty: 3, text: "「幸せマシーン」を発明するなら、どんな機能？" },
  { id: 129, category: "創造的思考", difficulty: 3, text: "理想の街を作るなら、何を一番大切にする？" },
  { id: 130, category: "創造的思考", difficulty: 3, text: "もし法律を一つ作れるなら？その理由は？" },

  // 問題解決（新カテゴリ・難易度2）
  { id: 131, category: "問題解決", difficulty: 2, text: "朝起きるのが苦手。どう工夫する？" },
  { id: 132, category: "問題解決", difficulty: 2, text: "友達と意見が合わない時、どうする？" },
  { id: 133, category: "問題解決", difficulty: 2, text: "やる気が出ない時の対処法は？" },
  { id: 134, category: "問題解決", difficulty: 2, text: "失敗した時、気持ちを切り替える方法は？" },
  { id: 135, category: "問題解決", difficulty: 3, text: "クラスで誰とも話さない子がいたら？" },
  { id: 136, category: "問題解決", difficulty: 3, text: "大事なものをなくした。どう探す？" },
  { id: 137, category: "問題解決", difficulty: 3, text: "意見が対立した時、どう解決する？" },
  { id: 138, category: "問題解決", difficulty: 3, text: "自分の苦手を克服するには？具体策3つ" },

  // 自己発見（新カテゴリ・難易度1）
  { id: 139, category: "自己発見", difficulty: 1, text: "自分が一番好きなことは？" },
  { id: 140, category: "自己発見", difficulty: 1, text: "得意なことを3つ挙げると？" },
  { id: 141, category: "自己発見", difficulty: 1, text: "自分らしいと思う瞬間は？" },
  { id: 142, category: "自己発見", difficulty: 1, text: "人からどんな風に見られてる？" },
  { id: 143, category: "自己発見", difficulty: 2, text: "自分の「個性」って何だと思う？" },
  { id: 144, category: "自己発見", difficulty: 2, text: "子どもの頃から変わらないところは？" },
  { id: 145, category: "自己発見", difficulty: 2, text: "最近、自分について発見したことは？" },
  { id: 146, category: "自己発見", difficulty: 3, text: "自分を一言で表すなら？その理由は？" },
  { id: 147, category: "自己発見", difficulty: 3, text: "「本当の自分」ってどんな人？" },

  // 感謝と気づき（新カテゴリ・難易度1）
  { id: 148, category: "感謝と気づき", difficulty: 1, text: "今日、ありがたいと思ったことは？" },
  { id: 149, category: "感謝と気づき", difficulty: 1, text: "最近嬉しかった小さなことは？" },
  { id: 150, category: "感謝と気づき", difficulty: 1, text: "いつも使ってるもので、一番大事なのは？" },
  { id: 151, category: "感謝と気づき", difficulty: 2, text: "当たり前だけど、実は感謝すべきことは？" },
  { id: 152, category: "感謝と気づき", difficulty: 2, text: "自分を支えてくれている人は？何に感謝？" },
  { id: 153, category: "感謝と気づき", difficulty: 2, text: "最近、心が温かくなった瞬間は？" },
  { id: 154, category: "感謝と気づき", difficulty: 3, text: "失って初めて気づく大切なものは？" },
  { id: 155, category: "感謝と気づき", difficulty: 3, text: "今の自分があるのは、誰のおかげ？" },

  // 挑戦と成長（新カテゴリ・難易度2）
  { id: 156, category: "挑戦と成長", difficulty: 2, text: "今、挑戦してみたいことは？" },
  { id: 157, category: "挑戦と成長", difficulty: 2, text: "最近、できるようになったことは？" },
  { id: 158, category: "挑戦と成長", difficulty: 2, text: "失敗から学んだ大切なことは？" },
  { id: 159, category: "挑戦と成長", difficulty: 2, text: "苦手を克服した経験は？どうやって？" },
  { id: 160, category: "挑戦と成長", difficulty: 3, text: "「成長した」と実感した瞬間は？" },
  { id: 161, category: "挑戦と成長", difficulty: 3, text: "今の自分に足りない「勇気」は？" },
  { id: 162, category: "挑戦と成長", difficulty: 3, text: "1年後の自分に期待することは？" },
  { id: 163, category: "挑戦と成長", difficulty: 3, text: "「成長」と「変化」の違いは？" },

  // コミュニケーション（新カテゴリ・難易度2）
  { id: 164, category: "コミュニケーション", difficulty: 2, text: "人に話しかける時、何を意識してる？" },
  { id: 165, category: "コミュニケーション", difficulty: 2, text: "話を聞いてもらえた時、どんな気持ち？" },
  { id: 166, category: "コミュニケーション", difficulty: 2, text: "「伝わった！」と感じる瞬間は？" },
  { id: 167, category: "コミュニケーション", difficulty: 2, text: "言葉以外で気持ちを伝える方法は？" },
  { id: 168, category: "コミュニケーション", difficulty: 3, text: "本当に伝えたいのに言えないことは？" },
  { id: 169, category: "コミュニケーション", difficulty: 3, text: "「良い会話」に必要な3つの要素は？" },
  { id: 170, category: "コミュニケーション", difficulty: 3, text: "相手の気持ちを理解するコツは？" },
  { id: 171, category: "コミュニケーション", difficulty: 3, text: "誤解された時、どう説明する？" },

  // 日常の発見（新カテゴリ・難易度1）
  { id: 172, category: "日常の発見", difficulty: 1, text: "今日、初めて気づいたことは？" },
  { id: 173, category: "日常の発見", difficulty: 1, text: "いつもの道で見つけた新しいものは？" },
  { id: 174, category: "日常の発見", difficulty: 1, text: "今日、一番きれいだと思ったものは？" },
  { id: 175, category: "日常の発見", difficulty: 1, text: "最近、面白いと思った小さな発見は？" },
  { id: 176, category: "日常の発見", difficulty: 2, text: "いつもと違う視点で見たら、どう見える？" },
  { id: 177, category: "日常の発見", difficulty: 2, text: "当たり前の中に隠れた「すごいこと」は？" },
  { id: 178, category: "日常の発見", difficulty: 2, text: "身の回りで「工夫」されてるものは？" },

  // 想像と共感（新カテゴリ・難易度2）
  { id: 179, category: "想像と共感", difficulty: 2, text: "犬や猫になったら、何を考えてる？" },
  { id: 180, category: "想像と共感", difficulty: 2, text: "木の気持ちを想像すると？" },
  { id: 181, category: "想像と共感", difficulty: 2, text: "雨粒の目線で世界を見たら？" },
  { id: 182, category: "想像と共感", difficulty: 2, text: "本の登場人物になったら、どう行動する？" },
  { id: 183, category: "想像と共感", difficulty: 3, text: "一つ年下の自分にアドバイスするなら？" },
  { id: 184, category: "想像と共感", difficulty: 3, text: "困っている人の気持ちを想像すると？" },
  { id: 185, category: "想像と共感", difficulty: 3, text: "もし先生だったら、どんな授業をする？" },
  { id: 186, category: "想像と共感", difficulty: 3, text: "100歳の自分から見た今は？" },

  // 言葉の力（新カテゴリ・難易度2）
  { id: 187, category: "言葉の力", difficulty: 2, text: "自分を励ます言葉は？" },
  { id: 188, category: "言葉の力", difficulty: 2, text: "心に残っている誰かの言葉は？" },
  { id: 189, category: "言葉の力", difficulty: 2, text: "人を笑顔にする言葉といえば？" },
  { id: 190, category: "言葉の力", difficulty: 2, text: "今の自分に必要な言葉は？" },
  { id: 191, category: "言葉の力", difficulty: 3, text: "「ありがとう」と「ごめんね」、どちらが難しい？" },
  { id: 192, category: "言葉の力", difficulty: 3, text: "言葉で人を傷つけないために大切なことは？" },
  { id: 193, category: "言葉の力", difficulty: 3, text: "本当に伝えたい時、どんな言葉を選ぶ？" },
  { id: 194, category: "言葉の力", difficulty: 3, text: "「言葉」と「気持ち」、どちらが先？" },

  // 選択と決断（新カテゴリ・難易度2）
  { id: 195, category: "選択と決断", difficulty: 2, text: "選択に迷った時、何を基準にする？" },
  { id: 196, category: "選択と決断", difficulty: 2, text: "今日、一番良かった選択は？" },
  { id: 197, category: "選択と決断", difficulty: 2, text: "やめたことで良かったことは？" },
  { id: 198, category: "選択と決断", difficulty: 3, text: "「正しい選択」と「自分らしい選択」、違いは？" },
  { id: 199, category: "選択と決断", difficulty: 3, text: "後悔しない決断をするには？" },
  { id: 200, category: "選択と決断", difficulty: 3, text: "大切な決断をする時、誰に相談する？なぜ？" },
];
