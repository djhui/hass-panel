import React from 'react';
import BaseCard from '../BaseCard';
import { mdiLightningBolt, mdiEye } from '@mdi/js';
import Icon from '@mdi/react';
import ReactECharts from 'echarts-for-react';
import { useLanguage } from '../../i18n/LanguageContext';
import './style.css';
import { useEntity } from '@hakit/core';
import { notification } from 'antd';

function ElectricityCard({ 
  config,
}) {
  const { t } = useLanguage();
  const debugMode = localStorage.getItem('debugMode') === 'true';
  // 检查配置是否存在
  if (!config || !config.electricity) {
    return (
      <BaseCard 
        title={config.title || t('cardTitles.electricity')}
        icon={mdiEye}
        className="electricity-usage-card"
      >
        <div className="electricity-content">
          {t('electricity.configIncomplete')}
        </div>
      </BaseCard>
    );
  }

  // 动态加载电力数据实体
  const electricityEntities = Object.entries(config.electricity).reduce((acc, [key, config]) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const entity = useEntity(config.entity_id);
      acc[key] = {
        ...config,
        entity,
      };
    } catch (error) {
      console.error(`加载实体 ${key} 失败:`, error);
      if (debugMode) {
        notification.error({
          message: t('electricity.loadError'),
          description: `${t('electricity.loadErrorDesc')} ${config.name || config.entity_id} - ${error.message}`,
          placement: 'topRight',
          duration: 3,
          key: 'ElectricityCard',
        });
      }
      acc[key] = {
        ...config,
        entity: { state: null, error: true },
      };
    }
    return acc;
  }, {});

  // 安全获取历史数据
  const historyData = electricityEntities.dailyHistory?.entity?.state;
  
  // 解析历史数据字符串
  let parsedData = [];
  let chartData = { dates: [], values: [] };
  
  try {
    if (historyData) {
      parsedData = historyData.split('\n').map(line => {
        const [date, usage] = line.split(': ');
        if (!date || !usage) {
          throw new Error('数据格式无效');
        }
        return {
          date: date,
          usage: parseFloat(usage.replace(' kWh', ''))
        };
      });

      chartData = {
        dates: parsedData.map(item => item.date),
        values: parsedData.map(item => item.usage)
      };
    }
  } catch (error) {
    console.error('解析历史数据失败:', error);
    if (debugMode) {
      notification.error({
        message: t('electricity.parseError'),
        description: t('electricity.parseErrorDesc') + error.message,
        placement: 'topRight',
        duration: 3,
        key: 'ElectricityCard',
      });
    }
  }

  // 图表配置
  const chartOption = {
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      containLabel: false
    },
    xAxis: {
      type: 'category',
      data: chartData.dates,
      show: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      show: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [{
      data: chartData.values,
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: '#ff9800',
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(255, 152, 0, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(255, 152, 0, 0.1)'
          }]
        }
      }
    }],
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: function(params) {
        const data = params[0];
        return `${data.name}<br/>${t('electricity.usage')}: ${data.value} ${t('electricity.unit.kwh')}`;
      },
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      textStyle: {
        color: '#fff'
      },
      position: function (pos, params, el, elRect, size) {
        const obj = { top: 10 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    }
  };

  // 在渲染实体状态的地方添加安全检查
  const getEntityValue = (entityKey) => {
    const entity = electricityEntities[entityKey]?.entity;
    if (!entity || entity.error || entity.state === undefined || entity.state === null) {
      return '- -';
    }
    return entity.state;
  };

  return (
    
    <BaseCard 
      title={config.title || t('cardTitles.electricity')}
      icon={mdiEye}
      titleVisible={config.titleVisible}
      className="electricity-usage-card"
    >
      <div className="electricity-content">
        {/* <div className="electricity-main-value">
          <span className="label">过去7天用电量</span>
          <span className="value">{electricityEntities.todayUsage.entity.state || '0'}</span>
          <span className="unit">kWh</span>

        </div> */}

     
        
        {chartData.dates.length > 0 && <div className="electricity-chart">
          <ReactECharts 
            option={chartOption} 
            style={{ height: '100%', width: '100%' }}
          />
        </div>}

        <div className="electricity-yearly-info">
          <div className="yearly-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
              <span>{t('electricity.voltage')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('voltage')}</span>
              <span className="unit">{t('electricity.unit.volt')}</span>
            </div>
          </div>
          <div className="yearly-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
                <span>{t('electricity.current')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('electric_current')}</span>
                <span className="unit">{t('electricity.unit.ampere')}</span>
            </div>
          </div>
          <div className="yearly-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
              <span>{t('electricity.power')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('currentPower')}</span>
              <span className="unit">{t('electricity.unit.watt')}</span>
            </div>
          </div>
        </div>

        <div className="electricity-info-grid">
       

          <div className="electricity-info-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
              <span>{t('electricity.monthUsage')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('monthUsage')}</span>
              <span className="unit">{t('electricity.unit.degree')}</span>
            </div>
          </div>
          <div className="electricity-info-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
              <span>{t('electricity.lastMonthUsage')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('lastMonthUsage')}</span>
              <span className="unit">{t('electricity.unit.degree')}</span>
            </div>
          </div>

         

          <div className="electricity-info-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
              <span>{t('electricity.todayUsage')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('todayUsage')}</span>
              <span className="unit">{t('electricity.unit.degree')}</span>

            </div>
          </div>
          <div className="electricity-info-item">
            <div className="info-label">
              <Icon path={mdiLightningBolt} size={0.8} />
              <span>{t('electricity.yesterdayUsage')}</span>
            </div>
            <div className="electricity-value">
              <span className="value">{getEntityValue('yesterdayUsage')}</span>
              <span className="unit">{t('electricity.unit.degree')}</span>

            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}

export default ElectricityCard; 