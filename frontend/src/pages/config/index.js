import React, { useState, useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import {
  mdiPlus,
  mdiDelete,
  mdiClockOutline,
  mdiWeatherPartlyCloudy,
  mdiLightbulbGroup,
  mdiThermometer,
  mdiPlayCircle,
  mdiRouterNetwork,
  mdiCctv,
  mdiCurtains,
  mdiWaterPump,
  mdiLightningBolt,
  mdiWhiteBalanceSunny,
  mdiServerNetwork,
  mdiScriptText,
  mdiCheck,
  // mdiEye,
  // mdiEyeOff,
  mdiSnowflake,
  mdiExport,
  mdiImport,
  mdiMotionSensor,
  mdiHomeFloorG,
  mdiFileFind,
  // mdiClose,
  mdiPencil,
  mdiArrowLeft,
  mdiCog,
} from '@mdi/js';
import AddCardModal from '../../components/AddCardModal';
import EditCardModal from '../../components/EditCardModal';
// import Modal from '../../components/Modal';
import { message, Button, Space, Dropdown, Switch, Spin } from 'antd';
import { useLanguage } from '../../i18n/LanguageContext';
import { configApi } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

import './style.css';
import VersionListModal from '../../components/VersionList';
import BottomInfo from '../../components/BottomInfo';
const getCardTypes = (t) => ({
  TimeCard: {
    name: t('cards.time'),
    icon: mdiClockOutline,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.time')
      },
      {
        key: 'timeFormat',
        label: t('fields.timeFormat'),
        type: 'text',
        default: 'HH:mm:ss'
      },
      {
        key: 'dateFormat',
        label: t('fields.dateFormat'),
        type: 'text',
        default: 'YYYY-MM-DD'
      }
    ]
  },
  WeatherCard: {
    name: t('cards.weather'),
    icon: mdiWeatherPartlyCloudy,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.weather')
      },
      {
        key: 'entity_id',
        label: t('fields.weatherEntity'),
        type: 'entity',
        filter: 'weather.*',
        default: ''
      }
    ]
  },
  LightStatusCard: {
    name: t('cards.light'),
    icon: mdiLightbulbGroup,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.lightStatus')
      },
      {
        key: 'lights',
        label: t('fields.lightsConfig'),
        type: 'lights-config',
        default: {}
      }
    ]
  },
  SensorCard: {
    name: t('cards.sensor'),
    icon: mdiThermometer,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.sensor')
      },
      {
        key: 'sensors',
        label: t('fields.sensorsConfig'),
        type: 'sensor-group',
        default: [
          {
            id: 'LIVING_ROOM',
            name: '客厅',
            sensors: {
              temperature: {
                entity_id: '',
                name: t('sensor.types.temperature'),
                icon: 'mdiThermometer'
              },
              humidity: {
                entity_id: '',
                name: t('sensor.types.humidity'),
                icon: 'mdiWaterPercent'
              }
            }
          }
        ]
      }
    ]
  },
  MediaPlayerCard: {
    name: t('cards.media'),
    icon: mdiPlayCircle,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.mediaplayer')
      },
      {
        key: 'mediaPlayers',
        label: t('fields.mediaPlayersConfig'),
        type: 'media-players',
        default: []
      }
    ]
  },
  RouterCard: {
    name: t('cards.router'),
    icon: mdiRouterNetwork,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.router')
      },
      {
        key: 'router',
        label: t('fields.routerConfig'),
        type: 'router-config',
        default: {}
      }
    ]
  },
  NASCard: {
    name: t('cards.nas'),
    icon: mdiServerNetwork,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.nas')
      },
      {
        key: 'syno_nas',
        label: t('fields.nasConfig'),
        type: 'nas-config',
        default: {}
      }
    ]
  },
  CameraCard: {
    name: t('cards.camera'),
    icon: mdiCctv,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.camera')
      },
      {
        key: 'cameras',
        label: t('fields.camerasConfig'),
        type: 'cameras-config',
        default: []
      }
    ]
  },
  CurtainCard: {
    name: t('cards.curtain'),
    icon: mdiCurtains,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.curtain')
      },
      {
        key: 'curtains',
        label: t('fields.curtainsConfig'),
        type: 'curtains-config',
        default: []
      }
    ]
  },
  ElectricityCard: {
    name: t('cards.electricity'),
    icon: mdiLightningBolt,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.electricity')
      },
      {
        key: 'electricity',
        label: t('fields.electricityConfig'),
        type: 'electricity-config',
        default: {}
      }
    ]
  },
  ScriptPanel: {
    name: t('cards.script'),
    icon: mdiScriptText,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.script')
      },
      {
        key: 'scripts',
        label: t('fields.scriptsConfig'),
        type: 'scripts-config',
        default: []
      }
    ]
  },
  WaterPurifierCard: {
    name: t('cards.water'),
    icon: mdiWaterPump,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.water')
      },
      {
        key: 'waterpuri',
        label: t('fields.waterConfig'),
        type: 'waterpuri-config',
        default: {}
      }
    ]
  },
  IlluminanceCard: {
    name: t('cards.illuminance'),
    icon: mdiWhiteBalanceSunny,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.illuminance')
      },
      {
        key: 'sensors',
        label: t('fields.illuminanceConfig'),
        type: 'illuminance-config',
        default: []
      }
    ]
  },
  ClimateCard: {
    name: t('cards.climate'),
    icon: mdiSnowflake,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.climate')
      },
      {
        key: 'entity_id',
        label: t('fields.climateEntity'),
        type: 'entity',
        filter: 'climate.*'
      },
      {
        key: 'name',
        label: t('fields.name'),
        type: 'text'
      },
      {
        key: 'features',
        label: t('fields.featuresConfig'),
        type: 'climate-features',
        default: {}
      }
    ]
  },
  MotionCard: {
    name: t('cards.motion'),
    icon: mdiMotionSensor,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.motion')
      },
      {
        key: 'motion_entity_id',
        label: t('fields.motionEntity'),
        type: 'entity',
        filter: 'event.*'
      },
      {
        key: 'lux_entity_id',
        label: t('fields.luxEntity'),
        type: 'entity',
        filter: 'sensor.*'
      }
    ]
  },
  LightOverviewCard: {
    name: t('cards.lightOverview'),
    icon: mdiHomeFloorG,
    fields: [
      {
        key: 'title',
        label: t('fields.title'),
        type: 'text',
        default: t('cardTitles.lightOverview')
      },
      {
        key: 'background',
        label: t('fields.background'),
        type: 'image',
        placeholder: t('fields.placeholderImage'),
        default: ''
      },
      {
        key: 'rooms',
        label: t('fields.roomsConfig'),
        type: 'light-overview-config',
        default: []
      }
    ]
  }
});


function ConfigPage({ sidebarVisible, setSidebarVisible }) {
  const fileInputRef = useRef(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewConfig, setPreviewConfig] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // 修改卡片状态的初始化
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showGlobalConfig, setShowGlobalConfig] = useState(false);
  const [globalConfig, setGlobalConfig] = useState({
    backgroundColor: '',
    backgroundImage: '',
    betaVersion: false
  });

  // 加载配置数据
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        const config = await configApi.getConfig();
        if (config.cards) {
          setCards(config.cards.map(card => ({
            ...card,
            visible: card.visible !== false,
            titleVisible: card.titleVisible !== false
          })));
        }
      } catch (error) {
        console.error('加载配置失败:', error);
        message.error(t('config.loadFailed'));
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, [t]);

  // 加载全局配置
  useEffect(() => {
    const loadGlobalConfig = async () => {
      try {
        const config = await configApi.getConfig();
        if (config.globalConfig) {
          setGlobalConfig(config.globalConfig);
          applyGlobalConfig(config.globalConfig);
        }
      } catch (error) {
        console.error('加载全局配置失败:', error);
      }
    };
    loadGlobalConfig();
  }, []);

  // 应用全局配置
  const applyGlobalConfig = (config) => {
    if (config.backgroundColor) {
      document.body.style.backgroundColor = config.backgroundColor;
    } else {
      document.body.style.backgroundColor = '';
    }
    if (config.backgroundImage) {
      document.body.style.backgroundImage = `url(${config.backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.style.backgroundImage = 'none';
    }
  };

  // 保存全局配置
  const handleSaveGlobalConfig = async () => {
    try {
      await configApi.setGlobalConfig(globalConfig);
      setShowGlobalConfig(false);
    } catch (error) {
      console.error('保存全局配置失败:', error);
      message.error(t('config.saveFailed'));
    }
  };

  // 修改计算布局函数
  const calculateLayouts = (cards, currentLayouts = null) => {
    // 分别创建移动端和桌面端的布局
    const layouts = {
      mobile: {
        sm: []
      },
      desktop: {
        lg: [],
        md: []
      }
    };

    // 基础布局参数
    const baseParams = {
      lg: { cols: 3, cardWidth: 1 },
      md: { cols: 2, cardWidth: 1 },
      sm: { cols: 1, cardWidth: 1 }
    };

    // 添加卡片高度配置
    const cardHeights = {
      TimeCard: { lg: 10, md: 10, sm: 10 },
      WeatherCard: { lg: 20, md: 20, sm: 20 },
      LightStatusCard: { lg: 24, md: 24, sm: 24 },
      LightOverviewCard: { lg: 22, md: 22, sm: 22 },
      SensorCard: { lg: 16, md: 16, sm: 16 },
      RouterCard: { lg: 26, md: 26, sm: 26 },
      NASCard: { lg: 36, md: 36, sm: 36 },
      MediaPlayerCard: { lg: 30, md: 30, sm: 30 },
      CurtainCard: { lg: 30, md: 30, sm: 30 },
      ElectricityCard: { lg: 24, md: 24, sm: 24 },
      ScriptPanel: { lg: 14, md: 14, sm: 14 },
      WaterPurifierCard: { lg: 24, md: 24, sm: 24 },
      IlluminanceCard: { lg: 16, md: 16, sm: 16 },
      CameraCard: { lg: 20, md: 20, sm: 20 },
      ClimateCard: { lg: 28, md: 28, sm: 28 },
      MotionCard: { lg: 20, md: 20, sm: 20 }
    };

    // 计算每个卡片的位置
    cards.forEach((card) => {
      const cardId = card.id.toString();
      const height = cardHeights[card.type] || { lg: 10, md: 10, sm: 10 };

      // 处理移动端布局
      const existingMobileLayout = currentLayouts?.mobile?.sm?.find(item => item.i === cardId);
      if (existingMobileLayout) {
        // 使用现有布局，但确保高度正确
        layouts.mobile.sm.push({
          ...existingMobileLayout,
          h: height.sm,
          card_type: card.type
        });
      } else {
        // 为新卡片计算位置
        const { cols } = baseParams.sm;
        const currentItems = layouts.mobile.sm;
        let maxY = 0;

        // 找到当前最大的Y值
        currentItems.forEach(item => {
          const itemBottom = item.y + item.h;
          if (itemBottom > maxY) {
            maxY = itemBottom;
          }
        });

        // 计算新卡片的位置
        const col = currentItems.length % cols;
        layouts.mobile.sm.push({
          card_type: card.type,
          i: cardId,
          x: col,
          y: maxY,
          w: baseParams.sm.cardWidth,
          h: height.sm
        });
      }

      // 处理桌面端布局
      ['lg', 'md'].forEach(breakpoint => {
        const existingDesktopLayout = currentLayouts?.desktop?.[breakpoint]?.find(item => item.i === cardId);
        console.log(existingDesktopLayout);
        if (existingDesktopLayout) {
          // 使用现有布局，但确保高度正确
          layouts.desktop[breakpoint].push({
            ...existingDesktopLayout,
            h: height[breakpoint],
            card_type: card.type
          });
        } else {
          // 为新卡片计算位置
          const { cols } = baseParams[breakpoint];
          const currentItems = layouts.desktop[breakpoint];
          let maxY = 0;

          // 找到当前最大的Y值
          currentItems.forEach(item => {
            const itemBottom = item.y + item.h;
            if (itemBottom > maxY) {
              maxY = itemBottom;
            }
          });

          // 计算新卡片的位置
          const col = currentItems.length % cols;
          layouts.desktop[breakpoint].push({
            card_type: card.type,
            i: cardId,
            x: col,
            y: maxY,
            w: baseParams[breakpoint].cardWidth,
            h: height[breakpoint]
          });
        }
      });
    });

    return layouts;
  };

  // 修改保存函数
  const handleSave = async () => {
    try {
      // 从后端获取当前配置以保留现有布局
      const currentConfig = await configApi.getConfig();
      
      // 计算布局，传入当前布局以保留已有卡片的位置
      const newLayouts = calculateLayouts(cards, currentConfig.layouts);
      
      // 保存到后端
      await configApi.saveConfig({
        cards,
        layouts: newLayouts,
        defaultLayouts: newLayouts
      });

      setHasUnsavedChanges(false);
      message.success(t('config.saveSuccess'));
    } catch (error) {
      console.error('保存配置失败:', error);
      message.error(t('config.saveFailed'));
    }
  };

  // 修改导入函数
  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const content = await file.text();
        const importedConfig = JSON.parse(content);
        
        // 验证导入的配置
        if (!Array.isArray(importedConfig.cards)) {
          throw new Error('无效的配置文件格式');
        }

        // 保存到后端
        await configApi.saveConfig({
          ...importedConfig,
          layouts: importedConfig.layouts || calculateLayouts(importedConfig.cards)
        });
        
        // 更新本地状态
        setCards(importedConfig.cards.map(card => ({
          ...card,
          visible: card.visible !== false,
          titleVisible: card.titleVisible !== false
        })));
        
        setHasUnsavedChanges(false);
        message.success(t('config.importSuccess'));
      } catch (error) {
        console.error('导入配置失败:', error);
        message.error(t('config.importFailed'));
      }
      // 清除文件输入
      event.target.value = '';
    }
  };

  // 修改导出函数
  const handleExport = async () => {
    try {
      // 从后端获取最新配置
      const config = await configApi.getConfig();
      
      // 创建下载
      const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hass-panel-config-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('导出配置失败:', error);
      message.error(t('config.exportFailed'));
    }
  };

  // 修改添加卡片函数
  const handleAddCard = (type) => {
    const newCard = {
      id: Date.now(),
      type,
      config: {},
      visible: true,
      titleVisible: true
    };

    // 添加默认配置
    const cardType = getCardTypes(t)[type];
    if (cardType && cardType.fields) {
      cardType.fields.forEach(field => {
        if (field.default !== undefined) {
          newCard.config[field.key] = field.default;
        }
      });
    }

    setCards(prevCards => [...prevCards, newCard]);
    setShowAddModal(false);
    setHasUnsavedChanges(true);
  };

  // 添加编辑卡片的处理函数
  const handleEditCard = (card) => {
    setEditingCard(card);
    if (card.type === 'LightOverviewCard') {
      setPreviewConfig(card.config);
    }
    setShowEditModal(true);
  };

  // 添加保存编辑的处理函数
  const handleSaveEdit = (updatedCard) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
    setHasUnsavedChanges(true);
  };

  // 处理卡片显示状态变化
  const handleVisibilityChange = (cardId) => {
    setCards(prevCards => {
      const newCards = prevCards.map(card => {
        if (card.id === cardId) {
          return {
            ...card,
            visible: card.visible === false ? true : false
          };
        }
        return card;
      });
      setHasUnsavedChanges(true);
      return newCards;
    });
  };

  // 处理卡片标题显示状态变化
  const handleTitleVisibilityChange = (cardId) => {
    setCards(prevCards => {
      const newCards = prevCards.map(card => {
        if (card.id === cardId) {
          return {
            ...card,
            titleVisible: card.titleVisible === false ? true : false
          };
        }
        return card;
      });
      setHasUnsavedChanges(true);
      return newCards;
    });
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
    setHasUnsavedChanges(true);
  };

  // const handleConfigChange = (cardId, key, value) => {
  //   setCards(cards.map(card => {
  //     if (card.id === cardId) {
  //       const newConfig = { ...card.config, [key]: value };
  //       // 如果是 LightOverviewCard，更新预览配置
  //       if (card.type === 'LightOverviewCard') {
  //         setPreviewConfig(newConfig);
  //       }
  //       return { ...card, config: newConfig };
  //     }
  //     return card;
  //   }));
  //   setHasUnsavedChanges(true);
  // };

  // 修改版本列表相关函数
  const handleVersionList = async () => {
    try {
      setShowVersionModal(true);
    } catch (error) {
      message.error('获取版本列表失败: ' + error.message);
    }
  };

  // 修改配置菜单项
  const configMenuItems = [
    {
      key: 'import',
      label: t('config.import'),
      icon: <Icon path={mdiImport} size={0.8} />,
      onClick: () => fileInputRef.current.click()
    },
    {
      key: 'export',
      label: t('config.export'),
      icon: <Icon path={mdiExport} size={0.8} />,
      onClick: handleExport
    },
    {
      key: 'versions',
      label: t('config.versionList'),
      icon: <Icon path={mdiFileFind} size={0.8} />,
      onClick: handleVersionList
    }
  ];

 
  return (
    <div className={`config-page ${!sidebarVisible ? 'sidebar-hidden' : ''}`}>
      <div className="config-container">
        <div className="config-header">
          <Space className="header-buttons">
            <Button 
              className="back-button"
              onClick={() => navigate('/')}
              icon={<Icon path={mdiArrowLeft} size={0.8} />}
            >
              {t('nav.home')}
            </Button>

            <Button
              className="global-config-button"
              onClick={() => setShowGlobalConfig(true)}
              icon={<Icon path={mdiCog} size={0.8} />}
            >
              {t('config.globalConfig')}
            </Button>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImport}
              accept=".json"
              style={{ display: 'none' }}
            />

            <Dropdown menu={{ items: configMenuItems }} placement="bottomLeft">
              <Button>
                {t('config.title')}
                <Icon path={mdiImport} size={0.8} style={{ marginLeft: 8 }} />
              </Button>
            </Dropdown>
          </Space>
        </div>

        <div className="config-list">
          {cards.map(card => (
            <div key={card.id} className="config-card">
              <div className="card-header">
                <div className="card-icon">
                  <Icon path={getCardTypes(t)[card.type].icon} size={1} />
                </div>
                <h3 className="card-title">{getCardTypes(t)[card.type].name}</h3>
              </div>
              <div className="card-switches">
                <div className="switch-item">
                  <span>{t('config.showTitle')}</span>
                  <Switch
                    size="small"
                    checked={card.titleVisible}
                    onChange={() => handleTitleVisibilityChange(card.id)}
                  />
                </div>
                <div className="switch-item">
                  <span>{t('config.showCard')}</span>
                  <Switch
                    size="small"
                    checked={card.visible}
                    onChange={() => handleVisibilityChange(card.id)}
                  />
                </div>
              </div>
              <div className="card-actions">
                <Button
                  size="small"
                  icon={<Icon path={mdiPencil} size={0.8} />}
                  onClick={() => handleEditCard(card)}
                >
                  {t('config.edit')}
                </Button>
                <Button
                  size="small"
                  type="text"
                  danger
                  icon={<Icon path={mdiDelete} size={0.8} />}
                  onClick={() => handleDeleteCard(card.id)}
                >
                  {t('config.delete')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-info">
          <BottomInfo />
        </div>
      </div>

      {showAddModal && (
        <AddCardModal
          onClose={() => setShowAddModal(false)}
          onSelect={handleAddCard}
          cardTypes={getCardTypes(t)}
        />
      )}

      <EditCardModal
        visible={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setEditingCard(null);
          setShowPreview(false);
        }}
        card={editingCard}
        cardTypes={getCardTypes(t)}
        onSave={handleSaveEdit}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        previewConfig={previewConfig}
        setPreviewConfig={setPreviewConfig}
      />

      <VersionListModal
        visible={showVersionModal}
        onCancel={() => setShowVersionModal(false)}
        setCards={setCards}
        setHasUnsavedChanges={setHasUnsavedChanges}
        setShowVersionModal={setShowVersionModal}
      />

      {/* 保存按钮 */}
      <button
        className={`save-button ${hasUnsavedChanges ? 'has-changes' : ''}`}
        onClick={handleSave}
      >
        <Icon path={mdiCheck} size={2} />
      </button>

      {/* 添加卡片按钮 */}
      <button
        className="add-card-button"
        onClick={() => setShowAddModal(true)}
      >
        <Icon path={mdiPlus} size={3} />
      </button>

      {loading && (
        <div className="loading-state">
          <Spin size="large" />
          <p>{t('loading')}</p>
        </div>
      )}

      {showGlobalConfig && (
        <>
          <div className="global-config-modal-overlay" onClick={() => setShowGlobalConfig(false)} />
          <div className="global-config-modal">
            <h3>{t('config.globalConfig')}</h3>
            <div className="global-config-form">
              <div className="global-config-form-item">
                <label>{t('config.backgroundColor')}</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={globalConfig.backgroundColor}
                    onChange={(e) => setGlobalConfig({
                      ...globalConfig,
                      backgroundColor: e.target.value
                    })}
                  />
                  <button 
                    className="reset-button" 
                    onClick={() => setGlobalConfig({
                      ...globalConfig,
                      backgroundColor: ''
                    })}
                  >
                    {t('config.reset')}
                  </button>
                </div>
                <div className="hint">{t('config.backgroundColorHint')}</div>
              </div>
              <div className="global-config-form-item">
                <label>{t('config.backgroundImage')}</label>
                <div className="image-input-group">
                  <input
                    type="text"
                    value={globalConfig.backgroundImage}
                    onChange={(e) => setGlobalConfig({
                      ...globalConfig,
                      backgroundImage: e.target.value
                    })}
                    placeholder={t('config.backgroundImagePlaceholder')}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        configApi.uploadBackground(file).then(filePath => {
                          setGlobalConfig({
                            ...globalConfig,
                            backgroundImage: filePath
                          });
                        });
                      }
                    }}
                    ref={fileInputRef}
                  />
                  <button 
                    className="upload-button"
                    onClick={() => fileInputRef.current.click()}
                  >
                    {t('fields.upload')}
                  </button>
                  <button 
                    className="reset-button"
                    onClick={() => setGlobalConfig({
                      ...globalConfig,
                      backgroundImage: ''
                    })}
                  >
                    {t('config.reset')}
                  </button>
                </div>
                <div className="hint">{t('config.backgroundImageHint')}</div>
              </div>
              <div className="global-config-form-item">
                <label>{t('config.betaVersion')}</label>
                <div className="switch-group">
                  <Switch
                    checked={globalConfig.betaVersion}
                    onChange={(checked) => setGlobalConfig({
                      ...globalConfig,
                      betaVersion: checked
                    })}
                  />
                </div>
                <div className="hint">{t('config.betaVersionHint')}</div>
              </div>
              <div className="global-config-actions">
                <button 
                  className="reset-all" 
                  onClick={() => {
                    setGlobalConfig({
                      backgroundColor: '',
                      backgroundImage: '',
                      betaVersion: false
                    });
                  }}
                >
                  {t('config.resetAll')}
                </button>
                <button className="cancel" onClick={() => setShowGlobalConfig(false)}>
                  {t('config.cancel')}
                </button>
                <button className="save" onClick={handleSaveGlobalConfig}>
                  {t('config.save')}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ConfigPage;