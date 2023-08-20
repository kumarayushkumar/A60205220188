import axios from 'axios';

const train = async (req, res) => {
  try {
    const trainNumber = req.params.trainNumber;
    const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
      headers: req.headers,
    });

    const trainData = response.data;

    res.status(200).json(trainData);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

export default train;