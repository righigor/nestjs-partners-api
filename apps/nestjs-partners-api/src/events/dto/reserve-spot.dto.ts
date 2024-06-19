import { TicketKind } from '@prisma/client';

export class ReserveSpot {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
