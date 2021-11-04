import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

export default function mapa({ latitud, longitud }) {
    const MapWithNoSSR = dynamic(() => import('components/MapView'), {
        ssr: false,
    })
    return (
        <>
            <Head>
                <title>eStreet | Ubicación</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                        <div className="mt-8 border-t border-imperialRed">
                            <Link href="/consejos">
                                <a className="elementosSideBar">Consejos</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <main>
                            <div id="map">
                                <MapWithNoSSR
                                    latitud={latitud}
                                    longitud={longitud}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

mapa.getInitialProps = ({ query }) => {
    const { latitud, longitud } = query
    return { latitud, longitud }
}
