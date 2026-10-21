/**
 * MAGIC JARVIS Chat — Cloudflare Worker
 * Deploy: Workers & Pages → Create → paste this → Deploy
 * Free tier is enough. Optional: bind GROQ_API_KEY secret for real LLM.
 *
 * After deploy, on the site set:
 *   window.MAGIC_CHAT_API = 'https://YOUR-WORKER.workers.dev';
 * in script.js (or a one-line config).
 */

const SYSTEM = `Ты JARVIS на сайте MAGIC (AI Engineer, Tbilisi).
Отвечай кратко (2–6 предложений), по делу, на языке пользователя.
Услуги: AI-агенты, Telegram-боты, n8n/Make, Media Farm, AI-Office, авто под ключ, легализация/бизнес в Грузии, SMM.
Цены (GEL): Старт от 149 ₾, Бизнес от 499 ₾, Под ключ от 1 199 ₾. Точная сумма после брифа.
Контакт: Telegram https://t.me/alex_berik , email alexberik@gmail.com, +995 511 493 394.
Обещание: ответ в течение 2 часов, на связи 24/7.
Не выдумывай кейсы и проценты. Если вопрос не по теме — мягко верни к услугам и предложи Telegram.`;

function localReply(q) {
  const t = (q || '').toLowerCase();
  if (/цен|price|стоим|сколько|пакет|₾/.test(t))
    return 'Ориентиры: Старт от 149 ₾, Бизнес от 499 ₾, Под ключ от 1 199 ₾. Точная сумма после короткого брифа → t.me/alex_berik';
  if (/авто|машин|car|аукцион|порт/.test(t))
    return 'Авто под ключ: TG → аукцион (США/Корея/Европа) → порт/растаможка → передача. Сопровождение на каждом этапе.';
  if (/легализ|внж|ип|компани|residence/.test(t))
    return 'Легализация и бизнес в Грузии: ВНЖ, документы, ИП/компания — в одном контакте с AI. Напишите в t.me/alex_berik';
  if (/бот|agent|n8n|make|workflow|автоматиз/.test(t))
    return 'AI-агенты, Telegram-боты, n8n/Make, Media Farm, AI-Office. Готовые workflows на сайте. Старт от 149 ₾.';
  return 'Могу рассказать про AI/ботов, workflows, авто, легализацию и цены. Или сразу: t.me/alex_berik';
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ ok: true, service: 'MAGIC JARVIS' }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    let body = {};
    try { body = await request.json(); } catch (_) {}
    const message = (body.message || body.q || '').toString().slice(0, 800);
    if (!message) {
      return new Response(JSON.stringify({ reply: 'Напишите вопрос.' }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    let reply = '';
    if (env.GROQ_API_KEY) {
      try {
        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + env.GROQ_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            temperature: 0.4,
            max_tokens: 280,
            messages: [
              { role: 'system', content: SYSTEM },
              { role: 'user', content: message },
            ],
          }),
        });
        const data = await r.json();
        reply = data?.choices?.[0]?.message?.content || '';
      } catch (_) {}
    }

    if (!reply) reply = localReply(message);

    return new Response(JSON.stringify({ reply }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
