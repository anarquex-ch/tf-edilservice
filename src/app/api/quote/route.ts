import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { services, timing, description, name, email, phone, location } = body;

    if (!name || !email || !phone || !location || !description || services.length === 0) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'TF Edilservice <info@tfedilservice.ch>',
      to: ['info@tfedilservice.ch'],
      replyTo: email,
      subject: `Nuovo Preventivo richiesto da ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="background-color: #f3f4f6; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; color: #374151;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            <!-- Header -->
            <tr>
              <td style="background-color: #111827; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">TF EDILSERVICE</h1>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding: 40px 30px;">
                <h2 style="color: #111827; font-size: 20px; margin-top: 0; margin-bottom: 10px;">Nuova Richiesta di Preventivo</h2>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px; color: #4b5563;">Un utente ha completato il form di preventivo sul sito web in 3 step.</p>
                
                <!-- Servizi -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <span style="font-size: 12px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">1. Servizi Richiesti</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; background-color: #f9fafb; border-radius: 6px; border: 1px solid #f3f4f6;">
                      <ul style="margin: 0; padding-left: 20px; color: #111827; font-size: 15px; line-height: 1.6;">
                        ${services.map((s: string) => `<li><strong>${s}</strong></li>`).join('')}
                      </ul>
                    </td>
                  </tr>
                </table>

                <!-- Progetto -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <span style="font-size: 12px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">2. Dettagli Progetto</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; background-color: #ffffff; border-radius: 6px; border: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 15px 0; font-size: 15px;"><strong>Tempistiche:</strong> <span style="background-color: #fee2e2; color: #991b1b; padding: 4px 8px; border-radius: 4px; font-size: 14px; font-weight: 500;">${timing || 'Non specificato'}</span></p>
                      <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Descrizione lavori:</strong></p>
                      <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4b5563; white-space: pre-wrap; padding-left: 15px; border-left: 3px solid #ef4444;">${description}</p>
                    </td>
                  </tr>
                </table>

                <!-- Cliente -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <span style="font-size: 12px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">3. Dati Personali</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; background-color: #f9fafb; border-radius: 6px; border: 1px solid #f3f4f6;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr><td width="100" style="padding-bottom: 8px; font-size: 15px; color: #6b7280;">Nome:</td><td style="padding-bottom: 8px; font-size: 15px; font-weight: bold;">${name}</td></tr>
                        <tr><td style="padding-bottom: 8px; font-size: 15px; color: #6b7280;">Email:</td><td style="padding-bottom: 8px; font-size: 15px; font-weight: bold;"><a href="mailto:${email}" style="color: #ef4444; text-decoration: none;">${email}</a></td></tr>
                        <tr><td style="padding-bottom: 8px; font-size: 15px; color: #6b7280;">Telefono:</td><td style="padding-bottom: 8px; font-size: 15px; font-weight: bold;">${phone}</td></tr>
                        <tr><td style="font-size: 15px; color: #6b7280;">Località:</td><td style="font-size: 15px; font-weight: bold;">${location}</td></tr>
                      </table>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.5;">
                  Questa è un'email automatica generata da <strong>tf-edilservice.ch</strong>.<br>
                  Per rispondere al cliente, ti basta cliccare su "Rispondi" nel tuo client di posta.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email' }, { status: 500 });
  }
}
