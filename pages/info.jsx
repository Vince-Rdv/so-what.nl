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

                    <div className={`${styles.block} ${styles.small}`}>
                        <h1>Algemeen</h1>
                        <p>So What! is het kernpoppodium en sociëteit voor jong en oud uit Gouda en de wijde omgeving. Wij zijn drie avonden per week geopend.</p>
                        <p>Op de vrijdag staan er bekende en minder bekende bands. Zaterdagnacht kan je uit je dak gaan op de muziek van onze DJ's of toffe externe dancefeesten; of in het bruin cafe gezellig bijpraten met je vrienden. Op een aantal zondagen per seizoen kan je de week afsluiten met het eetcafé en genieten van een heerlijke drie-gangen maaltijd voor een mooi prijsje! </p>
                    </div>

                    <div className={`${styles.block} ${styles.small}`}>
                        <h1>Visie</h1>
                        <p className={styles.quote}>De stichting stelt zich tot doel het bieden van mogelijkheden tot vorming van en ontspanning voor jongeren, op niet commerciële gronden.</p>
                        <p>Dit laatste wil zeggen, dat alle activiteiten georganiseerd en uitgevoerd worden door vrijwillige medewerkers, zonder dat daar een financiële vergoeding tegenover staat. Alle inkomsten worden gebruikt om de kosten te dekken, zoals onderhoud van apparatuur, vaste lasten, programmeringkosten voor bands, theater en het organiseren van speciale activiteiten.</p>
                        <p>Poppodium So What! is ook te vinden op <a href="https://www.stichting-info.nl">www.stichting-info.nl</a>.</p>
                    </div>

                    <div className={`${styles.block} ${styles.large} ${styles.blue}`}>

        	            <h1>Huisregels</h1>
                        <ol>
                            <li>Bij bezoek aan So What! is het verplicht dat je bij binnenkomst een geldig legitimatie kan tonen.</li>
                            <li>De minimumleeftijd om naar binnen te mogen is op vrijdag 12 jaar en op zaterdag 18 jaar tenzij anders aangegeven. Kijk voor de minimum leeftijd bij het evenement. Eetcafe’s zijn voor alle leeftijden.</li>
                            <li>So What! behoudt zich het recht om bezoekers zonder opgaaf van reden de toegang tot So What! te ontzeggen.</li>
                            <li>So What! behoudt zich het recht om bezoekers bij binnenkomst te fouilleren en om de tassen te controleren.</li>
                            <li>De handel in en het gebruik van soft- en harddrugs is verboden.</li>
                            <li>Het is in So What! verboden om te roken.</li>
                            <li>Onder de 18 jaar wordt geen alcoholhoudende drank geschonken.</li>
                            <li>Het is niet toegestaan om meegebrachte consumpties in So What! te nuttigen.</li>
                            <li>Het is niet toegestaan eigendommen van So What!, waaronder drank en/of glaswerk, mee te nemen.</li>
                            <li>So What! is niet verantwoordelijk voor het verlies of de beschadiging van eigendommen.</li>
                            <li>Het gebruiken of dragen van voorwerpen die als wapens en/of gevaarlijk worden aangemerkt is ten strengste verboden.</li>
                            <li>Agressie of hinderlijk gedrag wordt niet getolereerd.</li>
                            <li>Bij constatering van diefstal, overtredingen en misdrijven zal de politie worden ingeschakeld.</li>
                            <li>In So What! wordt meer dan 85dbA aan geluidsdruk geproduceerd. Oordoppen zijn tegen betaling bij de bar verkrijgbaar. Gehoorbeschadiging is voor eigen risico.</li>
                            <li>Bezorg de buren bij binnenkomst en vertrek geen overlast. Wees dus stil buiten op ons terrein</li>
                            <li>So What! behoudt zich voor om bij overtreding van deze regels bezoekers voor korte of langere tijd de toegang te ontzeggen.</li>
                            <li>Bij binnenkomst wordt automatisch akkoord gegeven om gemaakt beeldmateriaal voor promotiedoeleinden te gebruiken.</li>
                            <li>In So What! wordt geen cash aangenomen.</li>
                        </ol>

                    </div>

                    <div className={`${styles.block} ${styles.large}`}>

                        <h1>Geschiedenis</h1>

                        <p>Op 3 maart 1963 werd de Goudse Jazz Sociëteit opgericht en gevestigd in Gouda, Oosthaven 50 in het gebouw van de Goudse Dilettantenbond. Deze ruimte werd gedeeld met de Goudse Jeugd Sociëteit. Na een jaar verhuisde de Goudse Jazz Sociëteit naar de Peperstraat, waar men twee oude klaslokalen in een voormalige school betrok (boven 'Over de Brug'). Op 28 november 1967 werd de naam van de Sociëteit veranderd in 'So What!', naar een nummer van Miles Davis en werden de oprichtingsstatuten opgesteld. In 1970 kwamen de grootste veranderingen. Nadat twee jaar eerder een actie om de molen '‘t Slot' als sociëteitsruimte te krijgen was mislukt, werd na veel gepraat met de Gemeente toestemming verkregen om de oude Asschuur aan de Vest tot soosruimte te verbouwen. Na drieënhalve maand verbouwen werd op 10 oktober 1970 de huidige ruimte betrokken. Het pand werd voor die tijd onder andere gebruikt als stalhouderij en als opslag door de Dienst Gemeente Reiniging. De Aschschuur is een van de vele monumenten in Gouda. Onder meer vanwege de cultuurhistorische waarde, als typologisch voorbeeld en vanweg de markante ligging langs de Turfsingel is het pand erkend als rijksmonument.</p>
                        <p>Na 15 jaar gebruik werd in het seizoen 1985 / 1986 besloten over te gaan tot de -tot nu toe laatste- grote verbouwing. Gedurende een klein half jaar werd het pand geïsoleerd, de voorzaal in een modern jasje gestoken, een nieuwe bar gebouwd, nieuwe dames- en herentoiletten gebouwd en een goede verwarming- / ventilatie-installatie aangelegd. Ongeveer een jaar later volgde de bouw van een nieuwe bestuurskamer op de zolder.</p>
                        <p>Nadien is er ook nog een sluis aangebouwd aan de achterzijde van het pand. Dit om de geluidsisolatie te verbeteren. In 1993 is er op de SAC-Zolder een nieuw artiestenhok gebouwd. Het oude artiestenhok wordt nu gebruikt door de Pa- / Licht. De laatste grote verandering tot nu toe is gedaan in 1997. Toen is er op de tussenzolder een hok gebouwd speciaal voor het secretariaat en de penningen zodat zij hun werkzaamheden niet meer in de bestuurskamer hoefden te verrichten.</p>

                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

