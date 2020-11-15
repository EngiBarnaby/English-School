import Vue from 'vue'
import VueRouter from 'vue-router'

import UserStore from '@/store/modules/authUser'

import Home from "@/views/HomePage"
import Vocabulary from "@/views/Vocabulary"
import Train from "@/views/TrainingPage"
import Puzzle from "@/views/PuzzlePage"
import Test from "@/views/TestRout"
import AuthUser from '@/views/AuthUser'
import Profile from '@/views/Profile'
import Grammar from '@/views/Grammar'

import Comp1 from "@/components/test-router/component1"
import Comp2 from "@/components/test-router/component2"
import TestAxios from "@/components/test-router/testAxios"
import TestProps from "@/components/test-router/testProps"
import TestJWT from "@/components/test-router/jwt-test"
import СardForSettings from "@/components/test-router/cardForSettings"

import TrainSettings from "@/components/training-words/training-settings"
import UserResult from "@/components/training-words/UserResult"
import TrainingEng from "@/components/training-words/TrainingEng"
import TrainingRus from "@/components/training-words/TrainingRus"
import TrainingInputEng from "@/components/training-words/TrainingInputEng"


import Global from "@/components/vocabulary/AllWords"




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/vocabulary',
    // name: 'vocabulary',
    component: Vocabulary,
    props : true,
    meta : { requiresAuth : true },
    children : [
      {
        path : "",
        name : "global",
        component : Global,
      },
      {
        path : "user-words",
        name : "user-words",
        component : () => import('@/components/vocabulary/UserWords'),
      },
      {
        path : "verbs",
        name : "verbs",
        component : () => import('@/components/vocabulary/IrregularVerbs'),
      },
    ]
  },

  {
    path: '/puzzle',
    component: Puzzle,
    props : true,
    meta : { requiresAuth : true },
    children : [
      {
        path : '',
        name : 'puzzle-settings',
        component : () => import('@/components/puzzle/puzzleSettings'),
        props : true
      },
      {
        path : 'puzzles',
        name : 'puzzles',
        component : () => import('@/components/puzzle/puzzles'),
        props : true
      },
      {
        path : 'puzzles-stats',
        name : 'puzzles-stats',
        component : () => import('@/components/puzzle/puzzleStats'),
        props : true
      },
    ]
  },

  {
    path: '/train',
    component: Train,
    props : true,
    meta : { requiresAuth : true },
    children : [
      {
        path : "",
        name : "settings",
        component : TrainSettings,
        props : true
      },
      {
        path : "TrainingEng",
        name : "TrainingEng",
        component : TrainingEng,
        props : true
      },
      {
        path : "TrainingRus",
        name : "TrainingRus",
        component : TrainingRus,
        props : true
      },
      {
        path : "TrainingInputEng",
        name : "TrainingInputEng",
        component : TrainingInputEng,
        props : true
      },
      {
        path : "UserResult",
        name : "UserResult",
        component : UserResult,
        props : true
      },
    ]
  },
  
  {
    path: '/trainSettings',
    name: 'trainSettings',
    component: TrainSettings,
    props : true
  },

  {
    path: '/test',
    name: 'test',
    component: Test,
    props : true,
    children : [
      {
        path : "comp1",
        component : Comp1
      },
      {
        path : "comp2",
        name : "comp2",
        component : Comp2
      },
      {
        path : "TestProps",
        name : "TestProps",
        component : TestProps,
        props : true
      },
      {
        path : "СardForSettings",
        name : "СardForSettings",
        component : СardForSettings,
        props : true
      },
      {
        path : "testAxios",
        name : "testAxios",
        component : TestAxios
      },
      {
        path : "jwt-test",
        name : 'jwt-test',
        component : TestJWT,
        props : true
      },
      {
        path : "test-router",
        name : "test-router",
        component : () => import('@/components/test-router/testRouterQuery'),
      },
    ]
  },

  {
    path : "/AuthUser",
    name : "AuthUser",
    component : AuthUser,
    props : true,
    children : [
      {
        path : "login",
        name : "login",
        props : true,
        component : () => import('@/components/auth-user/loginUser'),
      },
      {
        path : "register",
        name : "register",
        component : () => import('@/components/auth-user/registerUser'),
      },
      {
        path : "form-test",
        name : "form-test",
        component : () => import('@/components/auth-user/testValidate'),
      },
    ]
  },

  {
    path: `/profile/:id`,
    // name: 'profile',
    component: Profile,
    props : true,
    meta : { requiresAuth : true },
    children : [
      {
        path : "",
        name : "user-profile",
        component : () => import('@/components/userProfile/userProfile'),
      },
      {
        path : "user-stats",
        name : "user-stats",
        component : () => import('@/components/userProfile/userStat'),
      },
    ]
  },

  {
    path: `/grammar`,
    // name: 'profile',
    component: Grammar,
    props : true,
    meta : { requiresAuth : true },
    children : [
      {
        path : "",
        name : "gramar-list",
        component : () => import('@/components/grammar/grammarList'),
      },
      {
        path : "grammars",
        name : "grammars",
        component : () => import('@/components/grammar/grammars'),
        props : true,
      },
      {
        path : "grammar-detail",
        name : "grammar-detail",
        component : () => import('@/components/grammar/grammarDetail'),
        props : true,
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth) && !UserStore.state.token){
    next('/AuthUser/login')
  }
  else{
    next()
  }
});

export default router
