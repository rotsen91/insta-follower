import { IgApiClient } from "instagram-private-api";
import { USER_NAME, PASSWORD, IClient } from "../constants";
import { AccountRepositoryLoginResponseLogged_in_user } from "instagram-private-api/dist/responses";

export async function clientSetup(): Promise<IClient> {
  const ig = new IgApiClient();
  ig.state.generateDevice(USER_NAME);
  let clientInfo: IClient = {
    auth: null,
    ig: null
  };

  try {
    console.log("Logging in!");
    clientInfo.auth = (await ig.account.login(
      USER_NAME,
      PASSWORD
    )) as AccountRepositoryLoginResponseLogged_in_user;
  } catch (err) {
    console.log(err);
    console.log("Unable to login - maybe challenge or incorrect user + pass");
    process.exit(1);
  }
  process.nextTick(async () => await ig.simulate.postLoginFlow());
  clientInfo.ig = ig;
  return clientInfo;
}
