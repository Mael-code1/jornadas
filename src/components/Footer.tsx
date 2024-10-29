import Image from 'next/image'
import Link from 'next/link'

// Estilos
import './footer.css'

// Imagenes
import githubLogo from '@/Logos/github.png'

export function Footer() {
    return (
        <footer>
            <span className="text-black">Créditos:</span>
            <ul>
                <li className="flex justify-center items-center gap-10 ">
                    <p>
                        Alan Yahir Arizmendi del Angel - Séptimo semestre de
                        Ingeniería en Sistemas Computacionales
                    </p>
                </li>
                <li className="flex justify-center items-center gap-10">
                    <p>
                        Andres Eli Maciel Muñiz - Quinto semestre de Ingeniería
                        en Sistemas Computacionales
                    </p>
                    <Link href={'https://github.com/eliyya'} target="_blank">
                        <Image
                            src={githubLogo}
                            alt="ely"
                            width={100}
                            height={100}
                            className="max-h-7 max-w-7"
                        />
                    </Link>
                </li>
                <li className="flex justify-center items-center gap-10">
                    <p>
                        Ivan Asdrubal Villegas Espinosa - Quinto semestre de
                        Ingeniería en Sistemas Computacionales
                    </p>
                    <Link
                        href={'https://github.com/Mael-code1'}
                        target="_blank"
                    >
                        <Image
                            src={githubLogo}
                            alt="ely"
                            width={100}
                            height={100}
                            className="max-h-7 max-w-7"
                        />
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
