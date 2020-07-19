import { createDecorator } from 'vue-class-component'

// Declare Alert decorator.
export const Alert = createDecorator((options: any, key) => {
  // Keep the original method for later.
  // Wrap the method with the logging logic.
  options.methods[key] = function wrapperMethod() {
    alert(`Invoked: ${key}`)
  }
})
