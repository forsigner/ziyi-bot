import { Contact } from 'wechaty'
import { bot } from '../bot'
import { initTasks } from '../schedule/initTasks'

export async function onLogin(user: Contact) {
  console.log(`login success, user: ${user}`)
  initTasks(bot)
}
