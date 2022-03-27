<template>
  <div class="form-wrapper">
        <h1 class='form-title'>Milyen témákat érintsünk?</h1>
        <form action="" >

            <div class="form-row">
                <input type="checkbox" name="Alapfogalmak" id="Alapfogalmak" value='Alapfogalmak' v-model='topics' ref='checkbox'>
                <label for='Alapfogalmak'>Alapfogalmak</label>
            </div>
            
            <div class="form-row">
                <input type="checkbox" name="tema2" id="tema2" value='tema2' v-model='topics' ref='checkbox'>
                <label for='tema2'>Tema 2</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema3" id="tema3" value='tema3' v-model='topics' ref='checkbox'>
                <label for='tema3'>Tema 3</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema4" id="tema4" value='tema4' v-model='topics' ref='checkbox'>
                <label for='tema4'>Tema 4</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema5" id="tema5" value='tema5' v-model='topics' ref='checkbox'>
                <label for='tema5'>Tema 5</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema6" id="tema6" value='tema6' v-model='topics' ref='checkbox'>
                <label for='tema6'>Tema 6</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema7" id="tema7" value='tema7' v-model='topics' ref='checkbox'>
                <label for='tema7'>Tema 7</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema8" id="tema8" value='tema8' v-model='topics' ref='checkbox'>
                <label for='tema8'>Tema 8</label>
            </div>

            <div class="form-row">
                <input type="checkbox" name="tema9" id="tema9" value='tema9' v-model='topics' ref='checkbox'>
                <label for='tema9'>Tema 9</label>
                        </div>

            <div class="form-row">
                <input type="checkbox" name="tema10" id="tema10" value='tema10' v-model='topics' ref='checkbox'>
                <label for='tema10'>Tema 10</label>
            </div>
        </form>
      </div>
      <div class='buttons'>
        <div class="button-row">
            <button class='button-54' @click='selectall'>Mind</button>
            <button class='button-54' @click='selectnone'>Egyik sem</button>
        </div>
        <div class="button-row">
            <button class='button-74' @click='submitted'>START</button>
        </div>
      </div>
      
</template>

<script>
export default {
    name: 'QuizMain',
    data() {
        return {
            topics: []
        }
    },
    methods: {
        selectall() {
            document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
                this.topics.push(element.id)
            })
        },
        selectnone() {
            this.topics = [];
        },
        submitted() {
            if (this.topics.length==0) {
                alert('Na, legalább egyet válassz azért.')
            } else {
                console.log(this.topics)
                this.$emit('start-quiz',this.topics)
            }
        }
    }
}
</script>

<style scoped>


.form-wrapper {
    margin-top: 50px;
    list-style-type: none;
    padding: 0;
    border-radius: 3px;
    margin-left: 10px;
    margin-right: 10px;
}

.form-title {
    margin-bottom: 25px;
}

form {
    height: 250px;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.form-row {
    display: flex;
    justify-content: center;
    padding: .5em;
    background: white;
    box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.514);
    border-radius: 10px;
    margin: 10px;
  }

  .form-row > label,
  .form-row > input {
      cursor:pointer;
  }

  .form-row > label:hover,
  .form-row > input:hover,
  .form-row > label:focus,
  .form-row > input:focus{
      transform: scale(var(--transform-scale));
  }

  .form-row > label {
    --transform-scale: 1.1;
    flex: 1;
  }

  .form-row > input {
    --transform-scale: 1.7;
    flex: 0;
    transform: scale(1.5);
  }

  .form-row > input,
  .form-row > button {
    padding: .5em;
  }

input[type='checkbox'] {
    margin: 5px 0px 10px 5px;
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.button-row:nth-child(2) {
    margin-bottom: 50px;
}


</style>