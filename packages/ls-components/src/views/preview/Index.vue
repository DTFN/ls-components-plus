<script setup lang="ts">
import axios from 'axios';
import docx from '@/assets/files/222.docx?url';
// import xlsx from '@/assets/files/111.xlsx?url';
import xlsx from '@/assets/files/222.xlsx?url';
// import xlsx from 'D:/download/666.xlsx?url';
// import xlsx from 'D:/download/777.xlsx?url';
import pdf from '@/assets/files/系统部署文档&维护手册.pdf';

const type = ref('image');
const source: any = ref('');
const showViewerImage = ref(false);
const showViewerDocx = ref(false);
const showViewerPdf = ref(false);
const showViewerXlsx = ref(false);
const downloadData = ref({});

function closeViewer() {
  showViewerImage.value = false;
  showViewerDocx.value = false;
  showViewerPdf.value = false;
  showViewerXlsx.value = false;
  source.value = '';
}

function openViewer(val: string) {
  type.value = val;
  downloadData.value = {
    id: 111111
  };
  switch (val) {
    case 'image':
      setTimeout(() => {
        source.value = [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        ];
      }, 1000);
      showViewerImage.value = true;
      break;
    case 'docx':
      axios.get(location.origin + docx, { responseType: 'arraybuffer' }).then(data => {
        source.value = data.data;
      });
      showViewerDocx.value = true;
      break;
    case 'xlsx':
      axios.get(location.origin + xlsx, { responseType: 'arraybuffer' }).then(data => {
        source.value = new File([new Blob([data.data], { type: 'text/plain' })], '222.xlsx', { type: 'text/plain' });
        showViewerXlsx.value = true;
      });
      break;
    case 'pdf':
      source.value = '';
      // setTimeout(() => {
      source.value = pdf;
      // }, 3000);
      showViewerPdf.value = true;
      break;
    case 'image2':
      source.value = 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg';
      showViewerImage.value = true;
      // axios
      //   .get(
      //     'http://192.168.3.37:8889/detector/api/v1/common/file/preview?fileName=20241212_ba6f326a10b042e98e13761e9cbedf2d.jpg&name=Mask+group+(5)+(1).jpg',
      //     {
      //       responseType: 'blob',
      //       headers: {
      //         authorization:
      //           'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1Iiwic3ViIjoidGVzdEBAMSIsImlhdCI6MTczMzk5Nzk2MCwiZXhwIjoxNzMzOTk4NTY1fQ.WUzl6QnosXul_WIABozMGLZhvMoc3jCW1hpKVPsKSSwSrGJddFctomNel-JFhiS-rkzyXPf2bxxZag3DucZ71Q'
      //       }
      //     }
      //   )
      //   .then(data => {
      //     source.value = URL.createObjectURL(data.data);
      //     showViewerImage.value = true;
      //   });
      break;
    default:
      break;
  }
}

function download(data: any) {
  console.log(data);
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
    </div>
    <LSPreviewImage
      v-model="showViewerImage"
      :on-close="closeViewer"
      :type="type"
      :source="source"
      :has-download="true"
      :download-data="downloadData"
      @download="download"
    >
      <template #viewer>
        <div style="position: absolute; color: #ffffff">1111111111111111</div>
      </template>
    </LSPreviewImage>
    <LSPreviewDocx v-model="showViewerDocx" :on-close="closeViewer" :type="type" :source="source" />
    <LSPreviewPdf v-model="showViewerPdf" :c-map-url-path="'/cmaps/'" :on-close="closeViewer" :type="type" :source="source" />
    <LSPreviewXlsx v-model="showViewerXlsx" :on-close="closeViewer" :type="type" :source="source" :has-pagination="true" />

    <!-- <el-image
      src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      :preview-src-list="[
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
      ]"
    >
      <template #viewer>
        <div style="position: absolute; color: #ffffff">1111111111111111</div>
      </template>
    </el-image> -->
  </div>
</template>

<style lang="scss" scoped></style>
