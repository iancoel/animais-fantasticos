export default function initFetchBitcoin() {
  console.log('teste');
  fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((err) => console.log(Error(err)));
}
