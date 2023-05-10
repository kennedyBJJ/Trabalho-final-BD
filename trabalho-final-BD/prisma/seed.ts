import { faker} from '@faker-js/faker';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const fakers = faker

async function main() {
    //criando alguns times

    // const developers: string[] = [
    //     'Marcos',
    //     'Bruna',
    //     'Cintia',
    //     'Mateus',
    //     'Willian'
    // ]

    //função para cadastrar os developers
    // for (let i = 0; i < developers.length; i++) {
    //     await prisma.developer.create({
    //         data:{
    //             name: developers[i]
    //         }
    //     })
    // }

    //popular sprint

    for (let i = 0; i < 2; i++) {
        const date = new Date(fakers.date.between('2023-05-01','2023-05-10'))
        console.log(date)
        const date_new = new Date(date)
        let intervalo = Math.floor(Math.random() * 14) + 14
        console.log(intervalo)
        const conclusion = new Date(date.setDate(date.getDate() + intervalo))
        console.log(conclusion)
        await prisma.sprint.create({
            data:{
                description: fakers.lorem.sentence(),
                start: date_new,
                prev_conclusion: conclusion
            }
        })
    }

    //colocar issue
    
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
