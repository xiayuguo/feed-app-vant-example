<template>
  <div>
    <van-cell-group title="备份">
    <van-cell title="导入订阅" is-link value="" />
    <van-cell title="导出订阅" is-link value="" />
    </van-cell-group>
    <van-cell-group class="user-group" title="系统">
      <van-cell icon="setting-o" title="阅读设置" is-link />
      <van-cell icon="service-o" title="问题反馈" is-link />
      <van-cell icon="info-o" title="关于Feed" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>