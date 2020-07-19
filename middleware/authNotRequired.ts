import { Middleware } from '@nuxt/types'
import { RootActions } from '~/typings'

const authNotRequired: Middleware = async ({ store, redirect }) => {
  await store.dispatch(RootActions.nuxtServerInit)
  // Use context
  // If the user is authenticated, redirect to home page
  // This is especially made for /login
  if (store.state.auth) {
    return redirect('/')
  }
}

export default authNotRequired
