import * as _ from "lodash";
import { TagFeedResponseUser } from "instagram-private-api/dist/responses";
import { IClient } from "../constants";
import { Sleep } from "./sleep";
export async function startFollowing(
  users: [TagFeedResponseUser],
  client: IClient
): Promise<void> {
  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  asyncForEach(users, async (user: TagFeedResponseUser) => {
    const body = await client.ig.friendship.show(user.pk);
    if (body.followed_by) return;

    let rand = (Math.random() * (120 - 60) + 60) * 1000;
    if (rand > 118000) {
      rand = (Math.random() * (360 - 300) + 300) * 1000;
      console.log("5min sleep");
    } else if (rand > 119500) {
      rand = (Math.random() * (600 - 500) + 500) * 1000;
      console.log("10min sleep");
    }

    try {
      // Follow user
      await client.ig.friendship.create(user.pk);
      await Sleep(rand);
      console.log("after delay");
    } catch (err) {
      console.log(err);
      console.log("Sleeping 5 min");
      await Sleep(30000);
    }
  });
}
