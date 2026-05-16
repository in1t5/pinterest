/* Financial Ledger pins — 5 designs */

// Sample net worth chart component (reusable)
const NetWorthChart = ({width = 800, height = 280, color = "#84A17C", bg = "transparent", labelColor = "#C1D5A5", points}) => {
  const data = points || [{y: 2019, v: 60}, {y: 2020, v: 95}, {y: 2021, v: 140}, {y: 2022, v: 185}, {y: 2023, v: 215}, {y: 2024, v: 250}];
  const min = 0; const max = 280;
  const xStep = width / (data.length - 1);
  const path = data.map((d, i) => `${i === 0 ? "M" : "L"} ${i * xStep} ${height - 60 - ((d.v - min) / (max - min)) * (height - 100)}`).join(" ");
  const areaPath = path + ` L ${(data.length - 1) * xStep} ${height - 40} L 0 ${height - 40} Z`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{background: bg}}>
      <defs>
        <linearGradient id="cgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#cgrad)"/>
      <path d={path} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {data.map((d, i) => (
        <circle key={i} cx={i * xStep} cy={height - 60 - ((d.v - min) / (max - min)) * (height - 100)} r="5" fill="#F5EEED" stroke={color} strokeWidth="2"/>
      ))}
      {data.map((d, i) => (
        <text key={i} x={i * xStep} y={height - 16} fill={labelColor} fontFamily="Lato, sans-serif" fontSize="14" textAnchor="middle" letterSpacing="2">{d.y}</text>
      ))}
    </svg>
  );
};

// 01 — Direct utility hero (net worth + chart)
const LedgerHero = () => (
  <Pin bg="#1a1f1c">
    <div style={{
      position: "absolute", inset: 0, opacity: 0.15,
      background: "radial-gradient(circle at 30% 20%, #47584F 0%, transparent 50%)",
    }}/>

    <div style={{padding: "90px 80px 0", position: "relative"}}>
      <Script size={62} color="#C1D5A5" style={{marginBottom: 10}}>your number,</Script>
      <Script size={62} color="#C1D5A5" style={{marginLeft: 40, marginBottom: 28}}>every year.</Script>

      <Serif size={104} weight={300} color="#F5EEED" style={{marginBottom: 4}}>Financial</Serif>
      <Serif size={104} weight={300} italic color="#C1D5A5" style={{marginBottom: 24}}>Ledger.</Serif>

      <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 20}}>
        <div style={{width: 50, height: 1, background: "#C1D5A5"}}/>
        <Kicker color="#C1D5A5">No spreadsheet needed</Kicker>
      </div>

      <Body size={27} color="#EAEDCE" style={{maxWidth: 520, lineHeight: 1.45}}>
        Track net worth. Watch wealth compound. One free tool, used once a year.
      </Body>
    </div>

    {/* Net worth card */}
    <div style={{padding: "50px 80px 0", position: "relative"}}>
      <div style={{
        background: "linear-gradient(135deg, #EAEDCE 0%, #F5EEED 100%)",
        borderRadius: 8, padding: "32px 36px", boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
      }}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8}}>
          <Kicker color="#84A17C">Net worth</Kicker>
          <div style={{fontSize: 16, letterSpacing: 2, color: "#6E686A", fontWeight: 700}}>2024</div>
        </div>
        <Serif size={92} weight={400} italic color="#1A1A18" style={{lineHeight: 1, marginBottom: 12}}>$231,000</Serif>
        <div style={{display: "flex", alignItems: "center", gap: 8}}>
          <div style={{
            width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent",
            borderBottom: "10px solid #84A17C",
          }}/>
          <Body size={25} color="#47584F" weight={700}>+$89,000 this year</Body>
        </div>
      </div>

      {/* Chart */}
      <div style={{marginTop: 30, padding: "20px 0 0", position: "relative"}}>
        <NetWorthChart width={840} height={260} color="#C1D5A5" labelColor="#84A17C"/>
      </div>

      <div style={{textAlign: "center", marginTop: 12}}>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "#C1D5A5"}}>
          Log once a year. The chart writes itself.
        </div>
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

// 02 — Net worth tracker (simpler)
const LedgerTracker = () => (
  <Pin bg="#1a1f1c">
    <div style={{padding: "100px 80px 0", textAlign: "center"}}>
      <Script size={56} color="#C1D5A5" style={{marginBottom: 4}}>your number.</Script>
      <Serif size={84} weight={300} color="#F5EEED" style={{marginBottom: 4}}>Net Worth</Serif>
      <Serif size={84} weight={300} italic color="#C1D5A5">Tracker.</Serif>
      <Ornament width={120} color="#C1D5A5" style={{margin: "20px auto 0"}}/>
    </div>

    {/* Big number */}
    <div style={{padding: "60px 80px 0"}}>
      <div style={{
        background: "linear-gradient(135deg, #F5EEED 0%, #EAEDCE 100%)",
        borderRadius: 10, padding: "44px 40px", textAlign: "center",
        boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
      }}>
        <Kicker color="#84A17C" style={{marginBottom: 14}}>Tracked since 2019</Kicker>
        <Serif size={110} weight={400} italic color="#1A1A18" style={{lineHeight: 1, marginBottom: 14}}>$231,000</Serif>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px",
          background: "#47584F", borderRadius: 999,
        }}>
          <div style={{width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "8px solid #C1D5A5"}}/>
          <div style={{fontFamily: "Lato, sans-serif", fontSize: 21, color: "#C1D5A5", fontWeight: 700}}>+$89,000 this year</div>
        </div>
      </div>

      <div style={{textAlign: "center", marginTop: 30, marginBottom: 16}}>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "#C1D5A5"}}>
          Log assets and liabilities once a year. Watch the number grow.
        </div>
      </div>

      <NetWorthChart width={840} height={240} color="#C1D5A5" labelColor="#84A17C"/>

      <div style={{textAlign: "center", marginTop: 16, fontFamily: "Lato, sans-serif", fontSize: 18, color: "#84A17C", letterSpacing: 2, fontWeight: 700, textTransform: "uppercase"}}>
        Free tool · no account · works in browser
      </div>
    </div>

    <PinFooter variant="dark"/>
  </Pin>
);

// 05 — Question hook ("net worth double")
const LedgerQuestion = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "110px 80px 0"}}>
      <Script size={60} color="#84A17C" style={{marginBottom: 22}}>a quiet question —</Script>

      <Serif size={86} weight={300} italic style={{lineHeight: 1.05, marginBottom: 28, maxWidth: 800}}>
        What would it feel like to see your net worth
      </Serif>
      <Serif size={120} weight={400} color="#47584F" style={{lineHeight: 1, marginBottom: 8}}>double?</Serif>

      <div style={{display: "flex", alignItems: "center", gap: 14, marginTop: 30}}>
        <div style={{width: 50, height: 1, background: "#47584F"}}/>
        <Kicker color="#47584F">A free tool can show you</Kicker>
      </div>
    </div>

    {/* Growth arrow visual */}
    <div style={{padding: "60px 80px 0", position: "relative"}}>
      <div style={{position: "relative", height: 220}}>
        <svg width="840" height="220" viewBox="0 0 840 220">
          <defs>
            <linearGradient id="agrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#84A17C" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#84A17C" stopOpacity="0.35"/>
            </linearGradient>
          </defs>
          <path d="M40 200 L800 40 L800 200 Z" fill="url(#agrad)"/>
          <path d="M40 200 L800 40" stroke="#84A17C" strokeWidth="2.5" strokeLinecap="round"/>
          <polygon points="800,40 780,46 786,56" fill="#84A17C"/>
        </svg>
        <div style={{position: "absolute", left: 30, bottom: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 40, color: "#47584F"}}>$100k</div>
        <div style={{position: "absolute", right: 30, top: -6, fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 40, color: "#47584F"}}>$200k</div>
      </div>

      <div style={{marginTop: 36, textAlign: "center"}}>
        <Body size={27} color="#47584F" style={{lineHeight: 1.45, maxWidth: 600, margin: "0 auto"}}>
          People who track their net worth grow it faster. <em style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 24}}>Visibility creates accountability.</em>
        </Body>
      </div>

      <div style={{marginTop: 28, padding: "20px 28px", background: "#EAEDCE", borderRadius: 6, textAlign: "center"}}>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 27, color: "#47584F"}}>
          "Track it once a year. Watch it compound."
        </div>
      </div>
    </div>

    <PinFooter cta="Start free"/>
  </Pin>
);

// 15 — First net worth entry (step ladder)
const LedgerSteps = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "80px 80px 0", position: "relative"}}>
      <div style={{position: "absolute", top: 80, right: 80}}>
        <Sprig size={72} color="#84A17C"/>
      </div>
      <Kicker color="#84A17C" style={{marginBottom: 14}}>Your first entry</Kicker>
      <Serif size={82} weight={300} style={{marginBottom: 4}}>Three minutes</Serif>
      <Serif size={82} weight={300} italic color="#47584F">to your first</Serif>
      <Script size={68} color="#84A17C" style={{marginTop: 8, marginLeft: 24}}>net worth number.</Script>
    </div>

    <div style={{padding: "50px 80px 0"}}>
      {[
        {n: "01", time: "30 sec", t: "Open the ledger", d: "Enter today's date in the entry form."},
        {n: "02", time: "1 min", t: "List what you own", d: "Savings · investments · property · pension."},
        {n: "03", time: "1 min", t: "List what you owe", d: "Mortgage · loans · credit cards."},
        {n: "04", time: "30 sec", t: "See your number", d: "Save it. Your journey starts here."},
      ].map((s, i) => (
        <div key={i} style={{
          display: "flex", gap: 22, padding: "22px 26px", marginBottom: 12,
          background: i % 2 === 0 ? "#FFFFFF" : "#EAEDCE",
          borderRadius: 8, alignItems: "center",
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400,
            fontSize: 52, color: "#84A17C", lineHeight: 1, minWidth: 64,
          }}>{s.n}</div>
          <div style={{flex: 1}}>
            <div style={{display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4}}>
              <div style={{fontFamily: "Lato, sans-serif", fontSize: 27, fontWeight: 700, color: "#1A1A18"}}>{s.t}</div>
              <div style={{
                fontSize: 15, letterSpacing: 2, color: "#47584F", fontWeight: 700,
                textTransform: "uppercase", padding: "2px 10px", border: "1px solid #84A17C", borderRadius: 999,
              }}>{s.time}</div>
            </div>
            <Body size={22} color="#6E686A">{s.d}</Body>
          </div>
        </div>
      ))}

      {/* Total banner */}
      <div style={{marginTop: 24, padding: "18px", background: "#47584F", borderRadius: 6, textAlign: "center"}}>
        <div style={{fontFamily: "Lato, sans-serif", fontSize: 19, color: "#C1D5A5", letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 6}}>
          Total time
        </div>
        <Serif size={38} weight={400} italic color="#F5EEED" style={{lineHeight: 1}}>~3 minutes</Serif>
      </div>

      <div style={{textAlign: "center", marginTop: 22, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 27, color: "#47584F"}}>
        "One number. Every year. Life-changing clarity."
      </div>
    </div>

    <PinFooter cta="Open free"/>
  </Pin>
);

// 17 — Myth buster (3 myths)
const LedgerMyths = () => (
  <Pin bg="#F5EEED">
    <div style={{padding: "80px 80px 0", textAlign: "center"}}>
      <Kicker color="#F1683F" style={{marginBottom: 14}}>3 myths · busted</Kicker>
      <Serif size={74} weight={300} style={{marginBottom: 4}}>What people get</Serif>
      <Serif size={74} weight={300} italic color="#F1683F" style={{marginBottom: 14}}>wrong</Serif>
      <Script size={48} color="#84A17C">about tracking net worth.</Script>
    </div>

    {/* Myth cards with myth/truth contrast */}
    <div style={{padding: "60px 80px 0"}}>
      {[
        {n: "I", myth: "You need a lot of money to bother tracking.", truth: "Tracking builds wealth — it's the cause, not the effect. Start at $0."},
        {n: "II", myth: "Spreadsheets are good enough.", truth: "A dedicated ledger adds charts, trends, and PDF export — automatically."},
        {n: "III", myth: "Net worth only matters near retirement.", truth: "Tracking in your 20s and 30s changes your entire financial trajectory."},
      ].map((m, i) => (
        <div key={i} style={{marginBottom: 22, background: "#FFFFFF", borderRadius: 8, overflow: "hidden", border: "1px solid #EAEDCE"}}>
          <div style={{
            background: "#F1683F", padding: "12px 24px", display: "flex",
            justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: 27, color: "#F5EEED"}}>Myth {m.n}</div>
            <div style={{
              padding: "4px 12px", border: "1px solid #F5EEED", borderRadius: 999,
              fontSize: 15, letterSpacing: 2, color: "#F5EEED", fontWeight: 700, textTransform: "uppercase",
            }}>Busted</div>
          </div>
          <div style={{padding: "20px 24px"}}>
            <div style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: 27, color: "#1A1A18", lineHeight: 1.3, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #EAEDCE"}}>
              "{m.myth}"
            </div>
            <div style={{display: "flex", gap: 12, alignItems: "flex-start"}}>
              <div style={{fontSize: 16, letterSpacing: 2, color: "#84A17C", fontWeight: 700, paddingTop: 4}}>TRUTH</div>
              <Body size={22} color="#47584F" style={{flex: 1}}>{m.truth}</Body>
            </div>
          </div>
        </div>
      ))}
    </div>

    <PinFooter cta="Start tracking"/>
  </Pin>
);

Object.assign(window, {LedgerHero, LedgerTracker, LedgerQuestion, LedgerSteps, LedgerMyths});
