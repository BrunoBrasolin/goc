# Ajax

_xhr.readyState_ existem 5 estados de requisições:  
**0**: Requisição ainda não iniciada;  
**1**: Conexão com o servidor estabelecida;  
**2**: Requisição recebida;  
**3**: Processando requisição;  
**4**: Requisição concluída e resposta pronta;  

```javascript
let xhr = new XMLHttpRequest(); // Instancia o XMLHttpRequest
xhr.open("GET", "negociacoes/semana"); // Abre a conexão com o método (GET) para que URl (negociacoes/sermana)
xhr.onreadystatechange = () => { // É executado sempre que o estado da requisição mudar
  if (xhr.readyState == 4) { // Checa se o estado da requisição está concluída e com resposta pronta
    if (xhr.status == 200) { // Checa se o status da requisição está OK (200)
        // Escreva seu código aqui
        JSON.parse(xhr.responseText) // Transforma a resposta da requisição de texto para JSON
        .map( /*função*/ ); // Roda cada parte do JSON executando a função
      );
    } else {
      console.log(xhr.responseText); // Caso o status da requisição seja != de 200
    }
  }
};
xhr.send(); // Envia a requisição
```
