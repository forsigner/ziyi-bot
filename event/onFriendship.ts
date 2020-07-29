import { Friendship } from 'wechaty'

export function onFriendship(friendship: Friendship) {
  console.log('收到好友请求：' + friendship)
}
