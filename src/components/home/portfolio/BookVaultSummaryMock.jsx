/*
  Coded picture of the BookVault Summary screen (Balance Sheet + Profit and Loss),
  used as a portfolio slide. Figures are sample data and balance.
*/

const tabs = ['Summary', 'Bank & Cash', 'Customers', 'Suppliers', 'Journal Entries', 'Reports'];

const balanceSheet = [
  { label: 'Assets', total: '1,835,500', rows: [['Cash at bank', '1,245,000'], ['Receivables', '380,500'], ['Inventory', '210,000']] },
  { label: 'Liabilities', total: '165,200', rows: [['Accounts payable', '165,200']] },
  { label: 'Equity', total: '1,670,300', rows: [['Capital', '1,000,000'], ['Retained earnings', '670,300']] },
];

const profitAndLoss = [
  ['Sales', '920,000'],
  ['Cost of sales', '(412,000)'],
  ['Expenses', '(186,500)'],
];

function Row({ label, value, strong, indent }) {
  return (
    <div className={`flex items-center justify-between gap-2 py-[2px] ${indent ? 'ps-2.5' : ''} ${strong ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
      <span className="truncate">{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

export default function BookVaultSummaryMock() {
  return (
    <div className="absolute inset-x-4 sm:inset-x-6 top-12 bottom-9 rounded-xl border border-foreground/12 bg-background/95 shadow-2xl overflow-hidden flex text-[9px] xl:text-[10px] leading-tight select-none">

      {/* Sidebar */}
      <div className="hidden xl:flex w-28 shrink-0 flex-col gap-0.5 border-e border-foreground/10 bg-foreground/[0.03] p-2">
        <div className="flex items-center gap-1.5 px-1.5 pb-2 font-bold text-foreground">
          <span className="h-3 w-3 rounded-[4px] bg-primary/80" />
          BookVault
        </div>
        {tabs.map((t, i) => (
          <div
            key={t}
            className={`relative rounded-md px-2 py-1 ${i === 0 ? 'bg-foreground/[0.06] font-semibold text-foreground' : 'text-muted-foreground'}`}
          >
            {i === 0 && <span className="absolute start-0 top-1 bottom-1 w-0.5 rounded-full bg-orange-500" />}
            {t}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 min-w-0 p-3 sm:p-3.5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-bold text-foreground">Summary</span>
          <span className="rounded-full border border-foreground/10 px-2 py-0.5 text-muted-foreground">As of 30 Jun 2026</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <div className="mb-1 font-semibold text-foreground">Balance Sheet</div>
            {balanceSheet.map((s) => (
              <div key={s.label} className="mb-1">
                <Row label={s.label} value={s.total} strong />
                {s.rows.map(([l, v]) => <Row key={l} label={l} value={v} indent />)}
              </div>
            ))}
          </div>

          <div>
            <div className="mb-1 font-semibold text-foreground">Profit and Loss</div>
            {profitAndLoss.map(([l, v]) => <Row key={l} label={l} value={v} />)}
            <div className="mt-1 border-t border-foreground/12 pt-1">
              <Row label="Net profit" value="321,500" strong />
            </div>
            <div className="mt-2 inline-flex rounded-full bg-emerald-500/12 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
              Balanced
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
