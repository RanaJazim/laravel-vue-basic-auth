
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';

export const register = {
    name: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(30)
    },

    email: {
        required,
        email,
    },

    password: {
        required
    },

    password_confirmation: {
        required,
        sameAsPassword: sameAs('password')
    }
};


