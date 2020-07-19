// Example using vuex-module-decorators
// Vuex Module using vuex-module-decorators can't be splitted in to multiple files
// Because it's written with decorator syntax
// See issue: https://github.com/championswimmer/vuex-module-decorators/issues/49
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { ExampleMutations } from '~/typings'
@Module({
  name: 'example',
  stateFactory: true,
  namespaced: true
})
export default class ExampleModule extends VuexModule {
  count: number = 2

  get countValue(): number {
    return this.count
  }

  @Mutation
  [ExampleMutations.INCREASE_COUNT]() {
    this.count++
  }
}
