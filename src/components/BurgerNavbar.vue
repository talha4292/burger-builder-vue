<template>
  <div class="navbar">
    <div className='logo-container'>
      <img
        class='logo'
        src='../assets/logo.png'
        alt='Burger Builder'
      />
    </div>
    <div class='links'>
      <router-link to="/">Burger Builder</router-link>
      <template v-if="user">
        <router-link to="/orders">Orders</router-link>
       
        <a class='text-white' @click="logout">
          <router-link to="/auth">Logout</router-link>
        </a>
      </template>
      <template v-else>
        <router-link to="/auth">Login</router-link>
      </template>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import { onAuthStateChanged, signOut } from 'firebase/auth'
  import { auth } from '../database/firebase-config'

  export default {
    name: 'BurgerNavbar',
    setup() {
      const user = ref({})
      onMounted(() => {
        onAuthStateChanged(auth, (currentUser) => {
          user.value = currentUser
        })
      })

      const logout = async () => {
        await signOut(auth)
      }

      return {
        user,
        logout
      }
    }
  }
</script>

<style scoped>

</style>