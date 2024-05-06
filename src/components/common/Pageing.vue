<template>
    <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[5, 10, 20, 50, 100]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :url="url">
        </el-pagination>
    </div>
</template>
<script>
import { getTableData } from '@/utils/table'
export default {
    props: {
        "total": Number,
        "url": String,
    },
    data() {
        return {
            page: 1,
            size:10
        }
    },
    created() {
        getTableData(this.$parent,'/work',{page: this.page,size:this.size}, ['completed'])
    },
    methods: {
        handleSizeChange(val) {
            this.$parent.size= val
            this.$parent.page = 1
            getTableData(this.$parent,'/work',{page: this.page,size:val}, ['completed'])
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.$parent.page = val
            getTableData(this.$parent,'/work',{page: val,size:this.size}, ['completed'])
            console.log(`当前页: ${val}`);
        },
    }
}
</script>
<style lang="less"></style>