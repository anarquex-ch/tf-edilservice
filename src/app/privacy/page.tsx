import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Shield, Lock, FileText, Globe, Server, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy | TF Edilservice Sagl",
  description: "Informativa sulla privacy e protezione dei dati personali ai sensi della nLPD svizzera e del GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Trasparenza e sicurezza nella gestione dei tuoi dati personali."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" }
        ]}
      />

      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Protezione Dati</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Conformità nLPD e GDPR
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              TF Edilservice Sagl attribuisce grande importanza alla protezione della tua privacy. I tuoi dati sono gestiti secondo i più elevati standard legali svizzeri ed europei.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Shield,
                title: "Nuova LPD (nLPD)",
                desc: "Piena conformità alla Nuova Legge federale sulla protezione dei dati in vigore dal 1° settembre 2023."
              },
              {
                icon: Globe,
                title: "GDPR Compliant",
                desc: "Rispetto del Regolamento Generale sulla Protezione dei Dati per gli utenti residenti nell'Unione Europea."
              },
              {
                icon: Server,
                title: "Hosting Sicuro",
                desc: "I tuoi dati sono conservati su server sicuri gestiti in conformità con le normative svizzere vigenti."
              },
              {
                icon: Lock,
                title: "Crittografia SSL",
                desc: "Tutte le comunicazioni tramite il nostro sito web sono protette da protocolli avanzati SSL/TLS."
              },
              {
                icon: FileText,
                title: "Trasparenza Totale",
                desc: "Raccogliamo solo i dati strettamente necessari per erogare i servizi tecnici e amministrativi."
              },
              {
                icon: CheckCircle2,
                title: "I Tuoi Diritti",
                desc: "Garantiamo il diritto di accesso, rettifica e cancellazione (oblio) dei tuoi dati in qualsiasi momento."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary leading-tight">{feature.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl border border-gray-100 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 
              prose-headings:text-primary prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-100
              prose-p:leading-[1.8] prose-p:mb-8
              prose-ul:space-y-3 prose-ul:mb-8
              prose-li:leading-[1.8]
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary">
              
              <h2 className="!mt-0">1. Titolare del Trattamento</h2>
              <p>
                Il titolare del trattamento dei dati personali raccolti attraverso questo sito web, responsabile per la loro sicurezza e per l'utilizzo in conformità alle leggi vigenti, è:
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-8">
                <strong>TF Edilservice Sagl</strong><br />
                Via Campagna 4b<br />
                6512 Giubiasco, Svizzera<br />
                Email: <a href="mailto:info@tfedilservice.ch">info@tfedilservice.ch</a><br />
                Telefono: <a href="tel:+41912908570">+41 91 290 85 70</a>
              </div>

              <h2>2. Quali dati raccogliamo</h2>
              <p>Nel corso della nostra interazione con gli utenti e i clienti, raccogliamo e trattiamo i seguenti dati personali:</p>
              <ul>
                <li><strong>Dati di contatto diretti:</strong> nome, cognome, indirizzo email, numero di telefono e indirizzo fisico (quando compili il modulo di contatto o richiedi un sopralluogo).</li>
                <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate e log di sistema. Questi dati sono raccolti tramite cookie tecnici necessari per il funzionamento e la sicurezza del sito.</li>
                <li><strong>Dati amministrativi e tecnici:</strong> informazioni dettagliate sull'immobile, necessarie per l'esecuzione di pratiche burocratiche (es. richieste di sussidi Pronovo/FER, notifiche comunali, certificazioni RaSI).</li>
              </ul>

              <h2>3. Finalità del trattamento</h2>
              <p>I tuoi dati non vengono mai utilizzati per scopi oscuri. Li impieghiamo esclusivamente per le seguenti, specifiche finalità:</p>
              <ol>
                <li><strong>Erogazione dei servizi:</strong> organizzazione di sopralluoghi, stesura di preventivi e installazione fisica degli impianti richiesti.</li>
                <li><strong>Gestione Burocratica:</strong> disbrigo delle pratiche legali e amministrative per conto del cliente presso i vari enti preposti.</li>
                <li><strong>Obblighi Legali:</strong> adempimento di obblighi fiscali, contabili e normativi previsti dalla legge svizzera.</li>
                <li><strong>Assistenza:</strong> risposta rapida a richieste di assistenza, garanzia o supporto tecnico.</li>
              </ol>

              <h2>4. Condivisione dei Dati e Terze Parti</h2>
              <p>
                La fiducia è alla base del nostro lavoro. TF Edilservice Sagl <strong>non vende né affitta in alcun caso</strong> i tuoi dati personali a società di marketing terze. 
              </p>
              <p>
                Tuttavia, i dati possono essere condivisi con terze parti solo quando strettamente necessario per l'esecuzione del mandato che ci hai affidato. Questo include:
              </p>
              <ul>
                <li><strong>Autorità cantonali e federali:</strong> per l'inoltro di notifiche di costruzione o richieste di sussidi (es. Ufficio dell'energia).</li>
                <li><strong>Aziende elettriche:</strong> i distributori locali (AET, SES, AMB, ecc.) per l'annuncio obbligatorio degli impianti alla rete.</li>
                <li><strong>Ispettorati:</strong> ispettori indipendenti OIBT per il rilascio del Rapporto di Sicurezza (RaSI).</li>
                <li><strong>Partner IT:</strong> provider di servizi di hosting e fatturazione vincolati da rigidi accordi di riservatezza (Data Processing Agreements).</li>
              </ul>

              <h2>5. Trasferimento dei Dati all'Estero</h2>
              <p>
                Di regola, i tuoi dati personali sono elaborati e conservati in modo sicuro sul suolo della Confederazione Svizzera. 
              </p>
              <p>
                Qualora, per motivi operativi (ad esempio l'utilizzo di specifici software cloud per la domotica), venissero utilizzati fornitori di servizi basati in paesi terzi (es. Unione Europea), ci assicuriamo preventivamente che tali paesi garantiscano un livello adeguato di protezione dei dati, così come riconosciuto dall'Incaricato federale della protezione dei dati e della trasparenza (IFPDT), oppure ci assicuriamo che siano stipulate clausole contrattuali tipo per tutelare i tuoi diritti.
              </p>

              <h2>6. I Diritti dell'Interessato</h2>
              <p>
                In base alla nuova Legge federale sulla protezione dei dati (nLPD) e, ove applicabile, al Regolamento Europeo (GDPR), detieni il controllo assoluto sui tuoi dati. Hai i seguenti diritti:
              </p>
              <ul>
                <li><strong>Diritto di accesso:</strong> puoi chiedere in qualsiasi momento conferma di quali dati possediamo su di te e di riceverne una copia.</li>
                <li><strong>Diritto di rettifica:</strong> puoi chiedere la correzione immediata di dati errati o non più attuali.</li>
                <li><strong>Diritto alla cancellazione ("diritto all'oblio"):</strong> puoi chiedere la distruzione dei tuoi dati, fatto salvo il nostro obbligo legale superiore di conservazione (ad esempio l'obbligo di conservare le fatture per 10 anni secondo il Codice delle Obbligazioni svizzero).</li>
                <li><strong>Diritto di opposizione:</strong> puoi opporti in qualsiasi momento al trattamento dei dati per finalità di comunicazione commerciale.</li>
              </ul>
              <p>Per esercitare questi diritti in modo semplice e veloce, puoi inviarci una richiesta scritta all'indirizzo email: <strong>info@tfedilservice.ch</strong>. Risponderemo nei termini previsti dalla legge.</p>

              <h2>7. Aggiornamenti a questa Policy</h2>
              <p>
                Il mondo tecnologico e normativo è in continua evoluzione. Ci riserviamo il diritto di modificare o aggiornare la presente Privacy Policy per adeguarla alle nuove normative svizzere o europee. L'ultima versione aggiornata sarà sempre disponibile su questa pagina, in modo trasparente.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                <span>Versione 2.0</span>
                <span>Ultimo aggiornamento: 13 Maggio 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection 
        title="Hai domande sulla gestione dei tuoi dati?"
        description="La trasparenza è il nostro primo valore. Contattaci e ti forniremo tutte le informazioni necessarie con la massima riservatezza."
      />
    </>
  );
}
