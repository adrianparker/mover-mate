import ItemDeleteButton from "./item-delete-button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Item } from "@prisma/client";

export function ItemCard({ item }: { item: Item }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          {item.room}
          <span>
          {item.number}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.content}</p>
      </CardContent>
      <CardContent>
        <p>{item.color}</p>
      </CardContent>
      <CardContent  className="flex flex-row justify-between">
        <span className="text-red-500">
          <p>{item.fragil}</p>
        </span>
        <span className="text-orange-500">
          <p>{item.hand}</p>
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <span className="text-slate-500">
          {new Date(item.creatAt).toLocaleDateString()}
        </span>
        <ItemDeleteButton itemId={item.id}/>
      </CardFooter>
    </Card>
  );
}
