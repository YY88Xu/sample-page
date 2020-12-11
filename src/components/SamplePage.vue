<template>
  <div class="bar-icon-map" :style="{ height: height + 'px' }">
    <a class="ios-arrow-wrap" @click="changePage(1)" :class="curPage===1 ? 'not-allow': ''">
      <i class="ios-arrow-left"></i>
    </a>
    <ul class="li-wrap">
      <li v-for="(item, index) in list" :key="index" :class="[curPage == item ? 'icon-selected' : 'icon-span']" @click="changeCurPage(item)"
      >{{ item }}</li>
    </ul>
    <a
      class="ios-arrow-wrap"
      @click="changePage(2)" :class="curPage===zoomList.length ? 'not-allow': ''"
      ><i class="ios-arrow-right"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: "SamplePage",
  props: {
    zoomList: {
      type: Array,
      default: () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      },
    },
    height: {
      type: String,
      default: "40",
    },
  },
  computed: {
    list() {
      if (this.zoomList.length <= 5) {
        return this.zoomList.slice(0);
      } else {
        //page长度是5
        let arr = new Array(5);
        arr[0] = 1;
        arr[4] = this.zoomList.length;

        if (this.curPage == 1 || this.curPage == 2) {
          arr[1] = 2;
          arr[2] = 3;
          arr[3] = 4;
        } else if (this.curPage == this.zoomList.length - 1) {
          arr[1] = this.curPage - 2;
          arr[2] = this.curPage - 1;
          arr[3] = this.curPage;
        } else if (this.curPage == this.zoomList.length) {
          arr[1] = this.curPage - 3;
          arr[2] = this.curPage - 2;
          arr[3] = this.curPage - 1;
        } else {
          arr[1] = this.curPage - 1;
          arr[2] = this.curPage;
          arr[3] = this.curPage + 1;
        }
        return arr;
      }
    },
  },
  watch: {},
  data() {
    return {
      curPage: 9,
    };
  },
  methods: {
    changeCurPage(item) {
      this.curPage = item;
      this.$emit("changePage", this.curPage);
    },
    changePage(type) {
      if (type === 1) {
        if(this.curPage===1){
          return;
        }
        this.curPage--;
      } else {
        if(this.curPage===this.zoomList.length){
          return;
        }
        this.curPage++;
      }
      this.$emit("changePage", this.curPage);
    },
  },
};
</script>

<style scoped>
.bar-icon-map {
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.icon-span {
  text-align: center;
  background-color: #f4f4f5;
  color: #606266;
}
.li-wrap{
  list-style-type: none;
  padding: 0;
}
.li-wrap > li + li{
  margin-left: 5px;
}
.li-wrap li{
  font-size: 13px;
  height: 28px;
  line-height: 28px;
  min-width: 30px;
  border-radius: 2px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  font-weight: 700;
}
.icon-selected {
  background-color: #409eff;
  color: #fff;

}
.ios-arrow-wrap {
  color: #606266;
  height: 28px;
  line-height: 28px;
  min-width: 30px;
  margin: 0px 5px;
  text-align: center;
  cursor: pointer;
}
.ios-arrow-wrap > i{
  border: solid #606266;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
}
.ios-arrow-right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.ios-arrow-left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.not-allow{
  cursor: not-allowed;
}
</style>
