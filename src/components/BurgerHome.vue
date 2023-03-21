<template>
  <div>
    <BurgerCheckout
      @close="modalShow = false"
      v-show="modalShow"
    />
    <div className='burgerIngredients'>
      <div className='top' />
        <div v-for="ingredient in makeBurger(ingredients)" :key="ingredient.key" :class="ingredient.className"></div>
      <div className='bottom' />
    </div>
    <div className='ingredientsBlock'>
      <h4>
        Current Price: <strong>Rs. {{ price }}</strong>
      </h4>
      <p>Lettuce</p>
      <div className='ingredientBtns'>
        <button
          @click="addRemoveIngredient('remove', 'lettuce')"
          className='ingredientBtn'
          :disabled='ingredients.lettuce < 1'
        >
          Less
        </button>
        <button
          @click="addRemoveIngredient('add', 'lettuce')"
          className='ingredientBtn'
        >
          More
        </button>
      </div>
      <p>Bacon</p>
      <div className='ingredientBtns'>
        <button
          @click="addRemoveIngredient('remove', 'bacon')"
          className='ingredientBtn'
          :disabled='ingredients.bacon < 1'
        >
          Less
        </button>
        <button
          @click="addRemoveIngredient('add', 'bacon')"
          className='ingredientBtn'
        >
          More
        </button>
      </div>
      <p>Cheese</p>
      <div className='ingredientBtns'>
        <button
          @click="addRemoveIngredient('remove', 'cheese')"
          className='ingredientBtn'
          :disabled='ingredients.cheese < 1'
        >
          Less
        </button>
        <button
          @click="addRemoveIngredient('add', 'cheese')"
          className='ingredientBtn'
        >
          More
        </button>
      </div>
      <p>Meat</p>
      <div className='ingredientBtns'>
        <button
          @click="addRemoveIngredient('remove', 'meat')"
          className='ingredientBtn'
          :disabled='ingredients.meat < 1'
        >
          Less
        </button>
        <button
          @click="addRemoveIngredient('add', 'meat')"
          className='ingredientBtn'
        >
          More
        </button>
      </div>
      <template v-if="user">
        <router-link
          :style="{ pointerEvents: price === 0 ? 'none' : '' }"
          @click='modalShow = true'
          className='orderBtn text-decoration-none'
          to='/'
        >
          ORDER NOW
        </router-link>
      </template>
      <template v-else>
        <router-link
          :style="{ pointerEvents: price === 0 ? 'none' : '' }"
          className='orderBtn text-decoration-none'
          to='/auth'
        >
          SIGN UP TO ORDER
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, toRefs } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../database/firebase-config'
import BurgerCheckout from './BurgerCheckout.vue'
import { burger, makeBurger } from '../composables/store'

export default {
  name: 'BurgerHome',
  components: {
    BurgerCheckout
  },
  setup() {
    const user = ref({})
    const modalShow = ref(false)

    onMounted(() => {
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
      })
    })

    const addRemoveIngredient = (action, ingredient) => {
      switch (ingredient) {
        case 'lettuce': {
          if (action === 'add') {
            burger.ingredients.lettuce += 1
            burger.price += 200
          } else {
            if (burger.ingredients.lettuce > 0) {
              burger.ingredients.lettuce -= 1
              burger.price -= 200
            }
          }
          break
        }
        case 'bacon': {
          if (action === 'add') {
            burger.ingredients.bacon += 1
            burger.price += 250
          } else {
            if (burger.ingredients.bacon > 0) {
              burger.ingredients.bacon -= 1
              burger.price -= 250
            }
          }
          break
        }
        case 'cheese': {
          if (action === 'add') {
            burger.ingredients.cheese += 1
            burger.price += 320
          } else {
            if (burger.ingredients.cheese > 0) {
              burger.ingredients.cheese -= 1
              burger.price -= 320
            }
          }
          break
        }
        case 'meat': {
          if (action === 'add') {
            burger.ingredients.meat += 1
            burger.price += 400
          } else {
            if (burger.ingredients.meat > 0) {
              burger.ingredients.meat -= 1
              burger.price -= 400
            }
          }
          break
        }
        default:
          break
      }
    }

    const handleOrder = () => {
      modalShow.value = true
    }



    return {
      user,
      modalShow,
      ...toRefs(burger),
      makeBurger,
      handleOrder,
      addRemoveIngredient,
    }
  },
}
</script>

<style>

.burgerIngredients {
  height: 400px;
  width: 100%;
  overflow: scroll;
  margin-bottom: 200px;
}
.burgerIngredients p {
  text-align: center;
}
h2 {
  text-align: center;
}
.ingredientsBlock {
  background-color: #f4b46c;
  display: table;
  width: 100%;
  padding: 30px;
  text-align: center;
}
.ingredientsBlock p {
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
}
.ingredientBtns {
  margin: 10px 0 20px;
  display: flex;
  justify-content: center;
}
.ingredientBtn {
  border: 0;
  background-color: #c17116;
  color: white;
  padding: 10px;
  cursor: pointer;
  display: table;
  width: 95px;
  margin: 0 5px;
}
.ingredientBtn:disabled{
  background:  #533618;
  color: #ccc;
  cursor: no-drop;
}
.orderBtn {
  border: 0;
  font-weight: bold;
  cursor: pointer;
  background-color: #dad735;
  outline: none;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  -webkit-box-shadow: 2px 2px 2px #966909;
  box-shadow: 2px 2px 2px #966909;
}
.orderBtn:disabled{
  background:  #533618;
  color: #ccc;
  cursor: no-drop;
}
.top {
  background-image: url(../assets/top.png);
  background-size: 40%;
  height: 150px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
}
.bottom {
  background-image: url(../assets/bottom.png);
  background-size: 40%;
  height: 100px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
}

.bacon {
  width: 39%;
  height: 4%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#bf3813),
    to(#c45e38)
  );
  background: -webkit-linear-gradient(#bf3813, #c45e38);
  background: -o-linear-gradient(#bf3813, #c45e38);
  background: linear-gradient(#bf3813, #c45e38);
  margin: 0.5% auto;
}
.cheese {
  width: 42%;
  height: 7%;
  margin: 0.5% auto;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f4d004),
    to(#d6bb22)
  );
  background: -webkit-linear-gradient(#f4d004, #d6bb22);
  background: -o-linear-gradient(#f4d004, #d6bb22);
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
}
.meat {
  width: 39%;
  height: 10%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#7f3608),
    to(#702e05)
  );
  background: -webkit-linear-gradient(#7f3608, #702e05);
  background: -o-linear-gradient(#7f3608, #702e05);
  background: linear-gradient(#7f3608, #702e05);
  margin: 0.5% auto;
  border-radius: 15px;
}

.lettuce {
  width: 40%;
  height: 10%;
  margin: 0.5% auto;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#228c1d),
    to(#91ce50)
  );
  background: -webkit-linear-gradient(#228c1d, #91ce50);
  background: -o-linear-gradient(#228c1d, #91ce50);
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
}


</style>
