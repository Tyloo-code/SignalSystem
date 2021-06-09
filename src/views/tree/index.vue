<template>
  <div class="app-container">
    <div class="func-list">
      <div class="left search-group">
        <el-select v-model="tree.courses" placeholder="请选择课程" class="input">
          <el-option
            v-for="item in courselist"
            :key="item.classes"
            :label="item.classes"
            :value="item.name"
          ></el-option>
        </el-select>
        <el-select v-model="tree.classes" placeholder="请选择班级" class="input">
          <el-option
            v-for="item in classlist"
            :key="item.classes"
            :label="item.classes"
            :value="item.name"
          ></el-option>
        </el-select>
        <el-input placeholder="请输入学号" v-model="tree.studentNum" class="input"></el-input>
        <el-input placeholder="请输入姓名" v-model="tree.studentName" class="input"></el-input>
        <el-button @click="handleSearch" class="button">查询</el-button>
      </div>
      <div class="right">
        <el-button type="primary" icon="el-icon-folder-add" @click="handleAdd">导出</el-button>
        <!-- v-if="role === 'Administrator' || role === 'Supervisor'" -->
        <!-- <el-button type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button> -->
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="课程" width="120">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="学期" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="班级" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.student.class.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学号" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.student.id }}</template>
      </el-table-column>
      <el-table-column label="姓名" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.student.name }}</template>
      </el-table-column>
      <el-table-column label="题目" width="300" align="center">
        <template slot-scope="scope">{{ scope.row.question.quiz.name }}</template>
      </el-table-column>
      <el-table-column label="实验报告" width="300" align="center">
        <template slot-scope="scope">{{ scope.row.answer }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="分数" align="center">
        <template slot-scope="scope">
         <!--  <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag> -->
         {{ scope.row.score }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="修改">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit">确认</el-button>
          <el-button v-else @click="scope.row.edit=!scope.row.edit">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/tree";
import { classList, coueseList } from "@/api/menu";
export default {
  name: "Tree",
  data() {
    return {
      list: null,
      listLoading: true,
      courselist: [],
      classlist: [],
      tree: {
        courses: "",
        classes: "",
        studentNum: "",
        studentName: "",
        terms: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    handleSearch() {},
    handleAdd() {},
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.value;
        this.listLoading = false;
      });
      classList().then(response => {
        this.classlist = response.value;
      });
      coueseList().then(response => {
        this.courselist = response.value;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.search-group {
  width: 750px;
  .input {
    width: 150px;
    float: left !important;
    margin-right: 5px;
  }
  .button {
    color: #fff;
    background-color: #409eff;
  }
}
.func-list {
  margin-bottom: 20px;
  .left {
    display: inline-block;
  }
  .right {
    float: right;
  }
}
.pagination {
  margin-top: 20px;
  text-align: right;
}
.upload-demo {
  display: inline-block;
  color: white;
}
</style>

