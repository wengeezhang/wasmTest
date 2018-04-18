// This is our recommended way of loading WebAssembly.
// https://developers.google.com/web/updates/2018/04/loading-wasm
(async () => {
  const fetchPromise = fetch('./test.wasm');
  const { instance } = await WebAssembly.instantiateStreaming(fetchPromise);
  const result = instance.exports.add(42,21);
  document.querySelector('main').textContent = `42 + 21 is ${ result }.`;
})();