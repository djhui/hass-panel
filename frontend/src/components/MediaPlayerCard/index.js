import React from 'react';
import Icon from '@mdi/react';
import { notification } from 'antd';
import { 
  mdiPlay,
  mdiPause,
  mdiSkipNext,
  mdiSkipPrevious,
  mdiVolumeHigh,
  mdiVolumeLow,
  mdiPlayCircle,
} from '@mdi/js';
// import { useService } from '@hakit/core';
import { useTheme } from '../../theme/ThemeContext';
import { useLanguage } from '../../i18n/LanguageContext';
import BaseCard from '../BaseCard';
import './style.css';
import { useEntity } from '@hakit/core';

function MediaPlayerCard({ config }) {
  
  const titleVisible = config.titleVisible;
  const { theme } = useTheme();
  const { t } = useLanguage();
  const debugMode = localStorage.getItem('debugMode') === 'true';
  // 检查配置是否存在
  if (!config || !config.mediaPlayers) {
    return (
      <BaseCard
        title={config.title || t('cardTitles.mediaplayer')}
        icon={mdiPlayCircle}
        iconColor={theme === 'dark' ? 'var(--color-text-primary)' : '#81C784'}
      >
        <div className="media-players">
          {t('mediaPlayer.configIncomplete')}
        </div>
      </BaseCard>
    );
  }

  // 确保 mediaPlayers 是数组
  const mediaPlayers = Array.isArray(config.mediaPlayers) ? config.mediaPlayers : [];

  // 动态加载播放器实体
  const mediaPlayerEntities = mediaPlayers.map(player => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const entity = useEntity(player.entity_id);
      return {
        ...player,
        entity,
      };
    } catch (error) {
      if (debugMode) {
        notification.error({
          message: t('mediaPlayer.loadError'),
          description: t('mediaPlayer.loadErrorDesc') + (player.name || player.entity_id) + ' - ' + error.message,
          placement: 'topRight',
          duration: 3,
          key: 'MediaPlayerCard',
        });
      }
      return {
        ...player,
        entity: { state: null, error: true },
      };
    }
  });

  // 安全获取实体状态
  const getEntityState = (entity) => {
    if (!entity || entity.error || entity.state === undefined || entity.state === null) {
      return 'off';
    }
    return entity.state;
  };

  // 安全获取媒体标题
  const getMediaTitle = (entity) => {
    if (!entity || entity.error || !entity.attributes?.media_title) {
      return t('mediaPlayer.notPlaying');
    }
    return entity.attributes.media_title;
  };

  // 安全获取音量级别
  const getVolumeLevel = (entity) => {
    if (!entity || entity.error || entity.attributes?.volume_level === undefined) {
      return 0;
    }
    return entity.attributes.volume_level;
  };

  const handlePlayPause = (player) => {
    if (player && !player.error) {
      player.service?.mediaPlayPause();
    }
  };

  const handlePrevious = (player) => {
    if (player && !player.error) {
      player.service?.mediaPreviousTrack();
    }
  };

  const handleNext = (player) => {
    if (player && !player.error) {
      player.service?.mediaNextTrack();
    }
  };

  const handleVolumeUp = (player) => {
    if (player && !player.error) {
      player.service?.volumeUp();
    }
  };

  const handleVolumeDown = (player) => {
    if (player && !player.error) {
      player.service?.volumeDown();
    }
  };

  const handleVolumeSet = (player, volume) => {
    if (player && !player.error) {
      player.service?.volumeSet({ serviceData: { "volume_level": volume } });
    }
  };

  return (
    <BaseCard
      title={config.title || t('cardTitles.mediaplayer')}
      icon={mdiPlayCircle}
      iconColor={theme === 'dark' ? 'var(--color-text-primary)' : '#81C784'}
      titleVisible={titleVisible}
    >
      <div className="media-players">
        {mediaPlayerEntities.map((player, index) => {
          const entityState = getEntityState(player.entity);
          const coverUrl = player.entity?.attributes?.entity_picture 
            ? `${window.env?.REACT_APP_HASS_URL}${player.entity.attributes.entity_picture}`
            : null;

          return (
            <div 
              key={index} 
              className="media-player"
              data-has-cover={!!coverUrl}
              style={coverUrl ? { '--cover-image': `url(${coverUrl})` } : undefined}
            >
              <div className="player-name">{player.name}</div>
              <div className="player-content">
                <div className="player-info-row">
                  <div className="player-cover">
                    {coverUrl ? (
                      <img src={coverUrl} alt={t('mediaPlayer.cover')} />
                    ) : (
                      <div className="cover-placeholder" />
                    )}
                  </div>
                  <div className="player-info">
                    <span className="player-state">{getMediaTitle(player.entity)}</span>
                    {player.entity?.attributes?.media_artist && (
                      <span className="player-artist">{player.entity.attributes.media_artist}</span>
                    )}
                  </div>
                </div>
                <div className="player-controls-row">
                  <div className="player-volume">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={getVolumeLevel(player.entity)}
                      onChange={(e) => handleVolumeSet(player.entity, parseFloat(e.target.value))}
                      disabled={entityState === 'off'}
                      className="volume-slider"
                      title={t('mediaPlayer.volume.set')}
                    />
                    <div className="volume-buttons">
                      <button 
                        className="control-button"
                        onClick={() => handleVolumeDown(player.entity)}
                        disabled={entityState === 'off'}
                        title={t('mediaPlayer.volume.down')}
                      >
                        <Icon path={mdiVolumeLow} size={0.8} />
                      </button>
                      <button 
                        className="control-button"
                        onClick={() => handleVolumeUp(player.entity)}
                        disabled={entityState === 'off'}
                        title={t('mediaPlayer.volume.up')}
                      >
                        <Icon path={mdiVolumeHigh} size={0.8} />
                      </button>
                    </div>
                  </div>
                  <div className="player-controls">
                    <button 
                      className="control-button"
                      onClick={() => handlePrevious(player.entity)}
                      disabled={entityState === 'off'}
                      title={t('mediaPlayer.controls.previous')}
                    >
                      <Icon path={mdiSkipPrevious} size={1} />
                    </button>
                    <button 
                      className="control-button play-button"
                      onClick={() => handlePlayPause(player.entity)}
                      disabled={entityState === 'off'}
                      title={t('mediaPlayer.controls.playPause')}
                    >
                      <Icon path={entityState === 'playing' ? mdiPause : mdiPlay} size={1} />
                    </button>
                    <button 
                      className="control-button"
                      onClick={() => handleNext(player.entity)}
                      disabled={entityState === 'off'}
                      title={t('mediaPlayer.controls.next')}
                    >
                      <Icon path={mdiSkipNext} size={1} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </BaseCard>
  );
}

export default MediaPlayerCard; 