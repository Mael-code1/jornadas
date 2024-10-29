'use client'
import { registrarTaller } from '@/actions/registrar_taller'
import Radio from '@/components/Radio'
import {
    TALLERES_HORARIO1,
    TALLERES_HORARIO2,
    TALLERES_HORARIO3,
    TalleresHorario1,
    TalleresHorario2,
    TalleresHorario3,
} from '@/lib/constantes'

export function Formulario_taller() {
    const handleaction = async (data: FormData) => {
        const apellidos = data.get('apellidos') as string
        const nombre = data.get('nombre') as string
        const numero_control = data.get('control') as string
        const email = data.get('email') as string
        const semestre = data.get('semestre') as string
        const taller_horario1 = data.get('taller_horario1') as TalleresHorario1
        const taller_horario2 = data.get('taller_horario2') as TalleresHorario2
        const taller_horario3 = data.get('taller_horario3') as TalleresHorario3

        try {
            const request = await registrarTaller({
                apellidos,
                nombre,
                email,
                numero_control,
                semestre: parseInt(semestre),
                taller_horario1,
                taller_horario2,
                taller_horario3,
            })
            if (request.error) {
                console.log(request)
            } else {
                alert(request.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form action={handleaction}>
            <div>
                {/* Talleres por horario */}
                <h3>Horario 1: 9:00 AM - 11:00 AM</h3>
                <Radio
                    name="taller_horario1"
                    taller="Taller 1: Mestro Erick"
                    descripcion="Fundamentos de programación y desarrollo web."
                    value={TALLERES_HORARIO1.Taller_1}
                />
                <Radio
                    name="taller_horario1"
                    taller="Taller 2: Power Plataform"
                    descripcion="Estrategias de marketing digital para pymes."
                    value={TALLERES_HORARIO1.Taller_2}
                />
                <Radio
                    name="taller_horario1"
                    taller="Taller 3: Arduino"
                    descripcion="Cómo las tecnologías transforman la educación."
                    value={TALLERES_HORARIO1.Taller_3}
                />

                <h3>Horario 2: 1:00 PM - 3:00 PM</h3>
                <Radio
                    name="taller_horario2"
                    taller="Taller 1: Estructuras HTML con hojas de estilo de
                        JavaScript"
                    descripcion="Fundamentos de programación y desarrollo web."
                    value={TALLERES_HORARIO2.Taller_4}
                />
                <Radio
                    name="taller_horario2"
                    taller="  Taller 2: CiberSeguridad"
                    descripcion="Purple Team: una entrada a la cyberseguridad"
                    value={TALLERES_HORARIO2.Taller_5}
                />
                <Radio
                    name="taller_horario2"
                    taller="taller_horario2"
                    descripcion="Cómo las tecnologías transforman la educación."
                    value={TALLERES_HORARIO2.Taller_6}
                />

                <h3>Horario 3: 4:00 PM - 6:00 PM</h3>
                <Radio
                    name="taller_horario3"
                    taller="Taller 1: Pendiente"
                    descripcion="Fundamentos de programación y desarrollo web."
                    value={TALLERES_HORARIO3.Taller_7}
                />
                <Radio
                    name="taller_horario3"
                    taller="Taller 2: Analisis, diseño e implementación de estructura de datos lineales en java"
                    descripcion="Estrategias de marketing digital para pymes."
                    value={TALLERES_HORARIO3.Taller_8}
                />
                <Radio
                    name="taller_horario3"
                    taller="Taller 3: Pendiente"
                    descripcion="Cómo las tecnologías transforman la educación."
                    value={TALLERES_HORARIO3.Taller_9}
                />
            </div>
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" name="apellidos" required />

            <label htmlFor="nombre">Nombre (s):</label>
            <input type="text" name="nombre" required />

            <label htmlFor="control">Número de control:</label>
            <input type="text" name="control" required />

            <label htmlFor="email">Correo institucional:</label>
            <input type="email" name="email" required />

            <label htmlFor="semestre">Semestre:</label>
            <select name="semestre" required>
                <option value="1">Primer semestre</option>
                <option value="3">Tercer semestre</option>
                <option value="5">Quinto semestre</option>
                <option value="7">Séptimo semestre</option>
            </select>

            <button type="submit">Registrar</button>
        </form>
    )
}
