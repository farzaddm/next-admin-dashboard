"use client"

import {Calendar} from "@/components/ui/calendar";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Calendar1Icon} from "lucide-react";
import {format} from "date-fns";


const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <div className="mx-1 mb-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon className="mr-1"/>
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      </div>

      <ScrollArea className="max-h-[400px] mt-2 overflow-y-auto">
        <div className="flex flex-col gap-3 m-1">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="1"/>
              <label htmlFor="1" className="text-sm font-medium text-muted-foreground">
                lorem ipsum dolor sit amet, consetetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="1"/>
              <label htmlFor="1" className="text-sm font-medium text-muted-foreground">
                lorem ipsum dolor sit amet, consetetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="1"/>
              <label htmlFor="1" className="text-sm font-medium text-muted-foreground">
                lorem ipsum dolor sit amet, consetetur
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="1"/>
              <label htmlFor="1" className="text-sm font-medium text-muted-foreground">
                lorem ipsum dolor sit amet, consetetur
              </label>
            </div>
          </Card>
        </div>

      </ScrollArea>
    </div>
  );
};

export default TodoList;