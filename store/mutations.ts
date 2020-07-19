import { RootState } from './state'
import { IAuth, RootMutations } from '~/typings'
import { Mutations } from '~/utils/vuex-modules-builder'

export default Mutations({
  [RootMutations.SET_LANG](state: RootState, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  [RootMutations.SET_AUTH](state: RootState, auth: IAuth) {
    state.auth = auth
  }
})
