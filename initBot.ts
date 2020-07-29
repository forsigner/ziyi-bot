import { bot } from './bot'
import { onFriendship } from './event/onFriendship'
import { onLogin } from './event/onLogin'
import { onScan } from './event/onScan'
import { onMessage } from './event/onMessage'
import { onRoomInvite } from './event/onRoomInvite'

bot
  .on('scan', onScan)
  .on('login', onLogin)
  .on('message', onMessage)
  .on('friendship', onFriendship)
  .on('room-invite', onRoomInvite)
  .start()
  .then(async () => {
  })
