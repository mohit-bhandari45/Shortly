import { loginAPI, signupAPI } from "@/apis/api";

const signUpHandler = async (userData) => {
    const res = await fetch(signupAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await res.json();

    const response = {
        status: res.status,
        msg: data.msg
    };
    return response
};

const loginHandler = async (userData) => {
    const res = await fetch(loginAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await res.json();

    const response = {
        status: res.status,
        data: res.status === 200 ? data.token : data.msg,
    };
    return response;
};

export { signUpHandler, loginHandler };