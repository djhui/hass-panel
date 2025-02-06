#!/usr/bin/with-contenv bashio
# ==============================================================================
# 启动Hass Panel
# ==============================================================================

# 获取配置
SSL=$(bashio::config 'ssl')
CERTFILE=$(bashio::config 'certfile')
KEYFILE=$(bashio::config 'keyfile')
REACT_APP_HASS_TOKEN=$(bashio::config 'hass_token')
# 设置环境变量
export REACT_APP_HASS_URL="http://supervisor/core"
export REACT_APP_HASS_TOKEN=$REACT_APP_HASS_TOKEN
ls /app

# 如果配置文件存在则复制
if [ -f "/config/hass-panel/userConfig.json" ]; then
  cp /config/hass-panel/userConfig.json /app/config/
else
  # 如果不存在则使用示例配置
  cp /app/config/userConfig.json.example /app/config/userConfig.json
fi



# 如果/config/hass-panel/media目录存在,则链接media文件
if [ -d "/config/hass-panel/media" ]; then
  ln -sf /config/hass-panel/media/* /app/static/media/
fi


envsubst < /app/env.template.js > /app/env.js


# 启动应用
cd /app

if [ "$SSL" == "true" ]; then
    # 使用SSL
    
    nginx  -g "daemon off; "
else
    # 不使用SSL
    nginx  -g "daemon off; "
fi

