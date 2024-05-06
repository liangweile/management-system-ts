<template>
    <div class="map-view" :data="form">
        {{ form.countryMap }}<div id="main1"></div>
        {{ form.cityMap }}<div id="main2"></div>
    </div>
</template>
<script>
import geoJson from '@/assets/china.json'
// import heoJson from '@/assets/guangdong.json'
import heoJson from '@/assets/shaoguan.json'

export default {
    data() {
        return {
            form: {
            countryMap: '中国地图',
            cityMap: '韶关地图'
            }
        }
    },
    mounted() {
        let myChart1 = this.$echarts.init(document.getElementById('main1'))
        this.$echarts.registerMap('china',geoJson)
        let myChart2 = this.$echarts.init(document.getElementById('main2'))
        this.$echarts.registerMap('shaoguan',heoJson)
        let option1 = {
            backgroundColor: 'rgb(121,145,209)',
            geo: {
                map: 'china',
                aspectScale: 0.75,//地图长宽比
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#09132c'
                                },
                                {
                                    offset: 1,
                                    color: '#274b68'
                                }
                            ],
                            globalCoord: true
                        },
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 10,
                        shadowOffsetY: 10
                    }
                },
                regions: [{
                    name: '南海诸岛',
                    itemStyle: {
                        opacity: 0
                    }
                }]
            },
            series: [{//配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
                type: 'map',
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        backgroundColor: 'rgb(147,235,248)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgb(31,54,150)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(89,128,142)'
                                }
                            ],
                            globalCoord: true
                        }
                    },
                    emphasis: {
                        areaColor: 'rgb(46,229,206)',
                        borderWidth: 0.1
                    }
                },
                map: 'china'
            }]
        }
        let option2 = {
            backgroundColor: 'rgb(121,145,209)',
            geo: {
                map: 'shaoguan',
                aspectScale: 0.75,//地图长宽比
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#09132c'
                                },
                                {
                                    offset: 1,
                                    color: '#274b68'
                                }
                            ],
                            globalCoord: true
                        },
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 10,
                        shadowOffsetY: 10
                    }
                },
                regions: [{
                    name: '南海诸岛'
                }]
            },
            series: [{//配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
                type: 'map',
                zoom: 1.1,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#1DE9B6',
                            fontSize: '10px',
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgb(183,185,14)'
                        }}
                },
                itemStyle: {
                    normal: {
                        backgroundColor: 'rgb(147,235,248)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgb(31,54,150)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(89,128,142)'
                                }
                            ],
                            globalCoord: true
                        }
                    },
                    emphasis: {
                        areaColor: 'rgb(76, 174, 213)',
                        borderWidth: 0.1
                    }
                },
                map: 'shaoguan'
            }]
        }
        myChart1.setOption(option1)
        myChart2.setOption(option2)
    }
}
</script>
<style lang="less">
.map-view {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: larger;
    color: crimson;
        #main1,#main2 {
            width: 100%;
            height: 500px;
        }
    
}
</style>