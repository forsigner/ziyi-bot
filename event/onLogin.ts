import { Contact } from 'wechaty'
import schedule from 'node-schedule'
import { bot } from '../bot'

function eat() {
  schedule.scheduleJob('0 46 11 ? * *', () => {
    console.log('兄弟们，准备吃午饭')
  })

  schedule.scheduleJob('0 46 17 ? * *', () => {
    console.log('兄弟们，准备吃晚饭')
  })
}

/**
 * 去喝水
 */
function drink() {
  const oneHour = 1000 * 60 * 60 * 2

  setInterval(async () => {
    const contactList = await bot.Contact.findAll()
    for (const item of contactList) {
      if (item.weixin() === 'ziyi-314') {
        item.say('该去喝水了')
      }
    }
  }, oneHour)
}

export async function onLogin(user: Contact) {
  console.log(`login success, user: ${user}`)
  drink()
  eat()
}
