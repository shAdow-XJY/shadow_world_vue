"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      gridItems: [
        { id: 1, title: "gameCenter", image: "/static/images/gameCenter.png" },
        { id: 2, title: "parkour_game.png", image: "/static/images/parkour_game.png" },
        { id: 3, title: "rock_paper_scissors.png", image: "/static/images/rock_paper_scissors.png" },
        { id: 4, title: "snake_game", image: "/static/images/snake_game.png" },
        { id: 5, title: "tic_tac_toe", image: "/static/images/tic_tac_toe.png" }
        // 更多项...
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.gridItems, (item, k0, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/HBuilderX Projects/shadow_world/shadow_world/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
