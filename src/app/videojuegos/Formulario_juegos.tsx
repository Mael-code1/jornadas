'use client'

import { registrarVideojuego } from '@/actions/registrar_videojuego'
import Radio from '@/components/Radio'
import { Juegos, JUEGOS } from '@/lib/constantes'
export function Formulario_juegos() {
    const handleaction = async (data: FormData) => {
        const apellidos = data.get('apellidos') as string
        const nombre = data.get('nombre') as string
        const numero_control = data.get('control') as string
        const email = data.get('email') as string
        const semestre = data.get('semestre') as string
        const juego = data.get('juego') as Juegos

        try {
            const request = await registrarVideojuego({
                apellidos,
                nombre,
                email,
                numero_control,
                semestre: parseInt(semestre),
                videojuego: juego,
            })
            if (request.error) {
                // hubo un error
                console.log(request.error)
            } else {
                alert(request.message)
            }
        } catch (error) {
            return console.log(error)
        }
    }
    return (
        <form id="registroVideojuegos" action={handleaction}>
            <h3>Elige tu juego</h3>
            <Radio
                name="juego"
                taller="Juego 1: FIFA"
                descripcion="Compite en el torneo de FIFA"
                value={JUEGOS.Juego_1}
            />
            <Radio
                name="juego"
                taller="Juego 2: Super Smash Bros"
                descripcion="Compite en Super Smash Bros"
                value={JUEGOS.Juego_2}
            />
            <Radio
                name="juego"
                taller="Juego 3: Mario Kart"
                descripcion="Compite en Mario Kart"
                value={JUEGOS.Juego_3}
            />
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required />

            <label htmlFor="nombre">Nombre (s):</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="control">Número de control:</label>
            <input type="number" id="control" name="control" required />

            <label htmlFor="email">Correo institucional:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="semestre">Semestre:</label>
            <select id="semestre" name="semestre" required>
                <option value="1">Primer semestre</option>
                <option value="3">Tercer semestre</option>
                <option value="5">Quinto semestre</option>
                <option value="7">Séptimo semestre</option>
            </select>
            <label htmlFor="juego">Juego:</label>
            <select id="juego" name="juego" required>
                {Object.entries(JUEGOS).map(([key, value]) => (
                    <option key={key} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <button type="submit">
                Registrarse en Concurso de Videojuegos
            </button>
            <p id="mensaje"></p>
        </form>
    )
}
