import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 bg-eerieBlack border-r border-dashed border-eerieBlack h-screen">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                        <div className="mt-8 border-t border-imperialRed">
                            <Link href="/login">
                                <a className="elementosSideBar">Entrar</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <img className="w-full h-screen" src="/emergency.png" />
                    </div>
                </div>
            </div>
        </>
    )
}
