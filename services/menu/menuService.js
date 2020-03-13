const axios = require('axios');
const titlesData = require('../../models/titles/titles');
const cacheUtils = require('../../utils/cacheUtils');

const service = {
  async getMenuFromApi() {
    const { data: { categories } } = await axios.get('http://backend-challenge-pos.pepperhq.com/menu.json');
    return categories;
  },
  getFlatMenuProducts(menu) {
    return menu.reduce((prev, curr) => ([...prev, ...curr.products]), []);
  },
  extendMenuWithTitles(menuProducts, titles) {
    return menuProducts.map(menuProduct => {
      const matchedTitledProduct = titles.find(titleProduct => titleProduct.id === menuProduct.id);
      if (matchedTitledProduct) {
        return { ...menuProduct, ...matchedTitledProduct };
      }
      // depends on the source of truth - either menu from api, or titles
      return menuProduct;
    });
  },
  async prepareMenu() {
    const menuFromApi = await this.getMenuFromApi();
    const menuProducts = this.getFlatMenuProducts(menuFromApi);
    return this.extendMenuWithTitles(menuProducts, titlesData);
  },
  async getMenu() {
    if (cacheUtils.getFromCache('menu')) {
      return cacheUtils.getFromCache('menu');
    }
    const menu = await this.prepareMenu();
    cacheUtils.cashData('menu', menu);
    return menu;
  }
};

module.exports = service;
