export type Course =
  | 'Engenharia de Software'
  | 'Sistemas de Informação'
  | 'Direito'
  | 'Administração'
  | 'Enfermagem'
  | 'Psicologia'
  | 'Pedagogia'
  | 'Ciências Contábeis'
  | 'Educação Física'
  | 'Arquitetura e Urbanismo'
  | 'Medicina Veterinária'
  | 'Fisioterapia'

export interface Experience {
  id: string
  title: string
  organization: string
  period: string
  description: string
}

export interface UserLinks {
  github?: string
  linkedin?: string
  behance?: string
  website?: string
}

export interface User {
  id: string
  name: string
  matricula: string
  course: Course
  semester: number
  avatar: string
  bio: string
  location: string
  skills: string[]
  interests: string[]
  experiences: Experience[]
  links: UserLinks
}

export interface Comment {
  id: string
  authorId: string
  content: string
  createdAt: string
}

export interface Post {
  id: string
  authorId: string
  content: string
  image?: string
  createdAt: string
  likes: number
  likedByMe?: boolean
  savedByMe?: boolean
  visibility: 'all' | 'course'
  tags?: string[]
  comments: Comment[]
}

export type JobArea =
  | 'TI'
  | 'Saúde'
  | 'Direito'
  | 'Administração'
  | 'Engenharia'
  | 'Educação'
  | 'Marketing'
  | 'Financeiro'

export type JobModality = 'Presencial' | 'Híbrido' | 'Remoto'
export type JobType = 'Estágio' | 'Trainee' | 'CLT' | 'PJ'

export interface Job {
  id: string
  title: string
  company: string
  companyInitials: string
  area: JobArea
  modality: JobModality
  type: JobType
  location: string
  shortDescription: string
  description: string
  requirements: string[]
  benefits: string[]
  postedAt: string
  partnerHighlight?: boolean
  savedByMe?: boolean
}
