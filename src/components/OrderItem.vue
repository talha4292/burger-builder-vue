<template>
  <div className='order'>
    <p>
      Ingredients:{{ ' ' }}
      <span className='ing-item'>
        bacon ({{order.ingredients.bacon}})
      </span>
      <span className='ing-item'>
        cheese ({{order.ingredients.cheese}})
      </span>
      <span className='ing-item'>
        lettuce ({{order.ingredients.lettuce}})
      </span>
      <span className='ing-item'>
        meat ({{order.ingredients.meat}})
      </span>
    </p>
    <p>
      Price <strong>RS {{order.price}}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: Object
  }
}
</script>

<style scoped>

.ing-item {
  text-transform: capitalize;
  display: inline-block;
  margin: 0px 8px;
  border: 1px solid rgb(204, 204, 204);
  padding: 5px;
}
.order {
  width: 80%;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: rgb(204 204 204) 0px 2px 3px;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
}

</style>