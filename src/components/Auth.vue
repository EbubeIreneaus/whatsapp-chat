<script setup>
import Axios from "axios";
import Cookies from "js-cookie";
import { inject, reactive, ref } from "vue";

let timeout;
const emit = defineEmits(["registered"]);
const url = inject("url");
const comp = ref("home");

const vcode = ref([null, null, null, null, null, null]);
const code = ref("");

const form = reactive({
  code: "+234",
  country: "Nigeria",
  phone: "",
  name: "",
});

const createAccount = async (e) => {
  e.target.disbled = true;
  e.target.innerHTML = '<i class="spinner-grow text-success"></i>';

  const res = await Axios.post(`${url}user/`, { form });
  if (res.data.status == "success") {
    Cookies.set("userId", res.data.id);
    timeout = setTimeout(() => {
      emit("registered");
    }, 3000);
  } else {
    alert("Could not Register You at the moment, Try Again Later!!!");
    e.target.disbled = false;
    e.target.innerHTML = "Create Account";
  }
};

const countries = reactive([
  { country: "Afghanistan", code: "93" },
  { country: "Albania", code: "355" },
  { country: "Algeria", code: "213" },
  { country: "Andorra", code: "376" },
  { country: "Angola", code: "244" },
  { country: "Antigua and Barbuda", code: "1-268" },
  { country: "Argentina", code: "54" },
  { country: "Armenia", code: "374" },
  { country: "Australia", code: "61" },
  { country: "Austria", code: "43" },
  { country: "Azerbaijan", code: "994" },
  { country: "Bahamas", code: "1-242" },
  { country: "Bahrain", code: "973" },
  { country: "Bangladesh", code: "880" },
  { country: "Barbados", code: "1-246" },
  { country: "Belarus", code: "375" },
  { country: "Belgium", code: "32" },
  { country: "Belize", code: "501" },
  { country: "Benin", code: "229" },
  { country: "Bhutan", code: "975" },
  { country: "Bolivia", code: "591" },
  { country: "Bosnia and Herzegovina", code: "387" },
  { country: "Botswana", code: "267" },
  { country: "Brazil", code: "55" },
  { country: "Brunei", code: "673" },
  { country: "Bulgaria", code: "359" },
  { country: "Burkina Faso", code: "226" },
  { country: "Burundi", code: "257" },
  { country: "Cabo Verde", code: "238" },
  { country: "Cambodia", code: "855" },
  { country: "Cameroon", code: "237" },
  { country: "Canada", code: "1" },
  { country: "Central African Republic", code: "236" },
  { country: "Chad", code: "235" },
  { country: "Chile", code: "56" },
  { country: "China", code: "86" },
  { country: "Colombia", code: "57" },
  { country: "Comoros", code: "269" },
  { country: "Congo (Congo-Brazzaville)", code: "242" },
  { country: "Costa Rica", code: "506" },
  { country: "Croatia", code: "385" },
  { country: "Cuba", code: "53" },
  { country: "Cyprus", code: "357" },
  { country: "Czechia (Czech Republic)", code: "420" },
  { country: "Democratic Republic of the Congo (Congo-Kinshasa)", code: "243" },
  { country: "Denmark", code: "45" },
  { country: "Djibouti", code: "253" },
  { country: "Dominica", code: "1-767" },
  { country: "Dominican Republic", code: "1-809, 1-829, 1-849" },
  { country: "Ecuador", code: "593" },
  { country: "Egypt", code: "20" },
  { country: "El Salvador", code: "503" },
  { country: "Equatorial Guinea", code: "240" },
  { country: "Eritrea", code: "291" },
  { country: "Estonia", code: "372" },
  { country: 'Eswatini (fmr. "Swaziland")', code: "268" },
  { country: "Ethiopia", code: "251" },
  { country: "Fiji", code: "679" },
  { country: "Finland", code: "358" },
  { country: "France", code: "33" },
  { country: "Gabon", code: "241" },
  { country: "Gambia", code: "220" },
  { country: "Georgia", code: "995" },
  { country: "Germany", code: "49" },
  { country: "Ghana", code: "233" },
  { country: "Greece", code: "30" },
  { country: "Grenada", code: "1-473" },
  { country: "Guatemala", code: "502" },
  { country: "Guinea", code: "224" },
  { country: "Guinea-Bissau", code: "245" },
  { country: "Guyana", code: "592" },
  { country: "Haiti", code: "509" },
  { country: "Holy See", code: "379" },
  { country: "Honduras", code: "504" },
  { country: "Hungary", code: "36" },
  { country: "Iceland", code: "354" },
  { country: "India", code: "91" },
  { country: "Indonesia", code: "62" },
  { country: "Iran", code: "98" },
  { country: "Iraq", code: "964" },
  { country: "Ireland", code: "353" },
  { country: "Israel", code: "972" },
  { country: "Italy", code: "39" },
  { country: "Ivory Coast", code: "225" },
  { country: "Jamaica", code: "1-876" },
  { country: "Japan", code: "81" },
  { country: "Jordan", code: "962" },
  { country: "Kazakhstan", code: "7" },
  { country: "Kenya", code: "254" },
  { country: "Kiribati", code: "686" },
  { country: "Kuwait", code: "965" },
  { country: "Kyrgyzstan", code: "996" },
  { country: "Laos", code: "856" },
  { country: "Latvia", code: "371" },
  { country: "Lebanon", code: "961" },
  { country: "Lesotho", code: "266" },
  { country: "Liberia", code: "231" },
  { country: "Libya", code: "218" },
  { country: "Liechtenstein", code: "423" },
  { country: "Lithuania", code: "370" },
  { country: "Luxembourg", code: "352" },
  { country: "Madagascar", code: "261" },
  { country: "Malawi", code: "265" },
  { country: "Malaysia", code: "60" },
  { country: "Maldives", code: "960" },
  { country: "Mali", code: "223" },
  { country: "Malta", code: "356" },
  { country: "Marshall Islands", code: "692" },
  { country: "Mauritania", code: "222" },
  { country: "Mauritius", code: "230" },
  { country: "Mexico", code: "52" },
  { country: "Micronesia", code: "691" },
  { country: "Moldova", code: "373" },
  { country: "Monaco", code: "377" },
  { country: "Mongolia", code: "976" },
  { country: "Montenegro", code: "382" },
  { country: "Morocco", code: "212" },
  { country: "Mozambique", code: "258" },
  { country: "Myanmar (formerly Burma)", code: "95" },
  { country: "Namibia", code: "264" },
  { country: "Nauru", code: "674" },
  { country: "Nepal", code: "977" },
  { country: "Netherlands", code: "31" },
  { country: "New Zealand", code: "64" },
  { country: "Nicaragua", code: "505" },
  { country: "Niger", code: "227" },
  { country: "Nigeria", code: "234" },
  { country: "North Korea", code: "850" },
  { country: "North Macedonia (formerly Macedonia)", code: "389" },
  { country: "Norway", code: "47" },
  { country: "Oman", code: "968" },
  { country: "Pakistan", code: "92" },
  { country: "Palau", code: "680" },
  { country: "Palestine State", code: "970" },
  { country: "Panama", code: "507" },
  { country: "Papua New Guinea", code: "675" },
  { country: "Paraguay", code: "595" },
  { country: "Peru", code: "51" },
  { country: "Philippines", code: "63" },
  { country: "Poland", code: "48" },
  { country: "Portugal", code: "351" },
  { country: "Qatar", code: "974" },
  { country: "Romania", code: "40" },
  { country: "Russia", code: "7" },
  { country: "Rwanda", code: "250" },
  { country: "Saint Kitts and Nevis", code: "1-869" },
  { country: "Saint Lucia", code: "1-758" },
  { country: "Saint Vincent and the Grenadines", code: "1-784" },
  { country: "Samoa", code: "685" },
  { country: "San Marino", code: "378" },
  { country: "Sao Tome and Principe", code: "239" },
  { country: "Saudi Arabia", code: "966" },
  { country: "Senegal", code: "221" },
  { country: "Serbia", code: "381" },
  { country: "Seychelles", code: "248" },
  { country: "Sierra Leone", code: "232" },
  { country: "Singapore", code: "65" },
  { country: "Slovakia", code: "421" },
  { country: "Slovenia", code: "386" },
  { country: "Solomon Islands", code: "677" },
  { country: "Somalia", code: "252" },
  { country: "South Africa", code: "27" },
  { country: "South Korea", code: "82" },
  { country: "South Sudan", code: "211" },
  { country: "Spain", code: "34" },
  { country: "Sri Lanka", code: "94" },
  { country: "Sudan", code: "249" },
  { country: "Suriname", code: "597" },
  { country: "Sweden", code: "46" },
  { country: "Switzerland", code: "41" },
  { country: "Syria", code: "963" },
  { country: "Tajikistan", code: "992" },
  { country: "Tanzania", code: "255" },
  { country: "Thailand", code: "66" },
  { country: "Timor-Leste (East Timor)", code: "670" },
  { country: "Togo", code: "228" },
  { country: "Tonga", code: "676" },
  { country: "Trinidad and Tobago", code: "1-868" },
  { country: "Tunisia", code: "216" },
  { country: "Turkey", code: "90" },
  { country: "Turkmenistan", code: "993" },
  { country: "Tuvalu", code: "688" },
  { country: "Uganda", code: "256" },
  { country: "Ukraine", code: "380" },
  { country: "United Arab Emirates", code: "971" },
  { country: "United Kingdom", code: "44" },
  { country: "United States of America", code: "1" },
  { country: "Uruguay", code: "598" },
  { country: "Uzbekistan", code: "998" },
  { country: "Vanuatu", code: "678" },
  { country: "Venezuela", code: "58" },
  { country: "Vietnam", code: "84" },
  { country: "Yemen", code: "967" },
  { country: "Zambia", code: "260" },
  { country: "Zimbabwe", code: "263" },
]);

const countryChange = () => {
  for (const ctry of countries) {
    if (ctry.country == form.country) {
      form.code = "+" + ctry.code;
    }
  }
};
const editVcode = (e, index) => {
  if (index < 5) {
    e.target.nextElementSibling.focus();
  }

  if (e.target.innerHTML.length > 1) {
    e.target.innerHTML = e.target.innerHTML[0];
    vcode.value[index] = e.target.innerHTML;
  } else {
    vcode.value[index] = e.target.innerHTML;
  }
};
const changeComp = (val) => {
  if (val == "verify") {
    const randomNumber =
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    code.value = randomNumber.toString().padStart(6, "0");
    comp.value = val;
    setTimeout(() => {
      document.querySelector(".notification").classList.add("not-show");
    }, 5000);
  }
};
const hideNotific = () => {
  document.querySelector(".notification").classList.remove("not-show");
};
const verify = () => {
  const cd = vcode.value.toString().replace(/,/g, "");
  if (code.value == cd) {
    document.querySelector(".notification").classList.remove("not-show");
    comp.value = "info";
  } else {
    alert(cd + " " + code.value);
  }
};

const formatNumber = (num) => {
  return num.slice(0, 3) + " " + num.slice(3, 6) + " " + num.slice(6);
};
</script>

<template>
  <div class="main">
    <div class="home cnt" v-if="comp == 'home'">
      <img src="/img/login-logo.jpeg" alt="" class="mb-3" />
      <h5 class="text-light">Welcome to Whatsapp</h5>
      <p class="px-2">
        <small
          >Read our <span class="text-info">Privacy Policy</span>. Tap "Agree
          and continue" to accept the
          <span class="text-info">Terms of Service</span></small
        >
      </p>
      <button class="btn-ag" @click="comp = 'contact'">
        <small>Agree and Continue</small>
      </button>
    </div>

    <div class="contact cnt text-center" v-if="comp == 'contact'">
      <p class="pt-4 text-secondary">Enter Your Phone Number</p>
      <small class="mb-3 d-block"
        >Whatsapp all need to verify your account
        <span class="text-info">What's my number?</span></small
      >

      <div class="mb-3 country">
        <select
          class="mx-auto"
          v-model="form.country"
          id=""
          @change="countryChange"
        >
          <option
            :value="x.country"
            v-for="(x, index) in countries"
            :key="index"
            class="text-dark"
          >
            {{ x.country }}
          </option>
        </select>
      </div>

      <div class="d-flex field gap-2 mb-5">
        <input type="text" v-model="form.code" class="code" readonly />
        <input
          type="text"
          v-model="form.phone"
          id=""
          placeholder="phone number"
          class="num"
          focus
        />
      </div>

      <button
        class="btn-ag mt-5 text-light"
        :disabled="form.phone == ''"
        @click="changeComp('verify')"
      >
        <small>Next</small>
      </button>
    </div>

    <div
      class="verify cnt d-flex flex-column align-items-center"
      v-if="comp == 'verify'"
    >
      <div
        class="notification border position-absolute p-2 d-flex flex-column justify-content-between"
      >
        <div
          class="d-flex align-items-center w-100 justify-content-between gap-1"
        >
          <img src="/img/user.png" alt="" />
          <div class="d-flex flex-column top-cont ms-1">
            <p class="my-0 py-0">
              {{ form.code }} {{ formatNumber(form.phone) }}
            </p>
            <small
              >&lt;#&gt; Your WhatsApp verification code is {{ code }}</small
            >
          </div>
          <i class="material-icons border rounded-circle" aria-hidden="true"
            >keyboard_arrow_down</i
          >
        </div>

        <div class="d-flex align-items-center justify-content-between mx-4 btm">
          <p class="m-0 p-0 ms-4">code: {{ code }}</p>
          <p class="m-0 p-0 bnt" @click="hideNotific">close</p>
        </div>
      </div>

      <ul class="d-flex justify-content-between mb-2">
        <li
          class="border mx-1"
          contenteditable="true"
          v-for="(x, index) in vcode"
          :key="index"
          @input="editVcode($event, index)"
        >
          {{ x == null ? "" : x }}
        </li>
      </ul>

      <p class="text-center px-2">
        <small>we sent a six-digit code to your phone number</small>
      </p>

      <button
        class="btn-ag mt-5 text-light mx-auto"
        :disabled="form.phone == ''"
        @click="verify()"
      >
        <small>verify</small>
      </button>
    </div>

    <div class="info-phase cnt" v-if="comp == 'info'">
      <div class="d-flex flex-column align-items-center section gap-3">
        <div class="profile-pics">
          <img src="/img/user.png" alt="" />
        </div>

        <div class="form mb-3 mt-3">
          <input
            type="text"
            v-model="form.name"
            id="name"
            class="ps-2"
            focus
            placeholder="Type Your Name"
          />
        </div>

        <button
          class="btn-ag mt-5 text-light mx-auto"
          :disabled="form.name == ''"
          @click="createAccount($event)"
        >
          <small>Create Account</small>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/main'
@import 'animate.css'

.notification
    width: 90%
    height: 100px
    top: -150px
    border-radius: 20px
    background-color: #FFF7F6
    color: black
    transition: all .5s ease
    visibility: hidden

    img
        width: 50px
        height: 50px
        border-radius: 50%
    .top-cont
        small
            overflow: hidden
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 1
            text-overflow: ellipsis
    .btm
        color: #AE9692
        .bnt
            cursor: pointer
.not-show
    top: 20px !important
    visibility: visible

.main
    height: 100vh
    background-color: #131C23
    overflow-x: hidden
    position: relative
    .cnt
        animation: slideInRight .5s ease
    .home

        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        height: 100%

        img
            width: 200px
        p
            text-align: center
            padding: 0 10px
            small
                font-size: smaller
    .contact
        small
            font-size: smaller

    .btn-ag
        width: 250px
        padding: 5px 0
        outline: none
        box-shadow: none
        border: none
        border-radius: 20px
        background-color: $secondary
        &:active
            background-color: lighten($secondary, 10)
    .country
        select
            width: 200px
            border: none
            outline: none
            box-shadow: none
            background-color: transparent
            border-bottom: 1px solid white
            text-align: center
            padding: 8px 0
            color: white
    .field
        width: 70%
        margin: 20px auto
        input
            border: 0px
            border-bottom: 1px solid white
            box-shadow: none
            outline: none
            background-color: transparent
            color: white

        .code
            width: 50px
    .verify
        margin-top: 170px
        ul
            width: 80%
            padding: 0
            margin: auto

            li
                display: grid
                place-items: center
                list-style-type: none
                width: calc( 80% / 4 - 5px )
                height: 40px
                &:nth-child(3)
                    margin-right: 20px !important

    .info-phase
        margin-top: 100px
        .section
            .profile-pics
                width: 100px
                height: 100px
                img
                    width: 100%
                    height: 100%
                    border-radius: 50%
            .form
                input
                    display: block
                    width: 250px
                    height: 50px
                    border: none
                    outline: none
                    border-bottom: 1px dotted whitesmoke
                    background-color: transparent
                    color: white
</style>
