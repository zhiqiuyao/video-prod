"use strict";
(() => {
var exports = {};
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 5160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/**
 * 获取视频访问链接
 * @param {string} str 口令
 */ function getVideoURL(str) {
    const regex = /((http|https):\/\/[^\s]+)/g;
    const urls = str.match(regex);
    console.log(urls);
    return urls[0];
}
async function handler(req, res) {
    let video;
    //   console.log("keyword", req.body.keyword);
    const url = getVideoURL(req.body.keyword);
    if (url) {
        const servers = await fetch(url, {
            headers: {
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "max-age=0",
                "sec-ch-ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "upgrade-insecure-requests": "1",
                cookie: "__ac_nonce=064704ef300a5508d8da8; __ac_signature=_02B4Z6wo00f01B3t88gAAIDAhYZkuTSZz0gdzfdAAGMR11; __ac_referer=__ac_blank",
                Referer: "https://www.douyin.com/video/7236950060817222952",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: null,
            method: "GET"
        });
        const res = await servers.text();
        const servers_data = res.substring(res.lastIndexOf("RENDER_DATA") + 37, res.lastIndexOf("var mark") - 41);
        console.log(servers_data.substring(0, 50));
        console.log(servers_data.substring(servers_data.length - 10));
        try {
            const data = JSON.parse(decodeURIComponent(servers_data));
            video = {
                source: "https:" + data["46"].aweme.detail.video.playApi,
                cover: "https:" + data["46"].aweme.detail.video.cover,
                desc: data["46"].aweme.detail.desc
            };
            console.log("video", video);
        } catch (error) {
            console.log("错误：", error);
        }
    }
    res.status(200).json({
        data: video || req.body.keyword
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5160));
module.exports = __webpack_exports__;

})();