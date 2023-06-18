import { createRouter, createWebHistory } from 'vue-router';
import CartList from '../components/cart/CartList.vue';
import ProductList from '../components/product/ProductList.vue';
import NotFound from '../components/NotFound.vue';
import ProductItem from '../components/product/ProductItem.vue';
import LoginBox from '../components/login/LoginBox.vue';

const router = createRouter({ 
  history: createWebHistory(), 
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    },
    {
      path: "/products", 
      component: ProductList,
    }, 
    {
      path: "/cart",
      component: CartList,
    },
    {
      path: '/login', 
      component: LoginBox,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token"); 
        if (token) 
          next('/products');
        else 
          next();
      }
    },
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: '/products/:id', 
      component: ProductItem,
      props: true,
    },
  ],
});

  
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (!token && to.path !== '/login') 
    next('/login'); 
  else 
    next();
});

export default router;