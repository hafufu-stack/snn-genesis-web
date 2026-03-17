// i18n.js — Japanese/English translations for SNN-Genesis website

const translations = {
    en: {
        // Nav
        nav_discovery: "Discovery",
        nav_evolution: "Evolution",
        nav_results: "Results",
        nav_correlated: "v12",
        nav_manifold: "v14",
        nav_principles: "Principles",

        // Hero
        hero_badge: "v14 — March 2026",
        hero_title1: "A Little Noise",
        hero_title2: "Makes AI Smarter",
        hero_subtitle: 'I discovered that injecting tiny amounts of random noise into a single layer of a Large Language Model dramatically improves its reasoning ability — a phenomenon known as <strong>Stochastic Resonance</strong>.',
        stat_improvement: "Performance Boost",
        stat_significance: "Statistical Significance",
        stat_best: "Best: Dimensional Annealing",
        cta_paper: "📄 Read the Paper",
        cta_code: "💻 View Code",
        scroll_down: "Scroll to Explore",

        // Discovery
        discovery_tag: "THE DISCOVERY",
        discovery_title: "Stochastic Resonance in Neural Networks",
        discovery_desc: "In physics, stochastic resonance is the counterintuitive phenomenon where adding noise to a weak signal actually makes it easier to detect. I found the same effect in AI reasoning.",
        card1_title: "The Problem",
        card1_desc: "Large Language Models get trapped in reasoning dead-ends. Like a ball stuck in a valley, they can't escape local minima without external help.",
        card2_title: "The Solution",
        card2_desc: "Inject tiny random noise (σ=0.15) into Layer 18 of a 32-layer Transformer. The noise \"shakes\" the model out of dead-ends, boosting solve rate from 9% to 32%.",
        card3_title: "The Proof",
        card3_desc: "N=100 trials, p=8.4×10⁻⁵. The effect is statistically undeniable. Too much noise (σ=0.20) causes complete collapse — a phase transition.",

        // Evolution
        evolution_tag: "12 YEARS OF RESEARCH",
        evolution_title: "From One Neuron to Billions of Parameters",
        evolution_desc: "This research began in 2014 with my master's thesis studying how random stimulation enhances information processing in a single hippocampal neuron. Now, the same principle scales to entire neural networks.",
        tl_2014_title: "Master's Thesis: Hippocampal Dentate Gyrus",
        tl_2014_desc: "Discovered that random (vs. regular) stimulation to a single granule cell enhances information processing. One cell, two input pathways.",
        tl_2025_title: "SNN-Genesis v1–v9: Safety & Interpretability",
        tl_2025_desc: "Built a framework for LLM safety using biologically-inspired SNN perturbations. Discovered homeostasis, CfC brain atlas, and universal safety zones.",
        tl_2026a_title: "v10–v10.1: Stochastic Resonance Confirmed",
        tl_2026a_desc: "The single-cell principle scales: noise at one layer (L18) of Mistral-7B boosts reasoning 3.6×. Orthogonal decomposition proves direction×magnitude interaction is key.",
        tl_2026b_title: "v11–v13: Correlated Noise, Dose Theory & Low-Rank Efficiency",
        tl_2026b_desc: "Multi-layer correlated noise achieves 40% (10× baseline). Discovered the 1/√N dose-adjustment law. Low-rank noise (k=4) suffices. When > Where ≫ What.",
        tl_2026c_title: "v14: Reasoning Manifold Geometry & 50% Record",
        tl_2026c_desc: "Discovered the geometry of the reasoning manifold: PCA-top noise destroys reasoning, random noise is naturally orthogonal. Full-rank Flash Annealing achieves 50% — all-time record.",

        // Results
        results_tag: "KEY RESULTS",
        results_title: "The Bell Curve and the Cliff",
        results_desc: "There exists a \"Goldilocks Zone\" of noise — too little does nothing, too much destroys reasoning. The transition at σ=0.20 is a genuine phase transition, with cosine similarity ≈ 0.50 as the critical threshold.",
        th_solve: "Solve Rate",
        th_cosine: "Cosine Similarity",
        th_status: "Status",
        cap_bellcurve: "The Goldilocks Zone: peak at σ=0.15, cliff at σ=0.20",
        cap_annealing: "Cooling Protocol: linear decay achieves 38% (best ever)",

        // Principles
        principles_tag: "BREAKTHROUGH INSIGHTS",
        principles_title: "The Prophylactic Principle",
        principles_desc: "Noise is a vaccine, not an antibiotic. It must be present before reasoning enters a failure basin — applying it after errors only makes things worse.",
        vacc_title: "Vaccine (Prevention)",
        vacc_desc: "Always-on noise prevents the model from falling into reasoning traps. Like a vaccine that builds immunity before infection.",
        anti_title: "Antibiotic (Treatment)",
        anti_desc: "On-error noise injection HURTS. Once the model outputs an error, the context is contaminated — noise can't fix a poisoned history.",
        quote: '"Stochastic resonance is a vaccine, not an antibiotic. The noise must be present before reasoning enters a failure basin."',

        // Correlated Noise (v12)
        corr_tag: "FROM v12",
        corr_title: "Correlated Noise: The Dose Makes the Poison",
        corr_desc: "What happens when you inject noise into multiple layers simultaneously? I discovered a universal dose-adjustment law: σ must scale as 1/√N to prevent catastrophic collapse.",
        corr_card1_title: "The Overdose Problem",
        corr_card1_desc: "Naively applying σ=0.15 to multiple layers simultaneously causes complete collapse (0% solve rate). The noise accumulates and destroys the signal.",
        corr_card2_title: "The 1/√N Law",
        corr_card2_desc: "Scale σ by 1/√N where N = number of layers. With 2 layers at σ=0.075 and positive correlation (ρ=+1), we achieve 40% — 10× baseline and the best result ever.",
        corr_card3_title: "Correlation Matters",
        corr_card3_desc: "Positive correlation (ρ=+1) at the right dose outperforms negative correlation (ρ=−1). But at too-high doses, positive correlation collapses while negative survives — an asymmetric phase transition.",
        cap_phase68: "Phase 68: Dose-adjusted correlated noise across 10 conditions",
        cap_phase69: "Phase 69: Annealing variants confirm 40% at N=100",

        // Links
        links_tag: "GET INVOLVED",
        links_title: "Read, Cite, Explore",
        link_paper: "Paper (Zenodo)",
        link_paper_desc: "Latest version. Open access.",
        link_code: "Source Code",
        link_code_desc: "All experiment scripts. MIT License.",
        link_author: "Author",
        link_email: "Contact",

        // v14 Manifold
        manifold_tag: "NEW IN v14",
        manifold_title: "Reasoning Manifold Geometry: Why Random Noise Works",
        manifold_desc: "v14 discovers the geometry of the reasoning manifold — explaining why random noise naturally enhances reasoning while aligned noise destroys it. The answer lies in high-dimensional geometry.",
        manifold_card1_title: "PCA-Top = Destruction",
        manifold_card1_desc: "Noise aligned with the top principal components of the hidden state achieves only 6.7% = baseline. The reasoning axis is encoded in these top PCs — perturbing them destroys reasoning.",
        manifold_card2_title: "Random = Naturally Safe",
        manifold_card2_desc: "In 4096-D space, random noise has only 0.098% overlap with the 4-D reasoning axis. Orthogonal complement noise (46.7%) = random noise (46.7%). Random is naturally safe.",
        manifold_card3_title: "50% All-Time Record",
        manifold_card3_desc: "Full-rank (k=4096) noise with Flash Annealing achieves 50% solve rate, surpassing the previous record of 46%. Dual annealing (σ + k decay) matches at 50%.",
        cap_phase71: "Phase 71: PCA-aligned noise — random avoids the reasoning axis",
        cap_phase79: "Phase 79: Orthogonal complement = random (naturally safe)",
        cite_title: "Citation",

        // Footer
        footer_license: "Licensed under MIT.",
        footer_ai: "AI-assisted research — all final decisions were made by the human author.",
    },

    ja: {
        // Nav
        nav_discovery: "発見",
        nav_evolution: "進化",
        nav_results: "実験結果",
        nav_correlated: "v12",
        nav_manifold: "v14",
        nav_principles: "新原理",

        // Hero
        hero_badge: "v14 — 2026年3月",
        hero_title1: "ほんの少しのノイズが",
        hero_title2: "AIを賢くする",
        hero_subtitle: '大規模言語モデルのたった1つの層に微量のランダムノイズを注入するだけで、推論能力が劇的に向上する — <strong>確率共鳴</strong>という物理現象をAIの中に発見しました。',
        stat_improvement: "性能向上",
        stat_significance: "統計的有意性",
        stat_best: "最高記録：次元アニーリング",
        cta_paper: "📄 論文を読む",
        cta_code: "💻 ソースコード",
        scroll_down: "スクロールして探索",

        // Discovery
        discovery_tag: "発見",
        discovery_title: "ニューラルネットワークにおける確率共鳴",
        discovery_desc: "物理学における確率共鳴とは、弱い信号にノイズを加えると検出しやすくなるという直感に反する現象です。同じ効果をAIの推論の中に発見しました。",
        card1_title: "課題",
        card1_desc: "大規模言語モデルは推論の袋小路に陥ります。谷底にはまったボールのように、外部からの助けなしには局所最小値から脱出できません。",
        card2_title: "解決策",
        card2_desc: "32層Transformerの第18層に微小なランダムノイズ（σ=0.15）を注入。ノイズがモデルを袋小路から「揺り動かし」、正答率を9%から32%に向上させます。",
        card3_title: "証明",
        card3_desc: "N=100試行、p=8.4×10⁻⁵。統計的に否定できない効果です。ノイズが多すぎると（σ=0.20）完全崩壊 — 相転移が起きます。",

        // Evolution
        evolution_tag: "12年間の研究",
        evolution_title: "1つの神経細胞から数十億パラメータへ",
        evolution_desc: "この研究は2014年、海馬の1つの神経細胞へのランダム刺激が情報処理を向上させるという私の修士論文から始まりました。同じ原理が、今やニューラルネットワーク全体にスケールします。",
        tl_2014_title: "修士論文：海馬歯状回の顆粒細胞",
        tl_2014_desc: "1つの顆粒細胞に対する規則的刺激とランダム刺激の違いを発見。ランダムな入力が情報量を増加させることを示しました。",
        tl_2025_title: "SNN-Genesis v1–v9：安全性と解釈性",
        tl_2025_desc: "生物学的SNNの摂動を用いたLLN安全性フレームワークを構築。ホメオスタシス、CfC脳地図、ユニバーサル安全帯を発見。",
        tl_2026a_title: "v10–v10.1：確率共鳴の確認",
        tl_2026a_desc: "単一細胞の原理がスケール：Mistral-7Bの1層（L18）へのノイズ注入で推論が3.6倍向上。直交分解で方向×大きさの相互作用が鍵と証明。",
        tl_2026b_title: "v11–v13：相関ノイズ・用量理論・低ランク効率",
        tl_2026b_desc: "多層相関ノイズで正答率40%（ベースラインの10倍）。1/√N用量調整則を発見。低ランクノイズ(k=4)で十分。When > Where ≫ What。",
        tl_2026c_title: "v14：推論多様体幾何学・50%新記録",
        tl_2026c_desc: "推論多様体の幾何学を発見：PCA上位ノイズは推論を破壊、ランダムノイズは自然に直交。フルランクフラッシュアニーリングで50% — 歴代最高記録。",

        // Results
        results_tag: "主要な実験結果",
        results_title: "ベルカーブと断崖絶壁",
        results_desc: "ノイズには「ゴルディロックスゾーン（ちょうど良い範囲）」が存在します — 少なすぎると効果なし、多すぎると推論が崩壊します。σ=0.20での遷移はコサイン類似度≈0.50を臨界閾値とする真の相転移です。",
        th_solve: "正答率",
        th_cosine: "コサイン類似度",
        th_status: "状態",
        cap_bellcurve: "ゴルディロックスゾーン：σ=0.15でピーク、σ=0.20で崖",
        cap_annealing: "冷却プロトコル：線形減衰で38%（歴代最高）",

        // Principles
        principles_tag: "革新的な発見",
        principles_title: "予防の原則",
        principles_desc: "ノイズはワクチンであり、抗生物質ではありません。推論が失敗に陥るとノイズを適用しても状況を悪化させるだけです。",
        vacc_title: "ワクチン（予防）",
        vacc_desc: "常時ノイズにより、モデルが推論の罠に陥ることを防ぎます。感染前に免疫を構築するワクチンのように。",
        anti_title: "抗生物質（治療）",
        anti_desc: "エラー後のノイズ注入は逆効果。モデルがエラーを出力すると、コンテキストが汚染され、ノイズでは修復できません。",
        quote: '「確率共鳴はワクチンであり、抗生物質ではない。ノイズは推論が失敗に陥る前に存在していなければならない。」',

        // Correlated Noise (v12)
        corr_tag: "v12の機能",
        corr_title: "相関ノイズ：用量が毒を作る",
        corr_desc: "複数の層に同時にノイズを注入すると何が起きる？普遍的な用量調整則を発見：壊滅的崩壊を防ぐためにσは1/√Nでスケールしなければならない。",
        corr_card1_title: "過剰投与の問題",
        corr_card1_desc: "σ=0.15を複数層にそのまま適用すると完全崩壊（0%正答率）。ノイズが蓄積して信号を破壊します。",
        corr_card2_title: "1/√N則",
        corr_card2_desc: "N=層数としてσを1/√Nでスケール。2層でσ=0.075、正の相関（ρ=+1）で正答率40%を達成 — ベースラインの10倍、歴代最高。",
        corr_card3_title: "相関の重要性",
        corr_card3_desc: "正の相関（ρ=+1）は適切な用量で負の相関（ρ=−1）を上回る。だが過剰投与では正の相関が崩壊し負の相関は生き残る — 非対称な相転移。",
        cap_phase68: "Phase 68: 10条件にわたる用量調整相関ノイズ",
        cap_phase69: "Phase 69: N=100でのアニーリングバリアントで40%を確認",

        // Links
        links_tag: "リンク",
        links_title: "論文・コード・著者",
        link_paper: "論文（Zenodo）",
        link_paper_desc: "最新バージョン。オープンアクセス。",
        link_code: "ソースコード",
        link_code_desc: "全実験スクリプト。MITライセンス。",
        link_author: "著者",
        link_email: "お問い合わせ",

        // v14 Manifold
        manifold_tag: "v14の新機能",
        manifold_title: "推論多様体の幾何学：なぜランダムノイズが効くのか",
        manifold_desc: "v14は推論多様体の幾何学を発見しました — ランダムノイズが自然に推論を強化し、整列ノイズが推論を破壊する理由を高次元幾何学で説明します。",
        manifold_card1_title: "PCA上位 = 破壊",
        manifold_card1_desc: "隠れ状態の主成分上位に整列したノイズは6.7%（=ベースライン）しか達成できません。推論軸は上位PCに符号化されており、それを摂動すると推論が崩壊します。",
        manifold_card2_title: "ランダム = 自然に安全",
        manifold_card2_desc: "4096次元空間では、ランダムノイズは4次元の推論軸とわずか0.098%しか重なりません。直交補空間ノイズ(46.7%) = ランダムノイズ(46.7%)。ランダムは自然に安全です。",
        manifold_card3_title: "50%歴代最高記録",
        manifold_card3_desc: "フルランク(k=4096)ノイズとフラッシュアニーリングで50%を達成、前記録の46%を更新。デュアルアニーリング(σ+k減衰)も同じく50%。",
        cap_phase71: "Phase 71：PCA整列ノイズ — ランダムは推論軸を避ける",
        cap_phase79: "Phase 79：直交補空間 = ランダム（自然に安全）",
        cite_title: "引用",

        // Footer
        footer_license: "MITライセンスで公開。",
        footer_ai: "AI支援研究 — 最終的な判断は人間の著者が行いました。",
    }
};

let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    applyTranslations();

    const btn = document.getElementById('lang-toggle');
    btn.textContent = currentLang === 'en' ? '🇯🇵 日本語' : '🇬🇧 English';
    document.documentElement.lang = currentLang;
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
}

// Auto-detect language
if (navigator.language && navigator.language.startsWith('ja')) {
    currentLang = 'ja';
    window.addEventListener('DOMContentLoaded', () => {
        applyTranslations();
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = '🇬🇧 English';
        document.documentElement.lang = 'ja';
    });
}
