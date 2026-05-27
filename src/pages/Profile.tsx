import { ProfileView } from '@/components/profile/ProfileView'
import { currentUser } from '@/data/currentUser'

export function Profile() {
  return <ProfileView user={currentUser} isOwn />
}
