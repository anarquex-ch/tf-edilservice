import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Scale, FileSignature, CheckCircle, AlertTriangle, Hammer, Gavel } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Termini di Servizio | TF Edilservice Sagl",
  description: "Condizioni Generali di Contratto (CGC) per i servizi di installazione, domotica e opere edili in Ticino.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Termini di Servizio"
        subtitle="Condizioni Generali di Contratto (CGC) chiare e trasparenti."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Termini di Servizio" }
        ]}
      />

      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Aspetti Legali</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Regole chiare, lavoro sereno
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Le presenti Condizioni Generali regolano il rapporto tra TF Edilservice Sagl e i propri clienti, garantendo professionalità e il pieno rispetto delle normative svizzere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: FileSignature,
                title: "Preventivi e Contratti",
                desc: "I preventivi hanno validità di 30 giorni. Il contratto si ritiene formalmente concluso all'accettazione scritta."
              },
              {
                icon: Hammer,
                title: "Esecuzione a Regola d'Arte",
                desc: "Garantiamo che tutte le opere elettriche ed edili rispettano rigorosamente le normative NIBT/OIBT e SIA."
              },
              {
                icon: CheckCircle,
                title: "Garanzia SIA 118",
                desc: "Applichiamo la garanzia di 2 anni sui difetti apparenti e occulti, in conformità agli standard edilizi svizzeri."
              },
              {
                icon: AlertTriangle,
                title: "Forza Maggiore",
                desc: "Ritardi dovuti a condizioni meteo avverse o ritardi documentati nelle forniture non costituiscono inadempienza."
              },
              {
                icon: Scale,
                title: "Diritto Svizzero",
                desc: "Tutti i contratti stipulati con l'Azienda sono regolati e interpretati esclusivamente dal Diritto Svizzero."
              },
              {
                icon: Gavel,
                title: "Foro Competente",
                desc: "Per ogni controversia legale, il foro competente esclusivo è la Pretura della sede legale (Bellinzona)."
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
              
              <h2 className="!mt-0">1. Ambito di Applicazione</h2>
              <p>
                Le presenti Condizioni Generali di Contratto (CGC) costituiscono parte integrante e si applicano a tutti i contratti d'appalto, di fornitura, di consulenza e di servizi stipulati tra <strong>TF Edilservice Sagl</strong> (di seguito denominata "l'Azienda") e i propri clienti, siano essi privati o aziende (di seguito denominati "il Committente"). 
              </p>
              <p>
                Eventuali condizioni o accordi in deroga alle presenti CGC sono validi ed efficaci solo se concordati esplicitamente, messi per iscritto e firmati da entrambe le parti.
              </p>

              <h2>2. Offerte e Preventivi</h2>
              <p>
                Le offerte e i preventivi emessi dall'Azienda sono da intendersi gratuiti e non vincolanti fino al momento dell'accettazione scritta da parte del Committente (che può avvenire anche tramite conferma via email). 
              </p>
              <p>
                Salvo diversa indicazione esplicita riportata sul documento, la validità temporale di un preventivo è fissata in <strong>30 giorni</strong> dalla data di emissione. L'Azienda si riserva in ogni caso il diritto di adeguare i prezzi pattuiti qualora si verificassero rincari straordinari, imprevedibili e documentati dei materiali sui mercati internazionali prima dell'inizio effettivo dei lavori.
              </p>

              <h2>3. Esecuzione dei Lavori e Normative Applicabili</h2>
              <p>
                L'Azienda si impegna solennemente a eseguire i lavori commissionati a regola d'arte, impiegando personale adeguatamente formato e materiali conformi agli alti standard qualitativi svizzeri. In particolare, tutti gli impianti elettrici verranno eseguiti e collaudati nel rigoroso rispetto di:
              </p>
              <ul>
                <li><strong>OIBT:</strong> Ordinanza federale sugli Impianti a Bassa Tensione.</li>
                <li><strong>NIBT:</strong> Norme per gli Impianti a Bassa Tensione emanate da Electrosuisse.</li>
              </ul>
              <p>
                Per quanto concerne le opere edili e affini, l'Azienda segue per principio le direttive e gli standard della norma <strong>SIA 118</strong> (Condizioni generali per l'esecuzione dei lavori di costruzione), salvo ove diversamente pattuito.
              </p>

              <h2>4. Gestione Burocratica (Sussidi e Notifiche)</h2>
              <p>
                Uno dei punti di forza dell'Azienda è l'assistenza al cliente. Qualora il Committente deleghi all'Azienda l'istruzione delle pratiche amministrative (quali, a titolo di esempio: richieste di incentivi Pronovo, fondi cantonali FER, notifiche o domande di costruzione comunali, pratiche ESTI), l'Azienda agirà in qualità di semplice mandatario. 
              </p>
              <div className="bg-accent/10 p-6 rounded-2xl border-l-4 border-accent my-8 text-primary">
                <strong>Avvertenza Importante:</strong> L'Azienda compila la documentazione con la massima diligenza professionale, tuttavia <strong>non può in alcun modo garantire</strong> l'effettivo ottenimento dei sussidi o delle autorizzazioni. L'erogazione dei fondi e i permessi dipendono esclusivamente e insindacabilmente dalle autorità pubbliche preposte e dalla disponibilità finanziaria statale o cantonale al momento dell'esame della pratica.
              </div>

              <h2>5. Prezzi, Fatturazione e Condizioni di Pagamento</h2>
              <p>
                Tutti i prezzi indicati nelle offerte e nelle comunicazioni sono espressi in Franchi Svizzeri (CHF) e si intendono IVA esclusa (che verrà calcolata all'aliquota di legge vigente al momento della fatturazione), salvo diversa esplicita indicazione contraria. 
              </p>
              <p>Le condizioni di pagamento standard, a meno di accordi specifici stipulati in fase contrattuale, prevedono la seguente ripartizione:</p>
              <ul>
                <li><strong>30% dell'importo totale</strong> all'accettazione del preventivo. Questo importo serve a coprire i costi di ingegnerizzazione e come acconto per l'ordinazione dei materiali presso i fornitori.</li>
                <li><strong>40% dell'importo totale</strong> a metà dell'avanzamento dei lavori (o al raggiungimento di traguardi specifici concordati).</li>
                <li><strong>30% dell'importo totale</strong> a saldo, da corrispondere dopo il collaudo o la consegna formale dell'impianto al Committente.</li>
              </ul>
              <p>
                Le fatture emesse dall'Azienda devono essere saldate tassativamente entro <strong>10 giorni netti</strong> dalla data di emissione, previa trattenuta di eventuali sconti concordati per iscritto. In caso di ritardo nei pagamenti, l'Azienda si riserva il diritto legale di applicare un interesse di mora del 5% annuo ai sensi del Codice delle Obbligazioni svizzero, senza necessità di ulteriore diffida, e di sospendere i lavori in corso fino a regolarizzazione avvenuta.
              </p>

              <h2>6. Garanzia e Difetti</h2>
              <p>
                L'Azienda garantisce la bontà e la qualità dei materiali forniti e l'esecuzione dell'opera a regola d'arte. Il periodo di garanzia è disciplinato in conformità alla <strong>Norma SIA 118</strong>:
              </p>
              <ul>
                <li>Il termine generale di garanzia è di <strong>2 anni</strong> per difetti apparenti e occulti (sia per i lavori edili che per le installazioni elettriche). Il termine decorre dal giorno dell'accettazione (collaudo) dell'opera.</li>
                <li>Per i difetti strutturali e nascosti delle opere immobiliari, il termine di prescrizione è di 5 anni.</li>
                <li>I componenti elettronici e tecnici specifici (es. inverter fotovoltaici, sistemi di accumulo/batterie, pannelli solari, apparati domotici) sono coperti dalla <strong>garanzia diretta del produttore</strong>, la cui durata può variare dai 5 ai 25 anni a seconda del marchio. L'Azienda assiste il Committente nella gestione logistica e documentale delle pratiche di garanzia con i rispettivi produttori, ma non è responsabile in proprio per i difetti di fabbricazione di tali componenti.</li>
              </ul>
              <p>
                <strong>Decadenza:</strong> Il diritto alla garanzia decade irrimediabilmente in caso di interventi, riparazioni o manipolazioni effettuate sull'impianto dal Committente stesso o da terze ditte non espressamente autorizzate per iscritto dall'Azienda. Decade altresì in caso di uso improprio, manifesta mancanza della manutenzione ordinaria prescritta, o in caso di danni causati da eventi di forza maggiore (fulmini, alluvioni, sovratensioni della rete pubblica).
              </p>

              <h2>7. Diritto Applicabile e Foro Competente</h2>
              <p>
                Ogni singolo rapporto giuridico instaurato tra il Committente e TF Edilservice Sagl, incluse le questioni relative alla sua validità, nullità o risoluzione, è soggetto e regolato esclusivamente dal <strong>Diritto Materiale Svizzero</strong> (con particolare riferimento al Codice delle Obbligazioni, CO).
              </p>
              <p>
                Per ogni e qualsiasi controversia derivante dall'interpretazione, dall'esecuzione o dalla risoluzione del contratto, le parti riconoscono e accettano che il Foro Competente esclusivo è la <strong>Pretura del distretto di Bellinzona</strong> (giurisdizione territoriale della sede legale dell'Azienda a Giubiasco). L'Azienda si riserva comunque il diritto, a propria esclusiva discrezione, di perseguire legalmente il Committente presso il foro del suo domicilio o della sua sede.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                <span>Versione 1.1</span>
                <span>Ultimo aggiornamento: 13 Maggio 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection 
        title="Pronto a iniziare il tuo progetto in sicurezza?"
        description="Lavoriamo in modo chiaro e trasparente per garantirti la massima tranquillità, dal primo sopralluogo al collaudo finale del tuo impianto."
      />
    </>
  );
}
