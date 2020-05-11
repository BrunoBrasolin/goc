# http-request-promise

## Http Request com Promise

_xhr.readyState_ existem 5 estados de requisições:  
**0**: Requisição ainda não iniciada;  
**1**: Conexão com o servidor estabelecida;  
**2**: Requisição recebida;  
**3**: Processando requisição;  
**4**: Requisição concluída e resposta pronta;

---

## Exemplo

```javascript
class HttpService {
  get(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest(); // Instancia o XHR
      xhr.open("GET", url); // Abre uma conexão GET para a URL selecionada
      xhr.onreadystatechange = () => {
        // É executado sempre que o estado da requisição mudar
        if (xhr.readyState == 4) {
          // Checa se o estado da requisição está concluída e com resposta pronta
          if (xhr.status == 200) {
            // Checa se o status da requisição está OK (200)
            resolve = JSON.parse(xhr.responseText); // Transforma a resposta, que vem como padrão em string, em JSON
          } else {
            // Caso o status da requisição seja != de 200
            reject = xhr.responseText;
          }
        }
      };
      xhr.send(); // Envia a requisição
    });
  }
}
```
