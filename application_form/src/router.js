import Vue from 'vue'
import Router from 'vue-router'
import Event from './views/event/Event.vue'
import Notification from './views/notification/Notification.vue'
import Setting from './views/setting/Setting.vue'
import Home from './views/home/Home.vue'
import notificationContent from './components/notification/notificationContent.vue'
import EventApply from "@/components/event/event_apply";
import EventApproved from "@/components/event/event_approved";
import EventRejected from "@/components/event/event_rejected";
import EventView from "@/components/event/event_view";
import EventApprovedDetail from "@/components/event/event_approved_detail";
import EventRejectedDetail from "@/components/event/event_rejected_detail";
import EventAdd from "@/components/event/event_add";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notificationContent',
      name: 'notificationContent',
      component: notificationContent
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/eventView',
      name: 'eventView',
      component: EventView
    },
    {
      path: '/EventApprovedDetail',
      name: 'EventApprovedDetail',
      component: EventApprovedDetail
    },
    {
      path: '/EventRejectedDetail',
      name: 'EventRejectedDetail',
      component: EventRejectedDetail
    },
    {
      path: '/event/',
      name: 'event',
      component: Event,
      children:[
        {
          path: 'EventApply',
          name: 'EventApply',
          component: EventApply
        },
        {
          path: 'EventApproved',
          name: 'EventApproved',
          component: EventApproved
        },
        {
          path: 'EventRejected',
          name: 'EventRejected',
          component: EventRejected
        },
        {
          path: 'EventAdd',
          name: 'EventAdd',
          component: EventAdd
        }
      ]
    },
  
  ]
})
