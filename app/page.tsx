import React from 'react';
import { Trophy, Rocket, Calendar, CheckCircle2, Heart, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight text-blue-900 flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">青館高等学院</span>
            AI部
          </div>
          <a
            href="https://zenikuru.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition flex items-center gap-1.5 shadow-sm hover:shadow"
          >
            ゼニくるで応援する <ExternalLink size={14} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white pt-12 pb-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Contest Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Trophy size={16} className="text-amber-400" />
            <span>第1回ゼニくるCUP エントリー中！応援お願いします</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            放課後から、<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              社会をアップデート
            </span>
            する。
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            全国大会の敗退を糧に——。<br />
            高校生AI部13名が挑む、教室を飛び出すリアル実証実験プロジェクト！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://zenikuru.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-cyan-500/25 transition text-lg flex items-center justify-center gap-2"
            >
              ゼニくるでAI部を応援する <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Story & Problem Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Our Mission</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-900">
              AIの役割を「答えを出すこと」だけに<br className="hidden sm:inline" />限定していませんか？
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed text-base">
            <p>
              今年のU-18 AIチャンピオンシップで、全国約250組の中から上位6組に選ばれ、全国大会へ挑みました。しかし、結果は敗退。
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600 text-slate-900 font-medium">
              そこで気づいたのが、「つくる」だけでなく、実際に使ってもらい、確かめ、改善することの大切さでした。
            </p>
            <p>
              だから次は、教室の外へ飛び出します。高校生AI部13名が挑むのは、身の回りの課題に出会い、AIを使った解決策を試すリアルな実証実験です。
            </p>
          </div>

          {/* Key Message Callout */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <p className="text-blue-900 font-bold text-lg sm:text-xl">
              「私たちが欲しいのは、『失敗できる回数』です。」
            </p>
            <p className="text-blue-700 text-sm mt-2">
              つくる。試す。失敗する。そして、もう一度。あなたの応援が、私たちの「もう一回」を増やします。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">探究活動ロードマップ</h2>
            <p className="text-slate-600 text-sm mt-2">1年間かけて課題解決・実証実験に取り組んでいます</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">1学期</span>
              <h3 className="font-bold text-lg mt-3 mb-2 text-slate-900">テーマ発見・決定</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                さまざまなAI活用や課題に触れ、自分が本当に取り組みたいテーマを見つける。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-blue-600">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">2学期（現在）</span>
              <h3 className="font-bold text-lg mt-3 mb-2 text-slate-900">解決策の探究・検証</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                テーマについてさらに調査し、AIを使った解決策を考えて実際に試す。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">3学期</span>
              <h3 className="font-bold text-lg mt-3 mb-2 text-slate-900">改善・完成</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                検証結果をもとに、作品・AI活用・発表を繰り返し改善する。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget & Usage Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Target & Use</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">応援資金50万円の使い道</h2>
          <p className="text-slate-600 text-sm mt-2">いただいた支援金・表彰金は全額活動のために大切に使用します</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">① 活動・実証費</h3>
                <span className="text-xl font-extrabold text-blue-600">約32万円</span>
              </div>
              <p className="text-slate-600 text-sm mb-6">教室を飛び出し、リアルな課題に出会い実際に試すための活動費</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>企業・専門家への訪問（京都方面など）</span>
                  <span className="font-medium text-slate-900">約10.5万円</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>他校・地域との交流</span>
                  <span className="font-medium text-slate-900">約3.5万円</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>現地調査・実証実験（ヒアリング・検証）</span>
                  <span className="font-medium text-slate-900">約18万円</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">② AIツール・開発費</h3>
                <span className="text-xl font-extrabold text-blue-600">約18万円</span>
              </div>
              <p className="text-slate-600 text-sm mb-6">AIを何度も試し、アイデアを形にして改善するための環境整備費</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>ChatGPT Plus（リサーチ・制作）</span>
                  <span className="font-medium text-slate-900">約13万円</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>AI API利用料（アプリへのAI組み込み）</span>
                  <span className="font-medium text-slate-900">約3万円</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>開発環境費（Webアプリ制作・公開）</span>
                  <span className="font-medium text-slate-900">約2万円</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zenikuru Contest Info Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-indigo-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
              <Trophy size={20} />
              <span>挑戦中イベント</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">第1回ゼニくるCUP スケジュール</h2>
            
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row sm:justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">エントリー募集・登録期間</span>
                <span className="font-semibold text-white">2026年7月15日(水) 〜 9月14日(月)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between p-4 rounded-lg bg-amber-400/20 border border-amber-400/50 text-amber-200">
                <span className="font-bold flex items-center gap-1">🔥 応援集計対象期間（応援お願いします！）</span>
                <span className="font-bold text-white">2026年9月15日(火) 〜 12月14日(月)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-300">集計・結果発表期間</span>
                <span className="font-semibold text-white">2026年12月15日(火) 〜 12月21日(月)</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://zenikuru.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-full transition text-lg shadow-lg"
              >
                ゼニくるCUPでAI部を応援する <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>© 2026 青館高等学院 AI部. All rights reserved.</p>
      </footer>
    </div>
  );
}
