import { conteoDeTalleres } from '@/actions/cotadores'
import { Formulario_taller } from './Formulario_taller'

export default async function page() {
    const {
        taller1,
        taller2,
        taller3,
        taller4,
        taller5,
        taller6,
        taller7,
        taller8,
        taller9,
    } = await conteoDeTalleres()

    return (
        <div id="talleres" className="tabcontent">
            <h1 className="text-left text-3xl">
                Talleres Disponibles y Registro
            </h1>
            {/* <!-- Formulario de Registro --> */}
            <Formulario_taller />
            {/* <!-- Contadores de cada taller --> */}
            {/* TODO: actualizar esto */}
            <p id="contador1">
                Taller 1 (9:00 AM): Personas registradas: {taller1} / 36
            </p>
            <p id="contador2">
                Taller 2 (9:00 AM): Personas registradas: {taller2} / 36
            </p>
            <p id="contador3">
                Taller 3 (9:00 AM): Personas registradas: {taller3} / 36
            </p>
            <p id="contador4">
                Taller 1 (1:00 PM): Personas registradas: {taller4} / 36
            </p>
            <p id="contador5">
                Taller 2 (1:00 PM): Personas registradas: {taller5} / 36
            </p>
            <p id="contador6">
                Taller 3 (1:00 PM): Personas registradas: {taller6} / 36
            </p>
            <p id="contador7">
                Taller 1 (4:00 PM): Personas registradas: {taller7} / 36
            </p>
            <p id="contador8">
                Taller 2 (4:00 PM): Personas registradas: {taller8} / 36
            </p>
            <p id="contador9">
                Taller 3 (4:00 PM): Personas registradas: {taller9} / 36
            </p>
        </div>
    )
}
