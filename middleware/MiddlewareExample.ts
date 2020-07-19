import { Middleware } from '@nuxt/types'
import { RootActions } from '~/typings'

const MiddlewareExample: Middleware = async ({ store }) => {
  await store.dispatch(RootActions.nuxtServerInit)
  // This is just an example for copy and paste purpose :D
  // Middleware run in server side first, client next time you change page
}

export default MiddlewareExample
