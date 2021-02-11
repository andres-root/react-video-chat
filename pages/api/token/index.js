import createVideoToken from '../../../utils/tokens';


const handler = (req, res) => {
  if (req.method === 'POST') {
    const { identity, room } = req;
    const token = createVideoToken(identity, room);
    
    res.status(200).json({ token: token });
  } else {
    res.status(400).json({ error: 'No credentials provided' });
  }
};

export default handler;