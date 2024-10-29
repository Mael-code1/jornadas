'use server'

import { db } from '@/lib/db'
import { Juegos } from '@/lib/constantes'

export interface RegistrarVideouegoProps {
    apellidos: string
    nombre: string
    numero_control: string
    email: string
    semestre: number
    videojuego: Juegos
}

export async function registrarVideojuego({
    apellidos,
    numero_control,
    email,
    nombre,
    semestre,
    videojuego,
}: RegistrarVideouegoProps): Promise<
    | {
          error?: string
          message: string
      }
    | {
          error: string
          message?: string
      }
> {
    if (
        !(
            apellidos &&
            numero_control &&
            email &&
            nombre &&
            semestre &&
            videojuego
        )
    )
        return {
            error: 'Faltan Datos',
        }

    // Crear el usuario
    try {
        const user = await db.usuario.findFirst({
            where: {
                numero_control,
            },
        })
        if (!user) {
            await db.usuario.create({
                data: {
                    apellidos,
                    nombre,
                    email,
                    numero_control,
                    semestre,
                },
            })
        }
    } catch (error) {
        return {
            error: 'Error Interno',
        }
    }

    // revisar si esiste registro
    try {
        const taller = await db.registro_videojuegos.findFirst({
            where: {
                usuario: {
                    numero_control,
                },
            },
        })
        if (taller)
            return {
                error: 'Usuario Registrado',
            }
    } catch (error) {
        return {
            error: 'Error Interno',
        }
    }

    // REGISTRO
    try {
        await db.registro_videojuegos.create({
            data: {
                videojuego_seleccionado: videojuego,
                usuario: {
                    connect: {
                        numero_control,
                    },
                },
            },
        })
    } catch (error) {
        return {
            error: 'Error Interno',
        }
    }

    return {
        message: 'Usuario Registrado',
    }
}
