import * as _ from "lodash";
import { TagFeedResponseUser } from "instagram-private-api/dist/responses";
import { IClient } from "../constants";
import { Sleep } from "./sleep";

export async function startFollowing(
  users: any,
  client: IClient
): Promise<void> {
  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  await asyncForEach(users, async (user: TagFeedResponseUser) => {
    const body = await client.ig.friendship.show(user.pk);
    if (body.followed_by) return;

    try {
      // Follow user
      await client.ig.friendship.create(user.pk);
      console.log("Following: ", user.username);
      await Sleep(60000);
    } catch (err) {
      console.log(err);
      console.log("timeout");
      await Sleep(300000);
    }
  });
}
