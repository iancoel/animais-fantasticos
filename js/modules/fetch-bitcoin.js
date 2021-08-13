export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((err) => console.log(Error(err)));
}
