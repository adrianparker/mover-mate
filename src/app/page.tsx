import { ItemCard } from "@/components/item-card";
import prisma from "@/lib/prisma";

async function HomePage() {
  const items = await prisma.item.findMany();
  return (
    <div>
      <h1>Home Page</h1>
      {items.map((item)=> (
        <ItemCard item={item} key={item.id}/>
      ))}
    </div>
  );
}

export default HomePage;
