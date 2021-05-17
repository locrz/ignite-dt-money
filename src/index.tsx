import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Compras",
          amount: 1000,
          category: "Casa",
          type: "withdraw",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Salario",
          amount: 5605,
          category: "Receitas",
          type: "deposit",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 3,
          title: "Desenvolvimento de sites",
          amount: 2444,
          category: "Trabalho",
          type: "deposit",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
