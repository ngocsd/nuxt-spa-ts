import { RootState } from './state'
import { Getters } from '~/utils/vuex-modules-builder'

export default Getters<RootState>({
  locale: (state: RootState) => state.locale
  // this.$store.getters['locale'] as ReturnType<typeof getters.locale>
})
