import auth from './components/Auth/Auth.vue';
import signin from './components/Auth/Signin.vue';

export const routes = [
    {
        path: "/one",
        component: signin
    },
    {
        path: "",
        component: auth,
        redirect: "/auth",
        children: [
            {
                path: "auth",
                component: signin
            }
        ]
    }
]
