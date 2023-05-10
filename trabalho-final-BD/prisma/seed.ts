import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()




async function main() {
    //criando alguns times

    const developers = [
        'Marcos',
        'Bruna',
        'Cintia',
        'Mateus',
        'Willian'
    ]

    //função para cadastrar os developers
    for (let i = 0; i < developers.length; i++) {
        await prisma.developer.create({
            data:{
                cod: +prisma.developer.count,
                name: developers[i]
            }
        })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
