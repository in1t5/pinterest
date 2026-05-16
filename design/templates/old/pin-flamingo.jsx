/* Flamingo FIRE pins — 3 designs */

// 01 — Calculator hero
const FlamingoHero = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "100px 80px 0", textAlign: "center"}}>
      <Script size={62} color="#84A17C" style={{marginBottom: 12}}>model every scenario.</Script>

      <Serif size={96} weight={300} style={{marginBottom: 6}}>Flamingo</Serif>
      <Serif size={96} weight={300} italic color="#47584F" style={{marginBottom: 24}}>FIRE.</Serif>

      <Ornament width={160} color="#84A17C" style={{margin: "0 auto 24px"}}/>

      <Body size={27} color="#6E686A" style={{maxWidth: 520, margin: "0 auto", lineHeight: 1.45}}>
        Advanced retirement scenario modeling. <em style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 24}}>Free, no email.</em>
      </Body>
    </div>

    {/* Three metric cards */}
    <div style={{padding: "60px 80px 0"}}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14}}>
        {[
          {l: "Retire at", v: "58", bg: "#FFFFFF", fg: "#47584F"},
          {l: "Portfolio", v: "$1.2M", bg: "#47584F", fg: "#F5EEED"},
          {l: "Success", v: "97%", bg: "#FFFFFF", fg: "#47584F"},
        ].map((m, i) => (
          <div key={i} style={{
            background: m.bg, padding: "28px 20px", borderRadius: 6, textAlign: "center",
            border: m.bg === "#FFFFFF" ? "1px solid #EAEDCE" : "none",
          }}>
            <div style={{fontSize: 15, letterSpacing: 2, color: m.fg, opacity: 0.7, fontWeight: 700, textTransform: "uppercase", marginBottom: 8}}>{m.l}</div>
            <Serif size={56} weight={300} color={m.fg} style={{lineHeight: 1}}>{m.v}</Serif>
          </div>
        ))}
      </div>
    </div>

    {/* Features as editorial list */}
    <div style={{padding: "50px 80px 0"}}>
      <div style={{display: "flex", alignItems: "baseline", gap: 14, marginBottom: 24}}>
        <Kicker color="#84A17C">What it models</Kicker>
        <div style={{flex: 1, height: 1, background: "#84A17C", opacity: 0.3}}/>
      </div>
      {[
        ["I.", "Income changes over time"],
        ["II.", "Life events & one-off expenses"],
        ["III.", "Dynamic withdrawal strategies"],
        ["IV.", "40-year portfolio simulation"],
      ].map(([n, t], i) => (
        <div key={i} style={{display: "flex", gap: 24, padding: "16px 0", borderBottom: i < 3 ? "1px solid #EAEDCE" : "none", alignItems: "center"}}>
          <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: 28, color: "#84A17C", minWidth: 50}}>{n}</div>
          <div style={{flex: 1, fontFamily: "Lato, sans-serif", fontSize: 24, color: "#1A1A18", fontWeight: 500}}>{t}</div>
          <Leaf size={20} color="#84A17C"/>
        </div>
      ))}
    </div>

    <PinFooter cta="Calculate free"/>
  </Pin>
);

// 02 — Three numbers metric
const FlamingoResult = () => (
  <Pin bg="#47584F">
    <div style={{
      position: "absolute", inset: 0, opacity: 0.1,
      backgroundImage: "repeating-linear-gradient(90deg, #C1D5A5 0, #C1D5A5 1px, transparent 1px, transparent 60px)",
    }}/>
    <Arc size={400} color="#C1D5A5" opacity={0.25} strokeWidth={1} style={{position: "absolute", top: -50, right: -100}}/>

    <div style={{padding: "100px 80px 0", textAlign: "center", position: "relative"}}>
      <Kicker color="#C1D5A5" style={{marginBottom: 18}}>Your retirement metrics</Kicker>
      <Serif size={84} weight={300} italic color="#F5EEED" style={{marginBottom: 6}}>Three numbers.</Serif>
      <Serif size={84} weight={300} color="#C1D5A5">Complete picture.</Serif>

      <Ornament width={120} color="#C1D5A5" style={{margin: "32px auto 0"}}/>
    </div>

    {/* Big three-metric editorial */}
    <div style={{padding: "70px 80px 0", position: "relative"}}>
      <div style={{
        background: "rgba(245,238,237,0.05)", border: "1px solid rgba(193,213,165,0.3)",
        borderRadius: 8, padding: "44px 40px",
      }}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", gap: 24, alignItems: "center"}}>
          <div style={{textAlign: "center"}}>
            <Kicker color="#C1D5A5" style={{marginBottom: 12}}>Retire at</Kicker>
            <Serif size={96} weight={300} color="#F5EEED" style={{lineHeight: 1}}>58</Serif>
          </div>
          <div style={{height: 90, background: "rgba(193,213,165,0.3)"}}/>
          <div style={{textAlign: "center"}}>
            <Kicker color="#C1D5A5" style={{marginBottom: 12}}>Portfolio</Kicker>
            <Serif size={88} weight={300} color="#F5EEED" style={{lineHeight: 1}}>$1.2M</Serif>
          </div>
          <div style={{height: 90, background: "rgba(193,213,165,0.3)"}}/>
          <div style={{textAlign: "center"}}>
            <Kicker color="#C1D5A5" style={{marginBottom: 12}}>Success</Kicker>
            <Serif size={96} weight={300} color="#F5EEED" style={{lineHeight: 1}}>97%</Serif>
          </div>
        </div>
      </div>

      <div style={{textAlign: "center", marginTop: 24, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#C1D5A5"}}>
        calculated with Flamingo FIRE
      </div>

      {/* Capabilities tags */}
      <div style={{marginTop: 48, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap"}}>
        {["Income changes", "Life events", "40-year forecast", "Dynamic withdrawal"].map((t, i) => (
          <div key={i} style={{
            padding: "10px 18px", borderRadius: 999, border: "1px solid rgba(193,213,165,0.4)",
            color: "#C1D5A5", fontSize: 18, fontWeight: 500, letterSpacing: 0.2,
          }}>{t}</div>
        ))}
      </div>

      <div style={{marginTop: 48, textAlign: "center"}}>
        <Branch width={220} color="#84A17C" style={{display: "block", margin: "0 auto 16px"}}/>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 24, color: "#C1D5A5"}}>
          "Model any scenario. See how every variable moves the date."
        </div>
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

// 26 — Milestone tracker (ages with portfolio bands)
const FlamingoMilestones = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "80px 80px 0", textAlign: "center"}}>
      <Kicker color="#84A17C" style={{marginBottom: 14}}>Are you on track?</Kicker>
      <Serif size={66} weight={300} style={{marginBottom: 4}}>Retirement portfolio</Serif>
      <Serif size={66} weight={300} italic color="#47584F">milestones by age.</Serif>
      <Script size={48} color="#84A17C" style={{marginTop: 12}}>benchmarks for your journey</Script>
    </div>

    {/* Age bars — graduated growth visual */}
    <div style={{padding: "60px 80px 0"}}>
      {[
        {age: "30", range: "$50k – $100k", label: "early accumulation", w: 28, bg: "#47584F", fg: "#F5EEED"},
        {age: "35", range: "$150k – $250k", label: "compound growth begins", w: 42, bg: "#47584F", fg: "#F5EEED"},
        {age: "40", range: "$300k – $500k", label: "Coast FIRE window opens", w: 56, bg: "#84A17C", fg: "#F5EEED"},
        {age: "45", range: "$500k – $800k", label: "advanced accumulation", w: 70, bg: "#84A17C", fg: "#F5EEED"},
        {age: "50", range: "$800k – $1.2M", label: "approaching FIRE territory", w: 84, bg: "#C1D5A5", fg: "#47584F"},
        {age: "55", range: "$1.0M – $1.5M+", label: "retirement ready", w: 100, bg: "#C1D5A5", fg: "#47584F"},
      ].map((m, i) => (
        <div key={i} style={{display: "flex", gap: 14, alignItems: "stretch", marginBottom: 8}}>
          <div style={{
            width: 80, background: m.bg, color: m.fg, borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", padding: "10px 0",
          }}>
            <div style={{fontSize: 9, letterSpacing: 2, fontWeight: 700, opacity: 0.8}}>AGE</div>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 32, lineHeight: 1}}>{m.age}</div>
          </div>
          <div style={{
            flex: 1, padding: "12px 20px",
            background: `linear-gradient(to right, ${m.bg} 0%, ${m.bg} ${m.w}%, ${m.bg}22 ${m.w}%, ${m.bg}22 100%)`,
            borderRadius: 4, display: "flex", alignItems: "center", gap: 16,
          }}>
            <div style={{flex: 1}}>
              <div style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 28, color: m.fg, lineHeight: 1.1}}>{m.range}</div>
              <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 21, color: m.fg, opacity: 0.85, marginTop: 2}}>{m.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div style={{textAlign: "center", marginTop: 32, padding: "0 80px"}}>
      <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "#47584F"}}>
        "The tree doesn't rush its growth. Neither should you."
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

Object.assign(window, {FlamingoHero, FlamingoResult, FlamingoMilestones});
