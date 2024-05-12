import { CreateItems } from "@/actions/items-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ItemForm = () => {
  return (
    <form action={CreateItems}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add item</CardTitle>
          <CardDescription>
            Fill out the form below to add a new item.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="grid grid-cols-2 gap-x-1">
              <div>
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  name="number"
                  placeholder="Number of your item"
                />
              </div>
              <div>
                <Label htmlFor="color">Color</Label>
                <Input
                  id="color"
                  name="color"
                  placeholder="color of your item"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Content inside"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="room">Room</Label>
              <Select name="room">
                <SelectTrigger id="room">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="living">Living room</SelectItem>
                  <SelectItem value="master">Master bedroom</SelectItem>
                  <SelectItem value="bathroom">Bathroom</SelectItem>
                  <SelectItem value="dining">Dining room</SelectItem>
                  <SelectItem value="bed">Bedroom 2</SelectItem>
                  <SelectItem value="laundry">Laundry</SelectItem>
                  <SelectItem value="bed3">Bedroom 3</SelectItem>
                  <SelectItem value="bed4">Bedroom 4</SelectItem>
                  <SelectItem value="study">Study</SelectItem>
                  <SelectItem value="store">Store room</SelectItem>
                  <SelectItem value="game">Game room</SelectItem>
                  <SelectItem value="patio">Patio</SelectItem>
                  <SelectItem value="fitness">Fitness room</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fragil">is fragil?</Label>
              <RadioGroup defaultValue="option-fragil" name="fragil">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fragil" id="option-fragil" />
                  <Label htmlFor="option-fragil">Yes, it is fragil</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="no fragil"
                    id="option-no-fragil"
                  />
                  <Label htmlFor="option-no-fragil">No, it is not fragil</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fragil">This item must hand on?</Label>
              <RadioGroup defaultValue="option-hand" name="hand">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hand on" id="option-hand" />
                  <Label htmlFor="option-hand">Yes, hand on</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no hand on" id="option-no-hand" />
                  <Label htmlFor="option-no-hand">No, it is not hand on</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Add</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ItemForm;
