'use strict';

const path = require('path');
const execSync = require('child_process').execSync;
const moment = require('moment-timezone');

hexo.extend.filter.register('before_post_render', data => {
  const originUpdated = data.updated;
  const gitUpdated = getUpdated(data);
  if (gitUpdated < originUpdated) {
    data.updated = gitUpdated;
  }
  return data;
});

function getUpdated(data) {
  const filePath = path.resolve(hexo.config.source_dir, data.source);
  const updated = execSync(`git log --follow -1 --format="%ad" -- ${filePath}`).toString().trim();
  if (updated === '') {
    return moment();
  }
  return moment(new Date(updated));
}
