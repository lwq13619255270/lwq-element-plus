<template>
    <div class="choose-icon">
        <lwq-choose-icon :title="'选择图标'" v-model:visible="visible">
            选择图标
        </lwq-choose-icon>
    </div>
</template>
<script lang="ts" setup>
    import lwqChooseIcon from '../../components/chooseIcon/src/index.vue'
    import { ref } from 'vue'

    const visible = ref<boolean>(false)

</script> 
<style lang="scss" scoped>
    
</style>