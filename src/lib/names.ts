import { capitalizeAll } from '@utils/text'

export const showUsername = (username: string, nickname: string): string => {
  const [firstName, ..._] = username.split(' ')

  return nickname ? capitalizeAll(nickname) : capitalizeAll(firstName)
}
