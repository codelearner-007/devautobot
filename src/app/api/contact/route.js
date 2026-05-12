import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, service, message } = await request.json();

  if (!name || !email || !service || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const waText = [
    `🔔 *New Inquiry — DevAutobot*`,
    ``,
    `👤 *Name:* ${name}`,
    `📧 *Email:* ${email}`,
    phone ? `📞 *Phone:* ${phone}` : null,
    `🛠️ *Service:* ${service}`,
    ``,
    `💬 *Message:*`,
    message,
  ].filter(Boolean).join('\n');

  const emailHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
      <h2 style="color:#0e7490;margin-top:0;">New Project Inquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#6b7280;width:120px;vertical-align:top;">Name</td>
          <td style="padding:8px 0;font-weight:600;color:#111827;">${name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Email</td>
          <td style="padding:8px 0;color:#111827;"><a href="mailto:${email}" style="color:#0e7490;">${email}</a></td>
        </tr>
        ${phone ? `<tr>
          <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Phone</td>
          <td style="padding:8px 0;color:#111827;">${phone}</td>
        </tr>` : ''}
        <tr>
          <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Service</td>
          <td style="padding:8px 0;font-weight:600;color:#0e7490;">${service}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Message</td>
          <td style="padding:8px 0;color:#111827;white-space:pre-wrap;">${message}</td>
        </tr>
      </table>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${process.env.WA_PHONE}&text=${encodeURIComponent(waText)}&apikey=${process.env.WA_APIKEY}`;

  const [emailResult, waResult] = await Promise.allSettled([
    transporter.sendMail({
      from: `"DevAutobot Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Inquiry: ${service} — from ${name}`,
      html: emailHtml,
    }),
    fetch(waUrl),
  ]);

  const emailOk = emailResult.status === 'fulfilled';
  const waOk    = waResult.status === 'fulfilled' && waResult.value.ok;

  if (!emailOk && !waOk) {
    return Response.json({ error: 'Both channels failed' }, { status: 500 });
  }

  return Response.json({ success: true, email: emailOk, whatsapp: waOk });
}
