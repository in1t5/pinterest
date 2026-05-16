/* Retirement Withdrawal pins — 3 designs */

// 03 — Timeline (portfolio over 30 years)
const RetireTimeline = () => (
  <Pin bg="#3A5477">
    <div style={{
      position: "absolute", inset: 0, opacity: 0.15,
      background: "radial-gradient(circle at 70% 30%, #5192C6 0%, transparent 50%)",
    }}/>

    <div style={{padding: "90px 80px 0", textAlign: "center", position: "relative"}}>
      <Script size={60} color="#C1D5A5" style={{marginBottom: 12}}>30 years.</Script>
      <Serif size={88} weight={300} color="#F5EEED" style={{marginBottom: 4}}>Your portfolio.</Serif>
      <Serif size={88} weight={300} italic color="#C1D5A5">Still standing.</Serif>
      <div style={{marginTop: 24, fontFamily: "Lato, sans-serif", fontSize: 23, color: "#EAEDCE", letterSpacing: 1.5}}>
        Dynamic withdrawal strategy — modeled
      </div>
    </div>

    {/* Chart */}
    <div style={{padding: "60px 80px 0"}}>
      <div style={{background: "rgba(245,238,237,0.05)", border: "1px solid rgba(193,213,165,0.3)", borderRadius: 8, padding: "32px 28px"}}>
        <svg width="844" height="320" viewBox="0 0 844 320">
          <defs>
            <linearGradient id="rgrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C1D5A5" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#C1D5A5" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* y axis labels */}
          {[
            {y: 40, l: "$1.2M"},
            {y: 110, l: "$1.0M"},
            {y: 180, l: "$800k"},
            {y: 250, l: "$600k"},
          ].map((tick, i) => (
            <g key={i}>
              <line x1="80" y1={tick.y} x2="820" y2={tick.y} stroke="#C1D5A5" strokeWidth="0.5" opacity="0.2"/>
              <text x="70" y={tick.y + 4} fill="#C1D5A5" fontFamily="Lato, sans-serif" fontSize="13" textAnchor="end" opacity="0.7">{tick.l}</text>
            </g>
          ))}
          {/* portfolio line with volatility */}
          <path d="M 80 130 L 130 150 L 180 140 L 230 165 L 280 145 L 330 155 L 380 130 L 430 140 L 480 115 L 530 125 L 580 100 L 630 110 L 680 90 L 730 95 L 780 80"
                fill="url(#rgrad)" stroke="none"/>
          <path d="M 80 130 L 130 150 L 180 140 L 230 165 L 280 145 L 330 155 L 380 130 L 430 140 L 480 115 L 530 125 L 580 100 L 630 110 L 680 90 L 730 95 L 780 80"
                stroke="#C1D5A5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          {/* endpoint marker */}
          <circle cx="780" cy="80" r="7" fill="#C1D5A5"/>
          <circle cx="780" cy="80" r="14" fill="#C1D5A5" opacity="0.3"/>
          {/* annotation pill */}
          <rect x="540" y="20" width="240" height="46" rx="8" fill="#F5EEED"/>
          <text x="660" y="48" fill="#47584F" fontFamily="Lato, sans-serif" fontSize="16" fontWeight="700" textAnchor="middle">Year 30: $847k intact</text>
          <line x1="660" y1="66" x2="780" y2="76" stroke="#F5EEED" strokeWidth="1"/>
          {/* x axis */}
          <line x1="80" y1="300" x2="820" y2="300" stroke="#C1D5A5" strokeWidth="0.5" opacity="0.4"/>
          {["Yr 0", "Yr 5", "Yr 10", "Yr 15", "Yr 20", "Yr 25", "Yr 30"].map((l, i) => (
            <text key={i} x={80 + i * 123} y="316" fill="#C1D5A5" fontFamily="Lato, sans-serif" fontSize="13" textAnchor="middle" opacity="0.7">{l}</text>
          ))}
        </svg>
      </div>

      {/* Strategy callout */}
      <div style={{
        marginTop: 28, padding: "16px 28px", background: "#C1D5A5", borderRadius: 999,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 14,
      }}>
        <Leaf size={20} color="#47584F"/>
        <div style={{fontFamily: "Lato, sans-serif", fontWeight: 700, fontSize: 22, color: "#47584F"}}>
          Dynamic Withdrawal Strategy
        </div>
        <div style={{width: 1, height: 18, background: "#47584F", opacity: 0.4}}/>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#47584F"}}>
          94% success rate
        </div>
      </div>

      <div style={{textAlign: "center", marginTop: 28, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 24, color: "#C1D5A5"}}>
        "Spend more in good years. Protect in bad."
      </div>
    </div>

    <PinFooter variant="dark" cta="Run simulation"/>
  </Pin>
);

// 06 — Question hook (permission to spend more)
const RetireQuestion = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "100px 80px 0"}}>
      <Script size={66} color="#84A17C" style={{marginBottom: 10}}>spend more.</Script>
      <Script size={66} color="#84A17C" style={{marginLeft: 30, marginBottom: 36}}>worry less.</Script>

      <Serif size={82} weight={300} italic style={{lineHeight: 1.08, marginBottom: 24}}>
        What if you could safely withdraw
      </Serif>
      <Serif size={120} weight={400} color="#47584F" style={{lineHeight: 1}}>more?</Serif>

      <div style={{height: 1, background: "#47584F", opacity: 0.25, marginTop: 36}}/>
    </div>

    {/* Comparison cards */}
    <div style={{padding: "44px 80px 0"}}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16}}>
        <div style={{padding: "32px 26px", background: "#FFFFFF", borderRadius: 8, border: "1px solid #EAEDCE", position: "relative"}}>
          <div style={{
            display: "inline-block", padding: "5px 14px", background: "#6E686A",
            borderRadius: 999, fontSize: 15, letterSpacing: 2, color: "#F5EEED", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 18,
          }}>Fixed 4%</div>
          <Serif size={42} weight={400} color="#1A1A18" style={{lineHeight: 1.05, marginBottom: 8}}>$40,000/yr</Serif>
          <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 23, color: "#6E686A"}}>same number, every year</div>
          <div style={{marginTop: 18, fontSize: 18, color: "#6E686A", lineHeight: 1.5}}>Conservative, predictable — leaves money on the table in good markets.</div>
        </div>

        <div style={{padding: "32px 26px", background: "#47584F", borderRadius: 8, position: "relative"}}>
          <div style={{
            display: "inline-block", padding: "5px 14px", background: "#C1D5A5",
            borderRadius: 999, fontSize: 15, letterSpacing: 2, color: "#47584F", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 18,
          }}>Dynamic</div>
          <Serif size={42} weight={400} color="#F5EEED" style={{lineHeight: 1.05, marginBottom: 8}}>$38–52k/yr</Serif>
          <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 23, color: "#C1D5A5"}}>more in good years</div>
          <div style={{marginTop: 18, fontSize: 18, color: "#EAEDCE", lineHeight: 1.5}}>Adapts to markets. Higher average income, same portfolio survival.</div>
        </div>
      </div>

      {/* Connector */}
      <div style={{textAlign: "center", marginTop: 36}}>
        <Branch width={200} color="#84A17C" style={{display: "block", margin: "0 auto 16px"}}/>
        <Body size={26} color="#47584F" style={{maxWidth: 580, margin: "0 auto", lineHeight: 1.5}}>
          Dynamic withdrawal adjusts to the market — spend more when it climbs, protect when it dips.
        </Body>
      </div>

      <div style={{textAlign: "center", marginTop: 28, padding: "16px", background: "#EAEDCE", borderRadius: 6}}>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#47584F"}}>
          ~15% more lifetime income · same safety margin
        </div>
      </div>
    </div>

    <PinFooter cta="Model yours"/>
  </Pin>
);

// 22 — Phone mockup
const RetirePhone = () => (
  <Pin bg="#3A5477">
    <div style={{
      position: "absolute", inset: 0, opacity: 0.2,
      background: "radial-gradient(ellipse at top, #5192C6 0%, transparent 60%)",
    }}/>

    <div style={{padding: "80px 80px 0", textAlign: "center", position: "relative"}}>
      <Kicker color="#C1D5A5" style={{marginBottom: 16}}>In your pocket</Kicker>
      <Serif size={78} weight={300} color="#F5EEED" style={{marginBottom: 4}}>Retirement income</Serif>
      <Serif size={78} weight={300} italic color="#C1D5A5" style={{marginBottom: 14}}>calculator.</Serif>
      <Script size={48} color="#C1D5A5">free, on any device.</Script>
    </div>

    {/* Phone frame */}
    <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
      <div style={{
        width: 320, height: 540, background: "#1a1f1c", borderRadius: 38,
        padding: 12, position: "relative",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 0 0 2px #47584F",
      }}>
        {/* Notch */}
        <div style={{
          position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
          width: 90, height: 6, background: "#000", borderRadius: 999,
        }}/>

        <div style={{background: "#1a1f1c", borderRadius: 28, height: "100%", padding: "32px 22px", color: "#F5EEED", position: "relative"}}>
          <div style={{display: "flex", alignItems: "center", gap: 8, marginBottom: 18, paddingBottom: 14, borderBottom: "1px solid rgba(193,213,165,0.2)"}}>
            <Leaf size={18} color="#C1D5A5"/>
            <div style={{fontFamily: "Lato, sans-serif", fontWeight: 700, fontSize: 20, color: "#F5EEED"}}>Withdrawal</div>
          </div>
          <div style={{fontSize: 16, letterSpacing: 2, color: "#84A17C", fontWeight: 700, marginBottom: 6}}>STRATEGY · DYNAMIC</div>
          <Serif size={56} weight={400} color="#F5EEED" style={{lineHeight: 1, marginBottom: 14}}>$40k<span style={{fontSize: 27, color: "#C1D5A5"}}>/yr</span></Serif>
          <div style={{display: "inline-block", padding: "4px 12px", background: "rgba(193,213,165,0.2)", borderRadius: 999, fontSize: 17, color: "#C1D5A5", fontWeight: 700, marginBottom: 18}}>
            ✓ Success rate: 94%
          </div>

          {/* Mini chart */}
          <svg width="100%" height="120" viewBox="0 0 270 120">
            <path d="M 0 60 Q 50 50 90 55 T 180 50 T 270 40" stroke="#C1D5A5" strokeWidth="2" fill="none"/>
            <path d="M 0 60 Q 50 50 90 55 T 180 50 T 270 40 L 270 120 L 0 120 Z" fill="#C1D5A5" opacity="0.1"/>
          </svg>
          <div style={{display: "flex", justifyContent: "space-between", fontFamily: "Lato, sans-serif", fontSize: 16, color: "#84A17C", marginTop: -4}}>
            <span>Yr 0</span>
            <span>Yr 30</span>
          </div>

          {/* Bottom button */}
          <div style={{
            position: "absolute", bottom: 24, left: 22, right: 22,
            padding: "12px", background: "#C1D5A5", borderRadius: 999,
            textAlign: "center", fontFamily: "Lato, sans-serif", fontWeight: 700,
            color: "#47584F", fontSize: 18, letterSpacing: 1.5, textTransform: "uppercase",
          }}>
            Calculate →
          </div>
        </div>
      </div>
    </div>

    <div style={{textAlign: "center", marginTop: 40}}>
      <Body size={27} color="#EAEDCE">Free · no sign-up · works anywhere.</Body>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

Object.assign(window, {RetireTimeline, RetireQuestion, RetirePhone});
