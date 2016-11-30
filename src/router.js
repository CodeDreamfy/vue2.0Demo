import index from './index'
import profileStep1 from './user/addProfile1'
import profileStep2 from './user/addProfile2'
import profileStep3 from './user/addProfile3'

const router = [
  { path : '/index', component: index},
  { path: '/profileStep1', component:profileStep1},
  { path: '/profileStep2', component:profileStep2},
  { path: '/profileStep3', component:profileStep3},
]


export default router;
