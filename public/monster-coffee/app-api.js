/* 매장 노트 공용 API 클라이언트 — index.html(재고)과 settle.html(정산)이 같이 쓴다.
   매장 코드는 이 기기 localStorage 에만 보관하고, 요청마다 서버(Lambda)가 확인한다. */
(function () {
  'use strict';
  var KEY = 'mc-code';
  function getCode() { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } }
  function setCode(c) { try { if (c) localStorage.setItem(KEY, c); else localStorage.removeItem(KEY); } catch (e) {} }
  var MSG = {
    bad_code: '매장 코드가 맞지 않아요',
    owner_only: '사장님 코드로만 할 수 있어요',
    catalog_exists: '이미 품목표가 있어요',
    bad_catalog: '품목표 값이 잘못됐어요',
    bad_count: '재고 입력 값이 잘못됐어요',
    bad_order: '주문 값이 잘못됐어요',
    bad_entry: '정산 값이 잘못됐어요',
    server: '서버 오류가 났어요. 잠시 후 다시 해주세요'
  };
  function call(fn, args) {
    var api = (window.MC_CONFIG || {}).api;
    if (!api) return Promise.reject({ code: 'config', message: '서버 주소 설정(config.js)이 없어요' });
    return fetch(api, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ fn: fn, code: getCode(), args: args || {} })
    }).catch(function () {
      throw { code: 'network', message: '인터넷 연결을 확인해 주세요' };
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (b) {
        if (res.ok && b.ok) return b.data;
        var c = b.error || 'server';
        throw { code: c === 'bad_code' ? 'auth' : c === 'owner_only' ? 'forbidden' : c, message: MSG[c] || '오류가 났어요 (' + res.status + ')' };
      });
    });
  }
  window.MC_API = { call: call, getCode: getCode, setCode: setCode };
})();
