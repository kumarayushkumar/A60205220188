// src/components/TrainList.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllTrains, Train } from "../api";

function TrainList() {
  const [trains, setTrains] = useState<Train[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllTrains();
        setTrains(data);
      } catch (error) {
        console.error("Error fetching train list:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="train-list">
      <div className="container mt-2">
        <h2 className="mb-4">Available Trains</h2>
        <ul className="list-group">
          {trains.map(train => (
            <li className="list-group-item" key={train.trainNumber}>
              <div className="row">
                <div className="col-sm-4"><Link to={`/train/${train.trainNumber}`} className="text-decoration-none">{train.trainName}</Link></div>
                <div className="col-sm-4"><span className="badge bg-primary">
                  Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
                </span></div>
                <div className="col-sm-4">  <span className="badge bg-danger">
                  Delay: {train.delayedBy} minutes
                </span></div>
              </div>



            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrainList;
