<template>
	<div class="lwq-container">
		<el-container>
			<el-aside width="auto">
				<nav-side :collapse="isCollapse"></nav-side>
			</el-aside>
			<el-container>
				<el-header>
					<nav-header v-model:collapse="isCollapse"  ></nav-header>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script lang="ts" setup>
	import { ref } from "vue"
	import NavSide from "./navSide/index.vue"
	import NavHeader from "./navHeader/index.vue"
    let isCollapse = ref(false);
</script> 
<style lang="scss" scoped>
	.el.header {
		padding: 0;
	}
</style>