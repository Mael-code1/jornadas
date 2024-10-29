import Image from 'next/image'

// Estilos
import './header.css'

// logos
import LogoTECNM from '@/Logos/LogoTECNM.png'
import LogoSistemasSinFondo from '@/Logos/LogoSistemasSinFondo.png'
import LogoJornadasSin from '@/Logos/LOGO_JORNADAS_SIN.png'
import LogoITASinFondo from '@/Logos/LOGO_ITA_SIN_FONDO.png'

export function Header() {
    return (
        <header className="header-logos">
            <Image
                src={LogoTECNM}
                alt="Logo Tecnológico Nacional de México"
                className="logo"
            />
            <div className="logo-center">
                <Image
                    src={LogoSistemasSinFondo}
                    alt="Logo Carrera 1"
                    className="logo logo-carrera1"
                />
                <Image
                    src={LogoJornadasSin}
                    alt="Logo Carrera 2"
                    className="logo logo-carrera2"
                />
            </div>
            <Image
                src={LogoITASinFondo}
                alt="Logo Tecnológico de Altamira"
                className="logo"
            />
        </header>
    )
}
