import { reactive } from 'vue'

const burger = reactive({
  ingredients: { lettuce: 0, bacon: 0, cheese: 0, meat: 0 },
  price: 0
})

const makeBurger = (ingredients) => {
  const burger = []

  for (let i = 0; i < ingredients.lettuce; i++) {
    burger.push({key: burger.length, className:'lettuce'})
  }
  for (let i = 0; i < ingredients.bacon; i++) {
    burger.push({key: burger.length, className:'bacon'})
  }
  for (let i = 0; i < ingredients.cheese; i++) {
    burger.push({key: burger.length, className:'cheese'})
  }
  for (let i = 0; i < ingredients.meat; i++) {
    burger.push({key: burger.length, className:'meat'})
  }
  // if (burger.length === 0) {
  //   return <h2>Add ingredients here</h2>
  // }
  return burger
}

export {burger, makeBurger}