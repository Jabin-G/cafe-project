export interface Table {
  id: number;
  number: string;
  seats: number;
  status: "available" | "occupied" | "reserved";
}

export interface BuyOrder {
  id: number;
  orderId: string;
  customerName: string;
  items: string;
  quantity: number;
  totalPrice: number;
  status: "pending" | "completed" | "cancelled";
}

export interface BookingOption {
  id: number;
  bookingId: string;
  customerName: string;
  date: string;
  time: string;
  seats: number;
  tableNumber?: string;
  status: "confirmed" | "pending" | "cancelled";
}

export interface MenuItem {
  id: number;
  itemId: string;
  itemName: string;
  category: string;
  price: number;
  availability: "available" | "out of stock";
}
