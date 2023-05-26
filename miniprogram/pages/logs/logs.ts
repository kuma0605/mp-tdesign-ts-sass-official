// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    placement: 'left',
    sidebar: [],
    baseSidebar: [
      {
        title: '菜单1',
      },
      {
        title: '菜单二',
      },
      {
        title: '菜单三',
      },
      {
        title: '菜单四',
      },
      {
        title: '菜单五',
      },
      {
        title: '菜单六',
      },
      {
        title: '菜单七',
      },
      {
        title: '菜单八',
      },
    ],
  },

  
  
    openDrawerBase() {
      this.setData({
        visible: true,
        sidebar: this.data.baseSidebar as any,
      });
    },

    itemClick(e: { detail: any; }) {
      console.log(e.detail);
    },

    overlayClick(e: { detail: any; }) {
      console.log(e.detail);
    },
  
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
})


