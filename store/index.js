export const strict = false
export const state = () => ({
  buyBox: false,
  cate: {
    pregnant: '孕产期钙营养',
    baby: '婴幼儿钙营养',
    child: '儿童钙营养',
    adult: '成人钙营养',
    advisory: '常见问题'
  }
});

export const mutations = {
  update_buyBox(state, val) {
    state.buyBox = val
  }
};