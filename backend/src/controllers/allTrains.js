import axios from 'axios';

const allTrain = async (req, res) => {
  try {
    const response = await axios.get('http://20.244.56.144/train/trains', { headers: req.headers })
    const currentTime = new Date();
    
    const trainDataArray = response.data.filter(train => {
      const departureTime = new Date();
      departureTime.setHours(train.departureTime.Hours);
      departureTime.setMinutes(train.departureTime.Minutes);
      departureTime.setSeconds(train.departureTime.Seconds);

      const timeDifferenceInMinutes = (departureTime - currentTime) / (1000 * 60);

      return timeDifferenceInMinutes >= 30;
    });

    console.log(trainDataArray);

    res.status(200).json(trainDataArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

export default allTrain;
