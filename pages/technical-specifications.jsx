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

        	            <h1>Huisregels</h1>

                        <h2>Geluid</h2>
                        Voorziening	Mogelijkheden
                        PA Speakers	Apogee AE9 2x Apogee AE15 2x Apogee ACS2 (Cluster alleen voor theater)
                        Versterkers	Apogee SA-600c Apogee SA-800c Crest audio 9001
                        Processors	Apogee P-9 pvt Apogee P-11/15 pvt
                        Front Of House Mixing desk	Midas Verona (24 mono & 8 stereo kanalen, 8 groepen, 8 auxiliaries)
                        Equalizer	White 4856 dual 1/3 octave Klark-Technik DN 300 (Center)
                        Dynamics	Drawmer Quad-Gate DS 404 DBX 1066 dual Compressor/Limiter/Gate DBX 166xl dual Compressor/Limiter/Gate DBX 166 dual Compressor/Limiter/Gate
                        Effecten	Yamaha SPX 990 Yamaha SPX 900 Roland DEP-3
                        CD Player	Denon DCD-695
                        Head Phone	Senheiser HD25
                        Monitors Mixing desk	Midas Siena 320 (32 kanalen, 16 groepen)
                        Equalizer	White 4856 dual 1/3 octave 3x
                        Wedges	Mc Cauley SM95-2 6x
                        PFL Wedge	Mc Cauley SM95-2 1x
                        Versterkers	Crown Macro- tech2 4x6 8x
                        Head Phone	Senheiser HD25
                        Microfoons Shure	SM58 8x SM57 5x Sennheiser: Md 421-u-4 7x E604 3x AKG: C451B 2x D112 Beyer Dynamic:M 201n 2x
                        DI’s	Countryman type 85 (Active) 6x
                        DJ Gear	Pioneer DJM600 Pioneer CDJ1000mkIII 3x Techniks SL1200mkII 2x
                        <h2>Licht</h2>
                        Voorziening	Mogelijkheden
                        Regietafel
                        Avolites	Pearl 2004
                        Dimmers Zero88	Rackmaster 260 (6 kanalen) 3x Dateq: CDP 603 (6 kanalen)
                        Lampen Coemar	Teatro pc 650W 8x Teatro Diluvio a500 1000W 2x Teatro Par 56 Zwart Spiegelreflector 500W 13x Teatro Par 56 Zwart 300W 3x ADB: C51 650W 12x Thh 1001 JHC 1000W 3x Selecon: ZS-1200 1000W 2x Thomas: Par 64 Zwart 1000W Par 64 Zwart Spiegelreflector 500W 3x Par 56 Zwart Spiegelreflector 500W 6x Overig: Par 64 Chroom Spiegelreflector 500W 3x Par 64 Chroom 1000W 2x
                        Extra’s
                        Spiegelbol	20cm met motor Martin: Martin K1 Hazer Martin Mania SCX700 8x Botex: Stroboscoop 1500W (DMX gestuurd) Filters: diverse Lee kleuren
                        <h2>Stage</h2>
                        Voorziening	Mogelijkheden
                        Afmetingen Podium h x b x d	0.25m x 8.20m x 4.10m
                        Staanplaatsen	Max 300
                        <h2>Theater afmetingen</h2>
                        Voorziening	Mogelijkheden
                        Afmetingen Podium h x b x d	0.25m x 8.30m x 4.30m
                        Zitplaatsen	Max 120
                        <h2>Live DJ Afmetingen</h2>
                        Voorziening	Mogelijkheden
                        Afmetingen Podium h x b x d	0.25m x 4.10m x 3.30m
                        Afmetingen Tafel h x b x d	1.00m x 3.30m x 0.82m
                        Staanplaatsen	Max 320
                        <h2>Artiestenruimte</h2>
                        Voorziening	Mogelijkheden
                        Toegangsdeur 1	1.96m hoog en 1.16m breed
                        Toegangsdeur 2	2.03m hoog 1.08m breed
                        Kleedkamer	16m2 Gevulde koelkast 1 Douche 1 Toilet

                    
                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

