import { conteoDeViernes } from '@/actions/cotadores'
import { Formulario_viernes } from './Formulario_viernes'

export default async function page() {
    const { taller1, taller2, taller3 } = await conteoDeViernes()
    return (
        <div id="viernes" className="tabcontent">
            <h1 className="text-left text-3xl">Talleres Día Viernes</h1>

            <Formulario_viernes />

            <p id="contador_viernes1">
                Taller 1: Personas registradas: {taller1} / 36
            </p>
            <p id="contador_viernes2">
                Taller 2: Personas registradas: {taller2} / 36
            </p>
            <p id="contador_viernes3">
                Taller 3: Personas registradas: {taller3} / 36
            </p>
        </div>
    )
}
