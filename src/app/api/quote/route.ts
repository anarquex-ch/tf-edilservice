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
      from: 'TF Edilservice Preventivi <info@tfedilservice.ch>',
      to: ['info@tfedilservice.ch'],
      replyTo: email,
      subject: `Nuova Richiesta di Preventivo da ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuova Richiesta di Preventivo</h2>
          <p>Hai ricevuto una nuova richiesta di preventivo dal sito web.</p>
          <hr />
          
          <h3>1. Servizi Richiesti:</h3>
          <ul>
            ${services.map((s: string) => `<li>${s}</li>`).join('')}
          </ul>
          
          <h3>2. Dettagli Progetto:</h3>
          <p><strong>Tempistiche:</strong> ${timing || 'Non specificato'}</p>
          <p><strong>Descrizione:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${description}</p>
          
          <h3>3. Dati Personali:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>CAP e Città:</strong> ${location}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email' }, { status: 500 });
  }
}
