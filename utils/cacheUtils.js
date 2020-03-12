const NodeCache = require('node-cache');

const cacheUtils = {
  cacheInst: null,
  initCache() {
    console.log('init cache');
    this.cacheInst = new NodeCache({
      stdTTL: 30,
      checkperiod: 45
    });
  },
  getCache() {
    if (this.cacheInst) {
      console.log('already exist');
    } else {
      console.log('new cache inst');
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
