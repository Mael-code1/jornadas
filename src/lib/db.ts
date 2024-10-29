import { PrismaClient } from '@prisma/client'
//modulos de turso
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

declare const globalThis: {
    prismaGlobal: PrismaClient
} & typeof global

const db =
    globalThis.prismaGlobal ??
    new PrismaClient({
        adapter:
            process.env.NODE_ENV !== 'production' ?
                null
            :   new PrismaLibSQL(
                    createClient({
                        url: process.env.TURSO_DATABASE_URL as string,
                        authToken: process.env.TURSO_AUTH_TOKEN as string,
                    }),
                ),
    })

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db

export { db }
