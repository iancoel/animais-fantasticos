export default class AnimaNumeros {
  constructor(numeros, observerClass) {
    this.numeros = document.querySelectorAll('[data-numero]');
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector('.numeros');

    // Mantem o this para a funcao que sera usada como callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom com numero em seu texto e
  // incrementa a partir de 0 ate o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // Funcao que ocorre quando a mutacao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o mutationobserver para verificar
  // quando a classe ativo é adicionada
  // ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
      this.animaNumeros();
    }
    return this;
  }
}
