import React from 'react';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';

import styles from '../styles/blocks.module.css';

import Navbar from '../components/Navbar.jsx';
import Sharebar from '../components/Sharebar.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {

    return (
        <>
            <Head>
                <title>So What! - Info</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <Navbar />

            <main>

                <Sharebar text="Terug naar home" />

                <div className={styles.grid}>

                    <div className={`${styles.block} ${styles.large}`}>
                        <h1>Privacy Policy</h1>

                        <p>Stichting Sociëteit So What!<br />
                            Vest 30<br />
                            2801 VE Gouda<br />
                            www.so-what.nl<br />
                            info@so-what.nl<br />
                            KvK: 41172127</p>

                        <p>Op 25 mei 2018 is de nieuwe AVG Wet ingegaan. Eigenlijk is het doel van de AVG Privacywet best logisch: het verzamelen en beheren van persoonsgegevens door bedrijven moet beter. De wetgeving moet ervoor zorgen dat bedrijven transparanter, veiliger, specifieker en beperkter gebruik maken van de gegevens van personen. Een privacyverklaring is een belangrijk onderdeel in dit verhaal. Het is een verklaring waarin we uitleggen wat er gebeurt met jullie persoonsgegeven en, belangrijker nog, hoe we deze beschermen.</p>

                        <h2>Doel van je gegevens</h2>
                        <p>Als je in So What! komt, vragen we naar een aantal persoonsgegevens van je. Dit zijn:</p>

                        <p>Je NAW-gegevens;<br />
                            Je geboortedatum;<br />
                            Je-mailadres.</p>
                        <p>Je NAW-gegevens hebben we nodig voor de inschrijving van een bezoeker. Wij schrijven iedere bezoeker in dit is voor de verkoop van tickets. Tevens gebruikt So What! het adres van haar leden om programmaboekjes toe te zenden.<br />
                            Je geboortedatum zetten we er ook meteen bij. Op vrijdagavond is So What! open voor publiek ouder dan 12 en op zaterdagavond voor publiek ouder dan 18 jaar. Mocht je een volgende keer weer komen, hoef je je niet opnieuw in te schrijven. Deze gegevens worden bewaard in ons ticketingsysteem Stager en blijven bewaard tot je vraagt deze te verwijderen.<br />
                        Je e-mailadres gebruiken we om een nieuwsbrief te sturen. Zo blijf je altijd op de hoogte van wat er in So What! gebeurt.</p>


                        <h2>Rechten</h2>
                        <ul>
                        <li>Jij als bezoeker hebt het recht om vergeten te worden dankzij de nieuwe AVG wet. Ook kun je je middels de link in de mail die je hebt gehad uitschrijven voor nieuwsbrieven of in de nieuwsbrief zelf helemaal onderaan afmelden. Ook kun je So What! vragen je geheel uit het systeem te halen. Stuur een mail naar info@so-what.nl.</li>
                        <li>Je hebt het recht op inzage van je eigen persoonsgegevens mits je hier om vraagt.</li>
                        <li>Je hebt het recht op het indienen van een klacht bij So What! of de autoriteit persoonsgegevens.</li>
                        <li>Beveiliging van je gegevens</li>
                        <li>Uiteraard doen wij er alles aan om zorgvuldig om te gaan met je persoonsgegevens. Onze server is beschermd en afgesloten, hier kan niemand zomaar bij. Ook delen wij nooit zonder toestemming gegevens. Wel kan het voorkomen dat persoonsgegevens of videobeelden worden gedeeld met autoriteiten zoals politie of justitie. Hier moeten zij uiteraard eerst om vragen.</li>
                        <li>Je e-mailadres is beschermd en kan niet door iedereen worden ingezien of gebruikt. De nieuwsbrieven die je ontvangt worden vanaf computers in So What! verstuurt. Er staan dus geen gegevens op privécomputers van medewerkers.</li>
                        <li>Ons ticketingsysteem (Stager) is een beveiligde omgeving. Mocht je hier meer over willen weten, verwijzen we je graag door naar de website van Stager www.stager.nl. De accounts waarmee wordt ingelogd zijn het secretariaat en de marketing. Deze zijn beveiligd middels een algemeen e-mailadres en (sterk) wachtwoord.</li>
                        </ul>

                        <h2>Verplichting van gegevens</h2>
                        <p>Het is volgens de nieuwe AVG wet niet verplicht je gegevens te verstrekken. Maar de data die we van je vragen, is om je een dienst aan te kunnen bieden. Mocht je bepaalde persoonsgegevens niet willen delen, kunnen we je niet altijd optimaal helpen.</p>
                        <p>Denk hierbij aan het beantwoorden van een vraag die (via de website) gesteld wordt, maar er is geen e-mailadres achtergelaten of het verstrekken van een ticket maar er zijn geen NAW-gegevens of e-mailadres achtergelaten.</p>

                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

