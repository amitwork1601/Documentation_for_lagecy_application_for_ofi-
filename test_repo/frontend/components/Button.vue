<template>
  <div>{{ message }}</div>
</template>

<script>
/**
 * Main button component.
 */
export default {
  props: {
    label: String,
    disabled: Boolean
  },
  data() {
    return {
        message: 'Hello'
    }
  },
  methods: {
    handleClick() {
        this.$emit('click');
    }
  }
}
</script>
