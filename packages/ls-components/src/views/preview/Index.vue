<script setup lang="ts">
import axios from 'axios';
import docx from '@/assets/files/测试.docx?url';
import xlsx from '@/assets/files/222.xlsx?url';
import pdf from '@/assets/files/零数科技企业宣传册-2023.pdf';

const type = ref('image');
const source: any = ref();
const showViewer = ref(false);

function closeViewer() {
  showViewer.value = false;
  source.value = '';
}

function openViewer(val: string) {
  type.value = val;
  switch (val) {
    case 'image':
      setTimeout(() => {
        source.value = [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        ];
      }, 1000);
      break;
    case 'docx':
      axios.get(location.origin + docx, { responseType: 'arraybuffer' }).then(data => {
        source.value = data.data;
      });
      break;
    case 'xlsx':
      axios.get(location.origin + xlsx, { responseType: 'arraybuffer' }).then(data => {
        source.value = new File([new Blob([data.data], { type: 'text/plain' })], '222.xlsx', { type: 'text/plain' });
      });
      break;
    case 'pdf':
      source.value = pdf;
      break;
    case 'pdfNative':
      window.open(pdf, '_blank');
      break;
    case 'image2':
      type.value = 'image';
      axios
        .get(
          'http://192.168.3.37:8889/detector/api/v1/common/file/preview?fileName=20241212_ba6f326a10b042e98e13761e9cbedf2d.jpg&name=Mask+group+(5)+(1).jpg',
          {
            responseType: 'blob',
            headers: {
              authorization:
                'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1Iiwic3ViIjoidGVzdEBAMSIsImlhdCI6MTczMzk5Nzk2MCwiZXhwIjoxNzMzOTk4NTY1fQ.WUzl6QnosXul_WIABozMGLZhvMoc3jCW1hpKVPsKSSwSrGJddFctomNel-JFhiS-rkzyXPf2bxxZag3DucZ71Q'
            }
          }
        )
        .then(data => {
          source.value = [URL.createObjectURL(data.data)];
        });
      break;
    default:
      break;
  }
  showViewer.value = true;
}
</script>

<template>
  <div>
    <div>
      <LSButton type="primary" @click="openViewer('image')">图片预览</LSButton>

      <LSButton type="primary" @click="openViewer('image2')">图片预览2</LSButton>

      <LSButton type="primary" @click="openViewer('docx')">Docx预览</LSButton>

      <LSButton type="primary" @click="openViewer('xlsx')">Xlsx预览</LSButton>

      <LSButton type="primary" @click="openViewer('pdf')">PDF预览</LSButton>

      <LSButton type="primary" @click="openViewer('pdfNative')">PDF预览2</LSButton>
    </div>
    <LSPreview v-model="showViewer" :on-close="closeViewer" :type="type" :source="source" />
  </div>
</template>

<style lang="scss" scoped></style>
