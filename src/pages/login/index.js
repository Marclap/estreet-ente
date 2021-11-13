import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function login() {
    const [ente, setEnte] = useState('')
    const router = useRouter()
    const users = {
        'Policia Nacional': '84bffe7cacba4fcb9d588b5dcbdfc1b1',
        'Bomberos Pereira': 'aa89a5bc3a4e42e68fa29e7f87e52d80',
        'Defensa Civil Colombiana': 'f7bb8b6c4ab048d5ac884657f2a2a288',
        'Tránsito Pereira': 'f21f70fb20b640f18c36beb2803c83b3',
        'Servicio Ambulancias S.A.P': '47b2edd17b5543fda2e7f602aeb14fd3',
    }
    const handleInputChange = (e) => {
        setEnte(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        Object.values(users).map((user, i) => {
            if (user === ente) {
                let ente = Object.keys(users)[i]
                router.push({ pathname: '/home', query: { ente } })
            }
        })
    }
    return (
        <>
            <Head>
                <title>eStreet | Entrar</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                    </div>
                    <div className="flex items-center w-full">
                        <div className="grid justify-items-center w-full">
                            <h2 className="logo">Bienvenido a eStreet</h2>
                            <p className="text-richBlackFogra">
                                Aquí como ente estatal de la ciudad de Pereira
                                podrás ver siniestros que reportan los
                                cuidadanos y determinar si serán atendidos
                            </p>
                            <form onSubmit={handleLogin} className="w-full">
                                <div className="flex-grow">
                                    <div className="contenedorInputs">
                                        <label className="font-semibold text-richBlackFogra py-2">
                                            Digite sus credenciales
                                        </label>
                                        <div className="contenedorInput">
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Credenciales"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="contenedorBoton">
                                        <button className="btn">Entrar</button>
                                    </div>
                                </div>
                            </form>
                            <div className="absolute bottom-0 right-0">
                                <img src="/pereira-capital-del-eje-logo.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
