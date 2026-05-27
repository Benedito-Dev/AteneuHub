import type { Post } from './types'

const now = Date.now()
const minutesAgo = (m: number) => new Date(now - m * 60 * 1000).toISOString()
const hoursAgo = (h: number) => new Date(now - h * 3600 * 1000).toISOString()
const daysAgo = (d: number) => new Date(now - d * 86400 * 1000).toISOString()

export const posts: Post[] = [
  {
    id: 'p1',
    authorId: 'u1',
    content:
      'Gente, finalmente entreguei a primeira sprint do projeto integrador 🎉 A galera do meu grupo é maravilhosa. Dica pra quem tá começando: combina os horários de reunião LOGO na primeira semana, salva muita dor de cabeça depois.',
    createdAt: hoursAgo(2),
    likes: 42,
    visibility: 'all',
    tags: ['TCC', 'ProjetoIntegrador'],
    comments: [
      { id: 'c1', authorId: 'u2', content: 'Boa, Mari! Combinar horário cedo é o segredo mesmo.', createdAt: hoursAgo(1) },
      { id: 'c2', authorId: 'u14', content: 'Parabéns! Qual stack vocês usaram?', createdAt: minutesAgo(40) },
    ],
  },
  {
    id: 'p2',
    authorId: 'u2',
    content:
      'Alguém aí já fez a disciplina de Sistemas Distribuídos com o prof. Marcos? Tô em dúvida se pego nesse semestre ou no próximo. Aceito relatos honestos rs',
    createdAt: hoursAgo(5),
    likes: 18,
    visibility: 'course',
    tags: ['SistemasDistribuídos'],
    comments: [
      { id: 'c1', authorId: 'u14', content: 'Pega! É puxado mas o conteúdo compensa muito.', createdAt: hoursAgo(4) },
      { id: 'c2', authorId: 'u8', content: 'Concordo com o Thiago. As provas são justas.', createdAt: hoursAgo(3) },
    ],
  },
  {
    id: 'p3',
    authorId: 'u3',
    content:
      'Acabei de voltar do II Congresso de Direito Digital aqui em Fortaleza. Saí com a cabeça borbulhando sobre LGPD em saúde digital. Se alguém quiser trocar ideia sobre isso, chama 💬',
    image: 'https://picsum.photos/seed/postcongresso/600/400',
    createdAt: hoursAgo(8),
    likes: 67,
    visibility: 'all',
    tags: ['LGPD', 'DireitoDigital'],
    comments: [
      { id: 'c1', authorId: 'u1', content: 'Tô super interessada em LGPD em produto digital. Vou te chamar!', createdAt: hoursAgo(7) },
    ],
  },
  {
    id: 'p4',
    authorId: 'u6',
    content:
      'Primeira vez postando aqui. Sou do 3º semestre de ES e tô apanhando feio em Cálculo II. Alguém tem dica de material? Estou penando com integrais por partes 😭',
    createdAt: hoursAgo(12),
    likes: 31,
    visibility: 'all',
    tags: ['Calculo', 'EngenhariaDeSoftware'],
    comments: [
      { id: 'c1', authorId: 'u14', content: 'Vídeos do Equaciona ajudaram muito comigo. E lista, lista, lista.', createdAt: hoursAgo(11) },
      { id: 'c2', authorId: 'u2', content: 'Sério: lista do prof. resolvida no caderno até decorar o padrão. Funciona.', createdAt: hoursAgo(10) },
      { id: 'c3', authorId: 'u1', content: 'Posso te passar o resumo que fiz no semestre passado. Te chamo!', createdAt: hoursAgo(9) },
    ],
  },
  {
    id: 'p5',
    authorId: 'u14',
    content:
      'Dica pros calouros de ES: NÃO subestimem a disciplina de Banco de Dados. Parece simples nas primeiras semanas e do nada vira uma maratona de modelagem. Estuda desde o começo.',
    createdAt: daysAgo(1),
    likes: 89,
    visibility: 'course',
    tags: ['BancoDeDados', 'DicaDeEstudo'],
    comments: [
      { id: 'c1', authorId: 'u8', content: 'Verdade absoluta. Modelagem é o calcanhar de Aquiles.', createdAt: hoursAgo(20) },
    ],
  },
  {
    id: 'p6',
    authorId: 'u5',
    content:
      'Hoje teve o projeto de Saúde Itinerante na comunidade do Bom Jardim. Atendemos mais de 80 pessoas. Cansaço bom 💚 Obrigada à equipe e aos professores que tornam isso possível.',
    image: 'https://picsum.photos/seed/postsaude/600/400',
    createdAt: daysAgo(1),
    likes: 124,
    visibility: 'all',
    tags: ['Voluntariado', 'Enfermagem'],
    comments: [
      { id: 'c1', authorId: 'u7', content: 'Camila, vocês são incríveis! Como faço pra participar como voluntária?', createdAt: daysAgo(1) },
      { id: 'c2', authorId: 'u13', content: 'Inspirador demais. Conta como entrar?', createdAt: hoursAgo(22) },
    ],
  },
  {
    id: 'p7',
    authorId: 'u4',
    content:
      'Vaga aberta no time financeiro da M. Dias Branco pra estágio. Se alguém tiver interesse, comenta aqui que eu te indico. Bom pra quem é de Administração, Contábeis ou Economia.',
    createdAt: daysAgo(2),
    likes: 56,
    visibility: 'all',
    tags: ['Vaga', 'Estagio', 'Financeiro'],
    comments: [
      { id: 'c1', authorId: 'u10', content: 'Tenho interesse! Te chamo.', createdAt: daysAgo(2) },
    ],
  },
  {
    id: 'p8',
    authorId: 'u11',
    content:
      'Pessoal de Arquitetura: alguém vai pro workshop de Revit que vai rolar sábado no campus? Pensei em formar um grupo pra estudar depois.',
    createdAt: daysAgo(2),
    likes: 22,
    visibility: 'course',
    tags: ['Arquitetura', 'Workshop'],
    comments: [],
  },
  {
    id: 'p9',
    authorId: 'u8',
    content:
      'PASSEI EM ESTATÍSTICA APLICADA 📊 dois anos tentando, e finalmente. Nunca duvide do poder da terceira chance.',
    createdAt: daysAgo(3),
    likes: 201,
    visibility: 'all',
    tags: ['Vitoria', 'Estatistica'],
    comments: [
      { id: 'c1', authorId: 'u1', content: 'PARABÉÉÉNS!!!!', createdAt: daysAgo(3) },
      { id: 'c2', authorId: 'u2', content: 'Heroi nacional 🏆', createdAt: daysAgo(3) },
      { id: 'c3', authorId: 'u14', content: 'Vitória que vale por dez!', createdAt: daysAgo(2) },
    ],
  },
  {
    id: 'p10',
    authorId: 'u7',
    content:
      'Tem alguém aqui que já fez a especialização em ACT (Terapia de Aceitação e Compromisso)? Tô pensando em começar ano que vem, queria ouvir relatos.',
    createdAt: daysAgo(3),
    likes: 14,
    visibility: 'all',
    tags: ['Psicologia', 'ACT'],
    comments: [],
  },
  {
    id: 'p11',
    authorId: 'u12',
    content:
      'Bora pra corrida de 5km do campus dia 15? Já tem um grupo de 8 alunos confirmados. Cadastros na coordenação de Educação Física até quinta.',
    image: 'https://picsum.photos/seed/postrun/600/400',
    createdAt: daysAgo(4),
    likes: 38,
    visibility: 'all',
    tags: ['Esporte', 'Campus'],
    comments: [
      { id: 'c1', authorId: 'u4', content: 'Tô dentro!', createdAt: daysAgo(4) },
    ],
  },
  {
    id: 'p12',
    authorId: 'u9',
    content:
      'Comecei o estágio de docência numa escola municipal e tô apaixonada. Trabalhar com crianças do 2º ano é uma terapia diária. Recomendo demais pra quem tá na dúvida sobre Pedagogia.',
    createdAt: daysAgo(5),
    likes: 47,
    visibility: 'all',
    tags: ['Pedagogia', 'Estagio'],
    comments: [],
  },
  {
    id: 'p13',
    authorId: 'u15',
    content:
      'Hoje tive minha primeira cirurgia acompanhada na clínica. Castração em felino, tudo certo. Ainda tô meio bobeada com a experiência 🐈',
    createdAt: daysAgo(5),
    likes: 72,
    visibility: 'all',
    tags: ['Veterinaria'],
    comments: [],
  },
  {
    id: 'p14',
    authorId: 'u1',
    content:
      'Compartilhando um insight: comecei a manter um diário técnico no Notion, onde anoto bugs que resolvi e o que aprendi com cada um. Mudou MUITO minha confiança em entrevistas. Recomendo demais.',
    createdAt: daysAgo(6),
    likes: 153,
    visibility: 'all',
    tags: ['Carreira', 'Aprendizado'],
    comments: [
      { id: 'c1', authorId: 'u6', content: 'Vou começar hoje!', createdAt: daysAgo(5) },
      { id: 'c2', authorId: 'u2', content: 'Faço algo parecido com Obsidian. Game changer.', createdAt: daysAgo(5) },
    ],
  },
  {
    id: 'p15',
    authorId: 'u10',
    content:
      'Curso de SAP da semana passada foi excelente, recomendo demais pra galera de Contábeis e Administração. Quem quiser o material, me chama.',
    createdAt: daysAgo(7),
    likes: 19,
    visibility: 'all',
    tags: ['SAP', 'Carreira'],
    comments: [],
  },
  {
    id: 'p16',
    authorId: 'u3',
    content:
      'Diaaa de prova oral em Direito Constitucional. Reza por mim 🙏 quem já passou, deixa um conselho aí embaixo.',
    createdAt: daysAgo(8),
    likes: 28,
    visibility: 'course',
    tags: ['Direito', 'Prova'],
    comments: [
      { id: 'c1', authorId: 'u4', content: 'Respira fundo e cita jurisprudência. Tu manda muito bem!', createdAt: daysAgo(8) },
    ],
  },
  {
    id: 'p17',
    authorId: 'u14',
    content:
      'Trabalhei o fim de semana inteiro num side project com Next.js 16 + cache components. Ficou absurdamente rápido. Vou fazer um post-mortem técnico em breve.',
    image: 'https://picsum.photos/seed/postnext/600/400',
    createdAt: daysAgo(9),
    likes: 91,
    visibility: 'all',
    tags: ['NextJS', 'WebDev'],
    comments: [
      { id: 'c1', authorId: 'u1', content: 'Quero ler!!', createdAt: daysAgo(8) },
    ],
  },
  {
    id: 'p18',
    authorId: 'u11',
    content:
      'Render final do meu projeto de habitação social ficou pronto. Foi a entrega que mais aprendi nesse semestre 🏠',
    image: 'https://picsum.photos/seed/postarq/600/400',
    createdAt: daysAgo(10),
    likes: 134,
    visibility: 'all',
    tags: ['Arquitetura', 'Projeto'],
    comments: [],
  },
  {
    id: 'p19',
    authorId: 'u2',
    content:
      'Galera do Núcleo de Carreira: a feira de empregos vai ter Stefanini, Hapvida, Grendene e mais umas 10 empresas. Não percam, dia 30 no auditório principal.',
    createdAt: daysAgo(11),
    likes: 76,
    visibility: 'all',
    tags: ['UniAteneu', 'Carreira'],
    comments: [],
  },
  {
    id: 'p20',
    authorId: 'u7',
    content:
      'Pequena reflexão de quinta: vocês têm conseguido equilibrar faculdade, estágio e saúde mental? Tô tentando montar uma rotina mais sustentável e curioso pra saber o que funciona pra outras pessoas.',
    createdAt: daysAgo(12),
    likes: 187,
    visibility: 'all',
    tags: ['SaudeMental', 'Rotina'],
    comments: [
      { id: 'c1', authorId: 'u5', content: 'Bloquear horário pra dormir como se fosse aula obrigatória mudou minha vida.', createdAt: daysAgo(11) },
      { id: 'c2', authorId: 'u9', content: 'Caminhar 30min sem fone. Salva.', createdAt: daysAgo(11) },
    ],
  },
]
