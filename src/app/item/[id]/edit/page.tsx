import ItemForm from "@/app/new/item-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const item = await prisma.item.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!item) {
    redirect("/");
  }

  return (
    <div>
      <ItemForm item={item} />
    </div>
  );
}
