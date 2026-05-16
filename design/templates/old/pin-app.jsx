/* Main pin app — assembles all pins into design_canvas */

const PinApp = () => {
  const sections = [
    {
      id: "barista", title: "Barista FIRE",
      pins: [
        {id: "barista-01", label: "01 · Hero · two dates, total freedom", C: BaristaHero},
        {id: "barista-02", label: "02 · Result · your two dates", C: BaristaResult},
        {id: "barista-03", label: "03 · Timeline · three phases", C: BaristaTimeline},
        {id: "barista-15", label: "15 · Steps · 5-step beginner ladder", C: BaristaSteps},
        {id: "barista-alex", label: "Story · Meet Alex", C: BaristaAlex},
      ],
    },
    {
      id: "coast", title: "Coast FIRE",
      pins: [
        {id: "coast-01", label: "01 · Hero · stop saving, let it coast", C: CoastHero},
        {id: "coast-02", label: "02 · Result · your coast number", C: CoastResult},
      ],
    },
    {
      id: "fire", title: "FIRE",
      pins: [
        {id: "fire-01", label: "01 · Hero · retire early, on your terms", C: FireHero},
        {id: "fire-05", label: "05 · Question · can you retire before 50?", C: FireQuestion},
        {id: "fire-13", label: "13 · Steps · how to find your FIRE number", C: FireSteps},
      ],
    },
    {
      id: "flamingo", title: "Flamingo FIRE",
      pins: [
        {id: "flamingo-01", label: "01 · Hero · model every scenario", C: FlamingoHero},
        {id: "flamingo-02", label: "02 · Result · three numbers", C: FlamingoResult},
        {id: "flamingo-26", label: "26 · Milestones · portfolio by age", C: FlamingoMilestones},
      ],
    },
    {
      id: "ledger", title: "Financial Ledger",
      pins: [
        {id: "ledger-01", label: "01 · Hero · your number, every year", C: LedgerHero},
        {id: "ledger-02", label: "02 · Tracker · net worth", C: LedgerTracker},
        {id: "ledger-05", label: "05 · Question · what if it doubled?", C: LedgerQuestion},
        {id: "ledger-15", label: "15 · Steps · your first entry", C: LedgerSteps},
        {id: "ledger-17", label: "17 · Myths · three myths busted", C: LedgerMyths},
      ],
    },
    {
      id: "budget", title: "Budget",
      pins: [
        {id: "budget-15", label: "15 · Steps · build your first budget", C: BudgetSteps},
        {id: "budget-23", label: "23 · Mockup · budget summary", C: BudgetMockup},
      ],
    },
    {
      id: "retirement", title: "Retirement Withdrawal",
      pins: [
        {id: "retire-03", label: "03 · Timeline · 30-year portfolio", C: RetireTimeline},
        {id: "retire-06", label: "06 · Question · spend more, worry less", C: RetireQuestion},
        {id: "retire-22", label: "22 · Mockup · in your pocket", C: RetirePhone},
      ],
    },
  ];

  return (
    <DesignCanvas>
      {sections.map(sec => (
        <DCSection key={sec.id} id={sec.id} title={sec.title}>
          {sec.pins.map(p => (
            <DCArtboard key={p.id} id={p.id} label={p.label} width={1000} height={1500}>
              <p.C/>
            </DCArtboard>
          ))}
        </DCSection>
      ))}
    </DesignCanvas>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PinApp/>);
