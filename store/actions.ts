import { RootState } from './state'
import { IAuth, RootActions, ILogin, RootMutations } from '~/typings'
import { Actions } from '~/utils/vuex-modules-builder'

export default Actions<RootState>({
  // Called manually in middleware in SPA mode
  async nuxtServerInit({ commit }: any) {
    let auth: IAuth | null = null
    const authString: any = await localStorage.getItem('auth')
    auth = await JSON.parse(authString)
    commit(RootMutations.SET_AUTH, auth)
  },
  async [RootActions.login]({ commit }: any, form: ILogin) {
    console.log(form)
    // We simulate the async request with timeout.
    // Replace the whole thing with a nice axios request to obtain the auth instance as usual
    const auth: IAuth = await {
      currentUser: {
        fullname: 'Someone',
        email: 'Some email'
      },
      accessToken: 'yourAccessTokenFromBackend'
    }
    await setTimeout(() => {
      // Do nothing, just simulate the delay
    }, 1000)
    localStorage.setItem('auth', JSON.stringify(auth))
    commit(RootMutations.SET_AUTH, auth) // Mutating to store for client rendering
  },
  [RootActions.logout]({ commit }: any) {
    localStorage.removeItem('auth')
    commit(RootMutations.SET_AUTH, null)
  }
})
