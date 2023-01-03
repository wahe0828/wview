<template>
<div class="w-content-box">
  <slot />
</div>
</template>

<script>
export default {
  name: 'w-content-box',
  props: {
    color: String,
    type: {
      type: String,
      default: 'card',
    },
    shadowColor:{
      type: String,
      default: '#efefef',
    }
  },
};
</script>

<style lang="scss">
.w-content-box {
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 5px 5px rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);
  min-height: 100px;
  margin: 0 20px;
}
</style>
