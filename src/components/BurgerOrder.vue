<template>
  <div>
    <h2>We hope it tastes well!</h2>
    <div className='burgerIngredients'>
      <div className='top' />
        <div v-for="ingredient in makeBurger(ingredients)" :key="ingredient.key" :class="ingredient.className"></div>
      <div className='bottom' />
    </div>
    <div className='ingredientBtns'>
      <button
        @click="createOrder(ingredients, price)"
        className='btn btn-primary'
      >
        Continue
      </button>
      <router-link to='/'>
        <button className='btn btn-danger'>Cancel</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { burger, makeBurger } from '../composables/store'
import { createOrder } from '../database/db'

export default {
  name: 'BurgerOrder',
  setup() {
    return {
      ...toRefs(burger),
      makeBurger,
      createOrder
    }
  }
}
</script>

<style scoped>

</style>