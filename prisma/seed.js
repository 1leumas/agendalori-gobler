const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Inserir usuários
  await prisma.users.createMany({
    data: [
      { name: 'Lori', email: 'lori@gmail.com', password: '123' },
      { name: 'Samuel', email: 'samuel@gmail.com', password: '123' },
    ],
  });

  // Inserir turmas
  const classes = await prisma.courseClass.createMany({
    data: [
      { name: 'Programação para Interface de Usuário', number: '01', participants: 12 },
      { name: 'Projeto integrador: Gestão de Infraestrutura', number: '02', participants: 9 },
      { name: 'Inteligência Artificial', number: '03', participants: 9 },
      { name: 'Sistemas Embarcados', number: '04', participants: 18 },
      { name: 'Banco de dados', number: '05', participants: 11 },
    ],
  });

  // Inserir salas
  const rooms = await prisma.room.createMany({
    data: [
      { name: 'Sala 01 - Campus Ijuí' },
      { name: 'Sala 02 - Campus Panambi' },
      { name: 'Sala 03 - Campus Santa Rosa' },
      { name: 'Sala 04 - Espaço Mais Inovação' },
    ],
  });

  // Inserir tipos de curso
  const courseTypes = await prisma.courseType.createMany({
    data: [
      { name: 'Ciência da Computação' },
      { name: 'Engenharia de Software' },
      { name: 'Engenharia Elétrica' },
      { name: 'Outros' },
    ],
  });
  
}

main()
  .then(() => {
    console.log('Seed data inserted successfully.');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
