const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: 'Server is not configured.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();

  if (!EMAIL_RE.test(email) || email.length > 200) {
    return res.status(400).json({ ok: false, error: 'Invalid email.' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ ok: false, error: 'Message is too long.' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const ua = String(req.headers['user-agent'] || 'unknown').slice(0, 200);
  const ref = String(req.headers['referer'] || '').slice(0, 200);

  const lines = [
    '<b>New early-access signup</b>',
    `<b>Email:</b> ${escapeHtml(email)}`,
    message ? `<b>Message:</b>\n${escapeHtml(message)}` : '<i>No message.</i>',
    '',
    `<i>IP:</i> ${escapeHtml(ip)}`,
    `<i>UA:</i> ${escapeHtml(ua)}`,
    ref ? `<i>Ref:</i> ${escapeHtml(ref)}` : null,
  ].filter(Boolean);

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });
    const tgData = await tgRes.json().catch(() => ({}));
    if (!tgRes.ok || !tgData.ok) {
      console.error('Telegram error:', tgData);
      return res.status(502).json({ ok: false, error: 'Could not deliver right now.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram request failed:', err);
    return res.status(502).json({ ok: false, error: 'Could not deliver right now.' });
  }
};
