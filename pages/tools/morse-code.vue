<template>


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
      </div>
      </InteractiveBlock>

      <!-- 输出区域 -->
      <InteractiveBlock>
      <PrimaryArea :label="'输出'" v-model="value" id="value"/>
      </InteractiveBlock>


    </form>
   

  </PrimaryContainer>
</template>

<script>
import PrimaryArea from "~/components/form/PrimaryTextArea";
import PrimaryContainer from "~/components/tool/PrimaryContainer";
import PrimaryIntroduction from "~/components/tool/PrimaryIntroduction";
import InteractiveBlock from "~/components/tool/InteractiveBlock";
import PrimaryInput from "~/components/form/PrimaryInput";
import PrimaryButton from "~/components/form/PrimaryButton";



export default {
  name: "radix-conversion",
  components: {PrimaryInput, PrimaryArea, InteractiveBlock, PrimaryIntroduction, PrimaryContainer,PrimaryButton},
  head() {
    return {
      title: this.$t("tool.radixConversion.title") + " - " + this.$t("app.name")
    };
  },
  
  test:{
    test1: 'test1', 
    test2:'test2'
  },

  data() {
    return {
      value:"",
      message:"",
      message1:"",
      mesage2:"",
  	};

  },
  methods: {
    


    convert() {
      var defDriV = 10;
      var defDriA = 40;

      const arr = [
        { 轮胎规格:'4.50R12ULT', 行驶模式z轴加速度阈值:'',层级: '6', 单胎:'72', 双胎:'70', 测量轮辋:'3.00B', 新胎设计尺寸断面宽度毫米:'127', 新胎设计尺寸外直径公路型:'545', 轮胎最大使用尺寸总宽度:'137',轮胎最大使用尺寸外直径公路型:'555', 静负荷半径:'251', 单胎负荷能力: '355', 双胎负荷能力:'335',充气压力:'350',最小双胎间距:'150',允许使用轮辋:'3.00D,3.50B',气门嘴型号:'CF01' },
         { 轮胎规格:'5.00R12ULT', 行驶模式z轴加速度阈值:'',层级: '8', 单胎:'83', 双胎:'81', 测量轮辋:'3.50B', 新胎设计尺寸断面宽度毫米:'143', 新胎设计尺寸外直径公路型:'568', 轮胎最大使用尺寸总宽度:'154',轮胎最大使用尺寸外直径公路型:'579', 静负荷半径:'260',单胎负荷能力: '487', 双胎负荷能力:'462',充气压力:'450',最小双胎间距:'169',允许使用轮辋:'3.00D,3.00B,4.00B',气门嘴型号:'CF01' },
         { 轮胎规格:'5.50R13LT', 行驶模式z轴加速度阈值:'',层级: '6', 单胎:'82', 双胎:'78', 测量轮辋:'4.00B', 新胎设计尺寸断面宽度毫米:'160', 新胎设计尺寸外直径公路型:'620', 轮胎最大使用尺寸总宽度:'171',轮胎最大使用尺寸外直径公路型:'632', 静负荷半径:'288',单胎负荷能力: '475', 双胎负荷能力:'425',充气压力:'350',最小双胎间距:'189',允许使用轮辋:'4.50B,4J,4 1/2J',气门嘴型号:'CF01' },
      ];
    
    //查找规格
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
          // this.value = JSON.stringify(arr[i],null,2);
          res.push(arr[i]);
        }
      this.value = JSON.stringify(res,null,2);
        // if(arr[i].param===this.message){
        //   if(this.message2!=null){ 
        //     defDriV = this.message2;
        //   }
        //   if(this.message3!=null){ 
        //     loadA = this.message3;
        //   }

        //   arr[i].circAcZ = (defDriV*defDriV)/(arr[i].outerR-arr[i].innerR);
        //   this.value = JSON.stringify(arr[i],null,2);
        // }       
　　}

}
   
    }
  }
</script>
<style scoped>

</style>
