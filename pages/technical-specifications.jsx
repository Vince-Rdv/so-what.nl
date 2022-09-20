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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <main>

                <Sharebar text="Terug naar home" />

                <div className={styles.grid}>

                    <div className={`${styles.block} ${styles.large}`}>

                        <h1>Technical Specifications</h1>

                        <div>
                            <div>
                                <p>
                                    <h3>
                                        <strong>Geluid</strong>
                                    </h3>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Voorziening</th>
                                                <th>Mogelijkheden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PA Speakers</td>
                                                <td>Apogee AE9 2x Apogee AE15 2x Apogee ACS2 (Cluster alleen voor theater)</td>
                                            </tr>
                                            <tr>
                                                <td>Versterkers</td>
                                                <td>Apogee SA-600c Apogee SA-800c Crest audio 9001</td>
                                            </tr>
                                            <tr>
                                                <td>Processors</td>
                                                <td>Apogee P-9 pvt Apogee P-11/15 pvt</td>
                                            </tr>
                                            <tr>
                                                <td>Front Of House Mixing desk</td>
                                                <td>Midas Verona (24 mono &amp; 8 stereo kanalen, 8 groepen, 8 auxiliaries)</td>
                                            </tr>
                                            <tr>
                                                <td>Equalizer</td>
                                                <td>White 4856 dual 1/3 octave Klark-Technik DN 300 (Center)</td>
                                            </tr>
                                            <tr>
                                                <td>Dynamics</td>
                                                <td>Drawmer Quad-Gate DS 404 DBX 1066 dual Compressor/Limiter/Gate DBX 166xl dual Compressor/Limiter/Gate DBX 166 dual Compressor/Limiter/Gate</td>
                                            </tr>
                                            <tr>
                                                <td>Effecten</td>
                                                <td>Yamaha SPX 990 Yamaha SPX 900 Roland DEP-3</td>
                                            </tr>
                                            <tr>
                                                <td>CD Player</td>
                                                <td>Denon DCD-695</td>
                                            </tr>
                                            <tr>
                                                <td>Head Phone</td>
                                                <td>Senheiser HD25</td>
                                            </tr>
                                            <tr>
                                                <td>Monitors Mixing desk</td>
                                                <td>Midas Siena 320 (32 kanalen, 16 groepen)</td>
                                            </tr>
                                            <tr>
                                                <td>Equalizer</td>
                                                <td>White 4856 dual 1/3 octave 3x</td>
                                            </tr>
                                            <tr>
                                                <td>Wedges</td>
                                                <td>Mc Cauley SM95-2 6x</td>
                                            </tr>
                                            <tr>
                                                <td>PFL Wedge</td>
                                                <td>Mc Cauley SM95-2 1x</td>
                                            </tr>
                                            <tr>
                                                <td>Versterkers</td>
                                                <td>Crown Macro- tech2 4x6 8x</td>
                                            </tr>
                                            <tr>
                                                <td>Head Phone</td>
                                                <td>Senheiser HD25</td>
                                            </tr>
                                            <tr>
                                                <td>Microfoons Shure</td>
                                                <td>SM58 8x SM57 5x Sennheiser: Md 421-u-4 7x E604 3x AKG: C451B 2x D112 Beyer Dynamic:M 201n 2x</td>
                                            </tr>
                                            <tr>
                                                <td>DI's</td>
                                                <td>Countryman type 85 (Active) 6x</td>
                                            </tr>
                                            <tr>
                                                <td>DJ Gear</td>
                                                <td>Pioneer DJM600 Pioneer CDJ1000mkIII 3x Techniks SL1200mkII 2x</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3><strong>Licht</strong></h3>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Voorziening</th>
                                                <th>Mogelijkheden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Regietafel</td>
                                            </tr>
                                            <tr>
                                                <td>Avolites</td>
                                                <td>Pearl 2004</td>
                                            </tr>
                                            <tr>
                                                <td>Dimmers Zero88</td>
                                                <td>Rackmaster 260 (6 kanalen) 3x Dateq: CDP 603 (6 kanalen)</td>
                                            </tr>
                                            <tr>
                                                <td>Lampen Coemar</td>
                                                <td>Teatro pc 650W 8x Teatro Diluvio a500 1000W 2x Teatro Par 56 Zwart Spiegelreflector 500W 13x Teatro Par 56 Zwart 300W 3x ADB: C51 650W 12x Thh 1001 JHC 1000W 3x Selecon: ZS-1200 1000W 2x Thomas: Par 64 Zwart 1000W Par 64 Zwart Spiegelreflector 500W 3x Par 56 Zwart Spiegelreflector 500W 6x Overig: Par 64 Chroom Spiegelreflector 500W 3x Par 64 Chroom 1000W 2x</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Extra's</td>
                                            </tr>
                                            <tr>
                                                <td>Spiegelbol</td>
                                                <td>20cm met motor Martin: Martin K1 Hazer Martin Mania SCX700 8x Botex: Stroboscoop 1500W (DMX gestuurd) Filters: diverse Lee kleuren</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <h3><strong>Stage</strong></h3>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Voorziening</th>
                                                <th>Mogelijkheden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Afmetingen Podium h x b x d</td>
                                                <td>0.25m x 8.20m x 4.10m</td>
                                            </tr>
                                            <tr>
                                                <td>Staanplaatsen</td>
                                                <td>Max 300</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3><strong>Theater afmetingen</strong></h3>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Voorziening</th>
                                                <th>Mogelijkheden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Afmetingen Podium h x b x d</td>
                                                <td>0.25m x 8.30m x 4.30m</td>
                                            </tr>
                                            <tr>
                                                <td>Zitplaatsen</td>
                                                <td>Max 120</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3><strong>Live DJ Afmetingen</strong></h3>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Voorziening</th>
                                                <th>Mogelijkheden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Afmetingen Podium h x b x d</td>
                                                <td>0.25m x 4.10m x 3.30m</td>
                                            </tr>
                                            <tr>
                                                <td>Afmetingen Tafel h x b x d</td>
                                                <td>1.00m x 3.30m x 0.82m</td>
                                            </tr>
                                            <tr>
                                                <td>Staanplaatsen</td>
                                                <td>Max 320</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3><strong>Artiestenruimte</strong></h3>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Voorziening</th>
                                                <th>Mogelijkheden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Toegangsdeur 1</td>
                                                <td>1.96m hoog en 1.16m breed</td>
                                            </tr>
                                            <tr>
                                                <td>Toegangsdeur 2</td>
                                                <td>2.03m hoog 1.08m breed</td>
                                            </tr>
                                            <tr>
                                                <td>Kleedkamer</td>
                                                <td>16m2 Gevulde koelkast 1 Douche 1 Toilet</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

