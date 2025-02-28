export const translations = {
  zh: {
    // 通用
    currentVersion:'当前版本',
    checkUpdate:'检查更新',
    edit: '编辑布局',
    done: '完成编辑',
    reset: '重置布局',
    columns: '列数',
    showCard: '显示卡片',
    hideCard: '隐藏卡片',
    language: {
      toggle: '切换语言',
      current: 'Zh'
    },
    weekday: {
      'Monday': '星期一',
      'Tuesday': '星期二',
      'Wednesday': '星期三',
      'Thursday': '星期四',
      'Friday': '星期五',
      'Saturday': '星期六',
      'Sunday': '星期日',
    },
    sidebar: {
      show: '显示侧边栏',
      hide: '隐藏侧边栏',
      menu: {
        dashboard: '仪表盘',
        overview: '总览',
        devices: '设备',
        automation: '自动化',
        settings: '设置',
        logs: '日志'
      }
    },
    theme: {
      light: '切换到暗色模式',
      dark: '切换到亮色模式'
    },
    
    // 空状态
    empty: {
      title: '还没有添加任何卡片',
      desc: '点击左侧配置按钮，前往配置页面添加卡片吧'
    },
    
    // 底部导航
    nav: {
      home: '首页',
      config: '配置',
      message: '消息',
      my: '我的'
    },

    // 配置页面
    config: {
      edit: '编辑',
      delete: '删除',
      preview: '预览',
      cancel: '取消',
      save: '保存',
      loadFailed: '加载失败',
      loadFailedDesc: '加载失败,请检查配置',
      versionList: '版本列表',
      showTitle: '显示标题',
      hideTitle: '隐藏标题',
      showCard: '显示卡片',
      hideCard: '隐藏卡片',
      title: '配置管理',
      addCard: '添加卡片',
      cardTypes: '卡片类型',
      confirmDelete: '确认删除?',
      deleteSuccess: '删除成功',
      saveSuccess: '保存成功',
      saveFailed: '保存失败',
      enterValue: '请输入',
      selectEntity: '选择实体',
      roomName: '房间名称',
      enterRoomName: '输入房间名称',
      lightEntity: '灯光实体',
      selectLightEntity: '选择灯光实体',
      buttonPositionLeft: '按钮位置 - 左边距',
      buttonPositionTop: '按钮位置 - 上边距',
      positionExample: '例如: 50%',
      lightImage: '灯光效果图片',
      enterImageUrl: '输入图片URL',
      add: '添加',
      moveUp: '上移',
      moveDown: '下移',
      debug: '调试模式',
      debugOn: '开启',
      debugOff: '关闭',
      import: '导入配置',
      export: '导出配置',
      importSuccess: '导入成功',
      exportSuccess: '导出成功',
      importFailed: '导入失败',
      exportFailed: '导出失败',
      globalConfig: '全局配置',
      backgroundColor: '背景颜色',
      backgroundColorHint: '选择页面的背景颜色',
      backgroundImage: '背景图片',
      backgroundImageHint: '输入背景图片的URL地址',
      backgroundImagePlaceholder: '请输入图片URL',
      reset: '重置',
      resetAll: '重置所有',
      betaVersion: 'Beta 版本更新',
      betaVersionHint: '开启后将接收 Beta 版本的更新',
    },
    
    // 卡片类型
    cards: {
      time: '时间',
      weather: '天气',
      light: '灯光',
      sensor: '传感器',
      media: '媒体',
      curtain: '窗帘',
      electricity: '用电',
      script: '脚本',
      water: '净水器',
      illuminance: '光照',
      router: '路由器',
      nas: 'NAS',
      camera: '摄像头',
      climate: '空调',
      motion: '人体传感器',
      lightOverview: '房间概览',
      lightStatus: '灯光状态',
      mediaPlayer: '媒体播放器',
      mediaplayer: '媒体播放器',
      scriptpanel: '快捷指令',
      waterpurifier: '净水器',
    },

    // 卡片操作
    cardActions: {
      edit: '编辑',
      delete: '删除',
      moveUp: '上移',
      moveDown: '下移'
    },

    // 卡片标题
    cardTitles: {
      time: '时间',
      weather: '天气',
      lightStatus: '灯光状态',
      sensor: '传感器',
      mediaplayer: '媒体播放器',
      router: '路由监控',
      nas: 'NAS监控',
      camera: '监控画面',
      curtain: '窗帘控制',
      electricity: '电量监控',
      script: '快捷指令',
      water: '净水器',
      illuminance: '光照传感器',
      climate: '空调控制',
      motion: '人体传感器',
      lightOverview: '灯光概览',
      scriptpanel: '快捷指令',
      waterpurifier: '净水器',
      lightstatus: '灯光状态'
    },

    // 配置字段
    fields: {
      title: '卡片标题',
      timeFormat: '时间格式',
      dateFormat: '日期格式',
      weatherEntity: '天气实体',
      lightsConfig: '灯光配置',
      sensorsConfig: '传感器配置',
      mediaPlayersConfig: '播放器配置',
      routerConfig: '路由器配置',
      nasConfig: 'NAS配置',
      camerasConfig: '摄像头配置',
      curtainsConfig: '窗帘配置',
      electricityConfig: '电量配置',
      scriptsConfig: '指令配置',
      waterConfig: '净水器配置',
      illuminanceConfig: '光照传感器配置',
      climateEntity: '空调实体',
      name: '名称',
      featuresConfig: '功能配置',
      motionEntity: '人体传感器实体',
      luxEntity: '光照传感器实体',
      background: '背景图片',
      roomsConfig: '房间灯光配置',
      upload: '上传',
      uploadImage: '上传图片',
      placeholderImage: '请上传图片',
    },

    version: {
      title: '版本管理',
      config: '版本管理',
      url: '版本地址',
      username: '用户名',
      password: '密码',
      autoSync: '自动同步到版本',
      enterUrl: '请输入版本地址',
      enterUsername: '请输入用户名',
      enterPassword: '请输入密码',
      syncTo: '同步到WebDAV',
      syncFrom: '从WebDAV同步',
      versionList: '版本列表',
      restoreVersion: '恢复此版本',
      confirmDelete: '确认删除',
      confirmDeleteVersion: '确定要删除此版本吗',
      deleteSuccess: '删除成功',
      syncSuccess: '同步成功',
      syncFailed: '同步失败',
      save: '保存',
      cancel: '取消',
      lastModified: '最后修改时间',
      delete: '删除',
      restore: '恢复',
      versions: '版本',
      configFailed: '配置失败',
      configSuccess: '配置成功',
      restoreFailed: '恢复失败',
      restoreSuccess: '恢复成功',
      actions: '操作',
      size: '大小',
      lastmod: '最后修改时间',
      filename: '文件名',
    },

    // 更新相关
    update: {
      checking: '检查更新中...',
      success: '更新成功',
      failed: '更新失败',
      complete: '更新完成,即将刷新页面',
      newVersion: '发现新版本',
      currentVersion: '当前版本',
      latestVersion: '已是最新版本',
      checkFailed: '检查更新失败',
      updateToNew: '更新到新版本',
      updateFailed: '更新失败',
      updateSuccess: '更新成功',
      updateComplete: '更新完成,即将刷新页面',
      checkUpdate: '检查更新',
      uploadPackage: '上传更新包',
      uploading: '上传中...',
      uploadSuccess: '上传成功',
      uploadFailed: '上传失败',
      invalidPackage: '无效的更新包',
      confirmUpdate: '确认更新',
      confirmUpdateDesc: '确定要更新到新版本吗？',
      manualUpdate: '手动更新',
      packageVersion: '更新包版本',
      cancel: '取消',
      confirm: '确认',
    },

    // 模态框相关
    modal: {
      close: '关闭',
      add: '添加'
    },

    // 摄像头相关
    camera: {
      loading: '加载中...',
      loadError: '监控画面加载失败',
      loadErrorDesc: '监控画面加载失败:'
    },

    climate: {
      loadError: '空调加载失败',
      loadErrorDesc: '空调加载失败,实体ID:',
      loadFailed: '加载失败',
      featureLoadError: '空调功能加载失败',
      featureLoadErrorDesc: '空调功能加载失败,实体ID:',
      currentTemp: '当前温度',
      currentHumidity: '当前湿度',
      operationMode: '运行模式',
      fanMode: '风扇模式',
      swingMode: '摆动模式',
      power: '电源',
      hvacModes: {
        cool: '制冷',
        dry: '除湿',
        fan_only: '送风',
        heat: '制热',
        off: '关闭',
        auto: '自动'
      },
      swingModes: {
        off: '关闭',
        vertical: '垂直摆动',
        null: '关闭'
      },
      fanModes: {
        auto: '自动',
        low: '低速',
        medium: '中速',
        high: '高速',
        none: '关闭'
      }
    },

    curtain: {
      loadError: '窗帘加载失败',
      loadErrorDesc: '窗帘加载失败,实体ID:',
      loadFailed: '加载失败',
      open: '打开窗帘',
      close: '关闭窗帘',
      stop: '停止'
    },

    electricity: {
      loadError: '电量监测卡片加载失败',
      loadErrorDesc: '电量监测实体加载失败:',
      parseError: '电量监测卡片解析历史数据失败',
      parseErrorDesc: '电量监测卡片解析历史数据失败:',
      configIncomplete: '配置信息不完整',
      usage: '用电量',
      voltage: '实时电压',
      current: '实时电流',
      power: '实时功率',
      monthUsage: '当月用电量',
      lastMonthUsage: '上月用电量',
      todayUsage: '今日用电量',
      yesterdayUsage: '昨日用电量',
      unit: {
        kwh: 'kWh',
        volt: 'V',
        ampere: 'A',
        watt: 'W',
        degree: '度'
      }
    },

    illuminance: {
      loadFailed: '加载失败',
      unit: 'lux'
    },

    lightOverview: {
      loadError: '房间概览灯光加载失败',
      loadErrorDesc: '房间概览灯光加载失败,实体ID:',
      floorPlan: {
        roomLayout: '房间布局'
      },
      lightControl: {
        brightness: '亮度',
        colorTemp: '色温',
        effect: '灯光效果',
        defaultEffect: '默认效果',
        selectEffect: '选择灯光效果'
      }
    },

    lightStatus: {
      loadError: '灯光卡片加载失败',
      loadErrorDesc: '灯光加载失败: ',
      activeLights: '%1 / %2 个灯开启',
      switchEntity: '(开关)'
    },

    mediaPlayer: {
      loadError: '播放器卡片加载失败',
      loadErrorDesc: '播放器加载失败: ',
      configIncomplete: '配置信息不完整',
      notPlaying: '未在播放',
      cover: '封面',
      volume: {
        up: '增加音量',
        down: '减少音量',
        set: '设置音量'
      },
      controls: {
        previous: '上一曲',
        next: '下一曲',
        playPause: '播放/暂停'
      }
    },

    motion: {
      loading: '加载中...',
      today: '今天',
      movement: '有人移动',
      luxLevel: '照度为：',
      presence: '有人',
      record: '有人移动，照度为：%1 Lux'
    },

    nas: {
      loadError: 'NAS卡片加载失败',
      loadErrorDesc: 'NAS加载失败: ',
      loadFailed: '加载失败',
      checkConfig: '出现错误，请检查配置',
      storage: {
        poolStatus: '存储池状态',
        deviceStatus: '存储设备状态',
        diskStatus: '硬盘状态',
        m2Status: 'M.2 SSD状态'
      },
      status: {
        normal: '正常',
        abnormal: '异常',
        unknown: '未知'
      },
      labels: {
        memory: '内存',
        uploadSpeed: '上传速度',
        downloadSpeed: '下载速度',
        unit: {
          speed: 'MB/s',
          temp: '°C',
          size: {
            tb: 'TB',
            gb: 'GB'
          }
        }
      }
    },

    router: {
      memory: '内存',
      metrics: {
        onlineDevices: '在线设备',
        connections: '连接数',
        cpuTemp: 'CPU温度',
        publicIp: '公网IP'
      },
      unit: {
        speed: 'MB/s',
        temp: '°C'
      }
    },

    script: {
      loadError: '脚本卡片加载失败',
      loadErrorDesc: '脚本加载失败: ',
      loadFailed: '加载失败',
      executeError: '执行脚本失败',
      executeErrorDesc: '执行脚本失败: '
    },

    sensor: {
      loadError: '温湿度传感器卡片加载失败',
      loadErrorDesc: '传感器加载失败: ',
      configIncomplete: '配置信息不完整',
      noValue: '- -',
      types: {
        temperature: '温度',
        humidity: '湿度'
      }
    },

    time: {
      lunar: {
        year: '年',
        month: '月',
        zodiac: '年'
      }
    },

    waterPurifier: {
      loadError: '净水器加载失败',
      loadErrorDesc: '净水器加载失败,实体ID: ',
      tds: {
        pure: '净水TDS',
        tap: '自来水TDS',
        purityHigh: '纯度高',
        purityLow: '纯度低'
      },
      temperature: '进水水温',
      filter: {
        ppc: 'PPC复合滤芯',
        ro: 'RO反渗透滤芯',
        lifeRemaining: '%1%'
      },
      unit: {
        temp: '°C'
      }
    },

    weather: {
      loadError: '天气卡片加载失败',
      loadErrorDesc: '天气加载失败: ',
      metrics: {
        temperature: '温度',
        feelTemp: '体感温度',
        humidity: '湿度',
        visibility: '能见度',
        airQuality: '空气质量',
        pressure: '气压',
        wind: '风况'
      },
      clothing: {
        index: '穿衣指数',
        levels: {
          extremeHot: '极热',
          veryHot: '炎热',
          hot: '热',
          warm: '温暖',
          comfortable: '舒适',
          cool: '微凉',
          cold: '凉',
          veryCold: '冷',
          extremeCold: '寒冷',
          freezing: '极寒'
        },
        suggestions: {
          extremeHot: '建议穿着轻薄、透气的衣物，注意防晒。',
          veryHot: '建议穿着凉爽、透气的夏季服装。',
          hot: '建议穿着短袖衫、短裙等夏季服装。',
          warm: '建议穿着长袖T恤、轻薄外套等春秋装。',
          comfortable: '建议穿着长袖衬衫、薄毛衣等春秋装。',
          cool: '建议穿着薄外套、夹克衫等春秋装。',
          cold: '建议穿着厚外套、毛衣等秋冬装。',
          veryCold: '建议穿着棉服、羽绒服等冬季服装。',
          extremeCold: '建议穿着厚羽绒服、棉服，注意保暖。',
          freezing: '建议穿着厚羽绒服、棉服，做好全面保暖。'
        }
      },
      wind: {
        north: '北风',
        northEast: '东北风',
        east: '东风',
        southEast: '东南风',
        south: '南风',
        southWest: '西南风',
        west: '西风',
        northWest: '西北风',
        unknown: '未知',
        level: {
          calm: '0级',
          light: '1-2级',
          moderate: '3级',
          fresh: '4级',
          strong: '5级',
          gale: '6级',
          storm: '7级',
          violent: '8级',
          hurricane: '9级以上'
        }
      }
    },

    configField: {
      roomName: '房间名称',
      placeholderRoomName: '输入房间名称',
      selectEntity: '选择实体',
      selectEntityPlaceholder: '选择实体',
      buttonPositionLeft: '按钮位置 - 左边距',
      buttonPositionTop: '按钮位置 - 上边距',
      placeholderPositionLeft: '例如: 50%',   
      placeholderPositionTop: '例如: 50%',
      lightEffectImage: '灯光效果图片',
      placeholderLightEffectImage: '输入图片URL',
      addButton: '添加',
      deleteButton: '删除',
      moveUpButton: '上移',
      moveDownButton: '下移',
      temperature: '温度',
      humidity: '湿度',
      eco: '节能',
      sleep: '睡眠',
      heater: '辅热',
      unStraightBlowing: '防直吹',
      newAir: '新风',
      selectFeature: '选择功能',
      tdsIn: '进水TDS',
      tdsOut: '出水TDS',
      ppFilterLife: 'PPC复合滤芯寿命',
      roFilterLife: 'RO反渗透滤芯寿命',
      status: '状态',
      cpuTemp: 'CPU温度',
      publicIp: '公网IP',
      memoryUsage: '内存使用率',
      diskUsage: '硬盘使用率',
      uptime: '运行时间',
      uploadSpeed: '上传速度',
      downloadSpeed: '下载速度',
      volumeUsage: '存储池使用空间',
      volumeStatus: '存储池状态',
      volumeTotal: '存储池总空间',
      volumeUsed: '存储池已使用空间',
      volumeFree: '存储池剩余空间',
      volumeUsedPercent: '存储池使用率',
      volumeAvgTemp: '存储池平均温度',
      deviceStatus: '存储设备状态',
      storagePoolName: '存储池名称',
      driveName: '硬盘名称',
      ssdName: 'M.2 SSD名称',
      diskStatus: '硬盘状态',
      m2Status: 'M.2 SSD状态',
      volumes: '存储池',
      cpuUsage: 'CPU使用率',
      drives: '硬盘',
      m2ssd: 'M.2 SSD',
      onlineUsers: '在线用户',
      networkConnections: '网络连接数',
      wanIp: 'WAN IP',
      wanDownloadSpeed: 'WAN 下载',
      wanUploadSpeed: 'WAN 上传',
      currentPower: '当前功率',
      voltage: '电压',
      electricCurrent: '电流',
      todayUsage: '今日用电量',
      yesterdayUsage: '昨日用电量',
      monthUsage: '当月用电量',
      lastMonthUsage: '上月用电量',
      yearlyUsage: '年用电量',
      dailyHistory: '历史用电量',
      streamUrl: '流地址',
      cameraName: '摄像头名称',
      playerName: '播放器名称',
      curtainName: '窗帘名称',
      lightName: '灯光名称',
      selectRoom: '选择房间',
      addRoom: '添加房间',
      addLight: '添加灯光',
      addScript: '添加脚本',
      addSensor: '添加传感器',
      addCamera: '添加摄像头',
      addCurtain: '添加窗帘',
      addMediaPlayer: '添加播放器',
      entityNotFound: '实体未找到',
      entityRequired: '请选择实体',
      nameRequired: '请输入名称',
      urlRequired: '请输入URL',
      invalidUrl: '无效的URL',
      mainInfo: '主要信息',
      sensorName: '传感器名称',
      sensorEntity: '传感器实体', 
      // light
      features: {
        temperature: '温度控制',
        fanSpeed: '风速控制',
        swingMode: '摆风控制',
        presets: '预设模式'
      },
      validation: {
        required: '此项为必填项',
        invalidFormat: '格式无效',
        invalidValue: '值无效'
      },
      confirm: '确定',
      cancel: '取消',
      delete: '删除',
      moveUp: '上移',
      moveDown: '下移'
    },
    'fullscreen.enter': '进入全屏',
    'fullscreen.exit': '退出全屏',
    updateTime: '更新时间',
    scriptName: '脚本名称',
    upload: '上传',
    uploadImage: '上传图片',
    placeholderImage: '请上传图片',
    mainInfo: '主要信息',
    uptime: '运行时间',
    updateSuccess: '更新成功',
    updateFailed: '更新失败',
    updateComplete: '更新完成,即将刷新页面',
  },
  en: {
    
    // Common
    currentVersion:'Current Version',
    edit: 'Edit Layout',
    done: 'Done',
    reset: 'Reset Layout', 
    columns: 'Columns',
    showCard: 'Show Card',
    hideCard: 'Hide Card',
    language: {
      toggle: 'Switch Language',
      current: 'En'
    },
   
    weekday: {
      'Monday': 'Monday',
      'Tuesday': 'Tuesday',
      'Wednesday': 'Wednesday',
      'Thursday': 'Thursday',
      'Friday': 'Friday',
      'Saturday': 'Saturday',
      'Sunday': 'Sunday',
    },
    sidebar: {
      show: 'Show Sidebar',
      hide: 'Hide Sidebar',
      menu: {
        dashboard: 'Dashboard',
        overview: 'Overview',
        devices: 'Devices',
        automation: 'Automation',
        settings: 'Settings',
        logs: 'Logs'
      }
    },
    theme: {
      light: 'Switch to Dark Mode',
      dark: 'Switch to Light Mode'
    },
    
    // Empty State
    empty: {
      title: 'No Cards Added Yet',
      desc: 'Click the config button on the left to add cards'
    },

    // Bottom Navigation
    nav: {
      home: 'Home',
      config: 'Config',
      message: 'Message',
      my: 'My'
    },

    // Config Page
    config: {
      edit: 'Edit',
      preview: 'Preview',
      cancel: 'Cancel',
      save: 'Save',
      loadFailed: 'Load Failed',
      loadFailedDesc: 'Load Failed, Please Check Configuration',
      versionList: 'Version List',
      showTitle: 'Show Title',
      hideTitle: 'Hide Title',
      showCard: 'Show Card',
      hideCard: 'Hide Card',
      title: 'Configuration Manager',
      addCard: 'Add Card',
      cardTypes: 'Card Types',
      confirmDelete: 'Confirm Delete?',
      deleteSuccess: 'Deleted Successfully',
      saveSuccess: 'Saved Successfully',
      saveFailed: 'Save Failed',
      enterValue: 'Please enter',
      selectEntity: 'Select entity',
      roomName: 'Room Name',
      enterRoomName: 'Enter room name',
      lightEntity: 'Light Entity',
      updateTime: 'Update Time',
      selectLightEntity: 'Select light entity',
      buttonPositionLeft: 'Button Position - Left',
      buttonPositionTop: 'Button Position - Top',
      positionExample: 'e.g. 50%',
      lightImage: 'Light Effect Image',
      enterImageUrl: 'Enter image URL',
      delete: 'Delete',
      add: 'Add',
      moveUp: 'Move Up',
      moveDown: 'Move Down',
      debug: 'Debug Mode',
      debugOn: 'On',
      debugOff: 'Off',
      import: 'Import Config',
      export: 'Export Config',
      importSuccess: 'Import Success',
      exportSuccess: 'Export Success',
      importFailed: 'Import Failed',
      exportFailed: 'Export Failed',
      globalConfig: 'Global Settings',
      backgroundColor: 'Background Color',
      backgroundColorHint: 'Choose the page background color',
      backgroundImage: 'Background Image',
      backgroundImageHint: 'Enter the URL of the background image',
      backgroundImagePlaceholder: 'Enter image URL',
      reset: 'Reset',
      resetAll: 'Reset All',
      betaVersion: 'Beta Version Updates',
      betaVersionHint: 'Enable to receive beta version updates',
    },
    
    // Card Types
    cards: {
      time: 'Time',
      weather: 'Weather',
      light: 'Light',
      sensor: 'Sensor',
      media: 'Media',
      curtain: 'Curtain',
      electricity: 'Electricity',
      script: 'Script',
      water: 'Water Purifier',
      illuminance: 'Illuminance',
      router: 'Router',
      nas: 'NAS',
      camera: 'Camera',
      climate: 'Climate',
      motion: 'Motion Sensor',
      lightOverview: 'Light Overview' 
    },

    // Card Actions
    cardActions: {
      edit: 'Edit',
      delete: 'Delete',
      moveUp: 'Move Up',
      moveDown: 'Move Down'
    },

    // Card Titles 
    cardTitles: {
      time: 'Time',
      weather: 'Weather',
      lightStatus: 'Light Status',
      sensor: 'Sensors',
      mediaplayer: 'Media Player',
      router: 'Router Monitor',
      nas: 'NAS Monitor',
      camera: 'Cameras',
      curtain: 'Curtain Control',
      electricity: 'Electricity Monitor',
      script: 'Quick Scripts',
      water: 'Water Purifier',
      illuminance: 'Illuminance Sensor',
      climate: 'Climate Control',
      motion: 'Motion Sensor',
      lightOverview: 'Light Overview',
      scriptpanel: 'Quick Scripts',
      waterpurifier: 'Water Purifier',
      lightstatus: 'Light Status'
    },

    // Configuration Fields
    fields: {
      title: 'Card Title',
      timeFormat: 'Time Format',
      dateFormat: 'Date Format', 
      weatherEntity: 'Weather Entity',
      lightsConfig: 'Lights Configuration',
      sensorsConfig: 'Sensors Configuration',
      mediaPlayersConfig: 'Media Players Configuration',
      routerConfig: 'Router Configuration',
      nasConfig: 'NAS Configuration',
      camerasConfig: 'Cameras Configuration',
      curtainsConfig: 'Curtains Configuration',
      electricityConfig: 'Electricity Configuration',
      scriptsConfig: 'Scripts Configuration',
      waterConfig: 'Water Purifier Configuration',
      illuminanceConfig: 'Illuminance Sensor Configuration',
      climateEntity: 'Climate Entity',
      name: 'Name',
      featuresConfig: 'Features Configuration',
      motionEntity: 'Motion Entity',
      luxEntity: 'Illuminance Entity',
      background: 'Background Image',
      roomsConfig: 'Room Lights Configuration'
    },

    // WebDAV Related
    version: {
      config: 'WebDAV Configuration',
      url: 'WebDAV URL',
      username: 'Username',
      password: 'Password',
      autoSync: 'Auto Sync to WebDAV',
      enterUrl: 'Please enter WebDAV URL',
      enterUsername: 'Please enter username',
      enterPassword: 'Please enter password',
      syncTo: 'Sync to WebDAV',
      syncFrom: 'Sync from WebDAV',
      versionList: 'Version List',
      restoreVersion: 'Restore Version',
      confirmDelete: 'Confirm Delete',
      confirmDeleteVersion: 'Are you sure to delete this version?',
      deleteSuccess: 'Delete Success',
      syncSuccess: 'Sync Success',
      syncFailed: 'Sync Failed',
      save: 'Save',
      cancel: 'Cancel',
      lastModified: 'Last Modified',
      delete: 'Delete',
      restore: 'Restore',
      versions: 'Versions',
      restoreFailed: 'Restore Failed',
      restoreSuccess: 'Restore Success',
      actions: 'Action',
      configFailed: 'Configuration Failed',
      configSuccess: 'Configuration Success',
      size: 'Size',
      lastmod: 'Last Modified',
      filename: 'Filename',
      title: 'Version',
    },

    // Update Related
    update: {
      checking: 'Checking for updates...',
      success: 'Update successful',
      failed: 'Update failed',
      complete: 'Update complete, refreshing page...',
      newVersion: 'New version available',
      currentVersion: 'Current version',
      latestVersion: 'Already latest version',
      checkUpdate: 'Check for updates',
      checkFailed: 'Check update failed',
      updateToNew: 'Update to new version',
      uploadPackage: 'Upload Update Package',
      uploading: 'Uploading...',
      uploadSuccess: 'Upload successful',
      uploadFailed: 'Upload failed',
      invalidPackage: 'Invalid update package',
      confirmUpdate: 'Confirm Update',
      confirmUpdateDesc: 'Are you sure to update to new version?',
      manualUpdate: 'Manual Update',
      packageVersion: 'Package Version',
      cancel: 'Cancel',
      confirm: 'Confirm',
    },

    // Modal related
    modal: {
      close: 'Close',
      add: 'Add'
    },

    // Camera related
    camera: {
      loading: 'Loading...',
      loadError: 'Failed to load camera',
      loadErrorDesc: 'Failed to load camera:'
    },

    climate: {
      loadError: 'Failed to load AC',
      loadErrorDesc: 'Failed to load AC, entity ID:',
      loadFailed: 'Load Failed',
      featureLoadError: 'Failed to load AC feature',
      featureLoadErrorDesc: 'Failed to load AC feature, entity ID:',
      currentTemp: 'Current Temp',
      currentHumidity: 'Current Humidity',
      operationMode: 'Operation Mode',
      fanMode: 'Fan Mode',
      swingMode: 'Swing Mode',
      power: 'Power',
      hvacModes: {
        cool: 'Cool',
        dry: 'Dry',
        fan_only: 'Fan Only',
        heat: 'Heat',
        off: 'Off',
        auto: 'Auto'
      },
      swingModes: {
        off: 'Off',
        vertical: 'Vertical',
        null: 'Off'
      },
      fanModes: {
        auto: 'Auto',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        none: 'Off'
      }
    },

    curtain: {
      loadError: 'Failed to load curtain',
      loadErrorDesc: 'Failed to load curtain, entity ID:',
      loadFailed: 'Load Failed',
      open: 'Open Curtain',
      close: 'Close Curtain',
      stop: 'Stop'
    },

    electricity: {
      loadError: 'Failed to load electricity card',
      loadErrorDesc: 'Failed to load electricity entity:',
      parseError: 'Failed to parse electricity history data',
      parseErrorDesc: 'Failed to parse electricity history data:',
      configIncomplete: 'Configuration incomplete',
      usage: 'Power Usage',
      voltage: 'Real-time Voltage',
      current: 'Real-time Current',
      power: 'Real-time Power',
      monthUsage: 'Monthly Usage',
      lastMonthUsage: 'Last Month Usage',
      todayUsage: 'Today Usage',
      yesterdayUsage: 'Yesterday Usage',
      unit: {
        kwh: 'kWh',
        volt: 'V',
        ampere: 'A',
        watt: 'W',
        degree: 'kWh'
      }
    },

    illuminance: {
      loadFailed: 'Load Failed',
      unit: 'lux'
    },

    lightOverview: {
      loadError: 'Failed to load room overview light',
      loadErrorDesc: 'Failed to load room overview light, entity ID:',
      floorPlan: {
        roomLayout: 'Room Layout'
      },
      lightControl: {
        brightness: 'Brightness',
        colorTemp: 'Color Temp',
        effect: 'Light Effect',
        defaultEffect: 'Default Effect',
        selectEffect: 'Select Light Effect'
      }
    },

    lightStatus: {
      loadError: 'Failed to load light card',
      loadErrorDesc: 'Failed to load light: ',
      activeLights: '%1 / %2 Lights On',
      switchEntity: '(Switch)'
    },

    mediaPlayer: {
      loadError: 'Failed to load media player card',
      loadErrorDesc: 'Failed to load media player: ',
      configIncomplete: 'Configuration incomplete',
      notPlaying: 'Not Playing',
      cover: 'Cover',
      volume: {
        up: 'Volume Up',
        down: 'Volume Down',
        set: 'Set Volume'
      },
      controls: {
        previous: 'Previous',
        next: 'Next',
        playPause: 'Play/Pause'
      }
    },

    motion: {
      loading: 'Loading...',
      today: 'Today',
      movement: 'Movement Detected',
      luxLevel: 'Illuminance:',
      presence: 'Present',
      record: 'Movement detected, illuminance: %1 Lux'
    },

    nas: {
      loadError: 'Failed to load NAS card',
      loadErrorDesc: 'Failed to load NAS: ',
      loadFailed: 'Load Failed',
      checkConfig: 'Error occurred, please check configuration',
      storage: {
        poolStatus: 'Storage Pool Status',
        deviceStatus: 'Storage Device Status',
        diskStatus: 'Disk Status',
        m2Status: 'M.2 SSD Status'
      },
      status: {
        normal: 'Normal',
        abnormal: 'Abnormal',
        unknown: 'Unknown'
      },
      labels: {
        memory: 'Memory',
        uploadSpeed: 'Upload',
        downloadSpeed: 'Download',
        unit: {
          speed: 'MB/s',
          temp: '°C',
          size: {
            tb: 'TB',
            gb: 'GB'
          }
        }
      }
    },

    router: {
      memory: 'Memory',
      metrics: {
        onlineDevices: 'Online Devices',
        connections: 'Connections',
        cpuTemp: 'CPU Temp',
        publicIp: 'Public IP'
      },
      unit: {
        speed: 'MB/s',
        temp: '°C'
      }
    },

    script: {
      loadError: 'Failed to load script card',
      loadErrorDesc: 'Failed to load script: ',
      loadFailed: 'Load Failed',
      executeError: 'Failed to execute script',
      executeErrorDesc: 'Failed to execute script: '
    },

    sensor: {
      loadError: 'Failed to load temperature & humidity card',
      loadErrorDesc: 'Failed to load sensor: ',
      configIncomplete: 'Configuration incomplete',
      noValue: '- -',
      types: {
        temperature: 'Temperature',
        humidity: 'Humidity'
      }
    },

    time: {
      lunar: {
        year: ' Year ',
        month: ' Month ',
        zodiac: ' Year'
      }
    },

    waterPurifier: {
      loadError: 'Failed to load water purifier',
      loadErrorDesc: 'Failed to load water purifier, entity ID: ',
      tds: {
        pure: 'Pure Water TDS',
        tap: 'Tap Water TDS',
        purityHigh: 'High Purity',
        purityLow: 'Low Purity'
      },
      temperature: 'Water Temp',
      filter: {
        ppc: 'PPC Composite Filter',
        ro: 'RO Membrane Filter',
        lifeRemaining: '%1%'
      },
      unit: {
        temp: '°C'
      }
    },

    weather: {
      loadError: 'Failed to load weather card',
      loadErrorDesc: 'Failed to load weather: ',
      metrics: {
        temperature: 'Temperature',
        feelTemp: 'Feels Like',
        humidity: 'Humidity',
        visibility: 'Visibility',
        airQuality: 'Air Quality',
        pressure: 'Pressure',
        wind: 'Wind'
      },
      clothing: {
        index: 'Clothing Index',
        levels: {
          extremeHot: 'Extreme Hot',
          veryHot: 'Very Hot',
          hot: 'Hot',
          warm: 'Warm',
          comfortable: 'Comfortable',
          cool: 'Cool',
          cold: 'Cold',
          veryCold: 'Very Cold',
          extremeCold: 'Extreme Cold',
          freezing: 'Freezing'
        },
        suggestions: {
          extremeHot: 'Wear light, breathable clothing and protect from sun.',
          veryHot: 'Wear cool, breathable summer clothing.',
          hot: 'Wear short sleeves, skirts and summer clothing.',
          warm: 'Wear long sleeve T-shirts and light jackets.',
          comfortable: 'Wear long sleeve shirts and light sweaters.',
          cool: 'Wear light coats and jackets.',
          cold: 'Wear thick coats and sweaters.',
          veryCold: 'Wear cotton-padded or down jackets.',
          extremeCold: 'Wear thick down jackets and stay warm.',
          freezing: 'Wear thick down jackets and protect from cold.'
        }
      },
      wind: {
        north: 'North',
        northEast: 'Northeast',
        east: 'East',
        southEast: 'Southeast',
        south: 'South',
        southWest: 'Southwest',
        west: 'West',
        northWest: 'Northwest',
        unknown: 'Unknown',
        level: {
          calm: 'Level 0',
          light: 'Level 1-2',
          moderate: 'Level 3',
          fresh: 'Level 4',
          strong: 'Level 5',
          gale: 'Level 6',
          storm: 'Level 7',
          violent: 'Level 8',
          hurricane: 'Level 9+'
        }
      }
    },

    configField: {
      roomName: 'Room Name',
      placeholderRoomName: 'Enter Room Name',
      selectEntity: 'Select Entity',
      selectEntityPlaceholder: 'Select Entity',
      buttonPositionLeft: 'Position - Left',
      buttonPositionTop: 'Position - Top',
      placeholderPositionLeft: 'e.g: 50%',
      placeholderPositionTop: 'e.g: 50%',
      lightEffectImage: 'Light Effect Image',
      placeholderLightEffectImage: 'Enter Image URL',
      addButton: 'Add',
      deleteButton: 'Delete',
      moveUpButton: 'Move Up',
      moveDownButton: 'Move Down',
      temperature: 'Temperature',
      humidity: 'Humidity',
      eco: 'Eco',
      sleep: 'Sleep',
      heater: 'Heater',
      unStraightBlowing: 'Un Straight Blowing',
      newAir: 'New Air',
      selectFeature: 'Select Feature',
      tdsIn: 'TDS In',
      tdsOut: 'TDS Out',
      ppFilterLife: 'PP Filter Life',
      roFilterLife: 'RO Filter Life',
      status: 'Status',
      cpuTemp: 'CPU Temp',
      publicIp: 'Public IP',
      memoryUsage: 'Memory Usage',
      diskUsage: 'Disk Usage',
      uploadSpeed: 'Upload Speed',
      downloadSpeed: 'Download Speed',
      volumeUsage: 'Volume Usage',
      volumeTotal: 'Volume Total',
      volumeUsed: 'Volume Used',
      volumeFree: 'Volume Free',
      volumeUsedPercent: 'Volume Used Percent',
      volumeAvgTemp: 'Volume Avg Temp',
      deviceStatus: 'Device Status',
      diskStatus: 'Disk Status',
      volumes: 'Volumes',
      cpuUsage: 'CPU Usage',
      drives: 'Drives',
      m2ssd: 'M.2 SSD',
      storagePoolName: 'Storage Pool Name',
      driveName: 'Drive Name',
      ssdName: 'SSD Name',
      scriptName: 'Script Name',
      onlineUsers: 'Online Users',
      networkConnections: 'Network Connections',
      wanIp: 'WAN IP',
      wanDownloadSpeed: 'WAN Download Speed',
      wanUploadSpeed: 'WAN Upload Speed',
      currentPower: 'Current Power',
      voltage: 'Voltage',
      electricCurrent: 'Electric Current',
      todayUsage: 'Today Usage',
      yesterdayUsage: 'Yesterday Usage',
      monthUsage: 'Month Usage',
      lastMonthUsage: 'Last Month Usage',
      yearlyUsage: 'Yearly Usage',
      dailyHistory: 'Daily History',
      streamUrl: 'Stream URL',
      cameraName: 'Camera Name',
      playerName: 'Player Name',
      curtainName: 'Curtain Name',
      lightName: 'Light Name',
      selectRoom: 'Select Room',
      addRoom: 'Add Room',
      addLight: 'Add Light',
      addScript: 'Add Script',
      addSensor: 'Add Sensor',
      addCamera: 'Add Camera',
      addCurtain: 'Add Curtain',
      addMediaPlayer: 'Add Media Player',
      entityNotFound: 'Entity Not Found',
      entityRequired: 'Please select an entity',
      nameRequired: 'Please enter a name',
      urlRequired: 'Please enter URL',
      invalidUrl: 'Invalid URL',
      sensorName: 'Sensor Name',
      sensorEntity: 'Sensor Entity',
      features: {
        temperature: 'Temperature Control',
        fanSpeed: 'Fan Speed Control',
        swingMode: 'Swing Mode Control',
        presets: 'Preset Modes'
      },
      validation: {
        required: 'This field is required',
        invalidFormat: 'Invalid format',
        invalidValue: 'Invalid value'
      },
      confirm: 'Confirm',
      cancel: 'Cancel',
      delete: 'Delete',
      moveUp: 'Move Up',
      moveDown: 'Move Down'
    },
    'fullscreen.enter': 'Enter Fullscreen',
    'fullscreen.exit': 'Exit Fullscreen',
    checkUpdate: 'Check for Updates',
    updateTime: 'Update Time',
    upload: 'Upload',
    uploadImage: 'Upload Image',
    placeholderImage: 'Please Upload Image',
    mainInfo: 'Main Information',
    uptime: 'Uptime',
    updateSuccess: 'Update Successful',
    updateFailed: 'Update Failed',
    updateComplete: 'Update Complete, Refreshing Page...',
  }
};