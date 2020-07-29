import { ScanStatus } from 'wechaty'
const QrcodeTerminal = require('qrcode-terminal')

export function onScan(qrcode: string, status: ScanStatus) {
  if (status === ScanStatus.Waiting) {
    QrcodeTerminal.generate(qrcode, {
      small: true,
    })
  }
}
