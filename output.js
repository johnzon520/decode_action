//Fri Jan 24 2025 01:58:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("农夫山泉");
const axios = require("axios");
const axiosRetry = require("axios-retry").default;
const {
  sendNotify
} = require("./sendNotify");
const SyncRequest = require("sync-request");
let notifyStr = "";
var var_token = "";
var var_unique_identity = "";
var var_remark = "";
(async () => {
  axiosRetry(axios, {
    retries: 3
  });
  checkVersion("nfsq.js", "d93ea5963daa67bf9447bd9c271a413f");
  const _0x474d02 = process.env.nfsq_ck;
  if (!_0x474d02) {
    {
      logAndNotify("未设置nfsq_ck");
      return;
    }
  }
  let _0x3d3a80 = _0x474d02.replaceAll("&", "\n").split("\n");
  for (let _0x227076 = 0; _0x227076 < _0x3d3a80.length; _0x227076++) {
    {
      var_token = "";
      var_unique_identity = "";
      var_remark = "";
      let [_0x24e9d3, _0x4f686b, _0x7797c3, _0x1a22ec, _0x136788] = _0x3d3a80[_0x227076].split("#");
      var_token = _0x24e9d3;
      var_unique_identity = _0x4f686b;
      if (!_0x136788) {
        _0x136788 = "账号" + (_0x227076 + 1);
      } else {
        {
          _0x136788 = "账号" + (_0x227076 + 1) + "(" + _0x136788 + ")";
        }
      }
      var_remark = _0x136788;
      if (!var_token || !var_unique_identity || !_0x7797c3 || !_0x1a22ec) {
        logAndNotify("未设置完整nfsq_ck");
        continue;
      }
      logAndNotify("【" + var_remark + "】开始执行。。。");
      const _0x353aea = await sendGetRequest("https://gateway.jmhd8.com/geement.utils/api/v1/address/conversion/inverse?lat=" + _0x7797c3 + "&lon=" + _0x1a22ec);
      if (!_0x353aea.data || !_0x353aea.data.success) {
        {
          logAndNotify("【" + var_remark + "】 有问题了啊[4]：" + _0x353aea.data.msg);
          continue;
        }
      }
      const _0x13e02e = _0x353aea.data.data;
      logAndNotify("【" + var_remark + "】定位结果：" + _0x13e02e.recommend);
      const _0x3ecf2d = await sendGetRequest("https://gateway.jmhd8.com/geement.marketingplay/api/v1/task?lat=" + _0x7797c3 + "&lon=" + _0x1a22ec + "&pageNum=1&pageSize=10&task_status=2&status=1&group_id=24121016331837");
      if (!_0x3ecf2d.data || !_0x3ecf2d.data.success) {
        logAndNotify("【" + var_remark + "】 有问题了啊[3]：" + _0x3ecf2d.data.msg);
        continue;
      }
      const _0x57b243 = _0x3ecf2d.data.data;
      for (const _0x460798 of _0x57b243) {
        for (let _0xe0cff9 = 0; _0xe0cff9 < _0x460798.allow_complete_count - _0x460798.complete_count; _0xe0cff9++) {
          {
            const _0x571a03 = new Date();
            let _0x535ebc = _0x571a03.getFullYear();
            let _0x23b098 = (_0x571a03.getMonth() + 1).toString().padStart(2, "0");
            let _0xcd76b0 = _0x571a03.getDate().toString().padStart(2, "0");
            let _0xbb730d = _0x571a03.getHours().toString().padStart(2, "0");
            let _0x8617da = _0x571a03.getMinutes().toString().padStart(2, "0");
            let _0x333e30 = _0x571a03.getSeconds().toString().padStart(2, "0");
            const _0x351ef8 = encodeURIComponent(_0x535ebc + "-" + _0x23b098 + "-" + _0xcd76b0 + " " + _0xbb730d + ":" + _0x8617da + ":" + _0x333e30);
            const _0xbcf815 = await sendGetRequest("https://gateway.jmhd8.com/geement.marketingplay/api/v1/task/join?lat=" + _0x7797c3 + "&lon=" + _0x1a22ec + "&action_time=" + _0x351ef8 + "&task_id=" + _0x460798.id);
            if (!_0xbcf815.data || !_0xbcf815.data.success) {
              logAndNotify("有问题了啊：" + _0xbcf815.data.msg);
            }
          }
        }
      }
      for (let _0x4571de = 0; _0x4571de < 3; _0x4571de++) {
        const _0x2fe12e = await sendPostRequest("https://thirtypro.jmhd8.com/api/v1/nongfuwater/snake/checkerboard/lottery", {
          code: "SCENE-24121018362724",
          provice_name: _0x13e02e.province,
          city_name: _0x13e02e.city,
          area_name: _0x13e02e.area,
          address: _0x13e02e.recommend,
          longitude: _0x7797c3,
          dimension: _0x1a22ec
        });
        if (!_0x2fe12e.data || !_0x2fe12e.data.success) {
          break;
        } else {
          logAndNotify("【" + var_remark + "】玩游戏结果：" + _0x2fe12e.data.data.prizedto.prize_level + " " + _0x2fe12e.data.data.prizedto.goods[0].goods_name);
        }
      }
      for (let _0x54e4bc = 0; _0x54e4bc < 10; _0x54e4bc++) {
        const _0x38b1e7 = await sendPostRequest("https://gateway.jmhd8.com/geement.marketinglottery/api/v1/marketinglottery", {
          code: "SCENE-24121018345681",
          provice_name: _0x13e02e.province,
          city_name: _0x13e02e.city,
          area_name: _0x13e02e.area,
          address: _0x13e02e.recommend,
          longitude: _0x7797c3,
          dimension: _0x1a22ec
        });
        if (!_0x38b1e7.data || !_0x38b1e7.data.success) {
          break;
        }
        logAndNotify("【" + var_remark + "】抽奖结果：" + _0x38b1e7.data.data.prizedto.prize_name);
      }
      for (let _0xb5a2ce = 0; _0xb5a2ce < 10; _0xb5a2ce++) {
        const _0x1ac685 = await sendPostRequest("https://gateway.jmhd8.com/geement.marketinglottery/api/v1/marketinglottery", {
          code: "SCENE-24121018352070",
          provice_name: _0x13e02e.province,
          city_name: _0x13e02e.city,
          area_name: _0x13e02e.area,
          address: _0x13e02e.recommend,
          longitude: _0x7797c3,
          dimension: _0x1a22ec
        });
        if (!_0x1ac685.data || !_0x1ac685.data.success) {
          break;
        }
        logAndNotify("【" + var_remark + "】抽奖结果：" + _0x1ac685.data.data.prizedto.prize_name);
      }
      const _0x415580 = await sendGetRequest("https://gateway.jmhd8.com/geement.actjextra/api/v1/act/win/goods/simple?lat=" + _0x7797c3 + "&lon=" + _0x1a22ec + "&act_codes=ACT2412101428048%2CACT24121014352835%2CACT24121014371732");
      if (!_0x415580.data || !_0x415580.data.success) {
        logAndNotify("【" + var_remark + "】 有问题了啊[5]：" + _0x415580.data.msg);
        continue;
      }
      logAndNotify("【" + var_remark + "】开始查奖品。。。");
      const _0x281cf3 = _0x415580.data.data;
      for (let _0x2dcda1 = 0; _0x2dcda1 < _0x281cf3.length; _0x2dcda1++) {
        {
          _0x281cf3[_0x2dcda1].win_goods_type === 10 && logAndNotify("【" + var_remark + "】奖品：" + _0x281cf3[_0x2dcda1].win_goods_name);
        }
      }
    }
  }
})().catch(_0x5c95c5 => {
  logAndNotify(_0x5c95c5);
}).finally(() => {
  pushLog("nfsq.js", notifyStr);
  sendNotify("农夫山泉", notifyStr);
  $.done();
});
async function sendPostRequest(_0x4a1ae2, _0x2ed412) {
  try {
    await delay(2000);
    const _0x2a2d72 = {
      apitoken: var_token,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.55(0x18003729) NetType/WIFI Language/zh_CN",
      "content-type": "application/json",
      unique_identity: var_unique_identity,
      Referer: "https://servicewechat.com/wxd79ec05386a78727/93/page-frame.html"
    };
    const _0x5826f9 = axios.create({
      headers: _0x2a2d72,
      timeout: 60000
    });
    return _0x5826f9.post(_0x4a1ae2, _0x2ed412);
  } catch (_0x5ba75d) {
    {
      if (axios.isAxiosError(_0x5ba75d)) {
        if (_0x5ba75d.code === "ECONNABORTED" && _0x5ba75d.message.includes("timeout")) {
          console.error("请求超时：", _0x5ba75d.message);
        } else {
          {
            console.error("其他错误：", _0x5ba75d.message);
          }
        }
      } else {
        console.error("未知错误：", _0x5ba75d);
      }
      throw _0x5ba75d;
    }
  }
}
async function sendGetRequest(_0x3f7731) {
  try {
    await delay(2000);
    const _0x1d10c1 = {
      apitoken: var_token,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.55(0x18003729) NetType/WIFI Language/zh_CN",
      "content-type": "application/json",
      unique_identity: var_unique_identity,
      Referer: "https://servicewechat.com/wxd79ec05386a78727/93/page-frame.html"
    };
    const _0x2dd1dd = axios.create({
      headers: _0x1d10c1,
      timeout: 60000
    });
    return _0x2dd1dd.get(_0x3f7731);
  } catch (_0x2c3e8e) {
    if (axios.isAxiosError(_0x2c3e8e)) {
      {
        _0x2c3e8e.code === "ECONNABORTED" && _0x2c3e8e.message.includes("timeout") ? console.error("请求超时：", _0x2c3e8e.message) : console.error("其他错误：", _0x2c3e8e.message);
      }
    } else {
      console.error("未知错误：", _0x2c3e8e);
    }
    throw _0x2c3e8e;
  }
}
function delay(_0xfade4a) {
  return new Promise(_0x2dc38b => setTimeout(_0x2dc38b, _0xfade4a));
}
function logAndNotify(_0x432a9b) {
  1;
  $.log(_0x432a9b);
  notifyStr += _0x432a9b;
  notifyStr += "\n";
}
function Env(_0x348330, _0x48c968) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x2fdfdc {
    constructor(_0x7788a9) {
      this.env = _0x7788a9;
    }
    send(_0x316680, _0x18468a = "GET") {
      _0x316680 = "string" == typeof _0x316680 ? {
        url: _0x316680
      } : _0x316680;
      let _0x1595cc = this.get;
      "POST" === _0x18468a && (_0x1595cc = this.post);
      return new Promise((_0x4f4d4e, _0x28381f) => {
        _0x1595cc.call(this, _0x316680, (_0x115750, _0xb1cb1b, _0x421dd7) => {
          {
            _0x115750 ? _0x28381f(_0x115750) : _0x4f4d4e(_0xb1cb1b);
          }
        });
      });
    }
    get(_0x1ebfde) {
      return this.send.call(this.env, _0x1ebfde);
    }
    post(_0x552e17) {
      return this.send.call(this.env, _0x552e17, "POST");
    }
  }
  return new class {
    constructor(_0x566795, _0x8809a5) {
      this.name = _0x566795;
      this.http = new _0x2fdfdc(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x8809a5);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      {
        return "undefined" != typeof $loon;
      }
    }
    toObj(_0x5ecb77, _0x2f8db7 = null) {
      try {
        return JSON.parse(_0x5ecb77);
      } catch {
        {
          return _0x2f8db7;
        }
      }
    }
    toStr(_0x57226e, _0x1c43b9 = null) {
      try {
        return JSON.stringify(_0x57226e);
      } catch {
        return _0x1c43b9;
      }
    }
    getjson(_0x56f018, _0x6a2d50) {
      let _0x4f1b82 = _0x6a2d50;
      const _0x195cd9 = this.getdata(_0x56f018);
      if (_0x195cd9) {
        try {
          _0x4f1b82 = JSON.parse(this.getdata(_0x56f018));
        } catch {}
      }
      return _0x4f1b82;
    }
    setjson(_0x5483c2, _0xd40ac0) {
      try {
        return this.setdata(JSON.stringify(_0x5483c2), _0xd40ac0);
      } catch {
        return false;
      }
    }
    getScript(_0x6385a0) {
      {
        return new Promise(_0x10b42a => {
          {
            this.get({
              url: _0x6385a0
            }, (_0x191c9c, _0x2e4a31, _0x391897) => _0x10b42a(_0x391897));
          }
        });
      }
    }
    runScript(_0x3eedb7, _0x36accf) {
      return new Promise(_0x4262e2 => {
        {
          let _0xd9dbf2 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0xd9dbf2 = _0xd9dbf2 ? _0xd9dbf2.replace(/\n/g, "").trim() : _0xd9dbf2;
          let _0x236b6f = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x236b6f = _0x236b6f ? 1 * _0x236b6f : 20;
          _0x236b6f = _0x36accf && _0x36accf.timeout ? _0x36accf.timeout : _0x236b6f;
          const [_0x25502c, _0x102dc0] = _0xd9dbf2.split("@");
          const _0x581f21 = {
            url: "http://" + _0x102dc0 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x3eedb7,
              mock_type: "cron",
              timeout: _0x236b6f
            },
            headers: {
              "X-Key": _0x25502c,
              Accept: "*/*"
            }
          };
          this.post(_0x581f21, (_0x652a0f, _0x582b36, _0x208198) => _0x4262e2(_0x208198));
        }
      }).catch(_0x1f8499 => this.logErr(_0x1f8499));
    }
    loaddata() {
      {
        if (!this.isNode()) {
          return {};
        }
        {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x367d8e = this.path.resolve(this.dataFile);
            const _0x30e86a = this.path.resolve(process.cwd(), this.dataFile);
            const _0x5b3917 = this.fs.existsSync(_0x367d8e);
            const _0x629c69 = !_0x5b3917 && this.fs.existsSync(_0x30e86a);
            if (!_0x5b3917 && !_0x629c69) {
              return {};
            }
            {
              const _0x4bb502 = _0x5b3917 ? _0x367d8e : _0x30e86a;
              try {
                {
                  return JSON.parse(this.fs.readFileSync(_0x4bb502));
                }
              } catch (_0x212961) {
                return {};
              }
            }
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x5808dc = this.path.resolve(this.dataFile);
          const _0x55460f = this.path.resolve(process.cwd(), this.dataFile);
          const _0x27e5e1 = this.fs.existsSync(_0x5808dc);
          const _0x4e8ffb = !_0x27e5e1 && this.fs.existsSync(_0x55460f);
          const _0x5a6cde = JSON.stringify(this.data);
          _0x27e5e1 ? this.fs.writeFileSync(_0x5808dc, _0x5a6cde) : _0x4e8ffb ? this.fs.writeFileSync(_0x55460f, _0x5a6cde) : this.fs.writeFileSync(_0x5808dc, _0x5a6cde);
        }
      }
    }
    lodash_get(_0x4aba73, _0x31f6d3, _0xe4a0b) {
      const _0x595868 = _0x31f6d3.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3e5d36 = _0x4aba73;
      for (const _0x514fc0 of _0x595868) if (_0x3e5d36 = Object(_0x3e5d36)[_0x514fc0], undefined === _0x3e5d36) {
        return _0xe4a0b;
      }
      return _0x3e5d36;
    }
    lodash_set(_0x355b46, _0x284123, _0x103755) {
      return Object(_0x355b46) !== _0x355b46 ? _0x355b46 : (Array.isArray(_0x284123) || (_0x284123 = _0x284123.toString().match(/[^.[\]]+/g) || []), _0x284123.slice(0, -1).reduce((_0xfa8ca5, _0x495085, _0x579700) => Object(_0xfa8ca5[_0x495085]) === _0xfa8ca5[_0x495085] ? _0xfa8ca5[_0x495085] : _0xfa8ca5[_0x495085] = Math.abs(_0x284123[_0x579700 + 1]) >> 0 == +_0x284123[_0x579700 + 1] ? [] : {}, _0x355b46)[_0x284123[_0x284123.length - 1]] = _0x103755, _0x355b46);
    }
    getdata(_0x52e895) {
      {
        let _0xc3423f = this.getval(_0x52e895);
        if (/^@/.test(_0x52e895)) {
          {
            const [, _0x3b90aa, _0x27c965] = /^@(.*?)\.(.*?)$/.exec(_0x52e895);
            const _0x56db97 = _0x3b90aa ? this.getval(_0x3b90aa) : "";
            if (_0x56db97) {
              try {
                const _0x2de168 = JSON.parse(_0x56db97);
                _0xc3423f = _0x2de168 ? this.lodash_get(_0x2de168, _0x27c965, "") : _0xc3423f;
              } catch (_0x5a678b) {
                _0xc3423f = "";
              }
            }
          }
        }
        return _0xc3423f;
      }
    }
    setdata(_0x2a8742, _0x434565) {
      let _0x32dbd2 = false;
      if (/^@/.test(_0x434565)) {
        {
          const [, _0x21fe10, _0x100903] = /^@(.*?)\.(.*?)$/.exec(_0x434565);
          const _0x1aab74 = this.getval(_0x21fe10);
          const _0x12e197 = _0x21fe10 ? "null" === _0x1aab74 ? null : _0x1aab74 || "{}" : "{}";
          try {
            {
              const _0xa1a461 = JSON.parse(_0x12e197);
              this.lodash_set(_0xa1a461, _0x100903, _0x2a8742);
              _0x32dbd2 = this.setval(JSON.stringify(_0xa1a461), _0x21fe10);
            }
          } catch (_0xd58a95) {
            const _0x40a172 = {};
            this.lodash_set(_0x40a172, _0x100903, _0x2a8742);
            _0x32dbd2 = this.setval(JSON.stringify(_0x40a172), _0x21fe10);
          }
        }
      } else {
        _0x32dbd2 = this.setval(_0x2a8742, _0x434565);
      }
      return _0x32dbd2;
    }
    getval(_0x3b242f) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3b242f) : this.isQuanX() ? $prefs.valueForKey(_0x3b242f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3b242f]) : this.data && this.data[_0x3b242f] || null;
      }
    }
    setval(_0x3a5de9, _0x4e97f6) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3a5de9, _0x4e97f6) : this.isQuanX() ? $prefs.setValueForKey(_0x3a5de9, _0x4e97f6) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4e97f6] = _0x3a5de9, this.writedata(), true) : this.data && this.data[_0x4e97f6] || null;
    }
    initGotEnv(_0x1d8e1c) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1d8e1c && (_0x1d8e1c.headers = _0x1d8e1c.headers ? _0x1d8e1c.headers : {}, undefined === _0x1d8e1c.headers.Cookie && undefined === _0x1d8e1c.cookieJar && (_0x1d8e1c.cookieJar = this.ckjar));
    }
    get(_0x1a260e, _0x2c357f = () => {}) {
      {
        _0x1a260e.headers && (delete _0x1a260e.headers["Content-Type"], delete _0x1a260e.headers["Content-Length"]);
        this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1a260e.headers = _0x1a260e.headers || {}, Object.assign(_0x1a260e.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.get(_0x1a260e, (_0x54baef, _0x4a0844, _0x34b33d) => {
          {
            !_0x54baef && _0x4a0844 && (_0x4a0844.body = _0x34b33d, _0x4a0844.statusCode = _0x4a0844.status);
            _0x2c357f(_0x54baef, _0x4a0844, _0x34b33d);
          }
        })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1a260e.opts = _0x1a260e.opts || {}, Object.assign(_0x1a260e.opts, {
          hints: false
        })), $task.fetch(_0x1a260e).then(_0x5cbd30 => {
          const {
            statusCode: _0x3d822a,
            statusCode: _0x3c3364,
            headers: _0x3023a6,
            body: _0x3d8075
          } = _0x5cbd30;
          _0x2c357f(null, {
            status: _0x3d822a,
            statusCode: _0x3c3364,
            headers: _0x3023a6,
            body: _0x3d8075
          }, _0x3d8075);
        }, _0x81dd87 => _0x2c357f(_0x81dd87))) : this.isNode() && (this.initGotEnv(_0x1a260e), this.got(_0x1a260e).on("redirect", (_0x5f3926, _0x14ef6f) => {
          {
            try {
              {
                if (_0x5f3926.headers["set-cookie"]) {
                  {
                    const _0xe73097 = _0x5f3926.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                    _0xe73097 && this.ckjar.setCookieSync(_0xe73097, null);
                    _0x14ef6f.cookieJar = this.ckjar;
                  }
                }
              }
            } catch (_0x3295ad) {
              this.logErr(_0x3295ad);
            }
          }
        }).then(_0x31f005 => {
          const {
            statusCode: _0x474867,
            statusCode: _0xe911e8,
            headers: _0x1f12eb,
            body: _0x18b8b9
          } = _0x31f005;
          _0x2c357f(null, {
            status: _0x474867,
            statusCode: _0xe911e8,
            headers: _0x1f12eb,
            body: _0x18b8b9
          }, _0x18b8b9);
        }, _0x116d35 => {
          const {
            message: _0x4553b5,
            response: _0x7fc5f5
          } = _0x116d35;
          _0x2c357f(_0x4553b5, _0x7fc5f5, _0x7fc5f5 && _0x7fc5f5.body);
        }));
      }
    }
    post(_0x519341, _0x2ba560 = () => {}) {
      {
        if (_0x519341.body && _0x519341.headers && !_0x519341.headers["Content-Type"] && (_0x519341.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x519341.headers && delete _0x519341.headers["Content-Length"], this.isSurge() || this.isLoon()) {
          this.isSurge() && this.isNeedRewrite && (_0x519341.headers = _0x519341.headers || {}, Object.assign(_0x519341.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.post(_0x519341, (_0x225999, _0x70765c, _0x11c4ce) => {
            !_0x225999 && _0x70765c && (_0x70765c.body = _0x11c4ce, _0x70765c.statusCode = _0x70765c.status);
            _0x2ba560(_0x225999, _0x70765c, _0x11c4ce);
          });
        } else {
          if (this.isQuanX()) {
            _0x519341.method = "POST";
            this.isNeedRewrite && (_0x519341.opts = _0x519341.opts || {}, Object.assign(_0x519341.opts, {
              hints: false
            }));
            $task.fetch(_0x519341).then(_0x396fd4 => {
              const {
                statusCode: _0xbaa3c5,
                statusCode: _0x1b53f0,
                headers: _0x47f565,
                body: _0x2a934a
              } = _0x396fd4;
              _0x2ba560(null, {
                status: _0xbaa3c5,
                statusCode: _0x1b53f0,
                headers: _0x47f565,
                body: _0x2a934a
              }, _0x2a934a);
            }, _0x4b15aa => _0x2ba560(_0x4b15aa));
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x519341);
                const {
                  url: _0x198c18,
                  ..._0x399ae6
                } = _0x519341;
                this.got.post(_0x198c18, _0x399ae6).then(_0xbe9bb5 => {
                  {
                    const {
                      statusCode: _0xe32c7e,
                      statusCode: _0x290d26,
                      headers: _0x37df2c,
                      body: _0x251e51
                    } = _0xbe9bb5;
                    _0x2ba560(null, {
                      status: _0xe32c7e,
                      statusCode: _0x290d26,
                      headers: _0x37df2c,
                      body: _0x251e51
                    }, _0x251e51);
                  }
                }, _0x211eaa => {
                  const {
                    message: _0x337005,
                    response: _0x193078
                  } = _0x211eaa;
                  _0x2ba560(_0x337005, _0x193078, _0x193078 && _0x193078.body);
                });
              }
            }
          }
        }
      }
    }
    time(_0x120879, _0x167349 = null) {
      {
        const _0x4c295c = _0x167349 ? new Date(_0x167349) : new Date();
        let _0x211e3a = {
          "M+": _0x4c295c.getMonth() + 1,
          "d+": _0x4c295c.getDate(),
          "H+": _0x4c295c.getHours(),
          "m+": _0x4c295c.getMinutes(),
          "s+": _0x4c295c.getSeconds(),
          "q+": Math.floor((_0x4c295c.getMonth() + 3) / 3),
          S: _0x4c295c.getMilliseconds()
        };
        /(y+)/.test(_0x120879) && (_0x120879 = _0x120879.replace(RegExp.$1, (_0x4c295c.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x44f3e1 in _0x211e3a) new RegExp("(" + _0x44f3e1 + ")").test(_0x120879) && (_0x120879 = _0x120879.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x211e3a[_0x44f3e1] : ("00" + _0x211e3a[_0x44f3e1]).substr(("" + _0x211e3a[_0x44f3e1]).length)));
        return _0x120879;
      }
    }
    msg(_0x3d992c = _0x348330, _0xe5db90 = "", _0x71129a = "", _0x344b4d) {
      {
        const _0x28747a = _0x2755fb => {
          if (!_0x2755fb) {
            return _0x2755fb;
          }
          if ("string" == typeof _0x2755fb) {
            return this.isLoon() ? _0x2755fb : this.isQuanX() ? {
              "open-url": _0x2755fb
            } : this.isSurge() ? {
              url: _0x2755fb
            } : undefined;
          }
          if ("object" == typeof _0x2755fb) {
            if (this.isLoon()) {
              let _0x322492 = _0x2755fb.openUrl || _0x2755fb.url || _0x2755fb["open-url"];
              let _0x3196f0 = _0x2755fb.mediaUrl || _0x2755fb["media-url"];
              return {
                openUrl: _0x322492,
                mediaUrl: _0x3196f0
              };
            }
            if (this.isQuanX()) {
              let _0x22e50a = _0x2755fb["open-url"] || _0x2755fb.url || _0x2755fb.openUrl;
              let _0x9e3d56 = _0x2755fb["media-url"] || _0x2755fb.mediaUrl;
              return {
                "open-url": _0x22e50a,
                "media-url": _0x9e3d56
              };
            }
            if (this.isSurge()) {
              let _0x566b3e = _0x2755fb.url || _0x2755fb.openUrl || _0x2755fb["open-url"];
              return {
                url: _0x566b3e
              };
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3d992c, _0xe5db90, _0x71129a, _0x28747a(_0x344b4d)) : this.isQuanX() && $notify(_0x3d992c, _0xe5db90, _0x71129a, _0x28747a(_0x344b4d))), !this.isMuteLog) {
          {
            let _0x129bbc = ["", "==============📣系统通知📣=============="];
            _0x129bbc.push(_0x3d992c);
            _0xe5db90 && _0x129bbc.push(_0xe5db90);
            _0x71129a && _0x129bbc.push(_0x71129a);
            console.log(_0x129bbc.join("\n"));
            this.logs = this.logs.concat(_0x129bbc);
          }
        }
      }
    }
    log(..._0x377772) {
      _0x377772.length > 0 && (this.logs = [...this.logs, ..._0x377772]);
      console.log(_0x377772.join(this.logSeparator));
    }
    logErr(_0x407b32, _0x13d12d) {
      {
        const _0x415665 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0x415665 ? this.log("", "❗️" + this.name + ", 错误!", _0x407b32.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x407b32);
      }
    }
    wait(_0x38c0b9) {
      return new Promise(_0x4d6ffc => setTimeout(_0x4d6ffc, _0x38c0b9));
    }
    done(_0x20d86e = {}) {
      {
        const _0x4778fa = new Date().getTime();
        const _0x4935ce = (_0x4778fa - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x4935ce + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x20d86e);
      }
    }
  }(_0x348330, _0x48c968);
}
function checkVersion(_0x33e74b, _0x30dd41) {
  try {
    {
      logAndNotify("文件md5：" + _0x30dd41);
      const _0x4b5cdc = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x33e74b + "&fileMd5=" + _0x30dd41);
      const _0x3cf601 = JSON.parse(_0x4b5cdc.getBody("utf8"));
      _0x3cf601.code === 301 ? process.exit(0) : logAndNotify(_0x3cf601.data);
    }
  } catch (_0x1ca07c) {
    {
      logAndNotify("版本检查失败:", _0x1ca07c);
    }
  }
}
function pushLog(_0x5723e7, _0xe3675) {
  try {
    const _0x1e67ff = "fileName=" + encodeURIComponent(_0x5723e7) + "&log=" + encodeURIComponent(_0xe3675);
    SyncRequest("POST", "https://checktoke.filegear-sg.me/api/update/pushLog", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x1e67ff
    });
  } catch (_0x8ba8cf) {}
}