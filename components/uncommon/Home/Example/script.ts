import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'
import { IAuth } from '~/typings'
@Component({})
export default class Example extends Vue {
  randomNumber: number = 10
  @State('auth') auth!: IAuth
  // Mutation mapping with type check for payload example:
  @Mutation('SET_AUTH') SET_AUTH!: (key: IAuth) => void
  // Then, if you want to get into auth and get currentUser
  get currentUser() {
    if (this.auth) {
      return this.auth.currentUser
    } else {
      return null
    }
  }

  mounted() {
    // this.randomNumber = this.currentUser // Type error
    // this.SET_AUTH(this.randomNumber) // Type error
    this.$emit('randomBus')
    console.log(this.currentUser)
  }
}
