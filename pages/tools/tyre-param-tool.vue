<template>
<div>
  <PrimaryContainer>
    <form class="primary-form">

      <!-- 输入 -->
      <InteractiveBlock class="space-y-2">
        <PrimaryInput id="tyre-Para" input v-model="message" :label="'输入'"
                      placeholder="轮胎规格"/>
        <PrimaryInput id="v-Para" input v-model="message2" 
                      placeholder="行驶模式z轴速度；默认值10km/h"/>
       <PrimaryInput id="acc-Para" input v-model="message3" 
                      placeholder="载重算法启动z轴加速度阈值；默认值40km/h^2"/>

      <!-- 输出按钮 -->
      <div class="space-x-2">
          <PrimaryButton type="button" @click="convert">{{ $t('输出') }} </PrimaryButton>
          <PrimaryButton type="button" @click="show">{{ $t('展开非常用') }} </PrimaryButton>
          <PrimaryButton type="button" @click="hide">{{ $t('隐藏非常用') }} </PrimaryButton>
      </div>
      </InteractiveBlock>
    </form>
  </PrimaryContainer>
          <div id="app">
            <fancy-grid-vue
            :title="title"
            :theme= "'gray'"
            :width= "width"
            :height="height"
            :data="data"
            :resizable="true"
            :searching="true"
            :filter="true"
            :defaults="defaults" 
            :sel-model="'rows'"
            :trackOver="true"
            :columns="columns">
            </fancy-grid-vue>
          </div>
          
  </div>
</template>

<script src="https://cdn.fancygrid.com/fancy.min.js">
import InteractiveBlock from '~/components/tool/InteractiveBlock.vue';</script>
<script>
import FancyGridVue from 'fancy-grid-vue';
import PrimaryArea from "~/components/form/PrimaryTextArea";
import PrimaryContainer from "~/components/tool/PrimaryContainer";
import PrimaryIntroduction from "~/components/tool/PrimaryIntroduction";
import InteractiveBlock from "~/components/tool/InteractiveBlock";
import PrimaryInput from "~/components/form/PrimaryInput";
import PrimaryButton from "~/components/form/PrimaryButton";


var arr1 = [];
var res =[];
var hide=true;
var expanded=false;
export default {
  name: "tyre-param-tool",
  components: {PrimaryInput, PrimaryArea, InteractiveBlock, PrimaryIntroduction, PrimaryContainer,PrimaryButton,FancyGridVue},
  head() {
    return {
      title: this.$t("tool.radixConversion.title") + " - " + this.$t("app.name")
    };
  },
  
  test:{
    test1: 'test1', 
    test2:'test2'
  },
  data:function() {
    return {
      value:"",
      message:"",
      message1:"",
      mesage2:"",
      title: "GBT2977-2016",
      theme: "gray",
      width: 1250,
      height: 400,
      data: this.getData(),
      defaults: this.getDefaults(),
      columns: this.getColumns()
    };
  },
  methods: {

    getColumns: function(){
        return [{
          type: 'select'
        },{
          index: '轮胎规格',
          title: '轮胎规格',
          width: 80
        },{
          index:'推荐胎压',
          title:'推荐胎压',
          width:80,
        },
        {
          index:'行驶模式z轴加速度阈值',
          title:'行驶模式z轴加速度阈值',
          width:150
        },
        {
          index: '载重算法启动z轴加速度阈值',
          title: '载重算法启动z轴加速度阈值',
          width: 160
        },{
          index: '层级',
          title: '层级',
          width: 40
        },{
          index: '单胎',
          title: '单胎',
          type: 'number',
          width: 40,
          hidden:hide,
          expanded:expanded,
        },{
          index: '双胎',
          title: '双胎',
          width: 40,
          hidden:hide,
          expanded:expanded
        },{
          index: '测量轮辋',
          title: '测量轮辋',
          width: 70,
          hidden:hide,
          expanded:expanded
        },
        {
          index: '新胎设计尺寸断面宽度毫米',
          title: '新胎设计尺寸断面宽度毫米',
          width: 150,
        },{
          index: '轮胎最大使用尺寸总宽度',
          title: '轮胎最大使用尺寸总宽度',
          width: 150
        },{
          index: '轮胎最大使用尺寸外直径公路型',
          title: '轮胎最大使用尺寸外直径公路型',
          width: 150
        },{
          index: '静负荷半径',
          title: '静负荷半径',
          width: 90
        },{
          index: '单胎负荷能力',
          title: '单胎负荷能力',
          width: 90,
        },{
          index: '双胎负荷能力',
          title: '双胎负荷能力',
          width: 90,
          hidden:hide,
          expanded:expanded
        },{
          index: '充气压力',
          title: '充气压力',
          width: 70
        },
        {
          index: '最小双胎间距',
          title: '最小双胎间距',
          width: 90,
          hidden:hide,
          expanded:expanded
        },{
          index: '允许使用轮辋',
          title: '允许使用轮辋',
          width: 90,
          hidden:hide,
          expanded:expanded
        },
        {
          index: '气门嘴型号',
          title: '气门嘴型号',
          width: 80,
          hidden:hide,
          expanded:expanded
        }];
      },

    show:function(){
      for(var i=0;i<this.columns.length;i++){
        if(this.columns[i].hidden){
          hide=false;
          expanded=true;
          break;
        }
      }
      this.columns=this.getColumns();
    },

    hide:function(){
      for(var i=0;i<this.columns.length;i++){
        if(this.columns[i].expanded){
          
          hide=true;
          expanded=false;
          break;
        }
      }
      this.columns=this.getColumns();
    },
    //     rollback:function(){
    //   for(var i=0;i<this.columns.length;i++){
    //     if(!this.columns[i].hidden){
    //       this.columns[i].hidden =true;
    //       hide=true;
    //     }
    //   }
    //   this.columns=this.getColumns();
    // },

      getDefaults: function(){
        return {
          type: 'string',
          width: 100,
          sortable: true,
          editable: true,
          resizable: true,
          value:"",
          message:"",
          message1:"",
          mesage2:"",
        };
      },

      getData: function(){
      var defDriV = 10;
       var defDriA = 40;
      const arr = [
        { 轮胎规格:'4.50R12ULT', 行驶模式z轴加速度阈值:'',载重算法启动z轴加速度阈值:'',层级: '6', 单胎:'72', 双胎:'70', 测量轮辋:'3.00B', 新胎设计尺寸断面宽度毫米:'127', 新胎设计尺寸外直径公路型:'545', 轮胎最大使用尺寸总宽度:'137',轮胎最大使用尺寸外直径公路型:'555', 静负荷半径:'251', 单胎负荷能力: '355', 双胎负荷能力:'335',充气压力:'350',最小双胎间距:'150',允许使用轮辋:'3.00D,3.50B',气门嘴型号:'CF01' },
         { 轮胎规格:'5.00R12ULT', 行驶模式z轴加速度阈值:'',载重算法启动z轴加速度阈值:'',层级: '8', 单胎:'83', 双胎:'81', 测量轮辋:'3.50B', 新胎设计尺寸断面宽度毫米:'143', 新胎设计尺寸外直径公路型:'568', 轮胎最大使用尺寸总宽度:'154',轮胎最大使用尺寸外直径公路型:'579', 静负荷半径:'260',单胎负荷能力: '487', 双胎负荷能力:'462',充气压力:'450',最小双胎间距:'169',允许使用轮辋:'3.00D,3.00B,4.00B',气门嘴型号:'CF01' },
         { 轮胎规格:'5.50R13LT', 行驶模式z轴加速度阈值:'',载重算法启动z轴加速度阈值:'',层级: '6', 单胎:'82', 双胎:'78', 测量轮辋:'4.00B', 新胎设计尺寸断面宽度毫米:'160', 新胎设计尺寸外直径公路型:'620', 轮胎最大使用尺寸总宽度:'171',轮胎最大使用尺寸外直径公路型:'632', 静负荷半径:'288',单胎负荷能力: '475', 双胎负荷能力:'425',充气压力:'350',最小双胎间距:'189',允许使用轮辋:'4.50B,4J,4 1/2J',气门嘴型号:'CF01' },
      ];
          
          var res = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i].轮胎规格.indexOf(this.message) >= 0){
              if(this.message2!=null){ 
                defDriV = this.message2;
              }
              if(this.message3!=null){ 
                loadA = this.message3;
              }
              arr[i].circAcZ = (defDriV*defDriV)/(arr[i].outerR-arr[i].innerR);
              res = res.concat(arr[i]);
            }
          return res;     
    　　}
      },

    convert:function() {
      var defDriV = 10;
      var defDriA = 40;
      const arr = [
        { 轮胎规格:'4.50R12ULT',推荐胎压:'',载重算法启动z轴加速度阈值:'', 行驶模式z轴加速度阈值:'',层级: '6', 单胎:'72', 双胎:'70', 测量轮辋:'3.00B', 新胎设计尺寸断面宽度毫米:'127', 新胎设计尺寸外直径公路型:'545', 轮胎最大使用尺寸总宽度:'137',轮胎最大使用尺寸外直径公路型:'555', 静负荷半径:'251', 单胎负荷能力: '355', 双胎负荷能力:'335',充气压力:'350',最小双胎间距:'150',允许使用轮辋:'3.00D,3.50B',气门嘴型号:'CF01' },
         { 轮胎规格:'5.00R12ULT',推荐胎压:'',载重算法启动z轴加速度阈值:'', 行驶模式z轴加速度阈值:'',层级: '8', 单胎:'83', 双胎:'81', 测量轮辋:'3.50B', 新胎设计尺寸断面宽度毫米:'143', 新胎设计尺寸外直径公路型:'568', 轮胎最大使用尺寸总宽度:'154',轮胎最大使用尺寸外直径公路型:'579', 静负荷半径:'260',单胎负荷能力: '487', 双胎负荷能力:'462',充气压力:'450',最小双胎间距:'169',允许使用轮辋:'3.00D,3.00B,4.00B',气门嘴型号:'CF01' },
         { 轮胎规格:'5.50R13LT',推荐胎压:'',载重算法启动z轴加速度阈值:'', 行驶模式z轴加速度阈值:'',层级: '6', 单胎:'82', 双胎:'78', 测量轮辋:'4.00B', 新胎设计尺寸断面宽度毫米:'160', 新胎设计尺寸外直径公路型:'620', 轮胎最大使用尺寸总宽度:'171',轮胎最大使用尺寸外直径公路型:'632', 静负荷半径:'288',单胎负荷能力: '475', 双胎负荷能力:'425',充气压力:'350',最小双胎间距:'189',允许使用轮辋:'4.50B,4J,4 1/2J',气门嘴型号:'CF01' },
      ];
    
    //查找规格
    var res = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i].轮胎规格.indexOf(this.message) >= 0){
          if(this.message2!=null){ 
            defDriV = this.message2;
          }
          if(this.message3!=null){ 
            arr[i].载重算法启动z轴加速度阈值 = this.message3;
          }else{
            arr[i].载重算法启动z轴加速度阈值 = 40;
          }
          arr[i].行驶模式z轴加速度阈值 = (defDriV*defDriV)/(arr[i].新胎设计尺寸外直径公路型/2-arr[i].新胎设计尺寸断面宽度毫米/2);
          arr[i].推荐胎压=arr[i].充气压力*0.75*1.3;
          res = res.concat(arr[i]);
        }    
　　}
    this.data=res;
    return res;
  },
},
}
</script>
<style scoped>
</style>