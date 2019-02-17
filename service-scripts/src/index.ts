import program from "commander"
import shell from "shelljs"

const local = () => {
  shell.exec("cd ../backend-coffee && yarn dev && yarn start")
}

program
  .command("local")
  .description("starts the development server locally")
  .action(local)

console.log("index.ts fired")
