const NodeCache = require('node-cache');

const cacheUtils = {
  cacheInst: null,
  initCache() {
    this.cacheInst = new NodeCache({
      stdTTL: 86400,
      checkperiod: 86460
    });
  },
  getCache() {
    if (!this.cacheInst) {
      this.initCache();
    }
  },
  cashData(key, data) {
    this.getCache();
    this.cacheInst.set(key, data);
  },
  getFromCache(key) {
    this.getCache();
    return this.cacheInst.get(key);
  }
};
module.exports = cacheUtils;
