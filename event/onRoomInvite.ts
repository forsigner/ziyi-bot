import { RoomInvitation } from 'wechaty'

export function onRoomInvite(invitation: RoomInvitation) {
  console.log('收到入群邀请：' + invitation)
}
