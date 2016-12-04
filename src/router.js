import index from './index'
import profile from './user/profile'
import profileStep1 from './user/addProfile1'
import profileStep2 from './user/addProfile2'
import profileStep3 from './user/addProfile3'
import profileStep4 from './user/addProfile4'
import profileStep5 from './user/addProfile5'

const router = [
  { path: '/', component: index},
  { path : '/index', component: index},
  { path: '/profile', component: profile,
    children: [
      { path: 'step1', component:profileStep1},
      { path: 'step2', component:profileStep2},
      { path: 'step3', component:profileStep3},
      { path: 'step4', component:profileStep4},
      { path: 'step5', component:profileStep5},
    ]
  }
]


export default router;
