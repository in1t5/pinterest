/* FIRE pins — 3 designs */

// 01 — Direct utility hero ("Retire early on your terms")
const FireHero = () => (
  <Pin bg="#F5EEED">
    {/* Top dark editorial band */}
    <div style={{background: "#47584F", padding: "80px 80px 60px", position: "relative", overflow: "hidden"}}>
      <GrowthRings size={500} color="#C1D5A5" opacity={0.12} style={{position: "absolute", top: -150, right: -150}}/>
      <div style={{display: "inline-flex", alignItems: "center", gap: 12, padding: "8px 16px", border: "1px solid #C1D5A5", borderRadius: 999, marginBottom: 28}}>
        <div style={{width: 6, height: 6, borderRadius: "50%", background: "#C1D5A5"}}/>
        <div style={{fontSize: 16, letterSpacing: 3, color: "#C1D5A5", fontWeight: 700, textTransform: "uppercase"}}>Free FIRE calculator</div>
      </div>

      <Serif size={108} weight={300} color="#F5EEED" style={{lineHeight: 0.95, marginBottom: 8}}>Retire early.</Serif>
      <Serif size={108} weight={300} italic color="#F5EEED" style={{lineHeight: 0.95, marginBottom: 18}}>On your</Serif>
      <Script size={130} color="#C1D5A5" style={{lineHeight: 1, marginLeft: 30, marginBottom: 24}}>own terms.</Script>

      <Body size={27} color="#EAEDCE" style={{maxWidth: 500, lineHeight: 1.45}}>
        Calculate your exact FIRE number and retirement date — in seconds, no email.
      </Body>
    </div>

    {/* Bottom calculator preview */}
    <div style={{padding: "44px 80px 0", position: "relative"}}>
      <div style={{display: "flex", alignItems: "baseline", gap: 14, marginBottom: 22}}>
        <Kicker color="#84A17C">Example calculation</Kicker>
        <div style={{flex: 1, height: 1, background: "#84A17C", opacity: 0.3}}/>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 32px", marginBottom: 32}}>
        {[
          ["Current age", "34"],
          ["Annual income", "$85k"],
          ["Annual expenses", "$45k"],
          ["Portfolio", "$124k"],
        ].map(([l, v], i) => (
          <div key={i} style={{paddingBottom: 12, borderBottom: "1px solid #EAEDCE"}}>
            <div style={{fontSize: 15, letterSpacing: 2, color: "#6E686A", fontWeight: 700, textTransform: "uppercase", marginBottom: 4}}>{l}</div>
            <Serif size={36} weight={400} color="#1A1A18">{v}</Serif>
          </div>
        ))}
      </div>

      <div style={{padding: "28px 32px", background: "#FFFFFF", borderRadius: 8, border: "1px solid #EAEDCE"}}>
        <Kicker color="#84A17C" style={{marginBottom: 8}}>Your FIRE number</Kicker>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
          <Serif size={72} weight={400} color="#1A1A18" style={{lineHeight: 1}}>$1,125,000</Serif>
          <div style={{textAlign: "right"}}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#84A17C"}}>FIRE at</div>
            <Serif size={48} weight={400} color="#47584F" style={{lineHeight: 1}}>Age 49</Serif>
          </div>
        </div>
        <div style={{marginTop: 14, paddingTop: 14, borderTop: "1px solid #EAEDCE", fontFamily: "Lato, sans-serif", fontSize: 18, color: "#6E686A", letterSpacing: 0.3}}>
          ✓ 15 years away · year-by-year projection · free PDF report
        </div>
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

// 05 — Question hook ("Can you retire before 50?")
const FireQuestion = () => (
  <Pin bg="#47584F">
    <GrowthRings size={600} color="#C1D5A5" opacity={0.1} style={{position: "absolute", bottom: -200, left: -200}}/>
    <Arc size={500} color="#C1D5A5" opacity={0.2} strokeWidth={1.5} style={{position: "absolute", top: 100, right: -100}}/>

    <div style={{padding: "100px 80px 0", position: "relative"}}>
      <Script size={68} color="#C1D5A5" style={{marginBottom: 16}}>closer than you think.</Script>

      <Serif size={88} weight={300} italic color="#F5EEED" style={{lineHeight: 1.05, marginBottom: 36}}>
        Can you retire <span style={{fontStyle: "normal", color: "#C1D5A5"}}>before 50</span>?
      </Serif>

      <div style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 28}}>
        <div style={{width: 50, height: 1, background: "#C1D5A5"}}/>
        <Kicker color="#C1D5A5">A free calculator can tell you</Kicker>
      </div>

      <Body size={27} color="#EAEDCE" style={{maxWidth: 540, lineHeight: 1.45}}>
        Most people assume retirement is 30+ years away. The FIRE Calculator often shows something much closer.
      </Body>
    </div>

    {/* Example callout */}
    <div style={{position: "absolute", left: 80, right: 80, top: 770}}>
      <div style={{background: "#F5EEED", borderRadius: 10, padding: "36px 36px"}}>
        <Kicker color="#84A17C" style={{marginBottom: 18}}>Example calculation</Kicker>
        <div style={{fontFamily: "Lato, sans-serif", fontSize: 22, color: "#6E686A", marginBottom: 22, letterSpacing: 0.2}}>
          Starting age 34 · $124k portfolio · 32% savings rate
        </div>
        <div style={{height: 1, background: "#EAEDCE", marginBottom: 22}}/>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
          <div>
            <Kicker color="#47584F" style={{marginBottom: 4}}>FIRE at</Kicker>
            <Serif size={86} weight={300} color="#47584F" style={{lineHeight: 1}}>Age 49</Serif>
          </div>
          <div style={{textAlign: "right"}}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#84A17C"}}>just</div>
            <Serif size={86} weight={300} color="#84A17C" style={{lineHeight: 1}}>15<span style={{fontSize: 32}}> years</span></Serif>
          </div>
        </div>
        <div style={{marginTop: 22, paddingTop: 16, borderTop: "1px solid #EAEDCE", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 25, color: "#47584F"}}>
          → Enter your own numbers to see your real date.
        </div>
      </div>

      <div style={{marginTop: 36, display: "flex", justifyContent: "center", gap: 14}}>
        <Branch width={180} color="#84A17C"/>
      </div>
      <div style={{textAlign: "center", marginTop: 18, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 26, color: "#C1D5A5"}}>
        "Your FIRE date might surprise you."
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

// 13 — How to calculate (4 steps)
const FireSteps = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "80px 80px 0", position: "relative"}}>
      <div style={{position: "absolute", top: 80, right: 80}}>
        <Sprig size={80} color="#84A17C"/>
      </div>

      <Kicker color="#84A17C" style={{marginBottom: 16}}>The method · No. 13</Kicker>
      <Serif size={82} weight={300} style={{marginBottom: 4}}>How to find</Serif>
      <Serif size={82} weight={300} italic color="#47584F">your FIRE number,</Serif>
      <Script size={72} color="#84A17C" style={{marginTop: 8, marginLeft: 24}}>in four steps.</Script>

      <div style={{height: 1, background: "#47584F", marginTop: 36, opacity: 0.25, width: "70%"}}/>
    </div>

    <div style={{padding: "44px 80px 0"}}>
      {[
        {n: "01", t: "Know your annual expenses", d: "What you spend each year. e.g. $45,000.", tip: "Include housing, food, healthcare, travel."},
        {n: "02", t: "Calculate your FIRE number", d: "Annual expenses × 25 = $1,125,000.", tip: "This portfolio sustains your spending at 4%."},
        {n: "03", t: "Calculate your savings rate", d: "(Income − expenses) ÷ income × 100.", tip: "35% savings = ~17 years to FIRE. The key lever."},
        {n: "04", t: "Track your portfolio to target", d: "Use the calculator year by year.", tip: "Adjust savings. Watch the date move."},
      ].map((s, i) => (
        <div key={i} style={{display: "flex", gap: 28, marginBottom: 22, paddingBottom: 22, borderBottom: i < 3 ? "1px solid #EAEDCE" : "none"}}>
          <div style={{minWidth: 90}}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: 60, color: "#84A17C", lineHeight: 1}}>{s.n}</div>
          </div>
          <div style={{flex: 1}}>
            <div style={{fontFamily: "Lato, sans-serif", fontSize: 27, fontWeight: 700, color: "#1A1A18", marginBottom: 6}}>{s.t}</div>
            <Body size={23} color="#47584F" style={{marginBottom: 8}}>{s.d}</Body>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 23, color: "#6E686A"}}>→ {s.tip}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Summary footer */}
    <div style={{position: "absolute", bottom: 130, left: 80, right: 80}}>
      <div style={{background: "#EAEDCE", padding: "20px 28px", borderRadius: 6, textAlign: "center"}}>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 25, color: "#47584F"}}>
          $45k × 25 = <span style={{fontWeight: 500, fontStyle: "normal"}}>$1.125M</span> · 35% savings · FIRE at 49
        </div>
      </div>
    </div>

    <PinFooter cta="Use it free"/>
  </Pin>
);

Object.assign(window, {FireHero, FireQuestion, FireSteps});
