import { query } from '@peajs/graphql-client'
import gql from 'gql-tag'

interface Task {
  id: number
  projectId: number
  name: string
  description: string
  completed: boolean
  reminderTime: string
}

export const TASKS = gql`
  query tasks(
    $skip: Int
    $first: Int
    $last: Int
    $before: String
    $after: String
    $where: TaskWhereInput
    $orderBy: String
  ) {
    tasks(
      skip: $skip
      first: $first
      last: $last
      before: $before
      after: $after
      where: $where
      orderBy: $orderBy
    ) {
      id
      projectId
      name
      description
      completed
      reminderTime
      createdAt
      updatedAt
      project {
        id
        userId
        name
        description
        createdAt
        updatedAt
      }
      subTasks {
        id
        taskId
        projectId
        name
        description
        amount
        done
        createdAt
        updatedAt
      }
    }
  }
`

// const endpoint = 'http://localhost:5001/graphql'
const endpoint = 'http://47.101.56.160:5001/graphql'

export async function getTasks() {
  try {
    const data = await query(endpoint, TASKS)
    return data.tasks as Task[]
  } catch (error) {
    return []
  }
}
