import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { EventsService } from "./events.service";
import { Event, Order } from "./events.types";

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(() => [Event])
  getEvents() {
    return this.eventsService.getEvents();
  }

  @Mutation(() => Order)
  purchaseTickets(
    @Args("eventId") eventId: string,
    @Args("quantity") quantity: number
  ) {
    return this.eventsService.purchaseTickets(eventId, quantity);
  }
}
