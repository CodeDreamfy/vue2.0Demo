import index from './index'
import profile from './user/profile'
import profileStep1 from './user/addProfile1'
import profileStep2 from './user/addProfile2'
import profileStep3 from './user/addProfile3'

const router = [
  { path : '/index', component: index},
  { path: '/profile', component: profile,
    children: [
      { path: 'step1', component:profileStep1},
      { path: 'step2', component:profileStep2},
      { path: 'step3', component:profileStep3}
    ]
  }
]


export default router;
