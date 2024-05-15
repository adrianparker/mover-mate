import Link from "next/link";
import ItemDeleteButton from "./item-delete-button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { Item } from "@prisma/client";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

export function ItemCard({ item }: { item: Item }) {
  return (
    <Card
      className={`border-2 ${
        item.fragil === "no fragil" ? "" : "border-red-400"
      }`}
    >
      <CardHeader>
        <CardTitle className="flex flex-row justify-center">
          {item.room.toUpperCase()}
        </CardTitle>
        <CardContent className="flex flex-row justify-between">
          <span>Num. {item.number}</span>
          <p>{item.color}</p>
        </CardContent>
      </CardHeader>
      <CardContent className="border-white/50 border-2">
        <p>Content: {item.content}</p>
      </CardContent>
      {item.fragil !== "no fragil" || item.hand !== "no hand on" ? (
        <CardContent className="flex flex-row justify-start gap-4 mt-2">
          {item.fragil !== "no fragil" && item.fragil ? (
            <Badge className="bg-red-500">
            <span>
              <p>{item.fragil?.toUpperCase()}</p>
            </span>
            </Badge>
          ) : null}
          {item.hand !== "no hand on" && item.hand ? (
            <Badge className="bg-orange-500">
              <span>
                <p>{item.hand}</p>
              </span>
            </Badge>
          ) : null}
        </CardContent>
      ) : null}

      <CardDescription>
        <span className="text-slate-500">
          {new Date(item.creatAt).toLocaleDateString()}
        </span>
      </CardDescription>
      <CardFooter className="flex justify-between mt-2">
        <ItemDeleteButton itemId={item.id} />
        <Link
          href={`/item/${item.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}
