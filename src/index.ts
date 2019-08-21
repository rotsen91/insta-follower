import { follow } from "./functions";
import { IOptionDescription } from "./constants";
const args = require("minimist")(process.argv.slice(2));

if (args["function"] === undefined) {
  console.log(
    "No function was provided. Usage: npm run start -- --function:[OPTION]"
  );
  process.exit(1);
}

if (args["function"] === "f" || args["function"] === "follow") {
  console.log("Starting to Follow");
  follow();
}

if (args["function"] === "p" || args["function"] === "purge") {
  console.log("Starting the Purge");
  //purge()
}

if (args["function"] === "l" || args["function"] === "like") {
  console.log("Starting to like random shit");
  //like()
}

if (args["function"] === "h" || args["function"] === "help") {
  print_help();
}

function print_help() {
  console.log("Options: ");
  const optionsDescriptions: IOptionDescription[] = [
    {
      short_name: "h",
      long_name: "help",
      description: "Show options."
    },
    {
      short_name: "p",
      long_name: "purge",
      description: "Start unfollowing random people."
    },
    {
      short_name: "l",
      long_name: "like",
      description: "Start liking random shit."
    },
    {
      short_name: "f",
      long_name: "follow",
      description: "Start following random people."
    }
  ];

  for (const option of optionsDescriptions) {
    console.log(
      `    --${option.long_name}, -${option.short_name}:` +
        ` ${option.description}`
    );
  }
}
