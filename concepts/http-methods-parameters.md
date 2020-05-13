# HTTP Methods and Parameters

## HTTP Methods

### GET

**Buscar** uma informação do back-end - _Pode ser usado para fazer todo o tudo, mas não é semântico_
**_Exemplo_**: site.com/ _users_

### POST

**Criar** uma informação no back-end

### PUT

**Alterar** uma informação no back-end

### DELETE

**Deletar** uma informação do back-end

---

## HTTP Parameters

### Query Params

Parâmetros nomeados enviados na roda após "?" (filtragem, paginação)
**_Exemplo_**: site.com.br/users _?name=Bruno_

### Route Params

Parâmetros utilizados para identificar recursos
**_Exemplo_**: site.com.br/users _/:id_ | site.com.br/users _/:1_

### Body Request

Corpo da requisição uitilizado para criar ou alterar recursos
