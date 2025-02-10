import React from 'react';
// import Icon from '@mdi/react';
import { mdiMotionSensor } from '@mdi/js';
import { useTheme } from '../../theme/ThemeContext';
import BaseCard from '../BaseCard';
import {  useHistory, useLogs } from '@hakit/core';
import './style.css';

function MotionCard({ config }) {
  const { theme } = useTheme();
  const motionLogs = useLogs(config.motion_entity_id);
  const luxHistory = useHistory(config.lux_entity_id);
  // 格式化时间戳
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // 转换为毫秒
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // 使用 motionLogs 处理历史记录，只在数据加载完成后处理
  const history = (!luxHistory.loading) 
    ? motionLogs
      .map(record => {
        // 查找对应时间点的照度值
        const luxRecord = luxHistory.entityHistory?.find(
          lux => Math.abs(lux.lu - record.when) < 1 // 1秒内的记录视为同时发生
        );
        
        // 只返回找到照度值的记录
        if (luxRecord) {
          return {
            time: formatTime(record.when),
            motion: '有人',
            lux: luxRecord.s
          };
        }
        return null;
      })
      .filter(record => record !== null) // 过滤掉没有照度值的记录
      .slice(0, 5) // 只取前5条记录
    : [];

  

  return (
    <BaseCard
      title={config.title || "人体传感器"}
      icon={mdiMotionSensor}
      iconColor={theme === 'dark' ? 'var(--color-text-primary)' : '#4CAF50'}
    >
      <div className="motion-history">
        <div className="today-section">
          <h3>今天</h3>
          <div className="history-list">
            {(motionLogs.loading || luxHistory.loading) ? (
              <div className="loading">加载中...</div>
            ) : (
              history?.map((record, index) => (
                <div key={index} className="history-item">
                  <div className="time">{record.time}</div>
                  <div className="record-content">
                    <span>有人移动，照度为：{record.lux} Lux</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </BaseCard>
  );
}

export default MotionCard; 