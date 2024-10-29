import {
    JUEGOS,
    TALLERES_HORARIO1,
    TALLERES_HORARIO2,
    TALLERES_HORARIO3,
    TALLERES_VIERNES,
} from '@/lib/constantes'
import { db } from '@/lib/db'

export async function conteoDeTalleres() {
    const [
        taller1,
        taller2,
        taller3,
        taller4,
        taller5,
        taller6,
        taller7,
        taller8,
        taller9,
    ] = await Promise.all([
        db.registro_talleres.count({
            where: {
                taller_horario1: TALLERES_HORARIO1.Taller_1,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario1: TALLERES_HORARIO1.Taller_2,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario1: TALLERES_HORARIO1.Taller_3,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario2: TALLERES_HORARIO2.Taller_4,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario2: TALLERES_HORARIO2.Taller_5,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario2: TALLERES_HORARIO2.Taller_6,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario3: TALLERES_HORARIO3.Taller_7,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario3: TALLERES_HORARIO3.Taller_8,
            },
        }),
        db.registro_talleres.count({
            where: {
                taller_horario3: TALLERES_HORARIO3.Taller_9,
            },
        }),
    ])
    return {
        taller1,
        taller2,
        taller3,
        taller4,
        taller5,
        taller6,
        taller7,
        taller8,
        taller9,
    }
}

export async function conteoDeVideojuegos() {
    const [juego1, juego2, juego3] = await Promise.all([
        db.registro_videojuegos.count({
            where: {
                videojuego_seleccionado: JUEGOS.Juego_1,
            },
        }),
        db.registro_videojuegos.count({
            where: {
                videojuego_seleccionado: JUEGOS.Juego_2,
            },
        }),
        db.registro_videojuegos.count({
            where: {
                videojuego_seleccionado: JUEGOS.Juego_3,
            },
        }),
    ])
    return {
        juego1,
        juego2,
        juego3,
    }
}

export async function conteoDeViernes() {
    const [taller1, taller2, taller3] = await Promise.all([
        db.registro_viernes.count({
            where: {
                taller: TALLERES_VIERNES.Taller_1,
            },
        }),
        db.registro_viernes.count({
            where: {
                taller: TALLERES_VIERNES.Taller_2,
            },
        }),
        db.registro_viernes.count({
            where: {
                taller: TALLERES_VIERNES.Taller_3,
            },
        }),
    ])
    return {
        taller1,
        taller2,
        taller3,
    }
}
