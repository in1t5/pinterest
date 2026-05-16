/* Budget pins — 2 designs */

// 15 — Build your first budget (step ladder)
const BudgetSteps = () => (
  <Pin bg="#F5EEED">
    {/* Editorial top section */}
    <div style={{padding: "80px 90px 0", position: "relative"}}>
      <div style={{position: "absolute", top: 80, right: 90}}>
        <Sprig size={70} color="#84A17C"/>
      </div>

      <Kicker color="#84A17C" style={{marginBottom: 14}}>For absolute beginners</Kicker>
      <Serif size={86} weight={300} style={{marginBottom: 4}}>Your first</Serif>
      <Serif size={86} weight={300} italic color="#47584F">budget,</Serif>
      <Script size={70} color="#84A17C" style={{marginTop: 8, marginLeft: 24}}>in four moves.</Script>

      <Body size={25} color="#6E686A" style={{marginTop: 24, maxWidth: 440}}>
        No spreadsheets. No experience needed. <em style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 27}}>Just start.</em>
      </Body>
    </div>

    {/* Steps as ladder rungs */}
    <div style={{padding: "60px 90px 0"}}>
      {[
        {n: "01", t: "List income sources", d: "Salary, freelance, side gigs — every regular dollar in. Monthly total.", tag: "1 min"},
        {n: "02", t: "List fixed expenses", d: "Rent, insurance, loan payments, subscriptions. Same amount every month.", tag: "2 min"},
        {n: "03", t: "Add variable expenses", d: "Food, transport, fun. Start rough — precision comes with practice.", tag: "2 min"},
        {n: "04", t: "Pay yourself first", d: "Set the savings target before budgeting expenses. Budget what remains.", tag: "Key insight", highlight: true},
      ].map((s, i) => (
        <div key={i} style={{
          display: "flex", gap: 24, marginBottom: 18, padding: "22px 26px",
          background: s.highlight ? "#C1D5A5" : "#FFFFFF",
          borderRadius: 8, border: "1px solid #EAEDCE",
          boxShadow: "0 1px 3px rgba(71,88,79,0.04)",
        }}>
          <div style={{
            width: 54, height: 54, borderRadius: "50%",
            background: s.highlight ? "#47584F" : "#EAEDCE",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 27, fontWeight: 500, color: s.highlight ? "#C1D5A5" : "#47584F",
            }}>{s.n}</div>
          </div>
          <div style={{flex: 1}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6}}>
              <div style={{fontFamily: "Lato, sans-serif", fontSize: 26, fontWeight: 700, color: "#1A1A18"}}>{s.t}</div>
              <div style={{
                fontSize: 15, letterSpacing: 2, fontWeight: 700, color: s.highlight ? "#47584F" : "#84A17C",
                textTransform: "uppercase",
              }}>{s.tag}</div>
            </div>
            <Body size={21} color="#6E686A" style={{lineHeight: 1.5}}>{s.d}</Body>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom mantra */}
    <div style={{position: "absolute", bottom: 130, left: 90, right: 90, textAlign: "center"}}>
      <Ornament width={140} color="#84A17C" style={{margin: "0 auto 14px"}}/>
      <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 24, color: "#47584F"}}>
        Start rough. Refine monthly. It gets easier.
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

// 23 — Mockup output closeup (budget summary)
const BudgetMockup = () => (
  <Pin bg="#1f2620">
    {/* Subtle vertical lines */}
    <div style={{
      position: "absolute", inset: 0, opacity: 0.08,
      backgroundImage: "repeating-linear-gradient(90deg, #84A17C 0, #84A17C 1px, transparent 1px, transparent 80px)",
    }}/>

    <div style={{padding: "90px 80px 0", position: "relative"}}>
      <div style={{textAlign: "center", marginBottom: 36}}>
        <Kicker color="#84A17C" style={{marginBottom: 14}}>May 2026 · Budget summary</Kicker>
        <Serif size={76} weight={300} color="#F5EEED" style={{marginBottom: 4}}>This is what</Serif>
        <Serif size={76} weight={300} italic color="#C1D5A5" style={{lineHeight: 1.05}}>clarity looks like.</Serif>
      </div>

      {/* Budget table */}
      <div style={{background: "#F5EEED", borderRadius: 10, padding: "36px 36px 8px", marginTop: 32}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 18, borderBottom: "1px solid #EAEDCE", marginBottom: 24}}>
          <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 28, color: "#47584F"}}>Budget summary</div>
          <div style={{fontSize: 16, letterSpacing: 2, color: "#84A17C", fontWeight: 700, textTransform: "uppercase"}}>May</div>
        </div>

        {[
          ["Total income", "$5,200", false],
          ["Total budgeted", "$4,400", false],
          ["Total spent", "$3,952", false],
          ["Saved", "$1,248", false],
        ].map(([l, v], i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "16px 0", borderBottom: "1px solid #F5EEED",
          }}>
            <div style={{fontFamily: "Lato, sans-serif", fontSize: 24, color: "#47584F"}}>{l}</div>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 30, color: "#1A1A18"}}>{v}</div>
          </div>
        ))}

        {/* Highlight savings rate */}
        <div style={{
          marginTop: 8, padding: "22px 22px", background: "#47584F",
          borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 24,
        }}>
          <div>
            <div style={{fontSize: 15, letterSpacing: 2, color: "#C1D5A5", fontWeight: 700, textTransform: "uppercase", marginBottom: 4}}>Savings rate</div>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#F5EEED"}}>the only number that matters</div>
          </div>
          <Serif size={72} weight={400} color="#F5EEED" style={{lineHeight: 1}}>24%</Serif>
        </div>
      </div>

      {/* Pull quote */}
      <div style={{marginTop: 36, textAlign: "center"}}>
        <Branch width={220} color="#84A17C" style={{display: "block", margin: "0 auto 18px"}}/>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 26, color: "#C1D5A5", lineHeight: 1.35}}>
          "Track it monthly. Watch it climb."
        </div>
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

Object.assign(window, {BudgetSteps, BudgetMockup});
