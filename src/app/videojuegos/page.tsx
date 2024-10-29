import { conteoDeVideojuegos } from '@/actions/cotadores'
import { Formulario_juegos } from './Formulario_juegos'

export default async function page() {
    const { juego1, juego2, juego3 } = await conteoDeVideojuegos()
    return (
        <div id="videojuegos" className="tabcontent">
            <h1 className=" text-left text-3xl">Concurso de Videojuegos</h1>

            <Formulario_juegos />
            <p id="contador_juego1">
                Juego 1: Personas registradas: {juego1} / 36
            </p>
            <p id="contador_juego2">
                Juego 2: Personas registradas: {juego2} / 36
            </p>
            <p id="contador_juego3">
                Juego 3: Personas registradas: {juego3} / 36
            </p>
        </div>
    )
}
