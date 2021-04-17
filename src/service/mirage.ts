import { createServer, Model } from "miragejs";

export function startMirage({ environment = "development" }) {
  createServer({
    // models determina quais os "bancos de dados"
    environment,
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Iphone 12 pro",
            amount: 8000,
            type: "withdraw",
            category: "Venda",
            createdAt: new Date("2021-03-15 23:35:00"),
          },
          {
            id: 2,
            title: "Desenvolvimento web",
            amount: 6999,
            type: "deposit",
            category: "Casa",
            createdAt: new Date("2021-03-15 23:35:00"),
          },
          {
            id: 3,
            title: "Freela",
            amount: 3000,
            type: "deposit",
            category: "Casa",
            createdAt: new Date("2021-03-15 23:35:00"),
          },
        ],
      });
    },
    // as rotas sao os endpoints
    routes() {
      // a partir de quaando se deve fazer uma requisicao
      // por exemplo: http://localhost:3000/api/transactions, necessita o nome da "api" para acessar as rotas
      this.namespace = "api";

      // GET -> obter os dados do MODEL
      // schema -> é o banco de dados
      // http://localhost:3000/api/transactions
      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });
      // POST -> persistir uma entidade no banco
      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });
    },
  });
}
