/* CATALYST RADAR — live crypto feed + paper trading desk */
(() => {
  const START_CASH = 100;
  const STORAGE_KEY = "catalyst_radar_demo_v1";

  const state = {
    tab: "crypto",
    crypto: [],
    equities: [],
    selected: null,
    cash: START_CASH,
    positions: {},
    chart: null,
    series: null,
  };

  const EQUITY_SEED = [
    { id: "nvda", symbol: "NVDA", name: "NVIDIA", price: 128.4, change24: 2.1, volScore: 72, risk: 38, tag: "AI / earnings" },
    { id: "tsla", symbol: "TSLA", name: "Tesla", price: 248.2, change24: -1.4, volScore: 68, risk: 55, tag: "High beta" },
    { id: "amd", symbol: "AMD", name: "AMD", price: 162.8, change24: 1.8, volScore: 64, risk: 42, tag: "Semiconductors" },
    { id: "pltr", symbol: "PLTR", name: "Palantir", price: 42.6, change24: 3.4, volScore: 78, risk: 60, tag: "Gov / AI" },
    { id: "smci", symbol: "SMCI", name: "Super Micro", price: 38.9, change24: 4.2, volScore: 81, risk: 70, tag: "Infra spike" },
    { id: "coin", symbol: "COIN", name: "Coinbase", price: 198.5, change24: 2.7, volScore: 70, risk: 58, tag: "Crypto beta" },
    { id: "mstr", symbol: "MSTR", name: "MicroStrategy", price: 312.0, change24: 5.1, volScore: 85, risk: 75, tag: "BTC proxy" },
    { id: "arm", symbol: "ARM", name: "Arm Holdings", price: 142.3, change24: 1.2, volScore: 61, risk: 48, tag: "Chip design" },
    { id: "meta", symbol: "META", name: "Meta", price: 582.1, change24: 0.8, volScore: 55, risk: 32, tag: "Mega-cap" },
    { id: "avgo", symbol: "AVGO", name: "Broadcom", price: 178.4, change24: 1.5, volScore: 63, risk: 36, tag: "Networking" },
  ];

  const $ = (id) => document.getElementById(id);

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (typeof data.cash === "number") state.cash = data.cash;
      if (data.positions && typeof data.positions === "object") state.positions = data.positions;
    } catch (_) {}
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      cash: state.cash,
      positions: state.positions,
    }));
  }

  function fmt(n, d = 2) {
    if (n == null || Number.isNaN(n)) return "—";
    return Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  }

  function fmtUsd(n) {
    const v = Number(n) || 0;
    const sign = v < 0 ? "-" : "";
    return sign + "$" + fmt(Math.abs(v));
  }

  function riskLabel(r) {
    if (r >= 70) return { text: "HIGH", cls: "badge-risk" };
    if (r >= 45) return { text: "MED", cls: "badge-cat" };
    return { text: "LOW", cls: "badge-opp" };
  }

  function tickClock() {
    const el = $("clock");
    if (el) el.textContent = new Date().toISOString().slice(11, 19) + " UTC";
  }

  function equityMark() {
    state.equities = EQUITY_SEED.map((e) => {
      const jitter = (Math.random() - 0.5) * 0.6;
      const price = +(e.price * (1 + jitter / 100)).toFixed(2);
      const change24 = +(e.change24 + (Math.random() - 0.5) * 0.3).toFixed(2);
      return { ...e, price, change24, kind: "equity" };
    }).sort((a, b) => b.volScore - a.volScore);
  }

  async function fetchCrypto() {
    const feed = $("status-feed");
    if (feed) feed.textContent = "Feed: fetching…";
    try {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=40&page=1&sparkline=false&price_change_percentage=24h";
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      state.crypto = data.map((c, i) => {
        const change = c.price_change_percentage_24h || 0;
        const vol = c.total_volume || 0;
        const volScore = Math.min(99, Math.round(40 + Math.log10(Math.max(vol, 1)) * 6 + Math.abs(change)));
        const risk = Math.min(95, Math.round(25 + Math.abs(change) * 2.2 + (i > 20 ? 15 : 0)));
        let tag = "Liquidity";
        if (Math.abs(change) > 8) tag = "Impulse";
        if (volScore > 80 && Math.abs(change) > 4) tag = "Volume spike";
        if (risk > 70) tag = "Elevated risk";
        return {
          id: c.id,
          symbol: (c.symbol || "").toUpperCase(),
          name: c.name,
          price: c.current_price,
          change24: change,
          volScore,
          risk,
          tag,
          kind: "crypto",
        };
      });
      state.crypto.sort((a, b) => (b.volScore * 0.7 + b.change24 * 0.3) - (a.volScore * 0.7 + a.change24 * 0.3));
      if (feed) feed.textContent = "Feed: live (CoinGecko)";
      const upd = $("status-updated");
      if (upd) upd.textContent = "Updated: " + new Date().toLocaleTimeString();
      const sc = $("stat-crypto");
      if (sc) sc.textContent = String(state.crypto.length);
    } catch (err) {
      console.error(err);
      if (feed) feed.textContent = "Feed: error — using fallback";
      if (!state.crypto.length) {
        state.crypto = [
          { id: "bitcoin", symbol: "BTC", name: "Bitcoin", price: 67000, change24: 1.2, volScore: 88, risk: 28, tag: "Fallback", kind: "crypto" },
          { id: "ethereum", symbol: "ETH", name: "Ethereum", price: 3400, change24: 2.1, volScore: 84, risk: 32, tag: "Fallback", kind: "crypto" },
          { id: "solana", symbol: "SOL", name: "Solana", price: 145, change24: 3.4, volScore: 80, risk: 45, tag: "Fallback", kind: "crypto" },
        ];
      }
    }
  }

  function currentList() {
    return state.tab === "crypto" ? state.crypto : state.equities;
  }

  function renderRadar() {
    const list = currentList().slice(0, 10);
    const body = $("radar-body");
    if (!body) return;
    if (!list.length) {
      body.innerHTML = `<tr><td colspan="8" style="padding:24px;color:var(--color-ash)">No data</td></tr>`;
      return;
    }
    body.innerHTML = list
      .map((a, i) => {
        const chCls = a.change24 >= 0 ? "chg-up" : "chg-down";
        const rl = riskLabel(a.risk);
        const selected = state.selected && state.selected.id === a.id;
        return `<tr data-id="${a.id}" style="${selected ? "background:rgba(103,152,255,.06)" : ""}">
          <td style="color:var(--color-mist);font-family:var(--font-mono)">${String(i + 1).padStart(2, "0")}</td>
          <td><div class="asset-cell"><b>${a.symbol}</b><small>${a.name}</small></div></td>
          <td style="font-family:var(--font-mono)">$${fmt(a.price, a.price < 1 ? 6 : 2)}</td>
          <td class="${chCls}" style="font-family:var(--font-mono)">${a.change24 >= 0 ? "+" : ""}${fmt(a.change24, 2)}%</td>
          <td style="font-family:var(--font-mono)">${a.volScore}</td>
          <td><span class="badge ${rl.cls}">${rl.text}</span></td>
          <td style="color:var(--color-ash);font-size:12px">${a.tag}</td>
          <td><button class="btn btn-ghost btn-sm" data-select="${a.id}" type="button">Select</button></td>
        </tr>`;
      })
      .join("");

    body.querySelectorAll("[data-select]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-select");
        const item = currentList().find((x) => x.id === id);
        if (item) selectAsset(item);
      });
    });

    const top = state.crypto[0] || list[0];
    if (top) {
      const n = $("top-signal-name");
      const d = $("top-signal-detail");
      const m = $("top-signal-meta");
      if (n) n.textContent = `${top.symbol} · $${fmt(top.price, top.price < 1 ? 4 : 2)}`;
      if (d) d.textContent = `${top.name} · 24h ${top.change24 >= 0 ? "+" : ""}${fmt(top.change24)}% · vol ${top.volScore} · risk ${top.risk}`;
      if (m) m.textContent = top.tag;
    }
  }

  function selectAsset(asset) {
    state.selected = asset;
    const title = $("chart-title");
    const price = $("chart-price");
    if (title) title.textContent = `CHART · ${asset.symbol}`;
    if (price) price.textContent = `$${fmt(asset.price, asset.price < 1 ? 6 : 2)} · ${asset.change24 >= 0 ? "+" : ""}${fmt(asset.change24)}%`;
    renderRadar();
    drawChart(asset);
  }

  function drawChart(asset) {
    const el = $("chart-box");
    if (!el || typeof LightweightCharts === "undefined") return;
    if (state.chart) {
      try { state.chart.remove(); } catch (_) {}
      state.chart = null;
      state.series = null;
    }
    state.chart = LightweightCharts.createChart(el, {
      width: el.clientWidth,
      height: 280,
      layout: { background: { color: "#0a0a0a" }, textColor: "#a7a7a7" },
      grid: { vertLines: { color: "#1e1e1e" }, horzLines: { color: "#1e1e1e" } },
      rightPriceScale: { borderColor: "#313131" },
      timeScale: { borderColor: "#313131" },
    });
    state.series = state.chart.addAreaSeries({
      lineColor: "#6798ff",
      topColor: "rgba(103,152,255,0.25)",
      bottomColor: "rgba(103,152,255,0.02)",
      lineWidth: 2,
    });
    const points = [];
    let p = asset.price * (1 - (asset.change24 || 0) / 200);
    const now = Math.floor(Date.now() / 1000);
    for (let i = 48; i >= 0; i--) {
      p = p * (1 + (Math.random() - 0.48) * 0.008);
      points.push({ time: now - i * 1800, value: +p.toFixed(6) });
    }
    points[points.length - 1].value = asset.price;
    state.series.setData(points);
    state.chart.timeScale().fitContent();
  }

  function markPrices() {
    const all = [...state.crypto, ...state.equities];
    Object.values(state.positions).forEach((pos) => {
      const m = all.find((x) => x.id === pos.id);
      if (m) pos.price = m.price;
    });
  }

  function portfolioValue() {
    markPrices();
    let equity = 0;
    Object.values(state.positions).forEach((p) => {
      equity += p.qty * p.price;
    });
    const total = state.cash + equity;
    const pnl = total - START_CASH;
    return { equity, total, pnl };
  }

  function renderPortfolio() {
    const { equity, total, pnl } = portfolioValue();
    const set = (id, val) => { const el = $(id); if (el) el.textContent = val; };
    set("cash-display", fmtUsd(state.cash));
    set("equity-display", fmtUsd(equity));
    set("total-display", fmtUsd(total));
    const pnlEl = $("pnl-display");
    if (pnlEl) {
      pnlEl.textContent = (pnl >= 0 ? "+" : "") + fmtUsd(pnl);
      pnlEl.style.color = pnl >= 0 ? "var(--color-up)" : "var(--color-down)";
    }
    const sc = $("stat-cash");
    if (sc) {
      sc.textContent = fmtUsd(state.cash);
      sc.className = pnl >= 0 ? "up" : "down";
    }

    const list = $("positions-list");
    if (!list) return;
    const rows = Object.values(state.positions);
    if (!rows.length) {
      list.innerHTML = `<div class="portfolio-empty">Нет позиций — купите из radar</div>`;
      return;
    }
    list.innerHTML = rows
      .map((p) => {
        const val = p.qty * p.price;
        const cost = p.qty * p.avg;
        const lp = val - cost;
        return `<div class="portfolio-row">
          <div><b>${p.symbol}</b><div style="font-size:11px;color:var(--color-ash);font-family:var(--font-mono)">${fmt(p.qty, 6)} · avg $${fmt(p.avg, 4)}</div></div>
          <div style="text-align:right;font-family:var(--font-mono)">
            <div>${fmtUsd(val)}</div>
            <div style="font-size:11px;color:${lp >= 0 ? "var(--color-up)" : "var(--color-down)"}">${lp >= 0 ? "+" : ""}${fmtUsd(lp)}</div>
          </div>
        </div>`;
      })
      .join("");
  }

  function buy() {
    if (!state.selected) return alert("Сначала выберите актив в таблице Radar");
    const usd = Number($("trade-amount").value);
    if (!usd || usd <= 0) return alert("Укажите сумму в USD");
    if (usd > state.cash + 1e-9) return alert("Недостаточно cash на demo-счёте");
    const price = state.selected.price;
    if (!price || price <= 0) return;
    const qty = usd / price;
    const id = state.selected.id;
    const prev = state.positions[id];
    if (prev) {
      const newQty = prev.qty + qty;
      prev.avg = (prev.avg * prev.qty + price * qty) / newQty;
      prev.qty = newQty;
      prev.price = price;
    } else {
      state.positions[id] = {
        id,
        symbol: state.selected.symbol,
        name: state.selected.name,
        qty,
        avg: price,
        price,
      };
    }
    state.cash -= usd;
    save();
    renderPortfolio();
  }

  function sell() {
    if (!state.selected) return alert("Сначала выберите актив");
    const id = state.selected.id;
    const pos = state.positions[id];
    if (!pos) return alert("Нет позиции по этому активу");
    const usd = Number($("trade-amount").value);
    if (!usd || usd <= 0) return alert("Укажите сумму в USD");
    const price = state.selected.price || pos.price;
    let qty = usd / price;
    if (qty > pos.qty) qty = pos.qty;
    const proceeds = qty * price;
    pos.qty -= qty;
    state.cash += proceeds;
    if (pos.qty < 1e-12) delete state.positions[id];
    save();
    renderPortfolio();
  }

  function resetDemo() {
    if (!confirm("Сбросить demo-счёт до $100 и закрыть все позиции?")) return;
    state.cash = START_CASH;
    state.positions = {};
    save();
    renderPortfolio();
  }

  function bindTabs() {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        state.tab = tab.getAttribute("data-tab");
        renderRadar();
        const list = currentList();
        if (list[0]) selectAsset(list[0]);
      });
    });
  }

  function onResize() {
    const el = $("chart-box");
    if (state.chart && el) state.chart.applyOptions({ width: el.clientWidth });
  }

  async function refresh() {
    equityMark();
    await fetchCrypto();
    renderRadar();
    if (!state.selected) {
      const list = currentList();
      if (list[0]) selectAsset(list[0]);
    } else {
      const updated =
        currentList().find((x) => x.id === state.selected.id) ||
        state.crypto.find((x) => x.id === state.selected.id);
      if (updated) {
        state.selected = updated;
        const price = $("chart-price");
        if (price)
          price.textContent = `$${fmt(updated.price, updated.price < 1 ? 6 : 2)} · ${updated.change24 >= 0 ? "+" : ""}${fmt(updated.change24)}%`;
      }
    }
    renderPortfolio();
  }

  function init() {
    load();
    bindTabs();
    const buyBtn = $("btn-buy");
    const sellBtn = $("btn-sell");
    const resetBtn = $("btn-reset");
    if (buyBtn) buyBtn.addEventListener("click", buy);
    if (sellBtn) sellBtn.addEventListener("click", sell);
    if (resetBtn) resetBtn.addEventListener("click", resetDemo);
    window.addEventListener("resize", onResize);
    tickClock();
    setInterval(tickClock, 1000);
    equityMark();
    renderPortfolio();
    refresh();
    setInterval(refresh, 60_000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
