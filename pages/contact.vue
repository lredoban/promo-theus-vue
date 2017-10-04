<template lang="html">
  <main class="contact">
    <section class="lost">
      <div id="form">
        <h2>Nous écrire</h2>
        <p>
          Pour toute demande, merci de remplir le formulaire ci-dessous. Nous prendrons soin de vous répondre dans les plus brefs délais.
        </p>

        <div v-if="success">
          <h2 class="green">Merci, votre message a été envoyé.</h2>
        </div>

        <div v-if="error">
          <h2 class="pinterest">Une erreur s'est produite, votre message n'a pas été envoyé</h2>
        </div>

        <form v-if="!success" id="contact-form" class="cd-form floating-labels">
          <fieldset>
            <div>
              <input type="text" name="nom" id="nom" required="required" v-model="nom">
              <label class="cd-label" for="nom">Nom</label>
              <span class="error" v-if="submited && $v.nom.error">Vous devez renseigner tous les champs</span>
            </div>
            <div>
              <input type="text" name="prenom" required="required" v-model="prenom">
              <label class="cd-label" for="prenom">Prénom</label>
              <span class="error" v-if="submited && $v.prenom.$invalid">Vous devez renseigner tous les champs</span>
            </div>
            <div>
              <input type="email" name="email" required="required" v-model="email">
              <label class="cd-label" for="email">e-mail</label>
              <span class="error" v-if="submited && $v.email.$invalid">Vous devez renseigner tous les champs</span>
            </div>
            <div>

              <input type="phone" name="phone" required v-model="phone">
              <label class="cd-label" for="phone">Téléphone</label>
              <span class="error" v-if="submited && $v.phone.$invalid">Vous devez renseigner tous les champs</span>
            </div>
            <div>
              <textarea name="message" rows="10" required="required" v-model="message"></textarea>
              <label class="cd-label" for="message">Message</label>
              <span class="error" v-if="submited && $v.message.$invalid">Vous devez renseigner tous les champs</span>
            </div>
            <div>
              <button class="btn" form="contact-form" type="submit" @click.prevent="submit">Envoyer</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div id="infos">
        <h2>Nous rendre visite</h2>
        <div class="address">
          <section class="lost lost-half">
            <div>
              <address>
                Centre d'affaires du Zénith <br>
                Arche A<br>
                36 rue de Sarliève<br>
                63800 COURNON D'AUVERGNE<br>
                Tél: 09.82.27.49.09
              </address>
            </div>
            <div>
              <span class="horaires">Ouvert du lundi au vendredi <br>de 9 h – 12 h et de 14 h à 18 h <br>(et sur rendez-vous en dehors de ces horaires)</span>
            </div>
          </section>
          <div>
            <p class="green justify"><strong>Pour nous localiser : vous pouvez cliquer sur la carte, zoomer ou déplacer le curseur.</strong></p>
          </div>
        </div>
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5568.994196005181!2d3.156634432665265!3d45.74117942294004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f71d0c85312f25%3A0xa14099a99a1cc67e!2sPromo-The%C3%BCs+D%C3%A9veloppement!5e0!3m2!1sfr!2sfr!4v1454944013845" width="100%" height="450" frameborder="0" style="border:1px solid #999; border-radius:5px;" allowfullscreen></iframe>
        </div>
        <div class="menu__icons">
          <br>
          <h2>Retrouvez-nous sur les réseaux sociaux</h2>
          <ul>
            <li><a href="http://www.facebook.com/promo.theus.developpement" class="facebook" target="_blank"><SvgIcon name="facebook"/></a></li>
            <li><a href="//plus.google.com/101357276651616256581/about" class="googleplus" target="_blank"><SvgIcon name="googleplus"/></a></li>
            <li><a href="http://www.instagram.com/promotheusdeveloppement/" class="instagram" target="_blank"><SvgIcon name="instagram"/></a></li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SvgIcon from '~/components/SvgIcon.vue'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  components: { SvgIcon },
  data () {
    return {
      submited: false,
      error: false,
      success: false,
      nom: '',
      prenom: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  validations: {
    nom: { required },
    prenom: { required },
    email: { required, email },
    phone: { required },
    message: { required }
  },
  methods: {
    submit () {
      this.submited = true
      if (this.$v.$invalid) {
        return
      }
      const { submited, error, success, ...dataToSend } = this.$data
      axios({
        method: 'post',
        url: 'https://formspree.io/contact@promo-theus.com',
        data: dataToSend,
        headers: {'Accept': 'application/json'}
      })
        .then(data => {
          console.warn('Yeah', data)
          this.success = true
        })
        .catch(err => {
          console.warn('Shitt', err)
          this.error = true
        })
    }
  }
}
</script>

<style scopped lang="sass">
  @import ~assets/css/base/_variables.scss

  .contact
    padding-right: 15px
    padding-left: 15px
  fieldset
    border: none
  .lost
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    > div
      @media only screen and  (min-width: $screen-m)
        flex-basis: calc(50% - 42px)
  .cd-label
    position: absolute
    top: 1.7em
    left: 12px
    cursor: text
    z-index: 5
  .menu__icons li
    margin: 0 5px
</style>
