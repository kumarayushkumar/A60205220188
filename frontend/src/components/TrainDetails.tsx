// src/components/TrainDetails.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleTrain, Train } from "../api";

function TrainDetails() {
  const { trainNumber } = useParams<{ trainNumber: string }>();
  const [train, setTrain] = useState<Train | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSingleTrain(trainNumber);
        setTrain(data);
      } catch (error) {
        console.error("Error fetching train details:", error);
      }
    }
    fetchData();
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <section id="train-details" >
      <div className="container mt-3 border p-4 bg-light">
        <div className="row">
          <h2 className="mb-3">{train.trainName}</h2>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          <p>Seats Available:</p>
          <ul>
            <li>Sleeper: {train.seatsAvailable.sleeper}</li>
            <li>AC: {train.seatsAvailable.AC}</li>
          </ul>
          <p>Price:</p>
          <ul>
            <li>Sleeper: {train.price.sleeper}</li>
            <li>AC: {train.price.AC}</li>
          </ul>
          <p className="text-danger">Delayed By: {train.delayedBy} minutes</p>
        </div>
      </div>
    </section>
  );
}

export default TrainDetails;
