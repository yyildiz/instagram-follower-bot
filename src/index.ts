import express from "express";
import BotService from './services/bot.service';
const app = express();
const port = 8080 || process.env.PORT;
const bot = new BotService();

app.listen(port, async () => {
    await bot.login()
    bot.run();
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
