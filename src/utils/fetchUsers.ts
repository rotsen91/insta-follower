import { IClient } from "../constants";
import * as _ from "lodash";
import { TagFeedResponseUser } from "instagram-private-api/dist/responses";
export async function getUsers(
  tag: string,
  client: IClient
): Promise<[TagFeedResponseUser]> {
  let tagMedia = client.ig.feed.tag(tag);
  let tagItems = await tagMedia.items();
  let users = _.map(tagItems, "user") as [TagFeedResponseUser];

  return users;
}
