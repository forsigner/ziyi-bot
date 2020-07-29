import { Wechaty } from 'wechaty'
import { PuppetPadplus } from 'wechaty-puppet-padplus'

const token = 'puppet_padplus_8e5d96bb36153518'
const puppet = new PuppetPadplus({ token })
const name = 'ziyi-bot'

export const bot = new Wechaty({
  puppet,
  name, // generate xxxx.memory-card.json and save login data for the next login
})
