import { ClientOptions } from "discord.js";
require("dotenv").config();

const options: ClientOptions = {
  allowedMentions: {
    parse: ["users"],
    repliedUser: true,
  },
  // [deprecated] messageCacheLifetime: 1800,
  // [deprecated] messageSweepInterval: 1800,
  intents: 14335,
};

export default {
  options
};
