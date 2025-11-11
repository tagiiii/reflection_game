import React, { useState, useEffect, useCallback } from 'react';
import { questions, Question } from './data/questions';

const ReflectionGamePresenter: React.FC = () => {
  const [deck, setDeck] = useState<Question[]>(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // フィルタリングされたデッキ
  const filteredDeck = deck.filter((q) => {
    if (selectedCategory && q.category !== selectedCategory) return false;
    if (selectedDifficulty && q.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const currentQuestion = filteredDeck[currentIndex] || deck[0];

  // デッキをシャッフル
  const shuffleDeck = useCallback(() => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  }, [deck]);

  // 次のお題
  const nextQuestion = useCallback(() => {
    if (currentIndex < filteredDeck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, filteredDeck.length]);

  // 前のお題
  const prevQuestion = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredDeck.length - 1);
    }
  }, [currentIndex, filteredDeck.length]);

  // フルスクリーン切り替え
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('フルスクリーンエラー:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  // フルスクリーン状態の監視
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case ' ':
        case 'ArrowRight':
          e.preventDefault();
          nextQuestion();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevQuestion();
          break;
        case 's':
        case 'S':
          e.preventDefault();
          shuffleDeck();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextQuestion, prevQuestion, shuffleDeck, toggleFullscreen]);

  // カテゴリ一覧を取得
  const categories = Array.from(new Set(questions.map((q) => q.category)));

  // 難易度の星を表示
  const renderStars = (difficulty: number) => {
    return '★'.repeat(difficulty) + '☆'.repeat(3 - difficulty);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ヘッダー（操作ボタン） */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* 左側：ナビゲーション */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevQuestion}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
                aria-label="前へ"
              >
                ← 前へ
              </button>
              <button
                onClick={nextQuestion}
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200 font-medium"
                aria-label="次へ"
              >
                次へ →
              </button>
              <button
                onClick={shuffleDeck}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
                aria-label="シャッフル"
              >
                🔀 シャッフル
              </button>
            </div>

            {/* 右側：フィルタ＆フルスクリーン */}
            <div className="flex items-center gap-2">
              {/* カテゴリフィルタ */}
              <select
                value={selectedCategory || ''}
                onChange={(e) => {
                  setSelectedCategory(e.target.value || null);
                  setCurrentIndex(0);
                }}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 cursor-pointer"
                aria-label="カテゴリ選択"
              >
                <option value="">全カテゴリ</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* 難易度フィルタ */}
              <select
                value={selectedDifficulty || ''}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value ? Number(e.target.value) : null);
                  setCurrentIndex(0);
                }}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 cursor-pointer"
                aria-label="難易度選択"
              >
                <option value="">全難易度</option>
                <option value="1">★☆☆</option>
                <option value="2">★★☆</option>
                <option value="3">★★★</option>
              </select>

              {/* フルスクリーン */}
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
                aria-label="フルスクリーン"
              >
                {isFullscreen ? '🗗 全画面解除' : '🗖 全画面'}
              </button>
            </div>
          </div>

          {/* ショートカットヒント */}
          <div className="mt-3 text-xs text-gray-500 text-center">
            Space / → : 次へ ｜ ← : 前へ ｜ S : シャッフル ｜ F : 全画面
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* お題カード */}
          <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-3xl shadow-xl p-12 text-center">
            {/* カテゴリと難易度 */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                {currentQuestion.category}
              </span>
              <span className="text-2xl text-yellow-500">
                {renderStars(currentQuestion.difficulty)}
              </span>
            </div>

            {/* お題テキスト */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed mb-8">
              {currentQuestion.text}
            </p>

            {/* 問題番号 */}
            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {filteredDeck.length}
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="py-4 text-center text-xs text-gray-400 border-t border-gray-100">
        © Tagiii_work 言葉のリフレクション
      </footer>
    </div>
  );
};

export default ReflectionGamePresenter;
