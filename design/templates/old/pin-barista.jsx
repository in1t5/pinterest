/* Barista FIRE pins — 5 designs */

// 01 — Direct utility hero ("two dates. total freedom.")
const BaristaHero = () => (
  <Pin bg="#F5EEED">
    {/* Editorial top label rotated */}
    <div style={{position: "absolute", top: 90, left: 60, transform: "rotate(-90deg)", transformOrigin: "left top", whiteSpace: "nowrap"}}>
      <Kicker color="#84A17C" style={{fontSize: 13, letterSpacing: 3}}>The Time And Money Tree · No. 01</Kicker>
    </div>

    {/* Botanical accent top right */}
    <div style={{position: "absolute", top: 60, right: 60}}>
      <Sprig size={80} color="#84A17C"/>
    </div>

    <div style={{padding: "120px 110px 0 110px"}}>
      <Script size={68} color="#84A17C" style={{marginBottom: 18}}>two dates,</Script>
      <Script size={68} color="#84A17C" style={{marginLeft: 80, marginBottom: 56}}>total freedom.</Script>

      <Serif size={104} weight={300} style={{letterSpacing: "-0.01em", marginBottom: 8}}>Barista</Serif>
      <Serif size={104} weight={300} italic color="#47584F" style={{letterSpacing: "0.01em", marginBottom: 28}}>FIRE.</Serif>

      <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 36}}>
        <div style={{width: 60, height: 1, background: "#47584F"}}/>
        <Kicker color="#6E686A">A free calculator</Kicker>
      </div>

      <Body size={28} color="#47584F" style={{maxWidth: 600, lineHeight: 1.45}}>
        Find your part-time exit date <em style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 26}}>and</em> your full retirement date — in the same calculation.
      </Body>
    </div>

    {/* Dual age cards — asymmetric */}
    <div style={{position: "absolute", left: 110, right: 110, top: 880}}>
      <div style={{display: "flex", gap: 24, alignItems: "stretch"}}>
        <div style={{flex: 1, background: "#C1D5A5", padding: "36px 32px", borderRadius: 4, position: "relative"}}>
          <Kicker color="#47584F" style={{fontSize: 15, marginBottom: 12}}>Phase II</Kicker>
          <Serif size={88} weight={400} color="#47584F" style={{lineHeight: 0.95}}>38</Serif>
          <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "#47584F", marginTop: 8}}>part-time begins</div>
        </div>
        <div style={{display: "flex", alignItems: "center", padding: "0 4px"}}>
          <Sparkle size={24} color="#47584F"/>
        </div>
        <div style={{flex: 1, background: "#47584F", padding: "36px 32px", borderRadius: 4, position: "relative"}}>
          <Kicker color="#C1D5A5" style={{fontSize: 15, marginBottom: 12}}>Phase III</Kicker>
          <Serif size={88} weight={400} color="#F5EEED" style={{lineHeight: 0.95}}>47</Serif>
          <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "#C1D5A5", marginTop: 8}}>complete freedom</div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: 28}}>
        <Ornament width={140} color="#84A17C"/>
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

// 02 — Result/metric editorial
const BaristaResult = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "100px 90px 0 90px"}}>
      <div style={{display: "flex", alignItems: "baseline", gap: 18, marginBottom: 36}}>
        <Kicker color="#84A17C">Result</Kicker>
        <div style={{flex: 1, height: 1, background: "#84A17C", opacity: 0.4}}/>
        <Kicker color="#84A17C">Two milestones</Kicker>
      </div>

      <Serif size={86} weight={300} style={{marginBottom: 4}}>Your Barista</Serif>
      <Serif size={86} weight={300} italic color="#47584F" style={{marginBottom: 36}}>FIRE Dates.</Serif>

      <Body size={27} color="#6E686A" style={{maxWidth: 540, marginBottom: 60}}>
        Two numbers. Two exits. One calculator. <span style={{fontFamily: "'Pinyon Script', cursive", fontSize: 28, color: "#84A17C"}}>complete clarity.</span>
      </Body>

      {/* Vertical timeline ribbon */}
      <div style={{display: "flex", gap: 36}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 18}}>
          <div style={{width: 14, height: 14, borderRadius: "50%", background: "#84A17C"}}/>
          <div style={{width: 1, flex: 1, background: "#84A17C", opacity: 0.4, minHeight: 200}}/>
          <div style={{width: 14, height: 14, borderRadius: "50%", background: "#47584F"}}/>
        </div>
        <div style={{flex: 1}}>
          <div style={{paddingBottom: 40, borderBottom: "1px solid #EAEDCE", marginBottom: 40}}>
            <Kicker color="#84A17C" style={{marginBottom: 8}}>Barista FI · 8 years away</Kicker>
            <Serif size={108} weight={300} color="#47584F" style={{lineHeight: 1}}>Age 38</Serif>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 24, color: "#6E686A", marginTop: 6}}>part-time begins</div>
          </div>
          <div>
            <Kicker color="#47584F" style={{marginBottom: 8}}>Full FIRE · 17 years away</Kicker>
            <Serif size={108} weight={300} color="#1A1A18" style={{lineHeight: 1}}>Age 47</Serif>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 24, color: "#6E686A", marginTop: 6}}>complete freedom</div>
          </div>
        </div>
      </div>
    </div>

    {/* Pull quote */}
    <div style={{position: "absolute", bottom: 140, left: 90, right: 90}}>
      <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 16}}>
        <Branch width={180} color="#84A17C"/>
      </div>
      <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 26, color: "#47584F", lineHeight: 1.3}}>
        "Work less in 6 years. Retire completely in 15."
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

// 03 — Timeline (3 phases as seasons)
const BaristaTimeline = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "90px 80px 0"}}>
      <div style={{textAlign: "center"}}>
        <Kicker color="#84A17C" style={{marginBottom: 18}}>Three phases · one timeline</Kicker>
        <Serif size={72} weight={300} style={{marginBottom: 6}}>Your path,</Serif>
        <Serif size={72} weight={300} italic color="#47584F">phase by phase.</Serif>
      </div>

      {/* Timeline rail */}
      <div style={{marginTop: 80, position: "relative"}}>
        <div style={{display: "flex", height: 90, borderRadius: 4, overflow: "hidden"}}>
          <div style={{flex: 1, background: "#47584F", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{color: "#C1D5A5", fontSize: 16, letterSpacing: 3, fontWeight: 700, marginBottom: 4}}>PHASE I</div>
            <div style={{color: "#F5EEED", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27}}>full-time</div>
          </div>
          <div style={{flex: 1, background: "#84A17C", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{color: "#47584F", fontSize: 16, letterSpacing: 3, fontWeight: 700, marginBottom: 4}}>PHASE II</div>
            <div style={{color: "#F5EEED", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27}}>part-time</div>
          </div>
          <div style={{flex: 1, background: "#C1D5A5", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{color: "#47584F", fontSize: 16, letterSpacing: 3, fontWeight: 700, marginBottom: 4}}>PHASE III</div>
            <div style={{color: "#47584F", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27}}>full freedom</div>
          </div>
        </div>
        {/* Age markers */}
        <div style={{display: "flex", marginTop: 14, fontFamily: "'Cormorant Garamond', serif", color: "#47584F"}}>
          <div style={{flex: 0, fontSize: 27, fontWeight: 500}}>30</div>
          <div style={{flex: 1, textAlign: "center", fontSize: 27, fontWeight: 500}}>38</div>
          <div style={{flex: 1, textAlign: "center", fontSize: 27, fontWeight: 500}}>47</div>
          <div style={{flex: 0, fontSize: 27, fontWeight: 500}}>57+</div>
        </div>
      </div>

      {/* Phase descriptions in editorial columns */}
      <div style={{marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28}}>
        {[
          {n: "I", t: "Build", d: "Stack your portfolio toward the Barista FI target.", c: "#47584F"},
          {n: "II", t: "Bridge", d: "Part-time work as the portfolio grows unassisted.", c: "#84A17C"},
          {n: "III", t: "Freedom", d: "Work becomes optional. The tree pays its keep.", c: "#C1D5A5"},
        ].map((p, i) => (
          <div key={i}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 56, color: p.c, lineHeight: 1, marginBottom: 8}}>{p.n}.</div>
            <div style={{height: 1, background: p.c, width: 40, marginBottom: 16}}/>
            <Serif size={28} weight={400} style={{marginBottom: 10}}>{p.t}</Serif>
            <Body size={22} color="#6E686A">{p.d}</Body>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{marginTop: 64, padding: "32px 0", borderTop: "1px solid #EAEDCE", borderBottom: "1px solid #EAEDCE", display: "flex", justifyContent: "space-around"}}>
        {[
          {n: "8", l: "years to barista FI"},
          {n: "9", l: "years to full FIRE"},
          {n: "38", l: "freedom begins"},
        ].map((s, i) => (
          <div key={i} style={{textAlign: "center"}}>
            <Serif size={64} weight={300} color="#47584F" style={{lineHeight: 1}}>{s.n}</Serif>
            <div style={{fontSize: 16, letterSpacing: 2, color: "#6E686A", textTransform: "uppercase", marginTop: 8, fontWeight: 700}}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

// 15 — Step ladder beginner
const BaristaSteps = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "80px 90px 0"}}>
      <Kicker color="#84A17C" style={{marginBottom: 14}}>The beginner's guide</Kicker>
      <Serif size={78} weight={300} style={{marginBottom: 4}}>Barista FIRE</Serif>
      <div style={{display: "flex", alignItems: "baseline", gap: 16}}>
        <Serif size={78} weight={300} italic color="#47584F">in five</Serif>
        <Script size={86} color="#84A17C">steps.</Script>
      </div>
      <div style={{height: 1, background: "#47584F", marginTop: 32, opacity: 0.3}}/>
    </div>

    {/* Steps as editorial entries */}
    <div style={{padding: "40px 90px 0"}}>
      {[
        {n: "01", t: "What is Barista FIRE?", d: "Part-time work while the portfolio grows. Lower target, earlier freedom."},
        {n: "02", t: "Calculate monthly expenses", d: "Every dollar out. This baseline sets both the Barista FI and Full FIRE targets."},
        {n: "03", t: "Plan part-time income", d: "Barista, freelance, consulting — any income during Phase II shrinks the target."},
        {n: "04", t: "Find your Barista FI target", d: "(Expenses – part-time income) × 12 × 25. The number that ends full-time work."},
        {n: "05", t: "Switch to part-time", d: "Hit the target. Drop to part-time. Compound growth takes you the rest of the way."},
      ].map((s, i) => (
        <div key={i} style={{display: "flex", gap: 28, padding: "20px 0", borderBottom: i < 4 ? "1px solid #EAEDCE" : "none"}}>
          <div style={{minWidth: 80, paddingTop: 4}}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: 48, color: "#84A17C", lineHeight: 1}}>{s.n}</div>
          </div>
          <div style={{flex: 1}}>
            <div style={{fontFamily: "Lato, sans-serif", fontSize: 27, fontWeight: 700, color: "#1A1A18", marginBottom: 6}}>{s.t}</div>
            <Body size={22} color="#6E686A" style={{lineHeight: 1.55}}>{s.d}</Body>
          </div>
          <div style={{width: 30, display: "flex", alignItems: "center"}}>
            <Leaf size={24} color="#84A17C"/>
          </div>
        </div>
      ))}
    </div>

    <PinFooter cta="Try free"/>
  </Pin>
);

// Alex story pin
const BaristaAlex = () => (
  <Pin bg="#F5EEED">
    {/* Editorial header */}
    <div style={{background: "#47584F", padding: "70px 90px 56px", position: "relative", overflow: "hidden"}}>
      <GrowthRings size={400} color="#C1D5A5" opacity={0.12} style={{position: "absolute", top: -100, right: -100}}/>
      <Kicker color="#C1D5A5" style={{marginBottom: 22, fontSize: 16}}>Case study · No. 04</Kicker>
      <Serif size={92} weight={300} color="#F5EEED" style={{marginBottom: 10}}>Meet Alex.</Serif>
      <Serif size={56} weight={300} italic color="#C1D5A5" style={{marginBottom: 24}}>Age 30. $150k saved.</Serif>
      <Body size={27} color="#EAEDCE" style={{maxWidth: 480, lineHeight: 1.45}}>
        He ran the Barista FIRE calculator. Here's what it told him.
      </Body>
    </div>

    {/* Inputs card */}
    <div style={{padding: "44px 90px 0"}}>
      <Kicker color="#84A17C" style={{marginBottom: 16}}>His numbers</Kicker>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 40px", paddingBottom: 28, borderBottom: "1px solid #EAEDCE"}}>
        {[
          ["Portfolio", "$150,000"],
          ["Expenses / yr", "$36,000"],
          ["Part-time target", "$1,500 / mo"],
          ["Current age", "30"],
        ].map(([l, v], i) => (
          <div key={i}>
            <div style={{fontSize: 16, letterSpacing: 2, color: "#6E686A", textTransform: "uppercase", fontWeight: 700, marginBottom: 6}}>{l}</div>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 32, color: "#1A1A18"}}>{v}</div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div style={{marginTop: 28}}>
        <div style={{display: "flex", alignItems: "baseline", gap: 14, marginBottom: 18}}>
          <Kicker color="#47584F">The calculator answered</Kicker>
          <div style={{flex: 1, height: 1, background: "#47584F", opacity: 0.2}}/>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8}}>
          <div style={{background: "#C1D5A5", padding: "28px 26px", borderRadius: 4}}>
            <div style={{fontSize: 15, letterSpacing: 2, color: "#47584F", fontWeight: 700, marginBottom: 4}}>BARISTA FI</div>
            <Serif size={68} weight={400} color="#47584F" style={{lineHeight: 1}}>Age 37</Serif>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 25, color: "#47584F", marginTop: 4}}>in 7 years</div>
          </div>
          <div style={{background: "#47584F", padding: "28px 26px", borderRadius: 4}}>
            <div style={{fontSize: 15, letterSpacing: 2, color: "#C1D5A5", fontWeight: 700, marginBottom: 4}}>FULL FIRE</div>
            <Serif size={68} weight={400} color="#F5EEED" style={{lineHeight: 1}}>Age 52</Serif>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 25, color: "#C1D5A5", marginTop: 4}}>$450k target</div>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: 18, fontFamily: "Lato, sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: 2, color: "#F1683F", textTransform: "uppercase"}}>
          11 years earlier than Full FIRE alone
        </div>
      </div>

      {/* Quote */}
      <div style={{marginTop: 36, paddingTop: 28, borderTop: "1px solid #EAEDCE"}}>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 28, color: "#47584F", lineHeight: 1.35, marginBottom: 10}}>
          "I had no idea my target could be $450k, not $900k. That changes everything."
        </div>
        <Body size={21} color="#6E686A">— Alex, age 30</Body>
      </div>
    </div>

    <PinFooter/>
  </Pin>
);

Object.assign(window, {BaristaHero, BaristaResult, BaristaTimeline, BaristaSteps, BaristaAlex});
