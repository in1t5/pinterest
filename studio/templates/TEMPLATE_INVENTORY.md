# Template Inventory

Pin types: `tNN` = explicit template file · `○` = pin0X custom pin · blank = not built yet

---

## Numbered Templates → Calculator Pins

`✓` = pin exists · `○` = pin0X style (not tNN) · blank = not built

| Template | Name | Barista | Coast | FIRE | Flamingo | Ledger | Budget | Retirement |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **pin-01** | compound-interest | | | | | | | |
| **pin-02** | coast-fi | | | | | | | |
| **pin-03** | mindset-quote | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **pin-04** | five-numbers | ✓ | | | | | | |
| **pin-05** | fi-age | | ○ | | ○ | | | |
| **pin-06** | etf-tree | | | ○ | | | | ○ |
| **pin-07** | mortgage | ○ | | | | | ○ | |
| **pin-08** | net-worth | | | | | ○ | | |
| **pin-09** | chart-hero | | | | | | | |
| **pin-10** | fire-app-cards | | ✓ | | ✓ | | | |
| **pin-11** | save-vs-invest | ✓ | | | | | | |
| **pin-12** | lifetime-wealth | | ✓ | | | | | |
| **pin-13** | probability-gauge | ✓ | | | | | | |
| **pin-14** | three-steps | | ✓ | ✓ | | | | |
| **pin-15** | kpi-dashboard | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |
| **pin-16** | minimal-question | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **pin-17** | timeline | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **pin-18** | receipt | ✓ | | | | | | |
| **pin-19** | postcard | ✓ | ✓ | | ✓ | | ✓ | ✓ |
| **pin-20** | botanical | | | | | ✓ | | |
| **pin-21** | sticker-sheet | ✓ | | | | | | |
| **pin-22** | slow-horizon | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **pin-23** | passport-stamps | ✓ | | | | | | |
| **pin-24** | index-cards | | | | | ✓ | | |
| **pin-25** | newspaper | | ✓ | | ✓ | ✓ | ✓ | ✓ |
| **pin-26** | planner | ✓ | ✓ | | ✓ | | ✓ | ✓ |
| **pin-27** | bauhaus-grid | ✓ | | ✓ | ✓ | | | ✓ |
| **pin-28** | certificate | | ✓ | | | | | |
| **pin-29** | type-specimen | | ✓ | ✓ | | | | |
| **pin-30** | polaroids | | | | | | | |
| **pin-31** | topographic-map | | | ✓ | | | | |
| **pin-32** | notebook | ✓ | ✓ | | | | | |
| **pin-33** | growth-rings | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **pin-34** | roots-canopy | ✓ | | | | | | |
| **pin-35** | three-seasons | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **pin-36** | family-tree | | ✓ | ✓ | ✓ | | | |
| **pin-37** | pocket-watch | | ✓ | ✓ | ✓ | | | ✓ |
| **pin-38** | forest-meadow | | | | | | | |
| **pin-39** | leaf-calendar | | ✓ | ✓ | ✓ | | | ✓ |
| **pin-40** | acorn-to-oak | | ✓ | ✓ | ✓ | | | ✓ |
| **pin-41** | question-hook | ✓ | | | | | | |
| **pin-97** | story-case-study | *(unnamed)* | | | | | | |
| **pin-98** | question-metric-hero | | | | | | | |
| **pin-99** | calculator-quote | | | | | | | |

---

## Calc-Specific Templates (pin-00-XX)

These serve slot types 01–30 across calculators. Each is reused for any calculator that needs the same content slot.

| File | Serves |
|---|---|
| pin-00-hero-a/b/c/d/e | Slot 01 — Direct Utility Hero (B/C/F/Fl/L) |
| pin-00-result-a/b/c | Slot 02 — Direct Utility Result (B/C/Fl) |
| pin-00-steps-a/b/c/d | Slot 13/14/15 — Step Ladder variants (B/Bu/F/L) |
| pin-00-story-a | Slot — Story / Case Study (B) |
| pin-00-timeline-a/b | Slot 03 — Timeline (B/R) |
| pin-00-mockup-a | Slot 21/22/23 — Mockup (Bu) |
| pin-00-question-a/b/c | Slot 05–08 — Question Hook (F/L/R) |
| pin-00-milestones-a | Slot 26 — Milestone Tracker (Fl) |
| pin-00-myths-a | Slot 17–20 — Myth-Buster (L) |
| pin-00-tracker-a | Ledger tracker (L) |
| pin-00-phone-a | Slot 22 — Phone mockup (R) |

---

## Pins Without a Numbered Template

### Slot-based pins (01–30) — custom canvas designs, no numbered template

These pins use the content slot numbering (01–30) but were built as original canvas designs, not derived from a numbered pin-NN template.

- Most `barista-fire-{01–30}-*` pins in `pins/staged/` and `pins/wip/barista/` (exceptions: barista-fire-05 uses pin-41, barista-fire-25 uses pin-04)
- All `coast-fire-{01–30}-*` in `pins/wip/coast/`
- All `financial-ledger-{01–30}-*` in `pins/wip/financial_ledger/`
- All `fire-{01–30}-*` in `pins/wip/fire/`
- All `flamingo-fire-{01–30}-*` in `pins/wip/flamingo/`
- All `retirement-withdrawal-{01–30}-*` in `pins/wip/retirement-withdrawal/`
- All `budget-{01–30}-*` in `pins/wip/simple_budget/`

### pin0X style — calculator-specific concept pins

| Pin | Calculator |
|---|---|
| coast-fire-pin05-stop-saving | Coast |
| flamingo-fire-pin05-flamingo-number | Flamingo |
| fire-pin06-etf-growth-tree | FIRE |
| retirement-withdrawal-pin06-portfolio-tree | Retirement |
| barista-fire-pin07-savings-card | Barista |
| budget-pin07-one-habit | Budget |
| financial-ledger-pin08-ledger | Ledger |

### Unstructured / experimental pins (no slot, no template)

| Pin | Location |
|---|---|
| barista-fire-alex-story-pin | staged |
| barista-fire-maya-story-pin-refresh | staged |
| comparison-table-pin | wip/barista |
| crossover-chart-pin | wip/barista |
| fire-number-pin | wip/barista |
| quote-pin | wip/barista |
| two-phase-pin | wip/barista |
