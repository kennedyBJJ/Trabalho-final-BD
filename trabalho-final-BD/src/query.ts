import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function maisDe70(sprint: Number) {
	const result_7 = await prisma.issue.findMany({
		where: {
			id_sprint: +sprint
		}
	})

	const result_8 = await prisma.issue.findMany({
		where: {
			status: "Feito",
			id_sprint: +sprint
		}
	})

	if ((result_8.length / result_7.length) > 0.7) {
		return true
	} else {
		return false
	}

}

async function concluida(sprint: Number) {
	const result_7 = await prisma.issue.findMany({
		where: {
			id_sprint: +sprint
		}
	})

	const result_8 = await prisma.issue.findMany({
		where: {
			status: "Feito",
			id_sprint: +sprint
		}
	})

	if ((result_8.length / result_7.length) == 1) {
		return true
	} else {
		return false
	}

}

async function main() {
	//adicionaremos nossas consultas aqui
	// Quantas sprints foram planejadas
	console.log('Consulta 1:')
	const result_1 = await prisma.sprint.findMany()
	console.log(result_1.length)
	console.log("-------------")

	//Quantas issues existem relacionadas a uma determinada sprint
	console.log('Consulta 2:')
	const result_2 = await prisma.issue.findMany({
		where: {
			id_sprint: 9
		}
	})
	console.log(result_2)
	console.log("-------------")

	//Para uma sprint quais as issues que estão para ser feitas e que encontram-se feitas
	console.log('Consulta 3:')
	const result_3 = await prisma.issue.findMany({
		where: {
			id_sprint: 9,
			status: "A fazer"
		}
	})

	const result = await prisma.issue.findMany({
		where: {
			id_sprint: 9,
			status: "Feito"
		}
	})
	console.log(result_3)
	console.log(result)
	console.log("-------------")

	//Se a sprint está com mais de 70% das issues finalizadas
	console.log('Consulta 4:')
	let n = 10;
	if (await maisDe70(n)) {
		console.log(`O Sprint ${n} tem mais de 70% da Issues concluídas.`)
	} else {
		console.log(`O Sprint ${n} não possui mais de 70% das Issues concluídas.`)
	}

	console.log("-------------")


	// Qual desenvolvedor mais fechou (concluiu) issues 
	console.log('Consulta 5:')
	
	const developer = await prisma.workAt.groupBy({
		by:['cod_dev'],
		_count: {
			number_issue: true
		  },
	})
	let maior = 0;
	let aux = developer[maior]._count;
	for(let i = 0; i < developer.length; i++){
		if(aux < developer[i]._count){
			maior = i;

		}
	}
	const maisTrabalhador = await prisma.developer.findFirst({
		where:{
			cod: developer[maior].cod_dev
		}
	})
	console.log('O desenvolvedor que mais concluiu issues foi ' + JSON.stringify(maisTrabalhador))
	console.log("-------------")

	// Para uma determina sprint concluída qual a sua data de conclusão
	console.log('Consulta 6:')
	n = 10;
	if (await concluida(n)) {
		const conclusion = await prisma.issue.findFirst({
			orderBy:{
				conclusion: 'asc'
			}
		})
		console.log(`A issue ${n} foi concluiuda na data ${conclusion?.conclusion}`)
	} else {
		console.log(`A issue ${n} não foi concluiuda.`)
	}

	console.log("-------------")
}


main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
	})