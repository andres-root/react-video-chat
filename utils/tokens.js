import twilio from 'twilio';


const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const createVideoToken = (identity, room) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const apiKey = process.env.TWILIO_API_KEY;
  const apiSecret = process.env.TWILIO_API_SECRET;
  const videoGrant = new VideoGrant({ room });

  const token = new AccessToken(
    accountSid,
    apiKey,
    apiSecret,
    {identity: identity}
  );

  token.addGrant(videoGrant);
  
  return token.toJwt();
};

export default createVideoToken;
