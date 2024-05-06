<template>
    <div class="travel-view">
        <div id="main"></div>
    </div>
</template>
<script>
import geoJson from '@/assets/china.json'
// import { travel } from '@/api/api'
export default {
    data() {
        return {
        }
    },
    // created() {
    //     travel().then(res => {
    //         if(res.data.status === 200) {
    //             let { point, linesData } = res.data.data
    //             this.draw(point,linesData)
                // console.log(linesData)
    //         }
    //     })
    // },
    // methods: {
    //     draw(point) {
    //         let myChart = this.$echarts.init(document.getElementById('main'))
    //         this.$echarts.registerMap('china',geoJson)
    //         let option = {
    //             backgroundColor: 'rgb(121,145,209)',
    //             geo: {
    //                 map: 'china',
    //                 aspectScale: 0.75,//地图长宽比
    //                 zoom: 1.1,
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: {
    //                             type: 'radial',
    //                             x: 0.5,
    //                             y: 0.5,
    //                             r: 0.8,
    //                             colorStops: [
    //                                 {
    //                                     offset: 0,
    //                                     color: '#09132c'
    //                                 },
    //                                 {
    //                                     offset: 1,
    //                                     color: '#274b68'
    //                                 }
    //                             ],
    //                             globalCoord: true
    //                         },
    //                         shadowColor: 'rgb(58,115,192)',
    //                         shadowOffsetX: 10,
    //                         shadowOffsetY: 10
    //                     }
    //                 },
    //                 regions: [{
    //                     name: '南海诸岛',
    //                     itemStyle: {
    //                         opacity: 0
    //                     }
    //                 }]
    //             },
    //             series: [
    //                 {//配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
    //                 type: 'map',
    //                 zoom: 1.1,
    //                 label: {
    //                     normal: {
    //                         show: true,
    //                         textStyle: {
    //                             color: '#1DE9B6',
    //                             fontSize: '10px',
    //                         }
    //                     },
    //                     emphasis: {
    //                         textStyle: {
    //                             color: 'rgb(183,185,14)'
    //                         }}
    //                 },
    //                 itemStyle: {
    //                     normal: {
    //                         backgroundColor: 'rgb(147,235,248)',
    //                         borderWidth: 1,
    //                         areaColor: {
    //                             type: 'radial',
    //                             x: 0.5,
    //                             y: 0.5,
    //                             r: 0.8,
    //                             colorStops: [
    //                                 {
    //                                     offset: 0,
    //                                     color: 'rgb(31,54,150)',
    //                                 },
    //                                 {
    //                                     offset: 1,
    //                                     color: 'rgb(89,128,142)'
    //                                 }
    //                             ],
    //                             globalCoord: true
    //                         }
    //                     },
    //                     emphasis: {
    //                         areaColor: 'rgb(76, 174, 213)',
    //                         borderWidth: 0.1
    //                     }
    //                 },
    //                 map: 'china'
    //             },{
    //                 type: 'effectScatter',
    //                 coordinateSystem: 'geo',
    //                 showEffectOn: 'render',
    //                 symbolSize: 10,
    //                 zlevel: 1,
    //                 data: point,
    //                 rippleEffect: {
    //                     period:15,
    //                     scale:4,
    //                     brushTpe: 'full'
    //                 }
                    


    //             }
    //         ]
    //         }
    //         myChart.setOption(option)
    //         }
    // }
    mounted() {
        let myChart = this.$echarts.init(document.getElementById('main'))
        this.$echarts.registerMap('china',geoJson)
        let option = {
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
            series: [
                {//配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
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
                map: 'china'
            },{//散点图配置
                type: 'effectScatter',//散点图
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                symbolSize: 13,
                zlevel: 1,
                data: [{ value: [118.8062,31.9208], itemStyle: {color: '#4ab2e5'}},
                {value:[125.8154, 44.2584], itemStyle: {color: '#4ab2e5'}},
                {value:[110.3467, 41.4899], itemStyle: {color: '#4ab2e5'}},
                {value:[116.4551, 40.2539], itemStyle: {color: '#4ab2e5'}},
                {value:[127.9688, 45.368], itemStyle: {color: 'rgb(220, 100, 20)'}},
                {value:[119.4543, 25.9222], itemStyle: {color: 'rgb(220, 100, 20)'}},
                {value:[114.4995, 38.1006], itemStyle: {color: 'rgb(220, 100, 20)'}},
                {value:[117.4219, 39.4189], itemStyle: {color: 'rgb(220, 100, 20)'}},
                {value:[112.3352, 37.9413], itemStyle: {color: 'rgb(20, 220, 63)'}},
                {value:[109.1162, 34.2004], itemStyle: {color: 'rgb(20, 220, 63)'}},
                {value:[109.1162, 34.2004], itemStyle: {color: 'rgb(20, 220, 63)'}},
                {value:[106.3586, 38.1775], itemStyle: {color: 'rgb(20, 220, 63)'}},
                {value:[101.4038, 36.8207], itemStyle: {color: 'rgb(220, 20, 190)'}},
                {value:[103.9526, 30.7617], itemStyle: {color: 'rgb(220, 20, 190)'}},
                {value:[108.384366, 30.439702], itemStyle: {color: 'rgb(220, 20, 190)'}},
                {value:[113.0823, 28.2568], itemStyle: {color: 'rgb(220, 20, 190)'}},
                {value:[102.9199, 25.46639], itemStyle: {color: 'rgb(20, 220, 37)'}},
                {value:[91.11,29.97], itemStyle: {color: 'rgb(20, 220, 37)'}},
                {value:[87.68,43.77], itemStyle: {color: 'rgb(20, 220, 37)'}},],
                rippleEffect: {//涟漪特效相关配置
                    period:15,
                    scale:4,
                    brushType: 'full'
                }
            },{//关于地图中线路动画效果设置
                type: 'lines',
                zlevel: 2,
                effect: {
                    show:true,
                    period: 4,
                    symbol: 'arrow',
                    symbolSize: 10,
                    trailLength: 0.6//拖尾效果
                },
                lineStyle: {
                    normal: {
                        color: '#1DE9B6',
                        width: 1,
                        opacity: 0.1,
                        curveness: 0.5//弯曲程度
                    }
                },
                //动画数据
                data: [{ coords: [[118.8062,31.9208],[113.12244, 23.009505]],lineStyle: {color: '#4ab2e5'}},
                {coords: [[125.8154, 44.2584],[113.12244, 23.009505]],lineStyle: {color: '#4ab2e5'}}, 
                {coords: [[110.3467, 41.4899],[113.12244, 23.009505]],lineStyle: {color: '#4ab2e5'}}, 
                {coords: [[116.4551, 40.2539],[113.12244, 23.009505]],lineStyle: {color: '#4ab2e5'}}, 
                {coords: [[127.9688, 45.368],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 100, 20)'}}, 
                {coords: [[119.4543, 25.9222],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 100, 20)'}}, 
                {coords: [[114.4995, 38.1006],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 100, 20)'}}, 
                {coords: [[117.4219, 39.4189],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 100, 20)'}}, 
                {coords: [[112.3352, 37.9413],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 63)'}}, 
                {coords: [[109.1162, 34.2004],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 63)'}}, 
                {coords: [[109.1162, 34.2004],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 63)'}}, 
                {coords: [[106.3586, 38.1775],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 63)'}}, 
                {coords: [[101.4038, 36.8207],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 20, 190)'}}, 
                {coords: [[103.9526, 30.7617],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 20, 190)'}}, 
                {coords: [[108.384366, 30.439702],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 20, 190)'}}, 
                {coords: [[113.0823, 28.2568],[113.12244, 23.009505]],lineStyle: {color: 'rgb(220, 20, 190)'}}, 
                {coords: [[102.9199, 25.46639],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 37)'}}, 
                {coords: [[91.11,29.97],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 37)'}}, 
                {coords: [[87.68,43.77],[113.12244, 23.009505]],lineStyle: {color: 'rgb(20, 220, 37)'}}, 
                // data: point
                // data:linesData
                ]}
            ]
        }
        myChart.setOption(option)
    }
}
</script>
<style lang="less">
.travel-view {
    width: 100%;
    font-size: larger;
    color: crimson;
        #main{
            width: 100%;
            height: 700px;
        }
    
}
</style>