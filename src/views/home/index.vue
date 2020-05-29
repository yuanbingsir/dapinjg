<template>
  <dv-full-screen-container :style="isydd? 'width:1920px!important;':'width:100%'">
    <el-dialog title="告警设备" :visible.sync="dialogVisible" width="50%" :append-to-body="true">
      <img :src="this.address.alarmPicUrl" alt style="width:100%;height:50%" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Choices1">回放</el-button>
      </span>
    </el-dialog>
        <el-dialog title="二维码" :visible.sync="dialogVisiblewx" width="300px" :append-to-body="true">
      <img src="../../assets/imgs/gh_4ff636b227f3_258.jpg" alt="">
    </el-dialog>
    <!-- <el-dialog
  title="请选择要查看的监控"
  :visible.sync="dialogVisible"
  width="30%"
  :append-to-body="true"
  >
  <el-button type="primary" plain  v-for="(item, i) in name" :key="i" style="margin:0 0 2% 2%;" @click="Choice1(item)">{{item}}</el-button>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Choices1">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="请选择要查看的监控"
  :visible.sync="dialogVisible1"
  width="30%"
  :append-to-body="true"
  >
  <el-button type="primary" plain  v-for="(item, i) in name" :key="i" style="margin:0 0 2% 2%;" @click="Choice2(item)">{{item}}</el-button>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="Choices2">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="请选择要查看的监控"
  :visible.sync="dialogVisible2"
  width="30%"
  :append-to-body="true"
  >
  <el-button type="primary" plain  v-for="(item, i) in name" :key="i" style="margin:0 0 2% 2%;" @click="Choice3(item)">{{item}}</el-button>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="Choices3">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="请选择要查看的监控"
  :visible.sync="dialogVisible3"
  width="30%"
  :append-to-body="true"
    >-->
    <!-- <el-button type="primary" plain  v-for="(item, i) in name" :key="i" style="margin:0 0 2% 2%;" @click="Choice4(item)">{{item}}</el-button>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible3 = false">取 消</el-button>
    <el-button type="primary" @click="Choices4">确 定</el-button>
  </span>
    </el-dialog>-->

    <map111 v-if="Screen" ref="map111"></map111>

    <div class="header">
          <div  class="xiaochengxu" @click="erweima">小程序</div>
          <div  class="xiaochenghou" @click="jkroyter">硫化氢监控平台</div>
          <div  class="xiaochenghou1" @click="htroyter">后台管理</div>
      <div class="head-left">
      </div>
      <div class="head-center">
        <button
          :class="imggl?'headgl':'headbgl2'"
          style="height: 90%;width: 21%;font-size: 16px;margin-left: 1%;border: 0;color: #daecff;"
          @click="system()"
        >设备监控</button>
        <button
          :class="imgbgl?'headbgl':'headbgl1'"
          style="height: 90%;width: 20%;font-size: 16px;margin-left: 56%;border: 0;color: #daecff;"
          @click="Monitor()"
        >系统首页</button>
      </div>
      <div class="head-right">
        <div class="head-right-year">2020</div>
        <p class="head-right-p">年</p>
        <div class="head-right-yy">{{nowTimes.yy}}</div>
        <p class="head-right-p">月</p>
        <div class="head-right-yy">{{nowTimes.dd}}</div>
        <p class="head-right-p">日</p>
        <div class="head-right-sj">{{nowTimes.hou}}:{{nowTimes.min}}:{{nowTimes.sec}}</div>
      </div>
    </div>
    <div style="height:100%" v-if="Screen">
      <dv-border-box-1 id="dv-border-box-1">
        <div class="left-top1">
          <img src="../../assets/imgs/asdasda.png" alt />
          <p class="left-top1-nm">设备概况</p>
        </div>
        <div class="left-inio">
          <p class="left-inio-font">设备总数</p>
          <p style="margin:0;font-size:30px;color:#32ebca">{{this.Totalequipmentlength}}</p>
        </div>
        <div class="left-inio">
          <p class="left-inio-font">在线设备</p>
          <p style="margin:0;font-size:30px;color:#32ebca">{{this.Online}}</p>
        </div>
        <div class="left-inio">
          <p class="left-inio-font">离线设备</p>
          <p style="margin:0;font-size:30px;color:#32ebca">{{this.Fnline}}</p>
        </div>
        <div id="container"></div>
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-2">
        <div class="left-top1">
          <img src="../../assets/imgs/asdasda.png" alt />
          <p class="left-top1-nm">报警总览</p>
        </div>
        <div class="left-inio">
          <p class="left-inio-font">报警总数 &nbsp;&nbsp;</p>
          <p style="margin:0;font-size:30px;color:#32ebca"></p>
        </div>
        <div class="left-inio">
          <p class="left-inio-font">已处理报警</p>
          <p style="margin:0;font-size:30px;color:#32ebca"></p>
        </div>
        <div class="left-inio">
          <p class="left-inio-font">未处理报警</p>
          <p style="margin:0;font-size:30px;color:#32ebca"></p>
        </div>
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-3">
        <div class="left-top3">
          <div class="selemodo">
            <el-select
              v-model="value"
              placeholder="请选择工区"
              size="mini"
              style="margin-left:10px;width=10%;margin-right:10px"
              @change="screen"
            >
              <el-option v-for="item in Work" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </div>
          <div class="input-f">
            <input
              type="text"
              style="height:20px;background-color:#11234a;border:0;padding-left:5px;color:#00f0ff;width:55%;"
              placeholder="设备编号或设备名称"
              v-model="Screening"
              @keyup.enter="Screeningname()"
            />
            <img
              src="../../assets/imgs/fdj.png"
              alt
              style="height:90%;vertical-align: middle;"
              @click="Screeningname()"
            />
          </div>
        </div>
        <div class="table-wrapper">
          <el-table
            id="e-table"
            :show-header="false"
            :data="isCollapse ? newTotalequipment : Totalequipment1"
            style="width: 90%;"
            :row-style="{height:'10px'}"
            :cell-style="{padding:'0px'}"
            @row-click="openDetails1"

          >
            <el-table-column prop="press" width="55"></el-table-column>
            <el-table-column prop="Totalequipmentname" width="200"></el-table-column>
          </el-table>
        </div>
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-4">
        <div class="left-top1" style="height:3%">
          <img src="../../assets/imgs/asdasda.png" alt />
          <p class="left-top1-nm">报警信息</p>
        </div>
      </dv-border-box-1>
    </div>
    <div style="height:100%" v-if="creen">
      <dv-border-box-1 id="dv-border-box-5">
        <div class="left-top3">
          <img src="../../assets/imgs/asdasda.png" alt style="height:20px" />
          <div class="selemodo">
            <el-select
              v-model="value"
              placeholder="请选择工区"
              size="mini"
              style="margin-left:10px;width=10%"
              @change="screen"
            >
              <el-option v-for="item in Work" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </div>
          <div class="input-f">
            <input
              type="text"
              style="height:20px;background-color:#11234a;border:0;padding-left:5px;color:#00f0ff;width:55%"
              placeholder="设备编号或设备名称"
              v-model="Screening"
              @keyup.enter="Screeningname()"
            />
            <img
              src="../../assets/imgs/fdj.png"
              alt
              style="height:90%;vertical-align: middle;"
              @click="Screeningname()"
            />
          </div>
        </div>
        <div class="table-wrapper">
          <el-table
            id="e-table"
            :show-header="false"
            :data="isCollapse ? newTotalequipment : Totalequipment1"
            style="width: 90%"
            :row-style="{height:'10px'}"
            :cell-style="{padding:'0px'}"
            @row-click="openDetails"
            highlight-current-row
             :max-height="tableHeight1"
          >
            <el-table-column prop="press" width="55"></el-table-column>
            <el-table-column prop="Totalequipmentname" width="200"></el-table-column>
          </el-table>
        </div>
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-6">
        <button
          style="height:4%;width:10%;margin-left:2%;margin-top:2%;"
          class="igs"
          @click="Videosurveillance"
        >视频监控</button>
        <button
          style="height:4%;width:10%;margin-left:2%;margin-top:2%;"
          class="igs"
          @click="Quarter"
        >四分屏</button>
        <div style="height:96%" v-if="surveillance">
          <yinghuos :newlist="Serpentine" ref="yinghuos" v-show="camera"></yinghuos>
          <div style="height:100%;width:100%;text-align:center;" v-if="!camera">
            <p style="margin-top:24%;color:#fff;font-size:20px;">该设备未绑定摄像头</p>
            <img src="../../assets/imgs/index_icon_video_default.f9d8731.png" alt />
          </div>
        </div>
        <!-- <div style="height:96%; position: relative;z-index:0" v-if="surveillancef">

          <div style="width:20%;height:20%;line-height:20%;  display: flex;justify-content: center;align-items: center;position: absolute;margin: auto;top: 0;left:0;bottom:0;right:0;z-index:5"><div @click="Jump11()" class="el-icon-video-play" style="font-size:60px;color:rgb(59,222,254);" ></div></div>
          <el-row style="width:100%;height:48%;">
            <el-col :span="12" style="height:100%;"><div @click="Eject" style="width:50%;height:100%;font-size:100px;color:rgb(59,222,254);text-align:center;margin-left:20%;margin-top:20%" class="el-icon-video-camera"><p style="margin:0;font-size:18px;color:#fff;">{{this.ideaname}}</p></div></el-col>
            <el-col :span="12" style="height:100%"><div @click="Eject1" style="width:50%;height:100%;font-size:100px;color:rgb(59,222,254);text-align:center;margin-left:20%;margin-top:20%" class="el-icon-video-camera"><p style="margin:0;font-size:18px;color:#fff;">{{this.ideaname1}}</p></div></el-col>
          </el-row>
          <el-row style="width:100%;height:48%">
            <el-col :span="12" style="height:100%;"><div @click="Eject2" style="width:50%;height:100%;font-size:100px;color:rgb(59,222,254);text-align:center;margin-left:20%;margin-top:20%" class="el-icon-video-camera"><p style="margin:0;font-size:18px;color:#fff;">{{this.ideaname2}}</p></div></el-col>
            <el-col :span="12" style="height:100%"><div @click="Eject3" style="width:50%;height:100%;font-size:100px;color:rgb(59,222,254);text-align:center;margin-left:20%;margin-top:20%" class="el-icon-video-camera"><p style="margin:0;font-size:18px;color:#fff;">{{this.ideaname3}}</p></div></el-col>
          </el-row>
        </div>-->
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-7">
        <button style="height:15%;width:10%;margin-left:2%;margin-top:2%;" class="igs">设备信息</button>
        <button style="height:15%;width:10%" class="igs">历史数据</button>
        <div>
          <div style="color:#fff;margin-left:20%;margin-top:2%;">
            <i class="el-icon-s-platform" style="color:rgb(59,222,254);font-size:18px"></i>
            SN &nbsp;&nbsp;&nbsp;{{this.Serpentine.equipmentNumber}}
          </div>
          <div style="color:#fff;margin-left:20%;margin-top:2%;">
            <i class="el-icon-location-information" style="color:rgb(59,222,254);font-size:18px"></i>
            所属工区 &nbsp;&nbsp;&nbsp;{{this.Serpentine.workArea}}
          </div>
          <div style="color:#fff;margin-left:20%;margin-top:2%;">
            <i class="el-icon-notebook-2" style="color:rgb(59,222,254);font-size:18px"></i>
            设备地址 &nbsp;&nbsp;&nbsp;{{this.Serpentine.longitude}},{{this.Serpentine.latitude}}
          </div>
        </div>
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-8">
        <button style="height:4%;width:30%;margin-left:5%;margin-top:5%;" class="igs">云台控制</button>
        <div style="height:30%;width:200%">
          <div
            @click="control(2)"
            style="font-size:80px;color:rgb(59,222,254);transform: translate(50px, 90px);"
            class="el-icon-caret-left"
          ></div>
          <div
            @click="control(3)"
            style="font-size:80px;color:rgb(59,222,254);transform: translate(63px, 90px);  "
            class="el-icon-caret-right"
          ></div>
          <div
            @click="control(1)"
            style="font-size:80px;color:rgb(59,222,254);transform: translate(-70px, 138px);"
            class="el-icon-caret-bottom"
          ></div>
          <div
            @click="control(0)"
            style="font-size:80px;color:rgb(59,222,254);transform: translate(-155px, 40px);"
            class="el-icon-caret-top"
          ></div>
          <div
            @click="control(8)"
            style="font-size:40px;color:rgb(59,222,254);transform: translate(-125px, 00px);"
            class="el-icon-zoom-out"
          ></div>
          <div
            @click="control(9)"
            style="font-size:40px;color:rgb(59,222,254);transform: translate(-205px, 0px);"
            class="el-icon-zoom-in"
          ></div>
        </div>
        <button style="height:4%;width:30%;margin-left:5%;margin-top:10%;" class="igs">报警信息</button>
        <el-table
                  :max-height="tableHeight1"
          id="e-table"
          :show-header="false"
          :data="aalarm"
          style="width: 94%;margin-left:4%;margin-top:5%"
          :row-style="{height:'10px'}"
          :cell-style="{padding:'0px'}"
          @row-click="openDetailsplace"
        >
          <el-table-column prop="alarmName" width="195"></el-table-column>
          <el-table-column prop="alarmTime" width="110">
            <template slot-scope="data">
              <el-row>
                <el-col>{{data.row.alarmTime | date('yyyy-MM-dd hh:mm:ss')}}</el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column prop="alarmPicUrl" width="50">
            <template slot-scope="data">
              <el-row>
                <el-col>
                  <img :src="data.row.alarmPicUrl" alt style="width:30px;height:30px" />
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-upload
          style="margin-top:20px;margin-left:20px"
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary" class="el-icon-microphone">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传wav、mp3、aac文件，且不超过20M</div>
        </el-upload>-->
      </dv-border-box-1>
      <dv-border-box-1 id="dv-border-box-9">
        <button style="height:15%;width:30%;margin-left:5%;margin-top:5%;" class="igs">报警信息</button>
        <div
          style="color:#fff;margin-left:20%;margin-top:5%;font-size:18px;"
        >设备：{{this.Serpentine.equipmentName}}</div>
        <div
          style="color:#fff;margin-left:20%;margin-top:5%;font-size:18px;"
        >硫化氢浓度：{{this.Serpentine.h2s}}</div>
        <div
          style="color:#fff;margin-left:20%;margin-top:5%;font-size:18px;"
        >压力：{{this.Serpentine.pressure}}</div>
      </dv-border-box-1>
    </div>
  </dv-full-screen-container>
</template>

<script>
import { getItemList, getonin, getplace, gettookin } from '@/api'
import Charts from '@jiaminghi/charts'
import map111 from '@/components/HelloWorld.vue'
import yinghuos from '@/components/yhs/index.vue'
export default {
  name: 'home',
  components: {
    map111,
    yinghuos
  },
  data () {
    return {
      palyer: '',
      nowTimes: {
        yy: 0,
        dd: '00',
        hou: '00',
        min: '00',
        sec: '00'
      },
      url5: '',
      dialogVisiblewx: false,
      url1: '',
      url2: '',
      url3: '',
      url4: '',
      Totalequipment: [],
      Totalequipmentlength: '',
      Online: '',
      Fnline: '',
      Onlinerate: '',
      press: '',
      Screening: '',
      isCollapse: false,
      newTotalequipment: [],
      map: null,
      marker: '',
      snMarker: new Map(),
      Screen: false,
      creen: true,
      Work: [],
      value: '',
      Totalequipment1: [],
      Serpentine: '',
      cooker: '',
      imggl: true,
      imgbgl: true,
      camera: false,
      name: [],
      tableHeight: 0,
      surveillance: true,
      // imagine: [],
      dialogVisible: false,
      // dialogVisible1: false,
      // dialogVisible2: false,
      // dialogVisible3: false,
      address: '',
      ok: '',
      screenWidth: document.body.clientWidth,
      isydd: false,
      // address1: '',
      // address2: '',
      // address3: '',
      // addresssx1: '',
      // addresssx2: '',
      // addresssx3: '',
      // addresssx4: '',
      // ideaname3: '请选择摄像头',
      // ideaname2: '请选择摄像头',
      // ideaname: '请选择摄像头',
      // ideaname1: '请选择摄像头',
      // surveillancef: false,
      aalarm: [],
      tableHeight1: 0,
      screenHeight: document.body.clientHeight,
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.gitmychats()
    // }, 20)
    setInterval(() => {
      this.setNowTimes()
    }, 1000)
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 380
      // 后面的50：根据需求空出的高度，自行调整
    })
    this.$nextTick(() => {
      this.tableHeight1 = window.innerHeight - 180
      // 后面的50：根据需求空出的高度，自行调整
    })
  },

  watch: {
  },
  created () {
    if (this.screenWidth < 1366) {
      this.isydd = true
    }
    this.cooker = localStorage.getItem('cooker')
    getplace(this.cooker).then(res => {
      if (res.data.code === '200') {
        this.aalarm = res.data.data
        console.log(this.aalarm)
      } if (res.data.code === '10002') {
        gettookin().then(res => {
          localStorage.setItem('cooker', res.data.data.accessToken)
        })
      }
    })
    setInterval(() => {
      getplace(this.cooker).then(res => {
        if (res.data.code === '200') {
          this.aalarm = res.data.data
        } if (res.data.code === '10002') {
          gettookin().then(res => {
            localStorage.setItem('cooker', res.data.data.accessToken)
          })
        }
      })
      getItemList().then(res => {
        this.Work = []
        if (res.data.ok) {
          this.Totalequipment = res.data.data
          this.Totalequipmentlength = res.data.data.length
          this.Totalequipment.forEach(item => {
            this.name.push(item.equipmentName)
            this.Work.push(item.workArea)
            if (item.equipmentStatus === '1') {
              item.press = (
                <el-tag
                  type="success"
                  style="background-color:rgba(103,194,58,.1);border-color: rgba(103,194,58,.2);color: #67c23a;"
                >
                在线
                </el-tag>
              )
            } else {
              item.press = (
                <el-tag
                  type="info"
                  style="background-color:rgba(103,194,58,.1);border-color:hsla(220,4%,58%,.2);"
                >
                离线
                </el-tag>
              )
            }
            item.Totalequipmentname = (
              <p style="color:#fff;">{item.equipmentName}</p>
            )
          })
          this.Work = [...new Set(this.Work)]
          if (this.value === '') {
            this.value = this.Work[0]
          }
          this.screen()
        }
      })
      getonin().then(res => {
        if (res.data.ok) {
          this.Online = res.data.data[2]
          this.Fnline = res.data.data[1]
          this.Onlinerate = (this.Online / this.Totalequipmentlength) * 100
        }
      })
    }, 10000)
    getItemList().then(res => {
      this.Work = []
      if (res.data.ok) {
        this.Totalequipment = res.data.data
        this.Totalequipmentlength = res.data.data.length
        this.Totalequipment.forEach(item => {
          this.name.push(item.equipmentName)
          this.Work.push(item.workArea)
          if (item.equipmentStatus === '1') {
            item.press = (
              <el-tag
                type="success"
                style="background-color:rgba(103,194,58,.1);border-color: rgba(103,194,58,.2);color: #67c23a;"
              >
                在线
              </el-tag>
            )
          } else {
            item.press = (
              <el-tag
                type="info"
                style="background-color:rgba(103,194,58,.1);border-color:hsla(220,4%,58%,.2);"
              >
                离线
              </el-tag>
            )
          }
          item.Totalequipmentname = (
            <p style="color:#fff;">{item.equipmentName}</p>
          )
        })
        this.Work = [...new Set(this.Work)]
        if (this.value === '') {
          this.value = this.Work[0]
        }
        this.screen()
      }
    })
    getonin().then(res => {
      if (res.data.ok) {
        this.Online = res.data.data[2]
        this.Fnline = res.data.data[1]
        this.Onlinerate = (this.Online / this.Totalequipmentlength) * 100
      }
    })
  },
  methods: {
    erweima () {
      this.dialogVisiblewx = true
    },
    openDetailsplace (row) {
      this.dialogVisible = true
      this.address = row
    },
    // Choice1 (e) {
    //   this.imagine = this.Totalequipment1.filter(item => {
    //     return item.equipmentName.includes(e)
    //   })
    //   this.address = e
    // },
    // Choice2 (e) {
    //   this.imagine = this.Totalequipment1.filter(item => {
    //     return item.equipmentName.includes(e)
    //   })
    //   this.address1 = e
    // },
    // Choice3 (e) {
    //   this.imagine = this.Totalequipment1.filter(item => {
    //     return item.equipmentName.includes(e)
    //   })
    //   this.address2 = e
    // },
    // Choice4 (e) {
    //   this.imagine = this.Totalequipment1.filter(item => {
    //     return item.equipmentName.includes(e)
    //   })
    //   this.address3 = e
    // },
    Choices1 () {
      this.dialogVisible = false
      this.camera = true
      this.$refs.yinghuos.openDetails2(this.address)
    },
    jkroyter () {
      window.open('http://pub.sxhcd.xyz/dist')
    },
    htroyter () {
      window.open('http://pub.sxhcd.xyz/hcd')
    },
    // Choices2 () {
    //   this.addresssx2 = this.imagine[0].serial
    //   this.dialogVisible1 = false
    //   this.imagine = []
    //   this.ideaname1 = this.address1
    // },
    // Choices3 () {
    //   this.addresssx3 = this.imagine[0].serial
    //   this.dialogVisible2 = false
    //   this.imagine = []
    //   this.ideaname2 = this.address2
    // },
    // Choices4 () {
    //   this.addresssx4 = this.imagine[0].serial
    //   this.dialogVisible3 = false
    //   this.imagine = []
    //   this.ideaname3 = this.address3
    // },
    // Eject () {
    //   this.dialogVisible = true
    // },
    // Eject1 () {
    //   this.dialogVisible1 = true
    // },
    // Eject2 () {
    //   this.dialogVisible2 = true
    // },
    // Eject3 () {
    //   this.dialogVisible3 = true
    // },
    Videosurveillance () {
      this.surveillance = true
      // this.surveillancef = false
    },
    Quarter () {
      this.surveillance = false
      // this.surveillancef = true
      this.$router.push('/come')
    },
    control (id) {
      this.$refs.yinghuos.control(id)
    },
    openDetails1 (row) {
      this.$refs.map111.openDetails1(row)
    },
    openDetails (row) {
      this.Serpentine = row
      this.$refs.yinghuos.openDetails(this.Serpentine)
      if (row.serial === null) {
        this.camera = false
      } else {
        this.camera = true
      }
      this.Videosurveillance()
    },
    screen () {
      this.Totalequipment1 = this.Totalequipment.filter(item => {
        return item.workArea.includes(this.value)
      })
    },
    system () {
      this.imggl = true
      this.imgbgl = true
      this.Screen = false
      this.creen = true
    },
    Monitor () {
      this.imgbgl = false
      this.imggl = false
      this.Screen = true
      this.creen = false
    },
    Screeningname () {
      if (this.Screening === '') {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
      this.newTotalequipment = this.Totalequipment1.filter(item => {
        if (item.equipmentName !== null) {
          return (
            item.equipmentName.includes(this.Screening) ||
          item.equipmentNumber.includes(this.Screening)
          )
        }
      })
    },
    gitmychats () {
      const container = document.getElementById('container')
      const myChart = new Charts(container)
      myChart.prototype.setOption = function (option) {

      }
    },
    setNowTimes () {
      let myDate = new Date()
      this.nowTimes.yy = myDate.getMonth() + 1
      this.nowTimes.dd = String(
        myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
      )
      this.nowTimes.hou = String(
        myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
      )
      this.nowTimes.min = String(
        myDate.getMinutes() < 10
          ? '0' + myDate.getMinutes()
          : myDate.getMinutes()
      )
      this.nowTimes.sec = String(
        myDate.getSeconds() < 10
          ? '0' + myDate.getSeconds()
          : myDate.getSeconds()
      )
    }
  }
}
</script>

<style>
.igs {
  background: url("../../assets/imgs/monitor-device-footer-btn.bc4e75d.png");
  border: 0;
  color: #fff;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: #00f0ff !important;
}
.table-wrapper /deep/ .el-table--fit {
  padding: 20px;
}
.table-wrapper /deep/ .el-table,
.el-table__expanded-cell {
  background-color: rgba(254, 219, 207, 0);
}
.table-wrapper /deep/ .el-table tr {
  background-color: rgba(254, 219, 207, 0) !important;
}
.table-wrapper /deep/ .el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: rgba(254, 219, 207, 0);
  border-bottom: 0;
}
.table-wrapper /deep/ .el-table::before {
  height: 0;
}
.el-table__row {
  background-color: rgba(254, 219, 207, 0) !important;
  color: #fff;
  border-bottom: 0;
}
.el-table__body-wrapper {
  background-color: rgba(254, 219, 207, 0) !important;
}
.el-table {
  background-color: rgba(254, 219, 207, 0) !important;
}
.el-table_2_column_3 {
  border-bottom: 0 !important;
}
.el-table_2_column_4 {
  border-bottom: 0 !important;
}
.el-table_2_column_5 {
  border-bottom: 0 !important;
}
.el-table::before {
  height: 0 !important;
}
.selemodo .el-input {
  width: 90px !important;
  margin-left: 4px;
  height: 22px;
  background-color: rgb(18, 50, 97);
}
.selemodo .el-input__inner {
  width: 90px !important;
  margin-left: 4px;
  height: 22px;
  background-color: rgb(18, 50, 97);
}
.selemodo .el-input--suffix .el-input__inner {
  width: 90px !important;
  margin-left: 4px;
  height: 22px;
  background-color: rgb(18, 50, 97);
}
.selemodo .el-input__icon {
  height: 116%;
}
.selemodo .el-select-dropdown__empty {
  background-color: rgb(18, 50, 97);
}
.el-table tbody tr:hover > td {
  background-color: rgb(29, 85, 144) !important;
}
.el-table__body tr.current-row > td {
  background-color: rgb(29, 85, 144) !important;
}
.table-wrapper {
  position: relative;
  top: 7%;
  left: 5%;
  background-color: rgba(0, 24, 50, 0);
  /* opacity:0.5; */
}
.input-f {
  height: 20px;
  line-height: 20px;
}
#myChart {
  width: 70%;
  height: 70%;
  position: absolute;
  right: -10%;
  top: 30%;
}
.header {
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background: url("../../assets/imgs/yunzutai.png") no-repeat 50% 0;
  z-index: 100;
  position: relative;
}
.left-inio {
  height: 20%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;
}
.left-inio-font {
  color: #32ebca;
  margin: 0;
  margin-left: 15%;
  margin-top: 2%;
  margin-right: 10%;
}
.head-left {
  width: 30%;
  height: 50%;
  background: url("../../assets/imgs/header-right.5c2761a.png") no-repeat 50% 0;
  transform: rotateY(180deg);
}
.head-right {
  width: 30%;
  height: 50%;
  background: url("../../assets/imgs/header-right.5c2761a.png") no-repeat 50% 0;
  display: flex;
  flex-direction: row;
}
.head-center {
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: row;
}
.headgl {
  background: url("../../assets/imgs/header-middle-left-active.c4e7c05.png")
    no-repeat 50% 0;
}
.headbgl {
  background: url("../../assets/imgs/header-middle-right.ad858ee.png") no-repeat
    50% 0;
}
.headbgl1 {
  background: url("../../assets/imgs/head-gl.png") no-repeat 50% 0;
}
.headbgl2 {
  background: url("../../assets/imgs/head-bgl.png") no-repeat 50% 0;
}
.head-right-year {
  width: 10%;
  height: 80%;
  font-size: 16px;
  color: #daecff;
  text-align: center;
  padding-top: 1%;
  margin-left: 3%;
  background: url("../../assets/imgs/time-bg.24cac41.png") no-repeat 50% 0;
}
.head-right-p {
  margin: 0;
  color: #daecff;
  height: 80%;
  font-size: 18px;
  padding-top: 5px;
}
.head-right-yy {
  width: 10%;
  height: 80%;
  font-size: 16px;
  color: #daecff;
  text-align: center;
  padding-top: 1%;
  margin-left: 1%;
  background: url("../../assets/imgs/time-bg.24cac41.png") no-repeat 50% 0;
}
.head-right-sj {
  width: 15%;
  height: 65%;
  font-size: 16px;
  color: #daecff;
  text-align: center;
  padding-top: 1%;
  margin-left: 1%;
  background: url("../../assets/imgs/time-bg.24cac41.png") no-repeat 50% 0;
  background-size: cover;
}

#dv-border-box-1 {
  width: 21%;
  height: 26%;
  position: relative;
  background-color: rgba(7, 41, 78, 0.4) !important;
  border-radius: 10%;
}
#dv-border-box-5 {
  width: 21%;
  height: 92%;
}
#dv-border-box-6 {
  width: 59%;
  height: 71%;
  position: absolute;
  top: 8%;
  left: 21%;
}
#dv-border-box-7 {
  width: 59%;
  height: 21%;
  position: absolute;
  top: 79%;
  left: 21%;
}
#dv-border-box-8 {
  width: 20%;
  height: 71%;
  position: absolute;
  top: 8%;
  right: 0;
}
#dv-border-box-9 {
  width: 20%;
  height: 21%;
  position: absolute;
  top: 79%;
  right: 0;
}
#dv-border-box-2 {
  width: 21%;
  height: 26%;
  position: absolute;
  right: 0;
  top: 8%;
  background-color: rgba(7, 41, 78, 0.4) !important;
  border-radius: 10%;
}
#dv-border-box-3 {
  width: 21%;
  height: 66%;
  background-color: rgba(7, 41, 78, 0.4) !important;
  border-radius: 10%;
}
#dv-border-box-4 {
  width: 21%;
  height: 66%;
  position: absolute;
  right: 0;
  top: 34%;
  background-color: rgba(7, 41, 78, 0.4) !important;
  border-radius: 10%;
}
.left-top1 {
  height: 7%;
  width: 100%;
  padding-left: 10%;
  padding-top: 4%;
  display: flex;
  flex-direction: row;
}
.left-top1-nm {
  color: #daecff;
  font-size: 14px;
  width: 25%;
  margin: 0;
}
.left-top3 {
  height: 4%;
  width: 100%;
  padding-left: 10%;
  padding-top: 4%;
  display: flex;
  flex-direction: row;
  position: absolute;
}
.left-top3-nm {
  color: #daecff;
  font-size: 14px;
  width: 25%;
  margin: 0;
}
#dv-full-screen-container {
  height: 100% !important;
  width: 100% !important;
}
.xiaochengxu{
  width: 6%;
  height: 40%;
  /* line-height: 48%; */
  /* padding-top:1%; */
  color: #fff;
  text-align: center;
  position: absolute;
  right:3%;
  top:50%;
   background: url("../../assets/imgs/monitor-device-footer-btn.bc4e75d.png");
}
.xiaochenghou{
width: 6%;
  height: 40%;
  /* line-height: 48%; */
  /* padding-top:1%; */
  color: #fff;
  text-align: center;
  position: absolute;
  left:12%;
  top:50%;
  z-index: 22;
   background: url("../../assets/imgs/monitor-device-footer-btn.bc4e75d.png");
}
.xiaochenghou1{
width: 6%;
  height: 40%;
  /* line-height: 48%; */
  /* padding-top:1%; */
  color: #fff;
  text-align: center;
  position: absolute;
  left:20%;
  top:50%;
  z-index: 22;
   background: url("../../assets/imgs/monitor-device-footer-btn.bc4e75d.png");
}
*::-webkit-scrollbar {width:1px; height:10px; background-color:transparent;} /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
*::-webkit-scrollbar-track {background-color:rgba(0, 24, 50, 0);  } /*定义滚动条轨道 内阴影+圆角*/
*::-webkit-scrollbar-thumb {background-color:#73abb1; border-radius:6px;} /*定义滑块 内阴影+圆角*/
.scrollbarHide::-webkit-scrollbar{display: none}
.scrollbarShow::-webkit-scrollbar{display: block}
</style>
