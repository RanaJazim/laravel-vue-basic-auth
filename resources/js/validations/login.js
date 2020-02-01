import { required, email } from 'vuelidate/lib/validators';

export const myLogin = {
    email: {
        required,
        email
    },
    password: {
        required
    }
};
