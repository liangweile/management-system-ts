<template>
    <div class="WorkList">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="userId" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="title" label="作业名称" align="center"></el-table-column>
            <el-table-column prop="cmpleted_text" label="完成情况" align="center"></el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[5, 10, 20, 50, 100]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
import { getTableData } from '@/utils/table'
export default {
    data() {
        return {
            tableData: [],
            total:0,
            page: 1,
            size: 10,
            loading: true,
        }
    },
    created() {
        getTableData(this,'/work',{page: this.page,size:this.size}, ['completed'])
    },
    methods: {
        handleSizeChange(val) {
            this.size= val
            this.page = 1
            getTableData(this,'/work',{page: this.page,size:val}, ['completed'])
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.page = val
            getTableData(this,'/work',{page: val,size:this.size}, ['completed'])
            console.log(`当前页: ${val}`);
        },
    }
}
</script>
<style lang="less">
.WorkList {
    .el-pagination {
        text-align: left;
        margin-top: 20px;
    }
}
</style>