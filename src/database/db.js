import { db, collection, query, where, getDocs, doc, setDoc } from './firebase-config'
import { getAuth } from "firebase/auth";
import moment from 'moment'

async function getOrders () {
  const auth = getAuth();
  const user = auth.currentUser;
  const ordersCol = collection(db, 'orders')
  const q = query (ordersCol, where("user", "==", user.uid))
  const orderSnapshot = await getDocs(q)
  const orderList = orderSnapshot.docs.map((doc) => doc.data())
  return orderList
}

async function createOrder (burger, price) {
  const auth = getAuth();
  const user = auth.currentUser;
  const order = {
    id: moment().toISOString(),
    ingredients: burger,
    price,
    user: user.uid
  }
  await setDoc(doc(db, 'orders', order.id), order).then(window.alert('Order created')
  )
}

export { getOrders, createOrder }
