/* Coast FIRE pins — 2 designs */

// 01 — Hero ("Stop saving. Let it coast.")
const CoastHero = () => (
  <Pin bg="#47584F">
    {/* Big arc visualizing coasting */}
    <svg width="1000" height="600" viewBox="0 0 1000 600" style={{position: "absolute", top: 0, left: 0, pointerEvents: "none"}}>
      <path d="M-50 500 Q400 -50 1050 200" stroke="#84A17C" strokeWidth="2" fill="none" opacity="0.35"/>
      <path d="M-50 530 Q400 -10 1050 240" stroke="#C1D5A5" strokeWidth="1" fill="none" opacity="0.25"/>
      <circle cx="850" cy="160" r="6" fill="#C1D5A5"/>
      <circle cx="200" cy="380" r="4" fill="#84A17C"/>
    </svg>

    <div style={{padding: "90px 80px 0", position: "relative"}}>
      <div style={{display: "inline-block", padding: "8px 18px", border: "1px solid #C1D5A5", borderRadius: 999, marginBottom: 36}}>
        <div style={{fontSize: 16, letterSpacing: 3, color: "#C1D5A5", fontWeight: 700, textTransform: "uppercase"}}>
          · Free calculator · Coast FIRE
        </div>
      </div>

      <Serif size={120} weight={300} color="#F5EEED" style={{lineHeight: 0.95, marginBottom: 8}}>Stop saving.</Serif>
      <Serif size={120} weight={300} color="#F5EEED" style={{lineHeight: 0.95, marginBottom: 14}}>Let it</Serif>
      <Script size={130} color="#C1D5A5" style={{lineHeight: 1, marginLeft: 60, marginBottom: 36}}>coast.</Script>

      <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 28}}>
        <div style={{width: 60, height: 1, background: "#C1D5A5"}}/>
        <Kicker color="#C1D5A5">To freedom</Kicker>
      </div>

      <Body size={27} color="#EAEDCE" style={{maxWidth: 520, lineHeight: 1.45}}>
        Find the exact portfolio you need <em style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 24}}>today</em> to retire without saving another dollar.
      </Body>
    </div>

    {/* Coast number card — floating */}
    <div style={{position: "absolute", left: 80, right: 80, top: 1000}}>
      <div style={{background: "#F5EEED", borderRadius: 8, padding: "32px 36px", boxShadow: "0 12px 32px rgba(0,0,0,0.2)"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18, paddingBottom: 14, borderBottom: "1px solid #EAEDCE"}}>
          <Kicker color="#84A17C">Coast FIRE example</Kicker>
          <div style={{fontSize: 16, letterSpacing: 2, color: "#6E686A", fontWeight: 700, textTransform: "uppercase"}}>Age 30 · $40k/yr</div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
          <div>
            <div style={{fontSize: 16, letterSpacing: 2, color: "#6E686A", fontWeight: 700, textTransform: "uppercase", marginBottom: 6}}>Your coast number</div>
            <Serif size={88} weight={400} color="#1A1A18" style={{lineHeight: 1}}>$186,000</Serif>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 25, color: "#47584F", marginTop: 6}}>
              ✓ reachable at age 33
            </div>
          </div>
          <div style={{textAlign: "right"}}>
            <div style={{fontSize: 16, letterSpacing: 2, color: "#6E686A", fontWeight: 700, textTransform: "uppercase", marginBottom: 6}}>Years away</div>
            <Serif size={88} weight={400} color="#84A17C" style={{lineHeight: 1}}>3</Serif>
          </div>
        </div>
      </div>

      <div style={{marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center"}}>
        {["Coast FIRE", "Lean FIRE", "Barista FIRE", "Fat FIRE"].map((t, i) => (
          <div key={i} style={{
            padding: "8px 16px", borderRadius: 999,
            border: i === 0 ? "none" : "1px solid #C1D5A5",
            background: i === 0 ? "#C1D5A5" : "transparent",
            color: i === 0 ? "#47584F" : "#EAEDCE",
            fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
          }}>{t}</div>
        ))}
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

// 02 — Coast number editorial result
const CoastResult = () => (
  <Pin bg="#47584F">
    <GrowthRings size={500} color="#C1D5A5" opacity={0.15} style={{position: "absolute", top: -150, right: -150}}/>

    <div style={{padding: "90px 80px 0", position: "relative"}}>
      <Script size={62} color="#C1D5A5" style={{marginBottom: 6}}>one number,</Script>
      <Script size={62} color="#C1D5A5" style={{marginLeft: 50, marginBottom: 36}}>total freedom.</Script>

      <Serif size={88} weight={300} color="#F5EEED" style={{marginBottom: 4}}>Your Coast</Serif>
      <Serif size={88} weight={300} italic color="#C1D5A5" style={{marginBottom: 24}}>FIRE number.</Serif>

      <Body size={27} color="#EAEDCE" style={{maxWidth: 500, lineHeight: 1.45}}>
        Hit this once. Compound growth handles the rest of the journey.
      </Body>

      {/* Three stacked metrics */}
      <div style={{marginTop: 80, background: "rgba(245,238,237,0.04)", border: "1px solid rgba(193,213,165,0.25)", borderRadius: 8, overflow: "hidden"}}>
        <div style={{padding: "32px 36px", borderBottom: "1px solid rgba(193,213,165,0.18)"}}>
          <Kicker color="#84A17C" style={{marginBottom: 8}}>Coast number</Kicker>
          <Serif size={88} weight={400} color="#F5EEED" style={{lineHeight: 1}}>$247,000</Serif>
        </div>
        <div style={{padding: "24px 36px", borderBottom: "1px solid rgba(193,213,165,0.18)", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Kicker color="#C1D5A5">Stop saving at</Kicker>
          <Serif size={56} weight={300} color="#F5EEED">Age 38</Serif>
        </div>
        <div style={{padding: "24px 36px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Kicker color="#C1D5A5">Retire at</Kicker>
          <Serif size={56} weight={300} color="#F5EEED">Age 62</Serif>
        </div>
      </div>

      {/* Mantra */}
      <div style={{marginTop: 56, textAlign: "center"}}>
        <Branch width={200} color="#84A17C" style={{display: "block", margin: "0 auto 18px"}}/>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 26, color: "#C1D5A5", lineHeight: 1.35}}>
          "Plant once. Let the tree do its work."
        </div>
      </div>

      {/* Tags */}
      <div style={{marginTop: 28, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center"}}>
        {["coast fire calculator", "coast fire number", "financial independence"].map((t, i) => (
          <div key={i} style={{
            padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(193,213,165,0.4)",
            color: "#C1D5A5", fontSize: 17, fontWeight: 500,
          }}>{t}</div>
        ))}
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

Object.assign(window, {CoastHero, CoastResult});
