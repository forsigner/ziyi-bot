import { Message } from 'wechaty'

export async function onMessage(msg: Message) {
  if (msg.text() === 'foo') {
    await msg.say('Hello world')
  }
}
