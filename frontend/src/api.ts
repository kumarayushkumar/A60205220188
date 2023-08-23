const API_BASE_URL = "http://localhost:3000";

export interface Train {
  trainName: string;
  trainNumber: string;
  departureTime: {
    Hours: number;
    Minutes: number;
    Seconds: number;
  };
  seatsAvailable: {
    sleeper: number;
    AC: number;
  };
  price: {
    sleeper: number;
    AC: number;
  };
  delayedBy: number;
}

export async function fetchAllTrains(): Promise<Train[]> {
  const response = await fetch(`${API_BASE_URL}/trains`);
  const data = await response.json();
  return data;
}

export async function fetchSingleTrain(trainNumber: string): Promise<Train> {
  const response = await fetch(`${API_BASE_URL}/trains/${trainNumber}`)
  const data = await response.json();
  return data;
}
