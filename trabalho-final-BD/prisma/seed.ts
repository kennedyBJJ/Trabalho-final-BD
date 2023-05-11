//import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
//const fakers = faker

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
    //for (let i = 0; i < developers.length; i++) {
    //     await prisma.developer.create({
    //         data:{
    //             name: developers[i]
    //         }
    //     })
    // }

    //popular sprint

    // for (let i = 0; i < 2; i++) {
    //     const date = new Date(fakers.date.between('2023-05-01','2023-05-10'))
    //     const date_new = new Date(date)
    //     let intervalo = Math.floor(Math.random() * 14) + 14
    //     const conclusion = new Date(date.setDate(date.getDate() + intervalo))
    //     await prisma.sprint.create({
    //         data:{
    //             description: fakers.lorem.sentence(),
    //             start: date_new,
    //             prev_conclusion: conclusion
    //         }
    //     })
    // }

    //colocar issue
    // let issues_Status: string[] = [
    //     'A fazer',
    //     'Fazendo',
    //     'Feito'
    // ];

    // let prioritys: string[] =[
    //     'alta', 
    //     'média',
    //     'baixa'
    // ]
    // let n = 6
    // while(n>0){
    //     const date = new Date(fakers.date.between('2023-05-10','2023-05-18')) 
    //     const date_new = new Date(date)
    //     let intervalo = Math.floor(Math.random() * 14) + 14
    //     const conclusion = new Date(date.setDate(date.getDate() + intervalo))


    //     const id_sprints = await prisma.sprint.findMany()
    //     await prisma.issue.create({
    //         data:{
    //             name_issue: fakers.random.words(4),
    //             priority: prioritys[Math.floor(Math.random()*2.99) ],
    //             start: date_new,
    //             conclusion: conclusion ,
    //             status: issues_Status[Math.floor(Math.random() * 2.99)],
    //             id_sprint: +id_sprints[Math.floor(Math.random() * 1.99)].id
    //         }
    //     })
    //     n--
    // }
    
    // deixando nulos as datas de conclusão das issues não concluidas
    // const issues_andamento = await prisma.issue.findMany({
    //     where:{
    //         status: 'A fazer' || 'Fazendo'
    //     }
    // })
    
    // for (let index = 0; index < issues_andamento.length; index++) {
    //     const element = await prisma.issue.update({
    //         where:{
    //             number: issues_andamento[index].number
    //         },
    //         data:{
    //             conclusion: null
    //         }
    //     })
    //     console.log(element)
    // }
    
    //relation WorkAt

    // const recebeIdIssues = await prisma.issue.findMany({
    //     where: {
    //         status: "Feito" || "Fazendo"
    //     }
    // })
    
    // const recebeDeveloper  = await prisma.developer.findMany()
    
    // for(let i = 0; i< recebeIdIssues.length ;i++){
    //     await prisma.workAt.create({
    //         data: {
    //             cod_dev : +recebeDeveloper[Math.floor(Math.random() * recebeDeveloper.length)].cod,
    //             number_issue : +recebeIdIssues[i].number
    //         }

    //     })
    // }

    
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
