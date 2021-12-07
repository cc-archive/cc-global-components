<template>
  <transition name="fade" appear>
    <div
      @click="closeModal"
      v-if="show"
      class="overlay-container"
      role="button"
    >
      <div class="overlay-modal">
        <div class="modal-body">
          <div class="modal-header">
            <span
              @click="closeModal"
              class="close-button"
              aria-label="Close the Donation Modal"
              role="button"
              >&times;</span
            >
          </div>
          <div>
            <figure
              class="image-container"
              style="margin: auto; text-align: center"
            >
              <img
                src="https://live.staticflickr.com/65535/33949133348_e5f5d3c201_b.jpg"
                alt="Faces of the Commons 2019"
              />
              <p style="font-size: 0.9rem; font-style: italic">
                <a href="https://www.flickr.com/photos/31013861@N00/33949133348"
                  >"Faces of the Commons 2019"</a
                ><span>
                  by
                  <a href="https://www.flickr.com/photos/31013861@N00"
                    >Sebastiaan ter Burg</a
                  ></span
                >
                is licensed under
                <a :href="donationUrl" style="margin-right: 5px">CC BY 2.0</a>
              </p>
            </figure>
          </div>
          <div class="content">
            <p style="text-align: center">
              Creative Commons is proud to have provided free, flexible, and
              reusable tools powering much of the internet for nearly 20 years.
            </p>
          </div>
          <div class="break-column"></div>
          <div class="content">
            <p style="text-align: center; font-weight: bold">
              Please donate what you can to support the global open movement!
            </p>
            <p id="popup-button">
              <a
                href="https://www.classy.org/give/306414/#!/donation/checkout?c_src=website&c_src2=lightboxA"
                target="_blank"
                rel="noopener noreferrer"
                >Donate</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { defineComponent } from "vue";
import Cookies from "js-cookie";

export default defineComponent({
  name: "cc-donate",
  mounted() {
    var userHasOptedOutFromDonationAppeal = Cookies.get("optOutDonationAppeal");

    if (userHasOptedOutFromDonationAppeal) {
      this.show = false;
      this.transition = false;
    }
  },
  data() {
    return {
      show: true,
      transition: true,
      expiryPeriodInDays: 5,
      donationUrl:
        "https://www.classy.org/give/306414/#!/donation/checkout?c_src=website&c_src2=lightboxA",
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      this.optOutDonationAppeal();
    },
    optOutDonationAppeal() {
      Cookies.set("optOutDonationAppeal", "true", {
        expires: this.expiryPeriodInDays,
      });
      Cookies.set("_ga", undefined);
    },
  },
});
</script>
<style scoped>
.overlay-modal .modal-header .close-button {
  display: block;
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  cursor: pointer;
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

.close-button {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: gray;
  text-decoration: none;
  cursor: pointer;
}
.modal-header {
  padding: 2px 5px;
  /* background-color: #FEEDE9;*/
  color: black;
}

.modal-body {
  padding: 2px 5px;
  align-content: center;
}

.modal-footer {
  padding: 2px 5px;
  color: black;
}

#popup-button {
  margin-top: 40px;
  text-align: center;
}

#popup-button a {
  border-radius: 5px;
  padding: 5px 30px;
  border: none;
  background: #008000;
  color: white;
  font-size: 20px;
  text-decoration: none;
  box-shadow: 1px 1px 3px 0px rgba(2, 2, 2, 0.23);
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition: background-color 0.5s;
}

#popup-button a:hover {
  background: #e0f5e0;
  color: black;
}
.overlay-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4) !important;
  background: transparent;
  z-index: 9999;
  color: #fff;
  transition: opacity 500ms;
}
.overlay-modal {
  margin: 0px;
  padding: 10px;
  text-align: left;
  background: #fff;
  border-radius: 5px;
  width: 600px;
  height: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  overflow: auto;
  display: flex;
  align-items: center; /* vertically centered */
  flex-wrap: wrap;
}

.break-column {
  flex-basis: 100%;
  width: 0;
}
.image-container {
  padding: 10px;
  text-align: center;
  width: 80%;
}

.overlay-modal .image-container small {
  display: block;
  text-align: center;
}

.overlay-modal .content {
  /*  padding: 0 1rem; */
  padding: 1px;
}
.overlay-modal .content:last-child {
  padding-right: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .overlay-modal {
    width: 95%;
  }
  .overlay-modal h2 {
    font-size: 3rem;
  }
}
</style>
