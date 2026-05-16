/* Shared botanicals, footer, and helpers for all pins */

// ─── Botanical SVG kit ────────────────────────────────────────────────────
const Sprig = ({ size = 60, color = "#47584F", style = {} }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 40 64" fill="none" style={style}>
    <path d="M20 64 L20 4" stroke={color} strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M20 50 Q10 46 6 38 Q12 38 16 44" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    <path d="M20 40 Q30 36 34 28 Q28 28 24 34" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    <path d="M20 30 Q10 26 6 18 Q12 18 16 24" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    <path d="M20 20 Q30 16 34 8 Q28 8 24 14" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    <ellipse cx="20" cy="6" rx="3" ry="5" stroke={color} strokeWidth="0.8" fill="none"/>
  </svg>
);

const Branch = ({ width = 200, color = "#84A17C", style = {} }) => (
  <svg width={width} height={width * 0.4} viewBox="0 0 200 80" fill="none" style={style}>
    <path d="M0 40 Q60 38 100 40 T200 42" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round"/>
    <ellipse cx="40" cy="32" rx="8" ry="3" transform="rotate(-20 40 32)" stroke={color} strokeWidth="0.8" fill="none"/>
    <ellipse cx="65" cy="48" rx="9" ry="3" transform="rotate(15 65 48)" stroke={color} strokeWidth="0.8" fill="none"/>
    <ellipse cx="100" cy="30" rx="10" ry="3" transform="rotate(-15 100 30)" stroke={color} strokeWidth="0.8" fill="none"/>
    <ellipse cx="135" cy="50" rx="9" ry="3" transform="rotate(20 135 50)" stroke={color} strokeWidth="0.8" fill="none"/>
    <ellipse cx="170" cy="36" rx="8" ry="3" transform="rotate(-10 170 36)" stroke={color} strokeWidth="0.8" fill="none"/>
  </svg>
);

const Leaf = ({ size = 40, color = "#84A17C", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={style}>
    <path d="M20 4 Q34 14 30 28 Q26 36 20 36 Q14 36 10 28 Q6 14 20 4 Z" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M20 8 L20 34" stroke={color} strokeWidth="0.6"/>
  </svg>
);

const GrowthRings = ({ size = 200, color = "#47584F", opacity = 0.15, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={style}>
    {[20, 40, 60, 80, 95].map((r, i) => (
      <circle key={i} cx="100" cy="100" r={r} stroke={color} strokeWidth="0.8" opacity={opacity * (1 - i*0.1)} fill="none"/>
    ))}
  </svg>
);

const Arc = ({ size = 200, color = "#84A17C", opacity = 0.4, strokeWidth = 1, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={style}>
    <path d="M10 100 Q100 -30 190 100" stroke={color} strokeWidth={strokeWidth} opacity={opacity} fill="none"/>
  </svg>
);

const Sparkle = ({ size = 16, color = "#47584F", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
    <path d="M8 0 L8 16 M0 8 L16 8 M2 2 L14 14 M14 2 L2 14" stroke={color} strokeWidth="0.6" opacity="0.7"/>
    <circle cx="8" cy="8" r="1.5" fill={color}/>
  </svg>
);

const Ornament = ({ width = 120, color = "#47584F", style = {} }) => (
  <svg width={width} height="20" viewBox="0 0 120 20" fill="none" style={style}>
    <line x1="0" y1="10" x2="48" y2="10" stroke={color} strokeWidth="0.8"/>
    <line x1="72" y1="10" x2="120" y2="10" stroke={color} strokeWidth="0.8"/>
    <path d="M60 4 L64 10 L60 16 L56 10 Z" fill={color} opacity="0.6"/>
    <circle cx="50" cy="10" r="1.2" fill={color}/>
    <circle cx="70" cy="10" r="1.2" fill={color}/>
  </svg>
);

const Wave = ({ width = 800, color = "#84A17C", strokeWidth = 1.2, opacity = 0.5, style = {} }) => (
  <svg width={width} height="60" viewBox="0 0 800 60" fill="none" style={style} preserveAspectRatio="none">
    <path d="M0 30 Q100 0 200 30 T400 30 T600 30 T800 30" stroke={color} strokeWidth={strokeWidth} fill="none" opacity={opacity}/>
  </svg>
);

// ─── Paper grain texture overlay ──────────────────────────────────────────
const GrainOverlay = ({ opacity = 0.06 }) => (
  <div style={{
    position: "absolute", inset: 0, pointerEvents: "none", opacity,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.28 0 0 0 0 0.34 0 0 0 0 0.31 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    mixBlendMode: "multiply",
  }}/>
);

// ─── Editorial footer bar (lighter, refined) ──────────────────────────────
const PinFooter = ({ variant = "dark", cta = "Calculate" }) => {
  const isDark = variant === "dark";
  const bg = isDark ? "#3a473f" : "#F5EEED";
  const fg = isDark ? "#F5EEED" : "#47584F";
  const sub = isDark ? "#C1D5A5" : "#6E686A";
  const border = isDark ? "rgba(245,238,237,0.4)" : "#47584F";
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, height: 90,
      background: bg, display: "flex", alignItems: "center", padding: "0 36px",
      gap: 16, borderTop: isDark ? "none" : "1px solid #EAEDCE",
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: "50%", background: "#F5EEED",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        border: "1px solid rgba(71,88,79,0.15)",
      }}>
        <img src="assets/logo.svg" style={{width: 32, height: 32}}/>
      </div>
      <div style={{flex: 1, lineHeight: 1.2}}>
        <div style={{fontFamily: "Lato, sans-serif", fontSize: 21, fontWeight: 700, color: fg, letterSpacing: 0.2}}>
          Free tool — no sign-up
        </div>
        <div style={{fontFamily: "Lato, sans-serif", fontSize: 16, color: sub, letterSpacing: 2, textTransform: "uppercase", marginTop: 3}}>
          timeandmoneytree.com
        </div>
      </div>
      <div style={{
        padding: "12px 22px", border: `1px solid ${border}`, borderRadius: 999,
        fontFamily: "Lato, sans-serif", fontSize: 18, fontWeight: 700, color: fg,
        letterSpacing: 1.5, textTransform: "uppercase",
      }}>
        {cta} →
      </div>
    </div>
  );
};

// ─── Editorial helpers ────────────────────────────────────────────────────
const Kicker = ({ children, color = "#47584F", style = {} }) => (
  <div style={{
    fontFamily: "Lato, sans-serif", fontSize: 16, fontWeight: 700,
    letterSpacing: 3, textTransform: "uppercase", color, ...style,
  }}>{children}</div>
);

const Script = ({ children, size = 56, color = "#84A17C", style = {} }) => (
  <div style={{
    fontFamily: "'Pinyon Script', cursive", fontWeight: 400, fontSize: size,
    lineHeight: 1, color, ...style,
  }}>{children}</div>
);

const Serif = ({ children, size = 72, weight = 300, italic = false, color = "#1A1A18", style = {} }) => (
  <div style={{
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: weight,
    fontStyle: italic ? "italic" : "normal", fontSize: size, lineHeight: 1.05,
    letterSpacing: "0.005em", color, ...style,
  }}>{children}</div>
);

const Body = ({ children, size = 18, color = "#6E686A", weight = 400, style = {} }) => (
  <div style={{
    fontFamily: "Lato, sans-serif", fontSize: size, fontWeight: weight,
    lineHeight: 1.5, color, ...style,
  }}>{children}</div>
);

const VRule = ({ height = 60, color = "#47584F", style = {} }) => (
  <div style={{width: 1, height, background: color, ...style}}/>
);

const HRule = ({ width = "100%", color = "#47584F", style = {} }) => (
  <div style={{width, height: 1, background: color, opacity: 0.3, ...style}}/>
);

// ─── Pin frame wrapper ────────────────────────────────────────────────────
const Pin = ({ bg = "#F5EEED", children, style = {}, grain = true }) => (
  <div style={{
    width: 1000, height: 1500, background: bg, position: "relative",
    overflow: "hidden", fontFamily: "Lato, sans-serif", ...style,
  }}>
    {children}
    {grain && <GrainOverlay/>}
  </div>
);

// Export all to window
Object.assign(window, {
  Sprig, Branch, Leaf, GrowthRings, Arc, Sparkle, Ornament, Wave,
  GrainOverlay, PinFooter, Kicker, Script, Serif, Body, VRule, HRule, Pin,
});
