import twilio from 'twilio';


const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const createVideoToken = (identity, room) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const apiKey = process.env.TWILIO_API_KEY;
  const apiSecret = process.env.TWILIO_API_SECRET;
  
  const token = new AccessToken(
    accountSid,
    apiKey,
    apiSecret,
    {identity: identity}
  );
    
  const videoGrant = new VideoGrant();
  videoGrant.room = room;
  token.addGrant(videoGrant);

  console.log('FIRST TOKEN');
  console.log(token.toJwt());
  
  return process.env.TESTING_ACCESS_TOKEN;
};

export default createVideoToken;
