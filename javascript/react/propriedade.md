# Propriedade no React

## O que é

Como se fossem atributos do HTML que podem ser pegas nos [componentes](componente.md)

---

### **_Exemplo_**

#### Header.js

Pega-se o valor da propriedade com o parâmetro da função
Desestruturação do props para que fique claro qual propriedade estou acessando além de deixar o código mais limpo

```javascript
import React from "react";

export default function Header({ title }) {
  return <h1>{title}</h1>;
}
```

#### App.js

Passando a propriedade como se fosse atributo do HTML

```javascript
import React from "react";
import Header from "./Header";

export default function App() {
  return <Header title="Hello World" />;
}

```

## Propriedade Children

Propriedade criada automaticamente para pegar todo o conteúdo de dentro do [componente](componente.md)

### **_Exemplo_**

#### Header.js

```javascript
import React from "react";

export default function Header({ children }) {
  return <h1>{children}</h1>;
}
```

#### App.js

```javascript
import React from "react";
import Header from "./Header";

export default function App() {
  return <Header>Be The Hero</Header>;
}
```
