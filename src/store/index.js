import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: 'true',
  state: {
    showLoading: true,

    // mock odata goes here
    // bookShelf: [],
    bookShelf: [
      {
        _id: '53115e30173bfacb4904897e',
        title: '永夜君王',
        author: '烟雨江南',
        cover: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F683452%2F683452_24d1a998722240c4ae3bddf677fb72a6.jpg%2F',
        updated: '2019-01-09T16:23:59.445Z',
        lastChapter: '第一千五百一十六章  美丽新世界'
      },

      {
        _id: '53115e30173bfacb4904897e',
        title: '永夜君王',
        author: '烟雨江南',
        cover: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F683452%2F683452_24d1a998722240c4ae3bddf677fb72a6.jpg%2F',
        updated: '2019-01-09T16:23:59.445Z',
        lastChapter: '第一千五百一十六章  美丽新世界'
      },

      {
        _id: '53115e30173bfacb4904897e',
        title: '永夜君王',
        author: '烟雨江南',
        cover: 'http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F683452%2F683452_24d1a998722240c4ae3bddf677fb72a6.jpg%2F',
        updated: '2019-01-09T16:23:59.445Z',
        lastChapter: '第一千五百一十六章  美丽新世界'
      }
    ],

    currBook: '53115e30173bfacb4904897e',

  },
  getters,
  actions
})