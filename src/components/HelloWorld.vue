<script setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

defineProps({
  msg: String,
  myname: String,
})



const count = ref(0)

</script>
<template>
  <input type="text" v-model="myname">
  <p>大家好！我叫 {{ myname }}</p>
  <p>我是 {{ msg }}</p>
  <p>count {{ count }}</p>
  <el-row>
    <el-button type="primary" :icon="Edit" circle @click="count--" />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>