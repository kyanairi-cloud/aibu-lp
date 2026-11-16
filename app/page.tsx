const projects = [
  {name:"輪島",english:"WAJIMA",icon:"🌱",color:"from-[#e2f8f1] to-[#f7fdf9]",description:"輪島をテーマにしたPBL。地域の課題に向き合い、自分たちにできることを考えるプロジェクトです。",note:"具体的な活動内容・写真は確認後に掲載"},
  {name:"沖縄",english:"OKINAWA",icon:"🌺",color:"from-[#e1f8ff] to-[#f6fdff]",description:"沖縄をテーマにしたPBL。調べることから始め、問いを立てて学びを深めます。",note:"具体的な活動内容・写真は確認後に掲載"},
  {name:"文房具",english:"STATIONERY",icon:"✏️",color:"from-[#fff2db] to-[#fffaf0]",description:"身近な文房具をテーマに、アイデアを考え、形にしていくプロジェクトです。",note:"具体的な活動内容・写真は確認後に掲載"},
  {name:"芦屋校舎",english:"ASHIYA",icon:"🏫",color:"from-[#f0eaff] to-[#fbf9ff]",description:"芦屋校舎をテーマに、身近な場所から課題や可能性を見つけていくPBLです。",note:"具体的な活動内容・写真は確認後に掲載"},
  {name:"大津町",english:"OZU TOWN",icon:"🤝",color:"from-[#ffe9ee] to-[#fff8fa]",description:"大津町をテーマに、人や地域との関わりから学びを広げるプロジェクトです。",note:"具体的な活動内容・写真は確認後に掲載"},
];
export default function Home() {
  return <main className="min-h-screen bg-white text-[#15394d]">
    <header className="sticky top-0 z-50 border-b border-[#d7edf6] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
        <a href="#top" className="text-sm font-black text-[#075a7b] sm:text-lg">青楓館高等学院 <span className="text-[#05a8dd]">PBL</span></a>
        <nav className="flex gap-3 text-xs font-bold sm:gap-6 sm:text-sm"><a href="#about">PBLとは</a><a href="#projects">活動紹介</a><a href="#voices">生徒の声</a></nav>
      </div>
    </header>
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-[#dff8ff] via-[#f4fcff] to-[#c8efff] px-5 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-12 top-6 h-64 w-64 rounded-full bg-[#05a8dd]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <span className="inline-block rounded-full bg-white px-5 py-2 text-xs font-extrabold tracking-widest text-[#078ebc] shadow-sm">SEIFUKAN PROJECT BASED LEARNING</span>
        <h1 className="mt-8 text-[clamp(37px,6vw,72px)] font-black leading-[1.35] tracking-tight text-[#093e58]">好きから始まる。<br/><span className="text-[#05a8dd]">社会とつながる学び。</span></h1>
        <p className="mt-8 max-w-2xl text-base leading-9 text-[#426879] sm:text-xl">自分たちで問いを見つけ、仲間と考え、行動する。<br/>教室の外にも広がる、青楓館高等学院のPBL（課題解決型学習）をご紹介します。</p>
        <a href="#projects" className="mt-9 inline-flex rounded-full bg-[#05a8dd] px-8 py-4 font-extrabold text-white shadow-lg shadow-[#05a8dd]/20 transition hover:-translate-y-1 hover:bg-[#008fbf]">プロジェクトを見てみる ↓</a>
        <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold text-[#077ca7]"><span className="rounded-full bg-white/90 px-5 py-3">💡 考える</span><span className="rounded-full bg-white/90 px-5 py-3">🤝 協力する</span><span className="rounded-full bg-white/90 px-5 py-3">🚀 挑戦する</span></div>
      </div>
    </section>
    <section id="about" className="px-5 py-20 sm:py-24"><div className="mx-auto max-w-6xl">
      <p className="text-xs font-black tracking-[.2em] text-[#05a8dd]">WHAT IS PBL?</p>
      <h2 className="mt-3 text-3xl font-black leading-snug text-[#093e58] sm:text-5xl">答えがひとつじゃないから、<br/>学びはもっと面白い。</h2>
      <p className="mt-7 max-w-3xl leading-9 text-[#587080]">PBLは、身近な疑問や社会の課題を出発点に、調査・対話・実践を重ねて学ぶ方法です。青楓館高等学院では、さまざまなテーマのプロジェクトを通して、自分の考えを形にする経験を大切にしています。</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{[
        ["01","問いを見つける","気になること、変えてみたいことからスタート。自分なりの問いを考えます。","🔎"],
        ["02","仲間と考える","違う視点やアイデアを持ち寄って、解決の方法を探ります。","💬"],
        ["03","行動して学ぶ","調べたことを実践につなげ、振り返りながら次の挑戦へ。","✨"]
      ].map(([n,title,desc,emoji])=><article key={n} className="rounded-3xl border border-[#d9edf5] bg-[#f8fdff] p-7"><div className="text-4xl">{emoji}</div><p className="mt-5 text-xs font-black text-[#05a8dd]">STEP {n}</p><h3 className="mt-2 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-8 text-[#587080]">{desc}</p></article>)}</div>
    </div></section>
    <section id="projects" className="bg-[#eefaff] px-5 py-20 sm:py-24"><div className="mx-auto max-w-6xl">
      <p className="text-xs font-black tracking-[.2em] text-[#05a8dd]">OUR PROJECTS</p>
      <h2 className="mt-3 text-3xl font-black text-[#093e58] sm:text-5xl">5つのプロジェクトを紹介！</h2>
      <p className="mt-5 max-w-2xl leading-8 text-[#587080]">地域、身近なモノ、学校のこと。テーマが違えば、学びの形もさまざま。気になるプロジェクトを見つけてみよう。</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project,i)=><article key={project.name} className="overflow-hidden rounded-[26px] border border-[#d8ecf4] bg-white shadow-[0_12px_30px_#087da00b] transition hover:-translate-y-1 hover:shadow-xl">
        <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.color}`}><span className="text-7xl" aria-hidden="true">{project.icon}</span></div>
        <div className="p-7"><p className="text-xs font-black tracking-widest text-[#05a8dd]">PROJECT {String(i+1).padStart(2,"0")} / {project.english}</p><h3 className="mt-2 text-2xl font-black text-[#093e58]">{project.name}</h3><p className="mt-4 text-sm leading-8 text-[#587080]">{project.description}</p><p className="mt-6 rounded-xl bg-[#f1faff] px-4 py-3 text-xs text-[#568298]">📷 {project.note}</p></div>
      </article>)}</div>
      <p className="mt-7 text-xs leading-6 text-[#587080]">※紹介文は各テーマに基づく概要です。具体的な活動実績・成果物・写真は、学校での確認後に更新します。</p>
    </div></section>
    <section id="voices" className="px-5 py-20 sm:py-24"><div className="mx-auto max-w-6xl">
      <p className="text-xs font-black tracking-[.2em] text-[#05a8dd]">STUDENT VOICES</p><h2 className="mt-3 text-3xl font-black text-[#093e58] sm:text-5xl">生徒の声</h2><p className="mt-5 text-[#587080]">PBLに参加した生徒のリアルな声を、ここで紹介していきます。</p>
      <div className="mt-9 grid gap-5 md:grid-cols-2">{["参加してみて、どんな発見があった？","仲間と挑戦して、印象に残ったことは？"].map((q,i)=><div key={q} className="rounded-3xl border border-dashed border-[#9dd8ed] bg-[#f7fcff] p-8"><span className="text-4xl text-[#05a8dd]">“</span><p className="mt-3 font-bold text-[#386779]">{q}</p><p className="mt-5 text-sm leading-8 text-[#7c98a5]">生徒のコメントを掲載予定です。本人の許可を得た実際の言葉を追加します。</p><p className="mt-5 text-xs font-bold text-[#05a8dd]">VOICE {String(i+1).padStart(2,"0")} / 掲載準備中</p></div>)}</div>
    </div></section>
    <section className="bg-gradient-to-br from-[#067eaa] to-[#05a8dd] px-5 py-20 text-center text-white"><div className="mx-auto max-w-3xl"><p className="text-xs font-black tracking-widest text-[#c6f4ff]">YOUR NEXT CHALLENGE</p><h2 className="mt-4 text-3xl font-black leading-snug sm:text-5xl">「やってみたい」が、<br/>未来につながる。</h2><p className="mt-7 leading-9">最初から答えを知っていなくても大丈夫。興味を持つこと、仲間と考えること、その一歩が新しい学びになります。</p></div></section>
    <footer className="bg-[#07384e] px-5 py-8 text-xs leading-7 text-[#c7e7f1]"><div className="mx-auto max-w-6xl">青楓館高等学院 ｜ PBL（課題解決型学習）<br/>※本ページは紹介用です。活動内容・生徒の声・写真は確認後に順次更新します。</div></footer>
  </main>;
}
