# promise-proxy

## Promise

Promise é o resultado futuro de uma operação ;
Bastante usado quando existe uma sequência de operações assíncronas e quer executar numa ordem;

- resolve: Uma função que tem que passar o retorno de sucesso do método - _.then()_ chama;
- reject: Uma função que tem que passar o retorno de falha do método - _.catch()_ chama;

---

## Proxy

- target: Referência ao objeto original que esta sendo incapsulado pelo proxy;
- prop: Propriedade que esta sendo acessada;
- receiver: Referência para 0 próprio proxy;
- arguments: Parâmetros que a função recebe;
- value: Valor que será usado na função;

_Métodos/funções_: o proxy sempre entende que é get pra depois fazer um apply, métodos são disparados primeiro em modo de leitura

---

## **_Exemplo_**

```javascript
let lista = new Proxy(new ListaNegociacoes(), {
  // Objeto que o Proxy irá "fingir"
  get(target, prop, receiver) {
    if (
      ["adiciona", "esvazia"].includes(prop) && // Se está na lista de metodos para interceptar e
      typeof target[prop] == typeof Function // é uma funcao
    )
      return function () {
        // Executará esta função ao inves da funcao do metodo, substintuindo-a
        Reflect.apply(target[prop], target, arguments);
        //Execute a função (target[prop] {adiciona ou esvazia}) recebendo os parametros (arguments {new Negociacao(new Date(), 2, 100)})
      };
    return Reflect.get(target, prop, receiver);
  },
  set: function (target, prop, value, receiver) {
    // target[prop] pega o target, como se fosse o this, o objeto que esta sendo setado, com a propriedade prop
    console.log(`Valor antigo: ${target[prop]}; Valor novo: ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});
lista.adiciona(new Negociacao(new Date(), 2, 100)); // Neste caso, arguments é: [New Negociacao(new Date(), 2, 100)]
lista.esvazia();
```
