import axios from 'axios';

const getClientToken = async (clientSecret) => {
  const clientInfo = {
    companyName: 'Train Central',
    clientID: '04dcd9ce-12b4-4fbe-bbd8-a4aabf347dd6',
    ownerName: 'AyushKumar',
    ownerEmail: 'ayush.kumar17@s.amity.edu',
    rollNo: 'A60205220188',
    clientSecret
  };

  try {
    const response = await axios.post('http://20.244.56.144/train/auth', clientInfo);
    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    throw error;
  }
};

export default getClientToken;