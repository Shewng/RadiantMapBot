require("dotenv").config(); //help parse the env variable in process.env.BOT_TOKEN

const { channel } = require("diagnostics_channel");
const Discord = require("discord.js"); //connect/communicate with discord
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  partials: ["CHANNEL"],
});

const listOfMaps = [
  {
    id: 1,
    name: "Haven",
    img: "maps/haven.webp",
  },
  {
    id: 2,
    name: "Bind",
    img: "maps/bind.webp",
  },
  {
    id: 3,
    name: "Split",
    img: "maps/split.webp",
  },
  {
    id: 4,
    name: "Ascent",
    img: "maps/ascent.webp",
  },
  {
    id: 5,
    name: "Icebox",
    img: "maps/icebox.webp",
  },
  {
    id: 6,
    name: "Breeze",
    img: "maps/breeze.webp",
  },
  {
    id: 7,
    name: "Fracture",
    img: "maps/fracture.webp",
  },
];

client.on("ready", () => {
  console.log("Bot ready to randomize");
});

client.on("message", (msg) => {
  if (msg.content === "!map") {
    let map = generateRandomMap();
    let name = map.name;
    let image = map.img;

    msg.channel.send(name);
    msg.channel.send({ files: [{ attachment: image }] });
  }
});

function generateRandomMap() {
  let map = listOfMaps[Math.floor(Math.random() * listOfMaps.length)];
  return map;
}

//link to discord bot via token
client.login(process.env.BOT_TOKEN);
