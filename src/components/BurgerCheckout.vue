<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container"
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <div class="modal-body">
          <h4>Your Order Details</h4>
          <ul>
            <li>Lettuce: {{ ingredients.lettuce }}</li>
            <li>Bacon: {{ ingredients.bacon }}</li>
            <li>Cheese: {{ ingredients.cheese }}</li>
            <li>Meat: {{ ingredients.meat }}</li>
          </ul>
          <h5>Total Price: RS. {{ price }}</h5>
        </div>
        <div class="modal-footer">
          <h6>Continue to checkout?</h6>
          <router-link
            className='btn btn-primary'
            to='/order'
          >
            Continue
          </router-link>
          <button className='btn btn-danger' @click="$emit('close')">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { burger } from '../composables/store'

export default {
  name: 'BurgerCheckout',
  setup() {
    return {
      ...toRefs(burger)
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
