import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Post, Comment } from '@/data/types'
import { posts as seedPosts } from '@/data/posts'
import { jobs as seedJobs } from '@/data/jobs'
import type { Job } from '@/data/types'
import { currentUser } from '@/data/currentUser'

interface AppState {
  posts: Post[]
  jobs: Job[]
  connections: Record<string, boolean>

  togglePostLike: (postId: string) => void
  togglePostSave: (postId: string) => void
  addComment: (postId: string, content: string) => void
  createPost: (input: { content: string; image?: string; visibility: 'all' | 'course' }) => void

  toggleJobSave: (jobId: string) => void
  toggleConnection: (userId: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      posts: seedPosts,
      jobs: seedJobs,
      connections: {},

      togglePostLike: (postId) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === postId
              ? {
                  ...p,
                  likedByMe: !p.likedByMe,
                  likes: p.likedByMe ? p.likes - 1 : p.likes + 1,
                }
              : p,
          ),
        })),

      togglePostSave: (postId) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === postId ? { ...p, savedByMe: !p.savedByMe } : p,
          ),
        })),

      addComment: (postId, content) =>
        set((state) => {
          const trimmed = content.trim()
          if (!trimmed) return state
          const newComment: Comment = {
            id: `c-${Date.now()}`,
            authorId: currentUser.id,
            content: trimmed,
            createdAt: new Date().toISOString(),
          }
          return {
            posts: state.posts.map((p) =>
              p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p,
            ),
          }
        }),

      createPost: ({ content, image, visibility }) =>
        set((state) => {
          const newPost: Post = {
            id: `p-${Date.now()}`,
            authorId: currentUser.id,
            content: content.trim(),
            image,
            createdAt: new Date().toISOString(),
            likes: 0,
            visibility,
            comments: [],
          }
          return { posts: [newPost, ...state.posts] }
        }),

      toggleJobSave: (jobId) =>
        set((state) => ({
          jobs: state.jobs.map((j) =>
            j.id === jobId ? { ...j, savedByMe: !j.savedByMe } : j,
          ),
        })),

      toggleConnection: (userId) =>
        set((state) => ({
          connections: { ...state.connections, [userId]: !state.connections[userId] },
        })),
    }),
    {
      name: 'ateneuhub-state',
      version: 1,
    },
  ),
)
