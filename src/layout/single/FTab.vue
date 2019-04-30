<template>
  <div :class="b()" v-if="breadcrumbs.length > 1">
    <Breadcrumb>
      <BreadcrumbItem v-for="breadcrumb in breadcrumbs" :key="breadcrumb">
        <i class="iconfont" :class="getIcon(breadcrumb)"></i>

        {{ breadcrumb }}</BreadcrumbItem
      >
    </Breadcrumb>
    <iframe
      allowtransparency="true"
      frameborder="0"
      class="iframe"
      width="225"
      height="28"
      scrolling="no"
      src="//i.tianqi.com/index.php?c=code&id=40"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "f-tab",
  computed: {
    ...mapState("app", ["breadcrumbs", "modules"])
  },
  methods: {
    getIcon(name) {
      const module = this.modules.find(module => module.name == name);
      return module ? module.icon : "";
    }
  }
};
</script>

<style lang="less">
.f-tab {
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
  line-height: 50px;
  background-color: #fff;
  position: relative;
  padding: 0 20px;

  .iframe {
    position: absolute;
    right: 8px;
    top: 13px;
  }
}

@media only screen and(max-width: 1400px) {
  .f-tab {
    height: 40px;
    line-height: 40px;
    .ivu-breadcrumb {
      font-size: 12px;
    }

    .iframe {
      top: 8px;
    }
  }
}
</style>
