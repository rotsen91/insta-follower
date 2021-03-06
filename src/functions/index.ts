import { getUsers } from "../utils/fetchUsers";
import { tags } from "../constants/hashtags";
import { clientSetup } from "../utils/clientSetup";
import { startFollowing } from "../utils/startFollowing";
import { Sleep } from "../utils/sleep";
import { getFollowersfromUser } from "../utils/getFollowersFromPerson";

let LOGGED_IN: boolean = false;
let client;

export async function follow() {
  while (true) {
    if (!LOGGED_IN) {
      client = await clientSetup();
      LOGGED_IN = true;
    }
    let tag = tags[Math.floor(Math.random() * tags.length)];
    let users = await getUsers(tag, client);
    await startFollowing(users, client);
    await Sleep(3000);
  }
}

export async function copyUsers(user: string) {
  if (!LOGGED_IN) {
    client = await clientSetup();
    LOGGED_IN = true;
  }
  await getFollowersfromUser(client, user);
  await Sleep(3000);
}
