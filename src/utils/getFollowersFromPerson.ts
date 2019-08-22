import { IClient } from "../constants";
import * as _ from "lodash";
import { Sleep } from "./sleep";
import { startFollowing } from "./startFollowing";

export async function getFollowersfromUser(
  client: IClient,
  username: string
): Promise<void> {
  let user = await client.ig.user.getIdByUsername(username);
  let followingFeed = await client.ig.feed.accountFollowers(user);
  let moreAvailable = true;
  while (moreAvailable) {
    const users = await followingFeed.items();
    await startFollowing(users, client);
    await Sleep(15000);
    moreAvailable = followingFeed.isMoreAvailable();
  }
  process.exit(1);
}
