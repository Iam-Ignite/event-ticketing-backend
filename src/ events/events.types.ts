
import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  date: string;

  @Field()
  location: string;

  @Field()
  description: string;

  @Field(() => Int)
  ticketsAvailable: number;

  @Field()
  price: number;

  @Field()
  image: string;
}

@ObjectType()
export class Order {
  @Field()
  orderNumber: string;

  @Field(() => Event)
  event: Event;

  @Field(() => Int)
  quantity: number;
}
