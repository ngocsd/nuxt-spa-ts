import { Middleware } from '@nuxt/types'
import { RootActions } from '~/typings'

const authRequired: Middleware = async ({ store, redirect }) => {
  await store.dispatch(RootActions.nuxtServerInit)
  // Use context
  // If the user is not authenticated
  if (!store.state.auth) {
    return redirect('/login')
  }
}

export default authRequired
