import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import service from '@/components/service'
import collection from '../components/pages/service/collection'
import details from '../components/pages/service/details'
import sampleData from '@/components/sample_data'
import annotationPlatform from '@/components/annotationPlatform'
import aboutUs from '@/components/about_us'
import moreData from '../components/pages/sample_data/more_data'
import downLoad from '../components/pages/sample_data/down_load'
import callUs from '../components/pages/sample_data/call_us'
import newsDetails from '../components/pages/home/news_details'
import legalNotice from '../components/pages/legal_notice'
import privacyContract from '../components/pages/privacy_contract'
import serviceContract from '../components/pages/service_contract'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/service',
      name: 'service',
      component: service,
    },
    {
      path: '/service/collection',
      name: 'collection',
      component: collection,
    },
    {
      path: '/service/details',
      name: 'details',
      component: details,
    },
    {
      path: '/sampleData',
      name: 'sampleData',
      component: sampleData,
    },
    {
      path: '/sampleData/moreData',
      name: 'moreData',
      component: moreData,
    },
    {
      path: '/sampleData/downLoad',
      name: 'downLoad',
      component: downLoad,
    },
    {
      path: '/callUs',
      name: 'callUs',
      component: callUs,
    },
    {
      path: '/annotationPlatform',
      name: 'annotationPlatform',
      component: annotationPlatform,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
    },
    {
      path: '/newsDetails',
      name: 'newsDetails',
      component: newsDetails,
    },
    {
      path: '/legalNotice',
      name: 'legalNotice',
      component: legalNotice,
    },
    {
      path: '/privacyContract',
      name: 'privacyContract',
      component: privacyContract,
    },
    {
      path: '/serviceContract',
      name: 'serviceContract',
      component: serviceContract,
    },
  ],


  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
