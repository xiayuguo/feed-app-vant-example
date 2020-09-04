<template>
  <div class="search">
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
import { Cell, CellGroup, Search, Toast } from "vant";

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Search.name]: Search
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style lang="less">
.search {
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