<template>
  <div class="about">
    <h1>Загрузка данных</h1>
    <h4>Пожалуйста, выберите файл для анализа данных. Формат - .csv</h4>
    <div class="example-1">
      <div class="form-group">
        <label class="label">
          <img class="icon" src="@/assets/icon.svg" />
          <span class="title"> Выбрать файл </span>
          <input type="file" @change="onFileChange" />
        </label><br>
        <button
            @click="onUploadFile"
            class="upload-button"
            :disabled="!this.selectedFile"
          >
            Загрузить
          </button>
      </div>
    </div>
    <p>
      <a>Текущий файл: data.csv</a>
    </p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: "",
    };
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile); // appending file

      // sending file to the backend
      axios
        .post("http://localhost:8085/api/upload", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  width: 50vw;
  margin: auto;
  padding: 4rem;
  box-shadow: 0 2px 5px gray;
  font-family: "Times New Roman";
}
h1,
h2 {
  margin: 0;
}
.icon {
  width: 32px;
}
/*стили кнопки загрузки файла */
.example-1 .form-group {
  padding: 1em;
}
.example-1 input[type="file"] {
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}
.example-1 .label {
  width: 120px;
  border: 2px dashed grey;
  border-radius: 5px;
  display: block;
  padding: 1.2em;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
  margin: auto;
}
.example-1 .label i {
  display: block;
  font-size: 42px;
  padding-bottom: 16px;
}
.example-1 .label i,
.example-1 .label .title {
  color: grey;
  transition: 200ms color;
}
.example-1 .label:hover {
  border: 2px solid #000;
}
.example-1 .label:hover i,
.example-1 .label:hover .title {
  color: #000;
}
</style>
