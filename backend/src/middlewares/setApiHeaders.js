import getClientToken from '../utils/getToken.js';

const setApiHeaders = async (req, res, next) => {
  const accessToken = await getClientToken(process.env.CLIENTSECRET);  
  req.headers['Authorization'] = `Bearer ${accessToken}`;
  next();
};

export default setApiHeaders;