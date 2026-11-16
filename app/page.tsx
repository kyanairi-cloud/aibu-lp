export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#17394b]">
      <header className="sticky top-0 z-50 border-b border-[#d9edf5] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[68px] max-w-6xl items-center justify-between gap-3 px-5">
          <a href="#top" className="text-sm font-black tracking-tight text-[#09344b] sm:text-lg">青楓館高等学院 <span className="text-[#05a8dd]">｜ AI部</span></a>
          <nav className="flex gap-3 text-[11px] font-bold sm:gap-6 sm:text-sm">
            <a href="#about" className="hover:text-[#05a8dd]">AI部とは</a>
            <a href="#achievement" className="hover:text-[#05a8dd]">実績</a>
            <a href="#activities" className="hover:text-[#05a8dd]">活動内容</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-gradient-to-br from-[#07364e] via-[#056c98] to-[#05a8dd] px-5 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -bottom-24 right-[-3%] select-none text-[260px] font-black leading-none text-white/[0.04] sm:text-[480px]">AI</div>
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-extrabold tracking-[.24em] text-[#a9efff] sm:text-base">SEIFUKAN AI CLUB</p>
          <h1 className="my-10 text-[clamp(38px,6vw,76px)] font-black leading-[1.32] tracking-tight">
            AIを使う側から、<br/><span className="text-[#9af0ff]">未来をつくる側へ。</span>
          </h1>
          <p className="max-w-3xl text-base leading-[2] sm:text-2xl">
            「やってみたい」が、挑戦のはじまり。<br/>
            AIの仕組みを学び、仲間とアイデアを形にする。青楓館高等学院のAI部です。
          </p>
          <div className="mt-10"><span className="inline-block rounded-full border border-white/60 px-6 py-3 text-sm sm:text-lg">学ぶ × つくる × 挑戦する</span></div>
          <a href="#about" className="mt-12 inline-flex items-center justify-center rounded-full bg-white px-9 py-5 text-lg font-extrabold text-[#056a91] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:px-12 sm:py-6 sm:text-2xl">AI部について知る ↓</a>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[.2em] text-[#0089b9]">ABOUT US</p>
          <h2 className="mt-3 text-3xl font-black leading-snug text-[#09344b] sm:text-5xl">AIを知るだけじゃない。<br/>自分の手で、動かしてみる。</h2>
          <p className="my-8 max-w-3xl leading-8 text-[#587080]">AI部では、AIツールの使い方だけでなく、その裏側にある仕組みやWebサービス開発の基礎も学びます。分からないことを調べ、試し、改善する。その積み重ねを大切にしています。</p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["01 / LEARN","仕組みから学ぶ","大規模言語モデル（LLM）など、AIの基礎知識を学習。なぜ動くのかを考える力を育てます。"],
              ["02 / CREATE","アイデアを形に","AIツールを活用しながら、Webサービスの開発・保守・運用につながるスキルを磨きます。"],
              ["03 / CHALLENGE","仲間と挑戦する","チームで考え、試行錯誤し、発表する。コンテストや他校との交流にも挑戦してきました。"]
            ].map(([number,title,description])=>(
              <article key={number} className="rounded-3xl border border-[#d9edf5] bg-white p-8 shadow-[0_8px_30px_#07364e0a]">
                <p className="text-xs font-black text-[#008ebd]">{number}</p>
                <h3 className="my-3 text-xl font-extrabold">{title}</h3>
                <p className="text-sm leading-7 text-[#587080]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievement" className="bg-[#ecfaff] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[.2em] text-[#0089b9]">OUR ACHIEVEMENT</p>
          <h2 className="mb-9 mt-3 text-3xl font-black text-[#09344b] sm:text-5xl">挑戦が、全国の舞台へ。</h2>
          <div className="grid items-center gap-10 rounded-[28px] bg-[#083a54] p-7 text-white sm:p-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-[#dff6ff] px-4 py-1 text-xs font-extrabold text-[#0879a3]">U-18 AIチャンピオンシップ</span>
              <h3 className="my-5 text-2xl font-black leading-snug sm:text-4xl">全国大会出場<br/>GENKI100×優秀賞 受賞</h3>
              <p className="leading-8 text-[#d4ecf6]">仲間とともにアイデアを磨き、全国の舞台で発表。日々の挑戦が成果につながりました。</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              { [["230","応募数"],["56","書類選考通過数"],["6","全国大会進出組数"],["1","青楓館の受賞実績"]].map(([number,label])=>(
                <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <strong className="block text-4xl font-black text-[#9deaff]">{number}</strong>
                  <span className="text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs text-[#667d89]">※数字は学校の活動記録に基づきます。230・56・6は大会全体の数値であり、青楓館の応募人数ではありません。</p>
        </div>
      </section>

      <section id="activities" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[.2em] text-[#0089b9]">WHAT WE DO</p>
          <h2 className="mt-3 text-3xl font-black leading-snug text-[#09344b] sm:text-5xl">学んで、試して、<br/>次の挑戦につなげる。</h2>
          <p className="my-8 max-w-3xl leading-8 text-[#587080]">活動では、知識のインプットと実践を組み合わせています。次の流れは、2学期に計画された1回2時間の活動モデルです。</p>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["15分","AIツールに触れる","新しい技術やツールを知る。"],
              ["60分","AIの基礎を学ぶ","仕組みを理解し、考える。"],
              ["15分","理解を確かめる","確認テストで知識を整理。"],
              ["30分","チームで実践","学んだことを使ってみる。"]
            ].map(([time,title,description])=>(
              <article key={title} className="rounded-2xl border-t-[5px] border-[#05a8dd] bg-[#f6fcff] p-6">
                <span className="rounded-full bg-[#dff6ff] px-3 py-1 text-xs font-bold text-[#0879a3]">{time}</span>
                <h3 className="mt-5 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#587080]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ecfaff] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[.2em] text-[#0089b9]">STUDENT VOICES</p>
          <h2 className="my-4 text-3xl font-black text-[#09344b] sm:text-5xl">AI部で感じたこと。</h2>
          <div className="rounded-2xl border border-dashed border-[#8ccddd] bg-white p-8 leading-8 text-[#587080]">ここには、生徒本人の許可を得たコメントを掲載予定です。<br/>例：入部のきっかけ／初めてできたこと／仲間と挑戦して印象に残ったこと</div>
          <p className="mt-4 text-xs text-[#667d89]">※生徒の発言は未提供のため、架空の口コミは掲載していません。</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#056b94] to-[#05a8dd] px-5 py-20 text-center text-white">
        <h2 className="text-3xl font-black leading-snug sm:text-5xl">「ちょっと気になる」から、<br/>未来が動き出す。</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8">AIに詳しくなくても、興味があればそれが第一歩。青楓館高等学院のAI部で、学びと挑戦の可能性を見つけてみませんか。</p>
      </section>
      <footer className="bg-[#072d42] px-5 py-8 text-xs leading-7 text-[#c9e4ed]"><div className="mx-auto max-w-6xl">青楓館高等学院 ｜ AI部<br/>※本ページは紹介用デモです。見学・入学案内のリンクや写真は、公式情報の確認後に追加してください。</div></footer>
    </main>
  );
}
