<template>
  <div>
    <dataBanner></dataBanner>
    <div class="container call-container">
      <div class="row">
        <div class="col-md-12 imp-box">
          <img :src="importIcon" alt="" class="imp-icon">
          <span class="imp-txt">仅支持商务合作，其他需求请通过联系方式找到我们</span>
        </div>
      </div>
      <div class="form-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="联系人姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="联系人电话" prop="phone">
            <el-input v-model.number="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="公司名称" prop="company">
            <el-input v-model="ruleForm.company"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="需求" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <div class="radio-box">
                <el-radio label=1>数据标注</el-radio>
                <el-radio label=0>数据采集</el-radio>
                <el-radio label=2>数据质检</el-radio>
              </div>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="留言给我们" prop="desc" id="textarea-box">
            <el-input type="textarea" v-model="ruleForm.desc"  :rows="4" ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code"  class="code-container">
            <el-input  v-model="ruleForm.code" class="code-input"></el-input>
            <div class="code-box" id="verify_code">
              <img :src="imageBase64" alt="" class="image-size" @click="changeVerifyCode()">
            </div>
            <div class="code-text" @click="changeVerifyCode()">看不清，换一张图</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import dataBanner from './data_banner'
  import {isvalidPhone,isvalidName,isvalidCompany,isvalidEmail,isvalidCode} from '../../../../config/validate'
  var validPhone=(rule, value,callback)=>{
    if (!value){
      callback(new Error('请输入您的手机号码'))
    }else  if (!isvalidPhone(value)){
      callback(new Error('请输入正确的11位手机号码'))
    }else {
      callback()
    }
  };
  var validName=(rule, value,callback)=>{
    if (!value){
      callback(new Error('请输入您的姓名,'))
    }else  if (!isvalidName(value)){
      callback(new Error('请输入2-7位中文汉字，或者1-14位英文'))
    }else {
      callback()
    }
  };
  var validEmail=(rule, value,callback)=>{
    if (!value){
      callback(new Error('请输入您的邮箱'))
    }else  if (!isvalidEmail(value)){
      callback(new Error('请输入正确的邮箱地址'))
    }else {
      callback()
    }
  };
  var validCompany=(rule, value,callback)=>{
    if (!value){
      callback(new Error('请填写您所属的公司'))
    }else  if (!isvalidCompany(value)){
      callback(new Error('请输入中英文公司名'))
    }else {
      callback()
    }
  };
  var validCode=(rule, value,callback)=>{
    if (!value){
      callback(new Error('请填写验证码'))
    }else  if (!isvalidCode(value)){
      callback(new Error('请输英文数字验证码'))
    }else {
      callback()
    }
  };
  export default {
    components:{dataBanner},
    data() {
      return {
        ruleForm: {
          name: '',
          company:'',
          resource: '',
          desc: '',
          phone: '',
          email:'',
          code:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入联系人姓名', trigger: 'blur' },
            { min: 2, max: 20, validator: validName, trigger: 'blur' }
          ],
          phone: [
            { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
          ],
          resource: [
            { required: true, message: '请选择您的需求', trigger: 'change' }
          ],
          desc: [
            { required: false, message: '请填写留言', trigger: 'blur' }
          ],
          company: [
            { required: true, trigger: 'blur' ,validator: validCompany}
          ],
          code: [
            { required: true, trigger: 'blur', validator: validCode},
          ],
          email: [
            { required: true, trigger: 'blur', validator: validEmail}
          ],
        },
        imageBase64: '',
        importIcon:require('../../../assets/images/sample_data/import-icon.png')
      }
    },
    created(){
      axios.get('/api/v1.0/user/svcode/', {responseType: 'arraybuffer'})
        .then(response => {
          this.imageBase64='data:image/png;base64,'+ btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        })
        .catch(error=>{
          if (error && error.response){
            this.errorstatus(error)
          }
          this.tanchu('ruleForm')
        })
    },
    methods: {
      changeVerifyCode() {
        axios.get('/api/v1.0/user/svcode/', {responseType: 'arraybuffer'})
          .then(response => {
            this.imageBase64='data:image/png;base64,'+ btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
          })
          .catch(error=>{
            if(error && error.response){
              this.formerror(error)
            }
          })
      },
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.emitUserMsg()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.changeVerifyCode();
      },
      emitUserMsg() {
        let params=this.$qs.stringify({
          'user_name': this.ruleForm.name,
          'mobile': this.ruleForm.phone,
          'company': this.ruleForm.company,
          'email': this.ruleForm.email,
          'service_requirement': this.ruleForm.resource,
          'desc': this.ruleForm.desc,
          'verify_code': this.ruleForm.code,
        });
        axios.post('/api/v1.0/user/getting_user_information/', params).then((response) => {
          if (response.status === 200) {
            this.$message({
              message:'提交成功，3s之后返回首页',
              type:'success'
            });
            setTimeout(function () {
              // location.href = "http://www.jzsjfw.com:8000/#/";
              location.href = "http://192.168.0.164:8080/#/";
            },3000)
          }
        }).catch(error=>{
          if (error && error.response) {
            this.formerror(error)
          }
          this.changeVerifyCode();
        })

      }
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    .call-container{width: 72%;margin: 50px auto;}
    .form-box{
      width: 450px;
      margin: 0 0 0 30%;
    }
    .imp-box{
      width: 100%;
      height: 100px;
      line-height: 100px;
    }
    .imp-icon{margin: 36px 0 0 30%}
    .imp-txt{font-size: 18px;color:#515a6e;}
    .code-text{
      display: inline-block;
      font-size: 12px;
      float: right;
      color: #5cb4fc;
      cursor: pointer;
    }
    .code-container{width: 420px;}
    .code-box{width: 114px;}
    .image-size{width:116px;height: 42px;}
  }
  @media screen and (max-width: 600px){
    .call-container{width: 90%;margin: 20px auto;}
    .form-box{width: 100%;margin: 20px 0 0 0}
    .imp-box{
      width: 100%;
      height: 40px;
      line-height: 20px;
    }
    .imp-icon{margin: 0}
    .imp-txt{font-size: 14px;color:#515a6e;}
    .code-text{display: none;float: right}
    .code-container{width: 100%;}
    .code-box{width: 100px;}
    .image-size{width:100px;height: 42px;}
    .radio-box{width: 30%;line-height: 20px;}
    .radio-box>.el-radio:not(:first-child){margin-left: 0;}
  }
  .call-container{
    background-color: #fff;
  }
  .imp-icon{width: 10px;}
  .code-input{
    width: 80px;
    margin-right: 10px;
    float: left;
  }
  .code-box{
    display: inline-block;
    height: 40px;
    border: 1px solid #fff;
    float: left;
    overflow: hidden;
  }

</style>
