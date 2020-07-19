import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '~/store/state'

export function State(state: any): any {
  return state
}
export function Getters<S>(getters: any): GetterTree<S, RootState> {
  return getters as GetterTree<S, RootState>
}
export function Mutations(mutations: any): MutationTree<RootState> {
  return mutations as MutationTree<RootState>
}
export function Actions<S>(actions: any): ActionTree<S, RootState> {
  return actions as ActionTree<S, RootState>
}
