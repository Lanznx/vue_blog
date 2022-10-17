<template>
    <el-page-header :icon="ArrowLeft" class="el-page-header">
        <template #content>
            <span> Title </span>
        </template>
    </el-page-header>
</template>
  
<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
</script>

<!-- make the component stick to top -->
<style scoped>
.el-page-header {
    position: sticky;
    top: 0;
    z-index: 1;
}
</style>
