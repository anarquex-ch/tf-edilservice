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
      subject: `Nuovo messaggio di contatto da ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuovo Messaggio dal Sito Web</h2>
          <p>Hai ricevuto una nuova richiesta di contatto dal sito web.</p>
          <hr />
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
          <br />
          <p><strong>Messaggio:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email' }, { status: 500 });
  }
}
