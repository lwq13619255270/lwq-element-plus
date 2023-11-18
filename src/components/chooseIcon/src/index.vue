<template>
    <div class="choose-icon">
        <el-button @click="handleClick" type="primary">
            <slot></slot>
        </el-button>
        <el-dialog v-model="dialogVisible" :title="title">
            弹出框
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
    import { ref, watch } from 'vue';
    const props = defineProps<{
        // 弹出框的标题
        title: string,
        // 控制弹出框的显示与隐藏
        visible: boolean
    }>()
    const emits = defineEmits(['update:visible'])
    // 拷贝一份父组件传过来的visible，只有是防止弹出框组件通过v-model传入到内部被修改
    const dialogVisible = ref<boolean>(props.visible);
    const handleClick = () => {
        emits('update:visible', !props.visible)
    }
    // 监听visible的变化 
    watch(() => props.visible, val => {
        dialogVisible.value = val;
    })

    // 监听dialogVisible的值变化 判断弹出框是否关闭
    watch( () => dialogVisible.value, val => {
        emits('update:visible', val)
    } )
</script> 
<style lang="scss" scoped>
    
</style>