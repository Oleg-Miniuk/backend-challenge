const axios = require('axios');
const titlesData = require('../../models/titles/titles');

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
  async getMenu() {
    const menuFromApi = await this.getMenuFromApi();
    const menuProducts = this.getFlatMenuProducts(menuFromApi);
    console.log(menuProducts, titlesData);
    const extendedMenu = this.extendMenuWithTitles(menuProducts, titlesData);
    console.log(extendedMenu);
    return extendedMenu;
  }
};

module.exports = service;
