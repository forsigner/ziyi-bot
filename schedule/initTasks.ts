import { Wechaty } from 'wechaty'
import { getTasks } from '../gql/task'
import schedule from 'node-schedule'

let taskIds: number[] = []

async function init(bot: Wechaty) {
  const tasks = await getTasks()
  for (const task of tasks) {
    // 已经运行的任务，跳过
    if (taskIds.includes(task.id)) break
    const date = new Date(task.reminderTime)

    schedule.scheduleJob(date, async () => {
      const contactList = await bot.Contact.findAll()
      for (const item of contactList) {
        if (item.weixin() === 'ziyi-314') {
          item.say(`[提醒]  ${task.name}`)
        }
      }
    })

    taskIds.push(task.id)
  }
}

/**
 * 初始化任务，5分钟轮询一次
 */
export function initTasks(bot: Wechaty) {
  init(bot)

  setInterval(() => {
    init(bot)

    // 5分钟
  }, 1000 * 60 * 5)
}
