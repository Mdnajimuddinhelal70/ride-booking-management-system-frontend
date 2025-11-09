export interface RideRequest {
  _id: string;
  riderEmail: string;
  pickupLocation: string;
  destinationLocation: string;
  status: string;
}

export type RideStatus =
  | "requested"
  | "accepted"
  | "picked_up"
  | "in_transit"
  | "completed"
  | "cancelled"
  | "rejected"
  | "pending"
  | "ongoing";

export interface IStatusHistory {
  status: RideStatus;
  updatedAt: string;
}

export interface IRide {
  _id: string | null;
  pickupLocation: string;
  destinationLocation: string;
  status: RideStatus;

  statusHistory?: IStatusHistory[];

  ridePrice: number;
  riderEmail: string;

  riderId: string;
  driverId?: string | null;

  requestedAt: string;
  updatedAt?: string;
  createdAt: string;
}
