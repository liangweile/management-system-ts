<template>
    <div class="header">
        <el-header>
            <div class="title">通用后台管理系统</div>
            <el-button type="text" @click="open">更换账号</el-button>
        </el-header>
    </div>
</template>
<script>
import { getToken } from '../../utils/setToken.js' 
export default {
    data(){
        return {
            name: "data"
        }
    },
    created(){
        this.name = getToken('username')
    },
    methods: {
        open() {
        this.$alert('您确定要更换账号吗', '亲爱的用户', {
          confirmButtonText: '确定',
          callback: () => {
            this.$message({
              type: 'success',
              message: '跳转到登录页'
            });
            window.location.href='/';
          }
        });
      }
    }
}
</script>

<style lang="less" scoped>
.header {
    .el-header {
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            width:220px;
            font-size: 24px;
        }
        .el-button {
            color:#fff;
        }
    }
}
</style>../../utils/setToken.js