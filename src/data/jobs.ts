import type { Job } from './types'

const now = Date.now()
const daysAgo = (d: number) => new Date(now - d * 86400 * 1000).toISOString()

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Estágio em Desenvolvimento Front-end',
    company: 'Stefanini',
    companyInitials: 'ST',
    area: 'TI',
    modality: 'Híbrido',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Atuação em projetos de interface web com React e TypeScript, em time multidisciplinar.',
    description:
      'Buscamos estagiários de Engenharia de Software ou cursos afins para atuar no desenvolvimento de soluções front-end com React e TypeScript. Você terá mentoria de um dev sênior e participará de cerimônias ágeis. Modalidade híbrida: 3 dias presenciais.',
    requirements: [
      'Cursando Engenharia de Software, Sistemas de Informação ou áreas correlatas (a partir do 3º semestre)',
      'Conhecimento básico em React e JavaScript',
      'Disponibilidade de 6h diárias',
    ],
    benefits: ['Bolsa-auxílio R$ 1.800', 'Vale-refeição', 'Plano de saúde', 'Mentoria estruturada'],
    postedAt: daysAgo(1),
    partnerHighlight: true,
  },
  {
    id: 'j2',
    title: 'Estágio em Recursos Humanos',
    company: 'Hapvida NotreDame Intermédica',
    companyInitials: 'HP',
    area: 'Administração',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Apoio a processos de recrutamento, integração de novos colaboradores e indicadores de RH.',
    description:
      'Oportunidade para estudantes que querem entender RH na prática em uma das maiores operadoras de saúde do país. Você apoiará triagem de candidatos, organização de eventos internos e construção de relatórios.',
    requirements: [
      'Cursando Administração, Psicologia ou áreas correlatas',
      'Excel intermediário',
      'Boa comunicação',
    ],
    benefits: ['Bolsa-auxílio R$ 1.500', 'Vale-transporte', 'Plano de saúde'],
    postedAt: daysAgo(2),
  },
  {
    id: 'j3',
    title: 'Trainee em Tecnologia',
    company: 'M. Dias Branco',
    companyInitials: 'MD',
    area: 'TI',
    modality: 'Presencial',
    type: 'Trainee',
    location: 'Eusébio-CE',
    shortDescription:
      'Programa de 12 meses com rotação por áreas de TI: dados, infra, desenvolvimento e segurança.',
    description:
      'Programa de Trainee 2026 da M. Dias Branco em Tecnologia. Você passará por quatro áreas-chave de TI, com mentoria executiva e treinamentos contínuos. Ao final do programa, você será efetivado em uma das áreas.',
    requirements: [
      'Recém-formado(a) em TI, Engenharia ou Matemática (formação entre 2024 e 2026)',
      'Inglês intermediário',
      'Disponibilidade para trabalhar em Eusébio',
    ],
    benefits: ['Salário competitivo', 'PLR', 'Plano de saúde', 'Mentoria executiva', 'Treinamentos'],
    postedAt: daysAgo(3),
    partnerHighlight: true,
  },
  {
    id: 'j4',
    title: 'Estágio Jurídico — Direito Digital',
    company: 'Câmara & Associados',
    companyInitials: 'CA',
    area: 'Direito',
    modality: 'Híbrido',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Apoio em demandas de LGPD, contratos digitais e adequação de empresas à legislação de dados.',
    description:
      'Escritório de médio porte com forte atuação em Direito Digital busca estagiário(a) para apoio em projetos de adequação à LGPD, redação de pareceres e suporte em audiências.',
    requirements: [
      'Cursando Direito (a partir do 5º semestre)',
      'Interesse em direito digital e proteção de dados',
      'Boa redação jurídica',
    ],
    benefits: ['Bolsa-auxílio R$ 1.600', 'Vale-transporte', 'Vale-alimentação'],
    postedAt: daysAgo(4),
  },
  {
    id: 'j5',
    title: 'Estágio em Enfermagem',
    company: 'Hospital Geral de Fortaleza',
    companyInitials: 'HG',
    area: 'Saúde',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Acompanhamento de pacientes em unidade de internação, sob supervisão da equipe.',
    description:
      'Vaga de estágio supervisionado para estudantes de Enfermagem no Hospital Geral de Fortaleza. Atuação em unidade de internação clínica, acompanhamento de pacientes e suporte à equipe.',
    requirements: [
      'Cursando Enfermagem (a partir do 5º semestre)',
      'Disponibilidade de 6h diárias',
      'Postura humanizada',
    ],
    benefits: ['Bolsa-auxílio', 'Vale-transporte', 'Refeição no local'],
    postedAt: daysAgo(5),
    partnerHighlight: true,
  },
  {
    id: 'j6',
    title: 'Estágio em Análise de Dados',
    company: 'Grendene',
    companyInitials: 'GR',
    area: 'TI',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Sobral-CE',
    shortDescription:
      'Construção de dashboards e suporte na automação de relatórios da área comercial.',
    description:
      'Oportunidade para quem ama dados. Você construirá dashboards em Power BI, ajudará a integrar fontes e participará da rotina analítica do time comercial.',
    requirements: ['SQL básico', 'Excel avançado', 'Cursando TI, Engenharia, Estatística ou áreas afins'],
    benefits: ['Bolsa-auxílio R$ 2.000', 'Moradia subsidiada', 'Plano de saúde'],
    postedAt: daysAgo(6),
  },
  {
    id: 'j7',
    title: 'Estágio em Arquitetura',
    company: 'AR3 Arquitetura',
    companyInitials: 'AR',
    area: 'Engenharia',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Detalhamento de projetos residenciais, visitas técnicas e elaboração de pranchas.',
    description:
      'Escritório de arquitetura com foco em residências de alto padrão. Você atuará no detalhamento de projetos, apoio em visitas técnicas e preparo de pranchas.',
    requirements: ['Cursando Arquitetura (a partir do 4º semestre)', 'AutoCAD e SketchUp', 'Revit é diferencial'],
    benefits: ['Bolsa-auxílio R$ 1.500', 'Vale-transporte'],
    postedAt: daysAgo(7),
  },
  {
    id: 'j8',
    title: 'Desenvolvedor(a) Back-end Pleno',
    company: 'Pingou Tecnologia',
    companyInitials: 'PG',
    area: 'TI',
    modality: 'Remoto',
    type: 'CLT',
    location: 'Remoto',
    shortDescription:
      'Construção e manutenção de APIs em Node.js para nosso produto de fidelidade.',
    description:
      'Startup local em crescimento busca dev back-end para atuar nas APIs do produto principal. Stack: Node.js, PostgreSQL, AWS. Time pequeno e horizontal.',
    requirements: ['2+ anos com Node.js', 'PostgreSQL', 'Conhecimento em arquitetura RESTful', 'Inglês para leitura'],
    benefits: ['Plano de saúde', 'Vale-cultura', 'Equipamento', '100% remoto'],
    postedAt: daysAgo(8),
  },
  {
    id: 'j9',
    title: 'Estágio em Marketing Digital',
    company: 'Ypióca',
    companyInitials: 'YP',
    area: 'Marketing',
    modality: 'Híbrido',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Apoio na operação de redes sociais, briefings e análise de campanhas digitais.',
    description:
      'Marca cearense com tradição busca estagiário(a) de Marketing para apoiar a equipe digital. Atuação em criação de conteúdo, análise de métricas e apoio em campanhas.',
    requirements: ['Cursando Marketing, Publicidade ou Administração', 'Domínio de redes sociais', 'Boa escrita'],
    benefits: ['Bolsa-auxílio R$ 1.700', 'Vale-refeição', 'Vale-transporte'],
    postedAt: daysAgo(9),
  },
  {
    id: 'j10',
    title: 'Estágio em Contabilidade',
    company: 'Esmaltec',
    companyInitials: 'ES',
    area: 'Financeiro',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Maracanaú-CE',
    shortDescription:
      'Apoio em conciliação contábil, relatórios gerenciais e fechamento mensal.',
    description:
      'Vaga de estágio no setor contábil de uma das maiores indústrias do Nordeste. Você apoiará a equipe em conciliações, relatórios e auditorias internas.',
    requirements: ['Cursando Ciências Contábeis (a partir do 4º semestre)', 'Excel intermediário'],
    benefits: ['Bolsa-auxílio R$ 1.500', 'Vale-transporte', 'Refeição no local'],
    postedAt: daysAgo(10),
  },
  {
    id: 'j11',
    title: 'Estágio em Educação Física',
    company: 'Academia Greenlife',
    companyInitials: 'GL',
    area: 'Saúde',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Prescrição supervisionada de treinos e acompanhamento personalizado de alunos.',
    description:
      'Academia tradicional em Fortaleza com foco em treinamento funcional. Você atuará com prescrição supervisionada, avaliações físicas e acompanhamento de alunos.',
    requirements: ['Cursando Educação Física (a partir do 4º semestre)', 'Boa comunicação', 'Pontualidade'],
    benefits: ['Bolsa-auxílio R$ 1.200', 'Vale-transporte', 'Acesso livre à academia'],
    postedAt: daysAgo(11),
  },
  {
    id: 'j12',
    title: 'Estágio em Psicologia Organizacional',
    company: 'J. Macêdo',
    companyInitials: 'JM',
    area: 'Administração',
    modality: 'Híbrido',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Apoio em programas de cultura, clima organizacional e desenvolvimento de pessoas.',
    description:
      'Tradicional empresa cearense busca estagiário(a) de Psicologia para apoiar projetos de gente & gestão.',
    requirements: ['Cursando Psicologia (a partir do 6º semestre)', 'Interesse em RH', 'Excel intermediário'],
    benefits: ['Bolsa-auxílio R$ 1.700', 'Vale-refeição', 'Plano de saúde'],
    postedAt: daysAgo(12),
    partnerHighlight: true,
  },
  {
    id: 'j13',
    title: 'Estagiário em Veterinária',
    company: 'Clínica Pet Saúde',
    companyInitials: 'PS',
    area: 'Saúde',
    modality: 'Presencial',
    type: 'Estágio',
    location: 'Fortaleza-CE',
    shortDescription:
      'Acompanhamento de consultas e apoio em procedimentos clínicos básicos.',
    description:
      'Clínica veterinária especializada em pequenos animais busca estagiário(a) para apoio à equipe clínica.',
    requirements: ['Cursando Medicina Veterinária (a partir do 5º semestre)', 'Disponibilidade de 6h diárias'],
    benefits: ['Bolsa-auxílio R$ 1.300', 'Vale-transporte'],
    postedAt: daysAgo(14),
  },
  {
    id: 'j14',
    title: 'Estágio em Engenharia de Dados',
    company: 'Edson Queiroz Tech',
    companyInitials: 'EQ',
    area: 'TI',
    modality: 'Remoto',
    type: 'Estágio',
    location: 'Remoto',
    shortDescription:
      'Apoio na construção de pipelines de dados em Airflow e na qualidade de dados.',
    description:
      'Operação tech do grupo Edson Queiroz busca estagiário(a) para apoiar projetos de dados. Stack: Python, Airflow, BigQuery, dbt.',
    requirements: ['Python intermediário', 'SQL básico', 'Cursando TI ou áreas afins'],
    benefits: ['Bolsa-auxílio R$ 2.200', 'Equipamento', '100% remoto'],
    postedAt: daysAgo(15),
    partnerHighlight: true,
  },
  {
    id: 'j15',
    title: 'Assistente Pedagógico Júnior',
    company: 'Escola Municipal Carlos Câmara',
    companyInitials: 'CC',
    area: 'Educação',
    modality: 'Presencial',
    type: 'CLT',
    location: 'Fortaleza-CE',
    shortDescription:
      'Apoio à coordenação pedagógica nos anos iniciais do ensino fundamental.',
    description:
      'Escola pública busca profissional para auxiliar a coordenação pedagógica, com foco em alfabetização e acompanhamento de turmas.',
    requirements: ['Formação ou cursando Pedagogia (últimos semestres)', 'Experiência prévia em escolas é diferencial'],
    benefits: ['Salário CLT', 'Vale-transporte', 'Vale-refeição'],
    postedAt: daysAgo(18),
  },
]
