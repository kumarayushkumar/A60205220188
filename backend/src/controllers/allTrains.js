import axios from 'axios';

const allTrain = async (req, res) => {
  try {
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: req.headers,
    });

    const trainDataArray = response.data;

    res.status(200).json(trainDataArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An derror occurred' });
  }
}

export default allTrain;