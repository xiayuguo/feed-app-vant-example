<template>
  <div class="subscribe">
    <van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
</van-index-bar>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  IndexBar, IndexAnchor
} from 'vant';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less">
.subscribe {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>