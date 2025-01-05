import { addUrlAPI, API, getUrlsAPI } from "@/apis/api";

const getAllUrlsHandler = async () => {
    const res = await API.get(getUrlsAPI);
    const response = {
        status: res.status,
        data: res.status === 200 ? res.data.urls : res.data.msg,
    }
    return response;
};

const shortenURLHandler = async (url) => {
    const res = await API.post(
        addUrlAPI,
        {
            url: url,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const response = {
        status: res.status,
        data: res.status === 201 ? res.data.shortID : res.data.msg,
    }

    return response;
};

export { getAllUrlsHandler,shortenURLHandler };