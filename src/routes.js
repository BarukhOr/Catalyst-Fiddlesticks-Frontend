import auth from "./components/Auth/Auth.vue";
import signin from "./components/Auth/Signin.vue";
import dash from "./components/Catalyst/Dash/Dash.vue";

import coachDash from "./components/Catalyst/Dash/Coach/Main.vue";
import studentDash from "./components/Catalyst/Dash/Student/Main.vue";

export const routes = [
    {
        path: "/one",
        component: dash
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
    },
    {
        path: "/dash",
        component: dash
    }
]
