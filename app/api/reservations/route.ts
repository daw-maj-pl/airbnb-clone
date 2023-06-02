import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.error();
  }

  const { listingId, startDate, endDate, totalPrice } = await request.json();

  if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId
    },
    data: {
      reservations: {
        create: {
          userId: user.id,
          startDate,
          endDate,
          totalPrice
        }
      }
    }
  });

  return NextResponse.json(listingAndReservation);
}
