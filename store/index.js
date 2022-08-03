import createVuexAlong from 'vuex-along';

export const plugins = [createVuexAlong({
  name: "ctfever-preferences",
  local: {
    list: ["toolkits"],
    isFilter: true,
  },
})];

export const state = () => ({
  toolkits: [
    {

     /* 传感器*/
      title: 'toolkit.Sensor.title',
      description: 'toolkit.Sensor.desc',
      icon: 'hardware-chip-outline',
      tools: [
        {
          //传感器研发文档
          title: 'tool.sensRdDoc.title',
          description: 'tool.sensRdDoc.desc',
          // route: '/tools/sens-rd-doc',
          links: 'https://www.baidu.com',
          tags: ['研发文档'],
        },
        {
          //传感器上位机文档
          title: 'tool.sensUpCmpRdDoc.title',
          description: 'tool.sensUpCmpRdDoc.desc',
          // route: '/tools/sens-upCmp-rd-doc',
          links: 'https://www.baidu.com',
          tags: ['研发文档'],
        },
        {
          //载重标定上位机文档 load calibration
          title: 'tool.ldCalibUpCmpDoc.title',
          description: 'tool.ldCalibUpCmpDoc.desc',
          route: '/tools/ld-calib-upCmp-doc',
          tags: ['研发文档'],
        },
        {
          //传感器用户文档
          title: "tool.sensUser.title",
          description: 'tool.sensUser.desc',
          route: '/tools/sens-user',
          tags: ['用户文档'],
        },
        {
          //传感器版本管理 sensor version control
          title: 'tool.sensVcs.title',
          description: 'tool.sensVcs.desc',
          route: '/tools/sens-vcs',
          tags: ['研发文档'],
        },
        //轮胎规格参数
        {
          title: 'tool.tyrePrm.title',
          description: 'tool.tyrePrm.desc',
          route: '/tools/tyre-param-tool',
          tags: ['工具'],
        },
      ]
    },
    /*车载终端 vehicle terminal*/
    {
      title: 'toolkit.vehTml.title',
      description: 'toolkit.vehTml.desc',
      icon: 'car-outline',
      tools: [
        {
          title: 'tool.vehTmlRdDoc.title',
          description: 'tool.vehTmlRdDoc.desc',
          route: '/tools/veh-tml-rd-doc',
          tags: ['研发文档'],
        },
        {
          title: 'tool.vehTmlUserDoc.title',
          description: 'tool.vehTmlUserDoc.desc',
          route: '/tools/veh-tml-user-doc',
          tags: ['用户文档'],
        },
        {
          title: 'tool.vehTmlVcs.title',
          description: 'tool.vehTmlVcs.desc',
          route: '/tools/veh-tml-vcs',
          tags: ['研发文档'],
        },
        {
          title: 'tool.iotSimCardMgmt.title',
          description: 'tool.iotSimCardMgmt.desc',
          route: '/tools/iot-simCard-mgmt',
          tags: ['工具'],
        },

      ]
    },

    /*物联网平台 */
    {
      title: 'toolkit.iotPfm.title',
      description: 'toolkit.iotPfm.desc',
      icon: 'bluetooth-outline',
      tools: [
        {
          title: 'tool.iotRdDoc.title',
          description: 'tool.iotRdDoc.desc',
          route: '/tools/iotRdDoc',
          tags: ['研发文档'],
        },
        {
          title: 'tool.iotUserDoc.title',
          description: 'tool.iotUserDoc.desc',
          route: '/tools/iotUserDoc',
          tags: ['用户文档'],
        },
      ]
    },
    /*实验版传感器*/
    {
      title: 'toolkit.experSens.title',
      description: 'toolkit.experSens.desc',
      icon: 'hammer-outline',
      tools: [
        {
          title: 'tool.experSensRdDoc.title',
          description: 'tool.experSensRdDoc.desc',
          route: '/tools/exper-sens-rd-doc',
          tags: ['研发文档'],
        },
        {
          title: 'tool.experSensUpCmpDoc.title',
          description: 'tool.experSensUpCmpDoc.desc',
          route: '/tools/exper-sens-upCmp-doc',
          tags: ['研发文档'],
          disabled: true,
        },
        {
          title: 'tool.experSensUserDoc.title',
          description: 'tool.experSensUserDoc.desc',
          route: '/tools/exper-sens-userDoc',
          tags: ['用户文档'],
          disabled: true,
        },
      ]
    },

    /*MES系统*/
    {    
      title: 'toolkit.mes.title',
      description: 'toolkit.mes.desc',
      icon: 'wifi-outline',
      tools: [
        {
          title: 'tool.mesProdUpCmpDoc.title',
          description: 'tool.mesProdUpCmpDoc.desc',
          route: '/tools/mes-prod-upCmp-doc',
          tags: ['研发文档'],
          disabled: true,
        },
        {
          title: 'tool.mesVehProdUpCmpDoc.title',
          description: 'tool.mesVehProdUpCmpDoc.desc',
          route: '/tools/mes-veh-prod-upcmp-doc',
          tags: ['研发文档'],
        },
        {
          title: 'tool.mesWebDoc.title',
          description: 'tool.mesWebDoc.desc',
          route: '/tools/mes-web-doc',
          tags: ['研发文档'],
        },
      ]
    },
    /*TPVSS*/
    {
      title: 'toolkit.tpvss.title',
      description: 'toolkit.tpvss.desc',
      icon: 'bulb-outline',
      tools: [
        {
          title: 'tool.tpvssRdDoc.title',
          description: 'tool.tpvssRdDoc.desc',
          route: '/tools/serial',
          tags: ['研发文档'],
        },
        {
          title: 'tool.tpvssUserDoc.title',
          description: 'tool.tpvssUserDoc.desc',
          route: '/tools/tpvss-user-doc',
          tags: ['用户文档'],
        },
        {
          title: 'tool.tpvssAlgRd.title',
          description: 'tool.tpvssAlgRd.desc',
          route: '/tools/tpvss-alg-rd',
          tags: ['研发文档'],
          disabled: true,
        },
      ]
    }
  ],
})
