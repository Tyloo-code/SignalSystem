<template>
  <div>
    <!-- 分类判断：为填空时如下处理 -->
    <div v-if="this.list">
      <div v-for="(item,index) in isTiankong" :key="index">
      {{item.questionType}}
      <el-input 
        type="text"
        v-model="item.label"
        @input="changeInput(item,index)"
      ></el-input>
      </div>
    </div>

    <!-- 分类判断：为简答时如下处理 -->
    <div v-if="this.list">
      <div v-for="(item,index) in isJianda" :key="index">
      {{item.questionType}}
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="item.label"
        @input="changeArea(item,index)">
      </el-input>
      </div>
    </div>


    <!-- 分类判断：为表格时如下处理 -->
    <div v-if="this.list">
      <div v-for="(item,index) in isBiaoge" :key="index">
      {{item.questionType}}
      </div>
   
    </div>

    <button @click="submit">测试</button>

  </div>
</template>

<script>
import { getQuestion } from "@/api/xSheng"
export default {
  name:'xSheng',
  data() {
    return{
      list:'',
      listLoading:'',
      
    }
  },
  computed:{
    isTiankong: {
      get(){
        return this.list[3].questions.filter((item) => {
          return item.questionType === '填空';
        })
      },
      set(v){
        this.item = v;
        v.forEach(item => {
          console.log(item.label)
        })
      }
    },
    isJianda:{
      get(){
        return this.list[3].questions.filter((item) => {
          return item.questionType === '简答';
        })
      },
      set(v){
        this.item = v;
        v.forEach(item => {
          console.log(item.label)
        })
      }
    },
    isBiaoge(){
      return this.list[3].questions.filter((item) => {
        return item.questionType === '表格';
      })
    },
  },
  created(){
    this.fetchData()
  
  },
  methods:{
    fetchData() {
        this.listLoading = true
        getQuestion().then(response => {
          this.list = response.value
          this.listLoading = false
          console.log(this.list[3]) 
      })
    },
    changeInput(data,index){
      this.isTiankong[index].label = data.label;
      let arrInput = [];
      this.isTiankong.forEach(item => {
        arrInput.push(item);
      });
      this.isTiankong = arrInput;
    },
    changeArea(data,index){
      this.isJianda[index].label = data.label;
      let arrArea = [];
      this.isJianda.forEach(item => {
        arrArea.push(item);
      });
      this.isJianda = arrArea;
    },
    submit(){
      console.log(this.isTiankong)
      console.log(this.isJianda)
    },
    
     
    
  },
  mounted(){



  }
}
</script>

<style>

</style>