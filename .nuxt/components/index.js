export { default as Footer } from '../..\\components\\Footer.vue'
export { default as TinyButtonLink } from '../..\\components\\TinyButtonLink.vue'
export { default as TopBar } from '../..\\components\\TopBar.vue'
export { default as FormPrimaryButton } from '../..\\components\\form\\PrimaryButton.vue'
export { default as FormPrimaryCheckbox } from '../..\\components\\form\\PrimaryCheckbox.vue'
export { default as FormPrimaryInput } from '../..\\components\\form\\PrimaryInput.vue'
export { default as FormPrimaryPreBlock } from '../..\\components\\form\\PrimaryPreBlock.vue'
export { default as FormPrimarySelector } from '../..\\components\\form\\PrimarySelector.vue'
export { default as FormPrimaryTextArea } from '../..\\components\\form\\PrimaryTextArea.vue'
export { default as ToolInteractiveBlock } from '../..\\components\\tool\\InteractiveBlock.vue'
export { default as ToolInteractiveDoubleColumns } from '../..\\components\\tool\\InteractiveDoubleColumns.vue'
export { default as ToolPrimaryContainer } from '../..\\components\\tool\\PrimaryContainer.vue'
export { default as ToolPrimaryIntroduction } from '../..\\components\\tool\\PrimaryIntroduction.vue'
export { default as Tool } from '../..\\components\\tool\\Tool.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
