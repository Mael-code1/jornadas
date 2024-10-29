import Link from 'next/link'

import './nav.css'

export function Nav() {
    return (
        <nav className="tabs">
            <Link href={'/'} className="tablink">
                Página Principal
            </Link>
            <Link href={'/expositores'} className="tablink">
                Expositores
            </Link>
            <Link className="tablink" href={'/talleres'}>
                Talleres Día Jueves
            </Link>
            <Link className="tablink" href={'/talleres-viernes'}>
                Talleres Día Viernes
            </Link>
            {/* <!-- Nueva pestaña --> */}
            <Link className="tablink" href={'/videojuegos'}>
                Concurso de Videojuegos
            </Link>
            {/* <!-- Nueva pestaña --> */}
        </nav>
    )
}
