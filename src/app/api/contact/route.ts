import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'TF Edilservice <info@tfedilservice.ch>',
      to: ['info@tfedilservice.ch'],
      replyTo: email,
      subject: `Nuovo messaggio da ${name}`,
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
                <h2 style="color: #111827; font-size: 20px; margin-top: 0; margin-bottom: 10px;">Nuova Richiesta di Contatto</h2>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px; color: #4b5563;">Hai ricevuto un nuovo messaggio dal modulo di contatto del sito web.</p>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <span style="font-size: 12px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">Dettagli Mittente</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; background-color: #f9fafb; border-radius: 6px; border: 1px solid #f3f4f6;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr><td width="100" style="padding-bottom: 8px; font-size: 15px; color: #6b7280;">Nome:</td><td style="padding-bottom: 8px; font-size: 15px; font-weight: bold;">${name}</td></tr>
                        <tr><td style="padding-bottom: 8px; font-size: 15px; color: #6b7280;">Email:</td><td style="padding-bottom: 8px; font-size: 15px; font-weight: bold;"><a href="mailto:${email}" style="color: #ef4444; text-decoration: none;">${email}</a></td></tr>
                        <tr><td style="font-size: 15px; color: #6b7280;">Telefono:</td><td style="font-size: 15px; font-weight: bold;">${phone || 'Non specificato'}</td></tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <span style="font-size: 12px; font-weight: bold; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">Messaggio</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; background-color: #ffffff; border-radius: 6px; border: 1px solid #e5e7eb; border-left: 4px solid #ef4444;">
                      <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #374151;">${message}</p>
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
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email' }, { status: 500 });
  }
}
