<template>
  <div>
    <div id="myChart" :style="{width: '375px', height: '202px'}"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      monse: 3
    };
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));
      var colors = [
        "#0089FF",
        "#B865DF",
        /*'#5ADF63','#FFDD00',*/ "#224666",
        "#675bba"
      ];
      let option = {
        /*grid:{
                             y:'25%'},*/
        color: colors,
        /*		  title: {
                  	        text: '各医院指标对比情况',
                  	        left: 16,
                  	        textStyle: {
                  	            fontSize: 18,
                  	            color:'#0089FF'
                  	        }
                  	    },*/
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },

        legend: {
          data: ["进度", "累计完成投资额"],
          x: "20%"
        },
        xAxis: [
          {
            type: "category",
            data: [2012],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              show: true

              /*    lineStyle: {
                                    color: '#05edfc'
                                }*/
            },
            axisLabel: {
              show: true,
              /* color: '#fff',*/
              fontSize: 12,
              interval: 0,
              formatter: function(value) {
                return value;
              }
              //fontWeight: 'bold'
            }
          }
        ],

        yAxis: [
          {
            type: "value",
            name: "进度",
            position: "left",
            splitLine: { show: true },
            axisLine: {
              show: false

              /*  lineStyle: {
                                    color: '#E7E7E7'
                                }*/
            },
            axisLabel: {
              show: true,
              showMinLabel: true,
              showMaxLabel: true,
              formatter: "{value}"
            },
            axisLine: {
              //线
              show: false
            }
          },
          {
            type: "value",
            name: "累计完成投资额",
            position: "right",

            splitLine: { show: true },
            axisLine: {
              show: false

              /*  lineStyle: {
                                    color: '#E7E7E7'
                                }*/
            },
            axisLabel: {
              show: true,
              showMinLabel: true,
              showMaxLabel: true,
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "进度",
            type: "bar",
            barWidth: 20,
            data: [22],
            yAxisIndex: 0,
            /*      markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            }*/
            itemStyle: {
              normal: {
                color: "#FD6B71", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#FD6B71" //值得颜色
                  }
                }
              }
            }
          },
          {
            name: "累计完成投资额",
            type: "bar",
            barWidth: 20,
            data: [152222],
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FD6B71", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#FD6B71" //值得颜色
                  }
                }
              }
            }
          }
        ]
      };

      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawLine();
  }
};
//https://blog.csdn.net/Cynthia_Yue27/article/details/81434493
//https://blog.csdn.net/sinat_25311845/article/details/88252600
</script>
<style lang="scss" scoped>
</style>
