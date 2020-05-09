let lista = new Proxy(new ListaNegociacoes(), {
  get(target, prop, receiver) {
    //get é executado sempre que tentar ler uma quantidade, fazer um get
    //targetreferencia ao objeto original que esta sendo incapsulado pelo proxy
    //prop é a propriedade que esta sendo acessada
    //receiver é a referencia pro proprio proxy
    //arguments são os marametros que a funcao recebe - neste caso, arguments é: new Negociacao(new Date(), 2, 100)
    // Para ser chamado no proxy, tem que dar este retorno senao volta como undifined
    //Retorna o objeto original (target), na pripriedade que esta sendo acessada (prop), com uma referencia pro proxy (receiver)
    // console.log(`${prop} chamada`);
    // return Reflect.get(target, prop, receiver);
    // metodos e funcoes o proxy sempre entende que é get pra depois fazer um apply, metodos sao disparados primeiro em modo de leitura depois um apply
    if (
      ["adiciona", "esvazia"].includes(prop) && // esta na lista de metodos que eu quero interceptar e
      typeof target[prop] == typeof Function // voce é uma funcao?
    )
      return function () {
        // se sim, executara esta funcao ao inves da funcao do metodo - subistituira a funcao do metodo por esta
        console.log(`interceptando ${prop}`);
        Reflect.apply(target[prop], target, arguments); //faco a funcao (target[prop] {adiciona ou esvazia}) receber os parametros dela (arguments {new Negociacao(new Date(), 2, 100)})
      };
    return Reflect.get(target, prop, receiver);
  },
  set: function (target, prop, value, receiver) {
    //value é o valor que sera 'setado'
    //target[prop] pega o target, como se fosse o this, o objeto que esta sendo setado, com a propriedade prop
    console.log(`Valor antigo: ${target[prop]}; Valor setado: ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});
lista.adiciona(new Negociacao(new Date(), 2, 100));
lista.esvazia();
