import { ItemCard } from "@/components/item-card";
import prisma from "@/lib/prisma";

async function HomePage() {
  const items = await prisma.item.findMany();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default HomePage;
