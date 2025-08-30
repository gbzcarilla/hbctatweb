import { hc } from 'hono/client'
// import { ApiRoutes } from '@server/app'
// import { type ApiRoutes } from '../../../api/app'
import { type ApiRoutes } from '@server/app'

const client = hc<ApiRoutes>('/')

export const api = client.api