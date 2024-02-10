<script setup lang="ts">
import { ref } from 'vue'

const name = ref()
const salary = ref()
const debt = ref(0)

const handleOnSubmit = () => {
    if (name.value && salary.value && debt.value) {
    }
}

const rules = [
  value => {
    if (value) return true

    return 'กรุณากรอกข้อมูลให้ครบถ้วน'
  }
]
const numberRules = [
  value => {
    if (Number(value)) return true

    return 'กรุณากรอกจำนวนเงินให้ถูกต้อง'
  }
]
</script>
<template>
  <v-sheet>
    <v-form fast-fail @submit.prevent="handleOnSubmit">
      <div class="pa-5">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="ชื่อ"
              placeholder="กรุณากรอกชื่อ"
              v-model="name"
              :rules="rules"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="จำนวนเงิน"
              placeholder="กรุณากรอกจำนวนเงิน"
              v-model="salary"
              :rules="numberRules"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="หักเงินเป็นจำนวน"
              placeholder="กรุณากรอกจำนวนเงิน"
              v-model="debt"
              type="number"
              
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
