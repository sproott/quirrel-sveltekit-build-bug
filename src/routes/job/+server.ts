import { Queue } from "quirrel/sveltekit";

const queue = Queue("job", async () => {
  console.log("Hello, World!");
});

export const POST = queue;

export default queue;
