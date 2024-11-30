import { bootstrap } from "./config/api.js";

const server = bootstrap();

server.listen(3333, () => {
  console.log("Server running...");
});
