import Image from 'next/image'
import logo from '@/Logos/LOGO_JORNADAS_SIN.png'
import expositor2 from '@/expositores/expositor2.webp'
export default function page() {
    return (
        <div id="expositores" className="tabcontent">
            <h1 className="text-3xl text-left">Expositores</h1>
            <div className="expositor">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="Expositor 1"
                    className="expositor-img"
                />
                <div className="expositor-info">
                    <h3>Expositor 1: Alan Yahir Arizmendi del Angel</h3>
                    <p>
                        Especialista en programación, con más de 10 años de
                        experiencia en desarrollo web. Su taller tratará sobre
                        los fundamentos de la programación y cómo empezar a
                        desarrollar aplicaciones web. Creditos: ChatGPT
                    </p>
                </div>
            </div>
            <div className="expositor">
                <Image
                    src={expositor2}
                    width={100}
                    height={100}
                    alt="Expositor 2"
                    className="expositor-img"
                />
                <div className="expositor-info">
                    <h3>Lic. Elizabeth González Hernández</h3>
                    <h4 className="text-xl">
                        Ciberseguridad vs Seguridad de la información ¿cual es
                        tu camino?
                    </h4>
                    <p>
                        Experta en marketing digital, Laura compartirá su
                        experiencia sobre estrategias de marketing online para
                        pequeñas y medianas empresas en su taller.
                    </p>
                </div>
            </div>
            <div className="expositor">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="Expositor 3"
                    className="expositor-img"
                />
                <div className="expositor-info">
                    <h3>Expositor 3: Carlos Ruiz</h3>
                    <p>
                        Carlos es un innovador en educación, con años de
                        experiencia en la implementación de nuevas tecnologías
                        en el aula. En su taller, discutirá cómo la tecnología
                        puede transformar la educación.
                    </p>
                </div>
            </div>
        </div>
    )
}
