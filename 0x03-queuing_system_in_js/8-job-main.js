import kue from "kue";

// job main
import createPushNotificationsJobs from "./8-job.js";

// main job
const queue = kue.createQueue();

const list = [
  {
    phoneNumber: "4153518780",
    message: "This is the code 1234 to verify your account",
  },
];
createPushNotificationsJobs(list, queue);
