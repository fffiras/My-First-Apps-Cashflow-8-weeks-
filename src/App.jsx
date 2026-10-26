import { useEffect, useMemo, useState } from 'react'
import './index.css'

const STORAGE_KEY = 'cashflow-8-weeks'

const SAMPLE_STARTING_BALANCE = 3000

const SAMPLE_PAYMENTS = [
  { id: 'p1', name: 'Walk-in sales', amount: 1200, direction: 'in', week: 1, everyWeek: true },
  { id: 'p2', name: 'Supplier for flour, butter and eggs', amount: 1000, direction: 'out', week: 1, everyWeek: true },
  { id: 'p3', name: 'New oven deposit', amount: 1250, direction: 'out', week: 2, everyWeek: false },
  { id: 'p4', name: 'Shop rent', amount: 1500, direction: 'out', week: 4, everyWeek: false },
  { id: 'p5', name: "Helper's pay", amount: 1700, direction: 'out', week: 4, everyWeek: false },
  { id: 'p6', name: 'Office order from Syarikat Contoh', amount: 2400, direction: 'in', week: 5, everyWeek: false },
  { id: 'p7', name: "Helper's pay", amount: 1700, direction: 'out', week: 8, everyWeek: false },
]

const ROW_COLOURS = ['#c1272d', '#2f6b3a', '#9a6206', '#7a5a2e', '#6e3a82']
const WEEKS = [1, 2, 3, 4, 5, 6, 7, 8]

function colourFor(index) {
  return ROW_COLOURS[index % ROW_COLOURS.length]
}

function formatMoney(value) {
  const negative = value < 0
  const abs = Math.abs(value)
  const text = abs.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${negative ? '-' : ''}RM${text}`
}

function landsInWeek(payment, week) {
  if (!payment.everyWeek) return payment.week === week
  return week >= payment.week
}

function weekLabel(payment) {
  return payment.everyWeek ? `Every week from week ${payment.week}` : `Week ${payment.week}`
}

function nextId() {
  return `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
}

function isPayment(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.name === 'string' &&
    typeof value.amount === 'number' &&
    Number.isFinite(value.amount) &&
    (value.direction === 'in' || value.direction === 'out') &&
    Number.isInteger(value.week) &&
    value.week >= 1 &&
    value.week <= 8
  )
}

function loadState() {
  const fallback = {
    startingBalance: SAMPLE_STARTING_BALANCE,
    payments: SAMPLE_PAYMENTS,
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return fallback
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return fallback
    const startingBalance =
      typeof parsed.startingBalance === 'number' && Number.isFinite(parsed.startingBalance)
        ? parsed.startingBalance
        : SAMPLE_STARTING_BALANCE
    const payments = Array.isArray(parsed.payments)
      ? parsed.payments.filter(isPayment).map((p) => ({
          id: typeof p.id === 'string' && p.id ? p.id : nextId(),
          name: p.name,
          amount: p.amount,
          direction: p.direction,
          week: p.week,
          everyWeek: Boolean(p.everyWeek),
        }))
      : SAMPLE_PAYMENTS
    return { startingBalance, payments }
  } catch {
    return fallback
  }
}

function App() {
  const [initial] = useState(loadState)
  const [startingBalance, setStartingBalance] = useState(initial.startingBalance)
  const [payments, setPayments] = useState(initial.payments)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ startingBalance, payments })
      )
    } catch {
      // Browser blocked storage: the page still works this session.
    }
  }, [startingBalance, payments])

  const weeks = useMemo(() => {
    const result = []
    let end = startingBalance
    for (const week of WEEKS) {
      let moneyIn = 0
      let moneyOut = 0
      for (const p of payments) {
        if (!landsInWeek(p, week)) continue
        if (p.direction === 'in') moneyIn += p.amount
        else moneyOut += p.amount
      }
      end = end + moneyIn - moneyOut
      result.push({ week, end })
    }
    return result
  }, [startingBalance, payments])

  const lowest = useMemo(() => {
    let best = weeks[0]
    for (const w of weeks) {
      if (w.end < best.end) best = w
    }
    return best
  }, [weeks])

  const week8 = weeks[7]
  const isShort = lowest.end < 0
  const largestAmount = payments.reduce((max, p) => (p.amount > max ? p.amount : max), 0)
  const totalMoving = payments.reduce((sum, p) => sum + p.amount, 0)

  function addPayment(payment) {
    setPayments((current) => [...current, { ...payment, id: nextId() }])
  }

  function removePayment(id) {
    setPayments((current) => current.filter((p) => p.id !== id))
  }

  function movePayment(id, delta) {
    setPayments((current) =>
      current.map((p) => {
        if (p.id !== id || p.everyWeek) return p
        const week = Math.min(8, Math.max(1, p.week + delta))
        return { ...p, week }
      })
    )
  }

  return (
    <main className="page">
      <header className="header">
        <h1 className="app-name">Cashflow 8 Weeks</h1>
        <p className="app-goal">Keep every week above zero.</p>
        <p className="sample-tag">Sample data</p>
      </header>

      <div className="layout">
        <section className="hero" aria-labelledby="hero-label">
          <p className="hero-label" id="hero-label">{`Week ${lowest.week}`}</p>
          <p className={isShort ? 'hero-figure is-short' : 'hero-figure'}>
            {formatMoney(lowest.end)}
          </p>
          <p className="hero-line">
            {isShort
              ? `Week ${lowest.week} goes short. Move a payment to fix it.`
              : 'Never below zero. You make it through 8 weeks.'}
          </p>
          <p className="hero-week8">
            {`${formatMoney(week8.end)} in the bank at the end of week 8.`}
          </p>
          <p className="hero-count">
            {payments.length === 0
              ? 'No payments yet'
              : `${payments.length} payment${payments.length === 1 ? '' : 's'} in play`}
          </p>

          {totalMoving > 0 && (
            <div className="hero-bar" aria-hidden="true">
              {payments.map((p, i) => (
                <span
                  key={p.id}
                  className="hero-bar-seg"
                  style={{ background: colourFor(i), flexGrow: p.amount }}
                />
              ))}
            </div>
          )}
          {payments.length > 0 && (
            <ul className="hero-legend">
              {payments.map((p, i) => (
                <li key={p.id} className="hero-legend-item">
                  <span className="mark" style={{ background: colourFor(i) }} aria-hidden="true" />
                  <span className="hero-legend-name">{p.name}</span>
                  <span className="hero-legend-amount">{formatMoney(p.amount)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="panel">
          <div className="week-strip">
            {weeks.map((w) => {
              const short = w.end < 0
              return (
                <div key={w.week} className={short ? 'week-tile week-tile-short' : 'week-tile'}>
                  <span className="week-name">{`Week ${w.week}`}</span>
                  <span className="week-balance">{formatMoney(w.end)}</span>
                  {short && <span className="week-flag">Short</span>}
                </div>
              )
            })}
          </div>

          <label className="balance-setting">
            <span className="balance-label">Bank balance today</span>
            <input
              className="balance-input"
              type="text"
              inputMode="decimal"
              value={formatMoney(startingBalance)}
              onChange={(e) => {
                const digits = e.target.value.replace(/[^0-9.]/g, '')
                const parsed = Number.parseFloat(digits)
                setStartingBalance(Number.isFinite(parsed) ? parsed : 0)
              }}
              aria-label="Bank balance today"
            />
          </label>

          <PaymentForm onAdd={addPayment} />

          {payments.length === 0 ? (
            <p className="empty-state">
              No payments yet. Add one above, or the weeks stay at the balance you have today.
            </p>
          ) : (
            <ul className="payment-list">
              {payments.map((p, i) => (
                <li key={p.id} className="payment-row">
                  <span className="mark" style={{ background: colourFor(i) }} aria-hidden="true" />
                  <div className="row-main">
                    <div className="row-top">
                      <span className="row-name">{p.name}</span>
                      <span className="row-amount">{formatMoney(p.amount)}</span>
                    </div>
                    <div className="row-sub">
                      <span className="row-direction">{p.direction === 'in' ? 'In' : 'Out'}</span>
                      <span className="row-dot" aria-hidden="true">·</span>
                      <span className="row-week">{weekLabel(p)}</span>
                    </div>
                    <div className="row-barline">
                      <span className="row-bar">
                        <span
                          className="row-bar-fill"
                          style={{
                            background: colourFor(i),
                            width: largestAmount ? `${(p.amount / largestAmount) * 100}%` : '0%',
                          }}
                        />
                      </span>
                      <span className="row-bar-text">
                        {`${formatMoney(p.amount)} of ${formatMoney(largestAmount)}`}
                      </span>
                    </div>
                  </div>
                  <div className="row-controls">
                    {!p.everyWeek && (
                      <>
                        <button
                          className="btn btn-step"
                          type="button"
                          onClick={() => movePayment(p.id, -1)}
                          disabled={p.week <= 1}
                          aria-label={`Move ${p.name} one week earlier`}
                        >
                          Earlier
                        </button>
                        <button
                          className="btn btn-step"
                          type="button"
                          onClick={() => movePayment(p.id, 1)}
                          disabled={p.week >= 8}
                          aria-label={`Move ${p.name} one week later`}
                        >
                          Later
                        </button>
                      </>
                    )}
                    <button
                      className="btn btn-remove"
                      type="button"
                      onClick={() => removePayment(p.id)}
                      aria-label={`Remove ${p.name}`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

function PaymentForm({ onAdd }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [direction, setDirection] = useState('in')
  const [week, setWeek] = useState(1)
  const [everyWeek, setEveryWeek] = useState(false)

  function submit(event) {
    event.preventDefault()
    const parsed = Number.parseFloat(amount.replace(/[^0-9.]/g, ''))
    if (!name.trim() || !Number.isFinite(parsed) || parsed <= 0) return
    onAdd({
      name: name.trim(),
      amount: parsed,
      direction,
      week,
      everyWeek,
    })
    setName('')
    setAmount('')
    setDirection('in')
    setWeek(1)
    setEveryWeek(false)
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <input
        className="field"
        type="text"
        placeholder="Payment name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Payment name"
      />
      <input
        className="field"
        type="text"
        placeholder="Amount"
        inputMode="decimal"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        aria-label="Amount in ringgit"
      />
      <select
        className="field"
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        aria-label="Money in or out"
      >
        <option value="in">In</option>
        <option value="out">Out</option>
      </select>
      <select
        className="field"
        value={week}
        onChange={(e) => setWeek(Number(e.target.value))}
        aria-label="Week"
      >
        {WEEKS.map((w) => (
          <option key={w} value={w}>{`Week ${w}`}</option>
        ))}
      </select>
      <label className="every-week">
        <input
          type="checkbox"
          checked={everyWeek}
          onChange={(e) => setEveryWeek(e.target.checked)}
        />
        <span>Every week</span>
      </label>
      <button className="btn btn-primary" type="submit">Add</button>
    </form>
  )
}

export default App