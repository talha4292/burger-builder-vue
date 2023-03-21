<template>
  <div className='Auth-form-container'>
    <div className='Auth-form'>
      <template v-if="flag === 'login'">
          <h2>Login here</h2>
      </template>
      <template v-else>
          <h2>Register your account</h2>
      </template>
      <div className='Auth-form-content'>
        <div className='form-group mt-3'>
          <input
            type='email'
            className='form-control mt-1'
            placeholder='Enter email'
            v-model="email"
          />
        </div>
        <div className='form-group mt-3'>
          <input
            type='password'
            className='form-control mt-1'
            placeholder='Enter password'
            v-model="password"
          />
        </div>
        <template v-if="error"> 
          <p className='text-center text-danger mt-2'>{{ error }}</p>
        </template>
        <div className='d-grid gap-2 mt-3'>
          <button @click='onSubmit' className='btn btn-primary'>
            Submit
          </button>
        </div>
        <p className='d-grid gap-2 mt-3'>
           <template v-if="flag === 'login'">
              <router-link
                className='btn btn-secondary'
                @click="flag = 'register'"
                to='/auth'
              >
                Register
              </router-link>
            </template>
            <template v-else>
              <router-link
                className='btn btn-secondary'
                @click="flag = 'login'"
                to='/auth'
              >
                Login
              </router-link>
            </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../database/firebase-config'
import router from '@/router'

export default {
    name: 'BurgerAuth',
    setup() {
      const email = ref('')
      const password = ref('')
      const flag = ref('register')
      const error = ref('')

      const onSubmit = async () => {
        try {
          if (flag.value === 'login') {
            await signInWithEmailAndPassword(auth, email.value, password.value)
          } else if (flag.value === 'register') {
            await createUserWithEmailAndPassword(auth, email.value, password.value)
            window.alert('Account Created')
            error.value = ''
          }
          router.push({ name: 'BurgerHome' })
        } catch (error) {
          error.value = this.error.message
          console.log(this.error.message)
        }
      }

      return {
        flag,
        email,
        password,
        error,
        onSubmit
      }
    }
}
</script>

<style scoped>

.App {
  background-color: white;
}

.Auth-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  text-align: center;
}

.Auth-form {
  width: 420px;
  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  border-radius: 8px;
  background-color: white;
}

.Auth-form-content {
  padding-left: 12%;
  padding-right: 12%;
}

.Auth-form-title {
  text-align: center;
  margin-bottom: 1em;
  font-size: 24px;
  color: rgb(34, 34, 34);
  font-weight: 800;
}

label {
  font-size: 14px;
  font-weight: 600;
  color: rgb(34, 34, 34);
}

</style>