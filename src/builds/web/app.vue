<template>
  <div id="app">
    <logout-warning-modal ref="logoutWarningModal" />
    <header-container
      v-show="
        $route.fullPath !== '/getting-started' &&
          !$route.fullPath.includes('/dapp-submission')
      "
    />
    <welcome-modal ref="welcome" />
    <router-view />
    <footer-container />
    <confirmation-container v-if="wallet !== null" />
  </div>
</template>

<script>
import FooterContainer from '@/containers/FooterContainer';
import HeaderContainer from '@/containers/HeaderContainer';
import ConfirmationContainer from '@/containers/ConfirmationContainer';
import WelcomeModal from '@/components/WelcomeModal';
import store from 'store';
import { mapState, mapActions } from 'vuex';
import { Toast } from '@/helpers';
import LogoutWarningModal from '@/components/LogoutWarningModal';

export default {
  name: 'App',
  components: {
    'header-container': HeaderContainer,
    'footer-container': FooterContainer,
    'confirmation-container': ConfirmationContainer,
    'logout-warning-modal': LogoutWarningModal,
    'welcome-modal': WelcomeModal
  },
  computed: {
    ...mapState('main', ['wallet', 'online'])
  },
  watch: {
    $route(to, from) {
      if (
        !from.meta.hasOwnProperty('requiresAuth') &&
        to.meta.hasOwnProperty('requiresAuth') &&
        this.wallet !== null
      ) {
        this.$refs.logoutWarningModal.$refs.logoutWarningModal.show();
      }
    }
  },
  created() {
    const succMsg = this.$t('common.updates.new');
    const errMsg = this.$t('common.updates.update-error');

    window.addEventListener('PWA_UPDATED', () => {
      Toast.responseHandler(succMsg, Toast.SUCCESS);
    });
    window.addEventListener('PWA_MOUNT_ERROR', () => {
      Toast.responseHandler(errMsg, Toast.WARN);
    });
    window.addEventListener('online', () => {
      this.checkIfOnline(true);
    });
    window.addEventListener('offline', () => {
      this.checkIfOnline(false);
    });
  },
  mounted() {
    this.checkIfOnline(navigator.onLine);
    if (!store.get('notFirstTimeVisit') && this.$route.fullPath === '/') {
      this.$refs.welcome.$refs.welcome.show();
    }

    this.$refs.welcome.$refs.welcome.$on('hidden', () => {
      store.set('notFirstTimeVisit', true);
    });

    this.$refs.logoutWarningModal.$refs.logoutWarningModal.$on('hidden', () => {
      window.scrollTo(0, 0);
    });
  },
  destroyed() {
    window.removeEventListener('PWA_UPDATED');
    window.removeEventListener('offline');
    window.removeEventListener('online');
  },
  methods: {
    ...mapActions('main', ['checkIfOnline'])
  }
};
</script>

<style lang="scss">
@import '~@/scss/Global-desktop';
@import '~@/scss/Global-tablet';
@import '~@/scss/Global-mobile';

@import '~@/scss/CustomForms-desktop';
@import '~@/scss/CustomForms-tablet';
@import '~@/scss/CustomForms-mobile';

@import '~@/scss/CustomModal-desktop';
@import '~@/scss/CustomModal-tablet';
@import '~@/scss/CustomModal-mobile';
</style>
