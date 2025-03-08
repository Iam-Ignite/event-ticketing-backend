
import { Injectable } from "@nestjs/common";
import { eventsData, generateOrderNumber } from "./events.data";
import { Event, Order } from "./events.types";

@Injectable()
export class EventsService {
  private events = [...eventsData]; // Copy to allow mutations

  getEvents(): Event[] {
    return this.events;
  }

  purchaseTickets(eventId: string, quantity: number): Order | string {
    const event = this.events.find((e) => e.id === eventId);
    if (!event) return "Event not found!";
    if (event.ticketsAvailable < quantity) return "Not enough tickets available!";

    event.ticketsAvailable -= quantity;

    return {
      orderNumber: generateOrderNumber(),
      event,
      quantity,
    };
  }
}
