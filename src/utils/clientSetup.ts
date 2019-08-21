
import {IgApiClient} from 'instagram-private-api'
import { USER_NAME, PASSWORD, IClient } from '../constants';


export async function clientSetup():Promise<IClient>{
    const ig = new IgApiClient();
    ig.state.generateDevice(USER_NAME);
    let clientInfo:IClient= {
        auth:"",
        ig: null
    }
    try{
      console.log("Logging in!");
      clientInfo.auth = await ig.account.login(USER_NAME, PASSWORD);
    } catch(err) {
        console.log(err)
      console.log('Unable to login - maybe challenge or incorrect user + pass');
      process.exit(1)
    }
    process.nextTick(async () => await ig.simulate.postLoginFlow());
    clientInfo.ig = ig
    return clientInfo
}