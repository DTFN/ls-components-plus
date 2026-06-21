<script setup lang="ts">
import { lsCheck, lsUtil, lsValidate } from '@lingshugroup/web-plus/utils'

// lsCheck 示例
const checkResults = ref({
  isArray: lsCheck.isArray([1, 2, 3]),
  isObject: lsCheck.isObject({ a: 1 }),
  isString: lsCheck.isString('hello'),
  isNumber: lsCheck.isNumber(123),
  isEmptyObject: lsCheck.isEmptyObject({}),
  isColor: lsCheck.isColor('#ff0000'),
  isFile: lsCheck.isFile(new File([''], 'test.txt')),
})

// lsUtil 示例
const utilResults = ref({
  isEmpty: lsUtil.isEmpty('   '),
  getExtension: lsUtil.getExtension('document.pdf'),
  getRandomHexColor: lsUtil.getRandomHexColor(),
  numberFixed: lsUtil.numberFixed(3.1415926, 2),
  getRandomCode: lsUtil.getRandomCode(8),
})

// 重新生成随机值
const regenerateRandom = () => {
  utilResults.value.getRandomHexColor = lsUtil.getRandomHexColor()
  utilResults.value.getRandomCode = lsUtil.getRandomCode(8)
}

// lsValidate 表单示例
const formData = ref({
  age: '',
  price: '',
  code: '',
  email: '',
})

const rules = {
  age: [
    { validator: lsValidate.validatorInt, required: true, msg: '请输入年龄', maxVal: 120, trigger: 'blur' }
  ],
  price: [
    { validator: lsValidate.validatorNumberFloat2, required: true, msg: '请输入价格', maxVal: 9999.99, trigger: 'blur' }
  ],
  code: [
    { validator: lsValidate.validatorWord2, required: true, msg: '请输入编码', trigger: 'blur' }
  ],
}

const formRef = ref()

const submitForm = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('表单验证通过！')
    }
  })
}
</script>

<template>
  <div class="utils-demo">
    <h2>lsCheck 类型检查工具</h2>
    <p>提供各种常用的类型判断方法</p>
    
    <div style="margin: 20px 0">
      <el-descriptions :column="2" border>
        <el-descriptions-item label="isArray([1, 2, 3])">
          <el-tag :type="checkResults.isArray ? 'success' : 'danger'">
            {{ checkResults.isArray }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="isObject({ a: 1 })">
          <el-tag :type="checkResults.isObject ? 'success' : 'danger'">
            {{ checkResults.isObject }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="isString('hello')">
          <el-tag :type="checkResults.isString ? 'success' : 'danger'">
            {{ checkResults.isString }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="isNumber(123)">
          <el-tag :type="checkResults.isNumber ? 'success' : 'danger'">
            {{ checkResults.isNumber }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="isEmptyObject({})">
          <el-tag :type="checkResults.isEmptyObject ? 'success' : 'danger'">
            {{ checkResults.isEmptyObject }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="isColor('#ff0000')">
          <el-tag :type="checkResults.isColor ? 'success' : 'danger'">
            {{ checkResults.isColor }}
          </el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <h2 style="margin-top: 40px">lsUtil 通用工具函数</h2>
    <p>提供各种常用的工具方法</p>
    
    <LSButton type="primary" @click="regenerateRandom" style="margin-bottom: 20px">
      重新生成随机值
    </LSButton>

    <div style="margin: 20px 0">
      <el-descriptions :column="2" border>
        <el-descriptions-item label="isEmpty('   ')">
          <el-tag :type="utilResults.isEmpty ? 'success' : 'danger'">
            {{ utilResults.isEmpty }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="getExtension('document.pdf')">
          <el-tag type="info">{{ utilResults.getExtension }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="getRandomHexColor()">
          <el-tag type="info" :style="{ backgroundColor: utilResults.getRandomHexColor, color: '#fff' }">
            {{ utilResults.getRandomHexColor }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="numberFixed(3.1415926, 2)">
          <el-tag type="info">{{ utilResults.numberFixed }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="getRandomCode(8)">
          <el-tag type="info">{{ utilResults.getRandomCode }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <h2 style="margin-top: 40px">lsValidate 表单验证工具</h2>
    <p>提供各种常用的表单验证规则和验证函数</p>
    
    <div style="max-width: 500px; margin: 20px 0">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formData.age" placeholder="请输入年龄（正整数）" />
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="formData.price" placeholder="请输入价格（最多两位小数）" />
        </el-form-item>
        <el-form-item label="编码" prop="code">
          <el-input v-model="formData.code" placeholder="请输入编码（字母、数字、下划线、横杠）" />
        </el-form-item>
        <el-form-item>
          <LSButton type="primary" @click="submitForm">提交验证</LSButton>
        </el-form-item>
      </el-form>
    </div>

    <h2 style="margin-top: 40px">其他常用方法</h2>
    <ul style="margin-top: 20px; line-height: 2">
      <li><strong>lsUtil.exportFile</strong>: 导出Blob文件到本地</li>
      <li><strong>lsUtil.loadJs</strong>: 动态加载JS文件</li>
      <li><strong>lsUtil.loadCss</strong>: 动态加载CSS文件</li>
      <li><strong>lsValidate.validatorJson</strong>: 验证JSON格式</li>
      <li><strong>lsValidate.validatorAccount</strong>: 验证邮箱或手机号格式</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.utils-demo {
  padding: 20px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }
}
</style>
