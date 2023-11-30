<template>
  <view class="flex-container">
	<image src="/static/background/background.png" class="background-image"></image>
    <view v-for="item in gridItems" :key="item.id" class="flex-item">
      <image :src="item.image" class="item-image"/>
      <view class="item-title">{{ item.title }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      gridItems: [
        { id: 1, title: 'gameCenter', image: '/static/images/gameCenter.png' },
        { id: 2, title: 'parkour_game.png', image: '/static/images/parkour_game.png' },
        { id: 3, title: 'rock_paper_scissors.png', image: '/static/images/rock_paper_scissors.png' },
        { id: 4, title: 'snake_game', image: '/static/images/snake_game.png' },
        { id: 5, title: 'tic_tac_toe', image: '/static/images/tic_tac_toe.png' },
        // 更多项...
      ]
    };
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 确保元素之间有均匀的间距 */
  padding: 10px;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1; /* 确保背景在内容下方 */
}

.flex-item {
  width: 40%;
  margin-bottom: 20px; /* 元素之间的垂直间隙 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.item-image {
  width: 80%;
  height: 150px;
  max-height: 60%;
  object-fit: cover;
  border-radius: 8px;
}

.item-title {
  width: 100%;
  margin-top: 15px;
  font-size: 18px;
  color: #333;
  font-weight: 500;
  text-align: center;
  display: block; /* 使用块级元素 */
  overflow: hidden; /* 隐藏超出部分 */
  white-space: break-spaces; /* 不换行 */
  text-overflow: ellipsis; /* 文本溢出时显示省略号 */
  line-height: 1.2em; /* 设置行高 */
  max-height: 2.4em; /* 设置最大高度为两行的高度 */
}

</style>
