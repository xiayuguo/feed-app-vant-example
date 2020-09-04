<template>
  <div class="read">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-cell-group>
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  Search
} from 'vant';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Search.name]: Search
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {}
};
</script>

<style lang="less">
.read {
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