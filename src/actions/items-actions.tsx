"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function CreateItems(formData: FormData) {
  const number = formData.get("number")?.toString();
  const color = formData.get("color")?.toString();
  const content = formData.get("content")?.toString();
  const room = formData.get("room")?.toString();
  const fragil = formData.get("fragil")?.toString();
  const hand = formData.get("hand")?.toString();


  if (!number || !color || !content || !room || !fragil || !hand) {
    return;
  }

  const newItem = await prisma.item.create({
    data: {
      number: number,
      color: color,
      content: content,
      room: room,
      fragil: fragil,
      hand: hand,
    },
  });
  console.log(newItem);
  redirect("/");
}
