"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createItem(formData: FormData) {
  const number = formData.get("number")?.toString();
  const color = formData.get("color")?.toString();
  const content = formData.get("content")?.toString();
  const room = formData.get("room")?.toString();
  const fragil = formData.get("fragil")?.toString();
  const hand = formData.get("hand")?.toString();

  console.log({ number, color, content, room, fragil, hand });

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
  console.log("newItem", newItem);
  redirect("/");
}

export async function removeItem(formData: FormData) {
  "use server";
  const itemId = formData.get("itemId")?.toString();

  if (!itemId) {
    return;
  }

  await prisma.item.delete({
    where: {
      id: parseInt(itemId),
    },
  });
  revalidatePath("/");
}

export async function updateItem(formData: FormData) {
  const id = formData.get("id")?.toString();
  const room = formData.get("room")?.toString();
  const number = formData.get("number")?.toString();
  const content = formData.get("content")?.toString();
  const color = formData.get("color")?.toString();
  const fragil = formData.get("fragil")?.toString();
  const hand = formData.get("hand")?.toString();

  console.log({ id, room, number, content, color, fragil, hand });
  if (!id || !room || !number || !content || !color || !fragil || !hand) {
    return;
  }
  console.log({ id, room, number, content, color, fragil, hand });

  await prisma.item.update({
    where: {
      id: parseInt(id),
    },
    data: {
      room: room,
      number: number,
      content: content,
      color: color,
      fragil: fragil,
      hand: hand,
    },
  });

  console.log("id before redirect",id)
  redirect("/");
}
