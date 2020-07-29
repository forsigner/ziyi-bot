import { Message } from 'wechaty'

export async function onMessage(msg: Message) {
  if (msg.text() === '男神') {
    await msg.say('女神琳，你真漂亮')
  }
}
