import { IAuth } from '~/typings'
// VueX-Store state
const rootState = () => ({
  locales: ['en', 'vi'] as string[],
  locale: 'vi' as string,
  auth: null as IAuth | null
  // Get this with return (this.$store.state as RootState).locale
})
// Export default the state and Nuxt will help you regconize it
// in actions, mutations and getters in the same module without importing it
export default rootState
// But you have to import the RootState type
export type RootState = ReturnType<typeof rootState>
