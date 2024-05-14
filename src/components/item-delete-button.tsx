import { removeItem } from "@/actions/items-actions";
import { Button } from "./ui/button";

function ItemDeleteButton({ itemId }: { itemId: number }) {
  return (
    <form action={removeItem}>
      <input type="hidden" name="itemId" value={itemId} />
      <Button variant="destructive">Delete</Button>
    </form>
  );
}

export default ItemDeleteButton;
