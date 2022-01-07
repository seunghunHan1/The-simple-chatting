import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.lightBlue.darken2,
				secondary: colors.lightBlue.lighten1,
				accent: colors.lightBlue.lighten2,
			},
		},
	},
});
