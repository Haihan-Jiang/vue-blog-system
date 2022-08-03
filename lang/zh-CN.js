export default {
  app: {
    name: '路必达科技',
    title: '路必达科技',
    subtitle: '文档系统',
    tip: {
      title: '欢迎来到 CTFever',
      content: '这是为 CTF 发烧者准备的的工具套件，助你过关斩将、攻克难关。第一个版本已经开发完毕，我们目前正在着手高级功能的开发，敬请期待。欢迎给我们的开源仓库 star、pr。同时我们正在招募 i18n 团队，欢迎加入我们！',
    },
    slogan: '智能轮胎, 有路必达'
  },
  search: {
    placeholder: '搜索...',
    search_result_tip: '搜索结果'
  },
  topbar: {
    login: '登陆',
    signup: '创建账号',
    back: '返回',
    appearance: {
      light: '亮色',
      dark: '暗色',
      auto: '自动'
    },
  },
  action: {
    marked: '已收藏',
    unmarked: '已移出收藏'
  },
  common: {
    radix: {
      bin: '二进制',
      oct: '八进制',
      dec: '十进制',
      hex: '十六进制'
    },
    btn_encode: '编码',
    btn_decode: '解码',
    btn_encrypt: '加密',
    btn_decrypt: '解密',
    btn_execute: '执行',
    btn_calculate: '计算',
    btn_run: '运行',
    btn_swap: '交换',
    btn_backspace: '← 退格',
    btn_clean: '清空',
    text_encode: '编码',
    text_decode: '解码',
    text_encoded: '已编码内容',
    text_decoded: '已解码内容',
    text_plain: '原文',
    text_cipher: '密文',
    text_original_content: '原始内容',
    text_result_content: '结果',
    text_input: '输入',
    text_output: '输出',
    text_secret: '密钥',
    text_algorithm: '算法',
    text_offset: '偏移量',
    text_mode: '模式',
    text_type: '类型',
    text_radix: '进制',
    text_string: '字符串',
  },
  page: {
    home: {
      favoriteKit: {
        title: '收藏夹',
        desc: '收藏的常用工具集'
      },
    },
    notFound: {
      title: '未找到页面',
      message: '探索的精神可贵，但很遗憾这里什么都没有 :(',
      btn: '回到首页',
      btnPrevious: '返回',
    },
  },
  toolkit: {
    Sensor: {
      title: '传感器',
      desc: '传感器文档与工具',
    },
    vehTml: {
      title: '车载终端',
      desc: '车载终端文档与工具'
    },
    iotPfm: {
      title: '物联网平台',
      desc: '物联网平台工具'
    },
    experSens: {
      title: '实验版传感器',
      desc: '实验版传感器文档与工具'
    },
    mes: {
      title: 'MES系统',
      desc: 'MES系统和上位机文档与工具'
    },
    tpvss: {
      title: 'TPVSS',
      desc: 'TPVSS实验与工具'
    },
  },
  tool: {
    /*传感器*/
    sensRdDoc: {
      title: '传感器研发文档',
      desc: '传感器研发文档',
      continuity: '连续(自动识别可打印字符)',
      split: '逗号分隔'
    },
    sensUpCmpRdDoc: {
      title: '传感器上位机文档',
      desc: '传感器上位机文档'
    },
    ldCalibUpCmpDoc: {
      title: '载重标定上位机文档',
      desc: '载重标定上位机文档'
    },
    sensUser: {
      title: '传感器用户文档',
      desc: '传感器用户文档'
    },
    sensVcs: {
      title: '传感器版本管理',
      desc: '传感器版本管理'
    },
    tyrePrm: {
      title: '轮胎规格参数',
      desc: '轮胎规格参数'
    },

    /*车载终端*/
    vehTmlRdDoc: {
      title: '车载终端研发文档',
      desc: '车载终端研发文档'
    },
    vehTmlUserDoc: {
      title: '车载终端用户文档',
      desc: '车载终端用户文档'
    },
    vehTmlVcs: {
      title: '车载终端版本管理',
      desc: '车载终端版本管理',
      rows: '栏数'
    },
    iotSimCardMgmt: {
      title: '物联网卡管理',
      desc: '物联网卡管理'
    },


    /*物联网平台*/

    //物联网平台研发文档
    iotRdDoc: {
      title: '物联网平台研发文档',
      desc: '物联网平台研发文档'
    },
    //物联网平台用户文档
    iotUserDoc: {
      title: '物联网平台用户文档',
      desc: '物联网平台用户文档'
    },

    
    /* 实验版传感器*/
    experSensRdDoc: {
      title: '实验版传感器研发文档',
      desc: '实验版传感器研发文档'
    },
    experSensUpCmpDoc: {
      title: '实验版传感器上位机文档',
      desc: '实验版传感器上位机文档'
    },
    experSensUserDoc: {
      title: '实验版传感器用户文档',
      desc: '实验版传感器用户文档'
    },

    /*MES*/
   mesProdUpCmpDoc: {
      title: 'MES系统传感器量产上位机文档',
      desc: 'MES系统传感器量产上位机文档'
    },
    mesVehProdUpCmpDoc: {
      title: 'MES系统车载终端量产上位机文档',
      desc: 'MES系统车载终端量产上位机文档'
    },
    mesWebDoc: {
      title: 'MES Web系统文档',
      desc: 'MES Web系统文档'
    },


    /*TPVSS*/
    tpvssRdDoc: {
      title: 'TPVSS研发文档',
      desc: 'TPVSS研发文档',
      baud: '波特率',
      status: '状态',
      resend: '定时发送',
      resendDelay: '自动发送延时',
      autoEOL: '自动发送换行',
      connected: '已连接',
      disconnected: '已断开',
      open: '打开串口',
      close: '关闭串口',
      tip: {
        unknown: '未知错误',
        opened: '串口已打开',
        closed: '串口已关闭'
      }
    },
    tpvssUserDoc: {
      title: 'TPVSS用户文档',
      desc: 'TPVSS用户文档',
      crcModel: '校验模型',
      inputMode: '输入模式',
      checksum_result: '校验计算结果'
    },
    tpvssAlgRd: {
      title: 'TPVSS算法文档',
      desc: 'TPVSS算法文档'
    },
  }
}
