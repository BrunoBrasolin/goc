# Estado

## O que é

Informação mantida pelo [componente](componente.md), é usado para manupular o DOM para que atualize elementos

---

### **_Exemplo_**

```javascript
import React, { useState } from "react";
import Header from "./Header";

export default function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>Contador {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
```