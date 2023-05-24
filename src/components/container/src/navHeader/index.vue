<template>
    <span class="header" @click="toggle">
        <lwq-icon-expand class="mr-12" v-if="collapse"></lwq-icon-expand>
        <lwq-icon-fold class="mr-12" v-else></lwq-icon-fold>
    </span>
</template>
<script lang="ts" setup>
    let props = defineProps<{
        collapse: boolean
    }>()
    let emits = defineEmits(['update:collapse'])
    let toggle = () => {
        emits('update:collapse', !props.collapse)
    }
</script> 
<style lang="scss" scoped>
  .header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
</style>