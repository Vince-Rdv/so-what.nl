import React from 'react';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';

import styles from '../styles/blocks.module.css';

import Navbar from '../components/Navbar.jsx';
import Sharebar from '../components/Sharebar.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {
    return (
        <>
            <Head>
                <title>So What! - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <main>

                <Sharebar text="Terug naar home" />

                <div className={styles.grid}>

                    <div className={`${styles.block} ${styles.small}`}>
                        <h1>Lidmaatschap</h1>
                        <p>So What! heeft al jarenlang een mooi ledenbestand van bezoekers die ons een warm hart toe dragen. Onze leden zijn een belangrijk deel van So What, want met jullie hulp kunnen wij de mooie events neerzetten zoals wij al sinds 1963 doen. Als lid steun je onze stichting en al zijn vrijwilligers zodat wij ons kunnen blijven inzetten voor de cultuur in Gouda.</p>

                        <h2>Waarom zou ik lid worden?</h2>
                        <ul>
                            <li>Je persoonlijke So What!-pas;</li>
                            <li>€2-, korting op concerten en thema-avonden;</li>
                            <li>Een paar keer per seizoen GRATIS toegang tot concerten in So What!;</li>
                            <li>€2 euro korting op je ticket bij Filmhuis Gouda;</li>
                            <li>Korting op verschillende muziekgerelateerde voorstellingen bij De Goudse Schouwburg;</li>
                            <li>Voorrang op leuke nieuwtjes en exclusieve events.</li>
                        </ul>
                        <br />
                        <Button text="Word lid" type="blue" link="lid-worden" />
                        <br /><br /><br />
                    </div>

                    <div className={`${styles.block} ${styles.small}`}>
                        <h1>Word nu lid van twee poppodia!</h1>

                        <p>Geintje natuurlijk, dit doen we niet meer. Dit blokje is er nu puur als filler tekst. Uiteraard kan deze verwijderd worden. Dit blokje kan ook weg, hierdoor wordt het blokje Lidmaatschap breder</p>

                    </div>

                    <div className={`${styles.block} ${styles.small}`}>

                        <h1>Medewerkers</h1>

                        <p>De medewerkers zijn de hart en ziel van So What! Zij houden de tent draaiend en doen dit allemaal vrijwillig! Van penningmeester tot geluidstechnicus, van barcoördinator tot marketing medewerker, ze zijn er allemaal.</p>

                        <p>Dat betekent ook dat wij altijd op zoek zijn naar nieuwe mensen die hun handen uit de mouwen willen steken voor So What! Lijkt het jou nu helemaal geweldig om je eigen feest neer te zetten of te helpen bij een van de vele verschillende commissies, zoals de technische dienst, programmering of lichttechniek?</p>

                        <h2>Wat hebben wij nog meer te bieden?</h2>

                        <ul>
                            <li>Een tweede familie van een grote groep vrijwilligers van alle leeftijden. Een hoop vriendschappen of zelfs relaties zijn in So What! begonnen en zijn nog steeds even sterk.</li>
                            <li>Een hele hoop ervaring voor misschien wel je carrière switch of je toekomstige baan. Veel van van onze vrijwilligers zijn doorgegroeid als professionele licht- of geluidtechnici, eventorganisatoren of bedrijfleiders bij andere grote poppodia.</li>
                            <li>We zijn al onze medewerkers ontzettend dankbaar en dat laten we zien. Je krijgt van ons een kleine vergoeding, gratis toegang tot events, uitnodiging tot het bekende medewerkersweekend en nog veel meer.</li>
                        </ul>

                    </div>

                    <div className={`${styles.block} ${styles.small}`}>

                        <h1>Tappen en koken</h1>
                        <h2>Tappers</h2>
                        <p>Onze mensen achter de bar noemen wij Tappers. Dit zijn soms medewerkers, maar ook heel vaak bezoekers die het leuk vinden om een keer achter de bar te staan. Onze barcoördinatoren leren je alles wat er te weten valt zoals het tappen van een biertje, het maken van verschillende mixdrankjes en ons uitgebreide assortiment van speciaalbier.</p>
                        <p>Lijkt het jou nu leuk om een keertje bij ons achter de bar te staan? Stuur dan een mailtje naar barco@so-what.nl</p>

                        <h2>Kokers</h2>
                        <p>Iedereen die wel eens bij een Eetcafé is geweest, heeft de liefde geproeft die de kokers er in stoppen. Ook onze kokers zijn wel eens medewerkers, maar nog vaker zijn het bezoekers met een passie voor eten! Je krijgt van ons een budget voor de boodschappen en wij zorgen voor de keukenhulpjes.</p>
                        <p>Lijkt het jou nu leuk om een keertje in onze keuken te staan? Stuur dan een mailtje naar eetcafe@so-what.nl</p>
                        <p>Wil je liever minder in de spotlight staan en hou je van live-muziek? We zoeken ook vrijwilligers die ons willen helpen met het koken voor de bands! Elke vrijdag mag jij een gezonde hap neerzetten voor bandleden en techniek. Als jij een act ziet die je helemaal te gek lijkt om samen mee te eten en voor te koken, stuur dan een mailtje naar programmering@so-what.nl</p>

                        <h2>Andere taken</h2>
                        <p>Denk je nou, koken of tappen lijkt me niks.Maar ik kan wel andere dingen?Laat ons dit weten!Zo zoeken we bijvoorbeeld mensen die het leuk lijken om de magische tosti&apos;s in de nacht te bouwen. Stuur een mailtje naar info@so-what.nl</p>

                    </div>

                    <div className={styles.cta}>

                        <h2>Wil je ook medewerker worden bij So What?</h2>
                        <Button text="Word medewerker" type="white" link="medewerker-worden" />

                    </div>

                    <div className={`${styles.block} ${styles.large}`}>

                        <h1>Commisies</h1>

                        <p>Bij So What! hebben wij alle verschillende taken verdeeld over verschillende commissies. Hieronder een klein overzichtje met wat voor leuks So What! te bieden heeft.</p>

                        <div className={styles.commissies}>
                            <div><h2>Algemeen</h2>
                                <p>Als algemeen medewerker ben je te vinden in je blauwe polo als aanspreekpunt voor de bezoekers. Je bent de gastheer of vrouw op de avond zelf.</p></div>
                            <div><h2>Barcommissie</h2>
                                <p>De coördinatoren van de bar. Zij zorgen voor de ondersteuning van de tappers en beheren de drankvoorraad.</p></div>
                            <div><h2>B-food</h2>
                                <p>Ook wel bekend als de tosti-helden. Op de zaterdagavond zorgen zij voor de vettige hap van tosti&apos; s en pizza&apos; s.</p></div>
                            <div><h2>DJ&apos;s</h2>
                                <p>Onze groep met huisDJ&apos;s. Tijdens onze eigen zaterdag avonden veel te zien achter de mixers en achter de schermen verantwoordelijk voor eigen producties en vette feesten.</p></div>
                            <div><h2>Eetcafé</h2>
                                <p>De organisatie achter ons gezellige caféetje op de zondag waar je voor een klein bedrag kan smullen van een heerlijk vers drie-gangen diner.</p></div>
                            <div><h2>Feestcommissie</h2>
                                <p>De kunstenaars van de thema-feesten. Zij zorgen voor de aankleding van het pand en veranderen So What! in een sprookjes wereld uit Wonderland of een echt horrorhuis zo uit een zombiefilm geplukt</p></div>
                            <div><h2>ICT</h2>
                                <p>Al onze eigen online systemen worden onderhouden door de helden van de ICT. Zonder hun geen website, kassa&apos;s of pinapparaten.</p></div>
                            <div><h2>Marketing</h2>
                                <p>Van posters tot teksten schrijven. Alles wordt door de medewerkers van de marketing in elkaar gezet - Ja, zelfs deze tekst.</p></div>
                            <div><h2>Licht- en geluidstechniek</h2>
                                <p>Onze handige jongens van de techniek zorgen voor het beste geluid en de mooiste lichtshows.</p></div>
                            <div><h2>Programmering</h2>
                                <p>Verantwoordelijk voor de invulling van ons programma, maar ook op de vrijdag aanwezig om voor de band&apos;s te koken en ze te ondersteunen. Zo maken zij elke avond prachtig van begin tot eind.</p></div>
                            <div><h2>Technische dienst</h2>
                                <p>Zonder hun zou ons pand letterlijk uit elkaar vallen. Van het slopen van een rookhok tot het creëeren van een douche op de dansvloer. Deze jongens kunnen het allemaal.</p></div>
                        </div>
                        <p>Ben jij enthousiast geworden en lijkt het je leuk te helpen bij een van deze groepen? Klik dan op bovenstaande link en stuur een mailtje naar ons!</p>

                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

