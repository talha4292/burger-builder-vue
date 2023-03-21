<template>
  <div>
    <OrderItem v-for="order in orders" :key="order.id" :order='order' />
  </div>
</template>

<script>
import { ref } from 'vue';
import { getOrders } from '../database/db'
import OrderItem from './OrderItem.vue'

export default {
  name: 'OrderList',
  components: { 
    OrderItem
  },
  setup() {
    const orders = ref([]);
    getOrders().then(val => {
      orders.value = val
    })
    return {
      orders
    }
  }
}
</script>

<style scoped>

</style>