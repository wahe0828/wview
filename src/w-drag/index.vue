<template>
  <div class="w-drag" @mouseup="mouseupDrap" @mousedown="mousedownDrap" @mousemove="mousemoveDrap">
    <!--  -->
    <template  v-for="(item,index) in dragList">
      <div class="w-drag-item" :data-index="index" :style="dragIndex === index ? `background:deeppink;position: absolute;left:${dragDom.left - changeDom.left}px;top:${dragDom.top - changeDom.top}px;`:`transition: 1s;`"> 
        {{ item }}
      </div>
      <div class="w-drag-item zw" v-show="isDrag && dragIndex === index" >
        占位
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'w-drag',

  props: {
    color: String,
    dragList: {
      type: Array,
      default: [1,2,3,4],
      
    },
  },
  data(){
    return {
      isDrag:false,  //拖拽开关
      dragIndex:'',
      dragDom:{
        left:'',
        top:'',
      },
      changeDom:{
        left:'',
        top:'',
      }
    }
  },
  methods:{
    mouseupDrap(e){
      console.log(e,'松手');
      this.isDrag = false;
      console.log(this.dragIndex);
      this.dragIndex = '';

    },
    mousedownDrap(e){
      console.log(e,'按下');
      this.isDrag = true;
      this.dragIndex = e.srcElement.__vnode.props["data-index"];
      let dragDom = {
          left:e.pageX,
          top:e.pageY,
        };
        let changeDom = {
          left:e.offsetX,
          top:e.offsetY,
        }
        this.dragDom = dragDom;
        this.changeDom = changeDom;
    },
    mousemoveDrap(e){
      if(this.isDrag){
        console.log(e,e.pageX,e.pageY,'滑动');
        // console.log(e);
        // e.pageX - imgs[index].offsetLeft;
        let dragDom = {
          left:e.pageX,
          top:e.pageY,
        };
        this.dragDom = dragDom;
      }
    },

  }
};
</script>

<style lang="scss">
.w-drag{
  
  display: flex;
  flex-wrap: wrap;
  background-color: rgba($color: #000000, $alpha: .2);
  .w-drag-item{
    // transition: 1s;
    user-select:none;
    width: calc(100% / 3 - 20px);
    height: 100px;
    background-color: red;
    margin: 10px;
    &:nth-child(1){
      background-color: green;
    }
    &.zw{
      background-color: rgba($color: #000000, $alpha: .2);
    }
  }
}
</style>
