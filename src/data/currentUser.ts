import type { User } from './types'

export const currentUser: User = {
  id: 'me',
  name: 'Benedito Silva',
  matricula: '202310001',
  course: 'Engenharia de Software',
  semester: 5,
  avatar: 'https://i.pravatar.cc/150?img=68',
  bio: 'Estudante de Engenharia de Software no 5º semestre da UniAteneu. Estou cursando módulos de back-end e front-end, e curto trabalhar em produtos que misturam tecnologia e impacto social. Em busca da primeira oportunidade de estágio sólida em desenvolvimento.',
  location: 'Fortaleza-CE',
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Git'],
  interests: ['Produto', 'UX', 'Comunidade de devs', 'Educação tech'],
  experiences: [
    {
      id: 'e1',
      title: 'Monitor da disciplina de Estruturas de Dados',
      organization: 'UniAteneu',
      period: '2025 — Atual',
      description:
        'Apoio aos alunos do 2º semestre com listas, árvores e grafos. Plantões semanais e correção de exercícios.',
    },
    {
      id: 'e2',
      title: 'Projeto pessoal — AteneuHub',
      organization: 'Independente',
      period: '2025',
      description:
        'Protótipo de rede social para a comunidade UniAteneu, focado em ajudar calouros a encontrar pessoas do mesmo curso.',
    },
  ],
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    website: 'https://example.com',
  },
}
