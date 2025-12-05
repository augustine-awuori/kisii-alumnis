import { useState } from "react";
import { Check, ChevronsUpDown, School } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { FieldError } from "react-hook-form";

type Item = { _id: string; label: string };

interface Props {
  error?: FieldError;
  items: Item[];
  title: string;
  onValueSelect: (valueId: string) => void;
}

export default function FormSelect({
  error,
  onValueSelect,
  items,
  title,
}: Props) {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const [open, setOpen] = useState(false);

  const handleValueSelect = (item: Item) => {
    onValueSelect(item._id);
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <div>
      <div className="space-y-2">
        <Label className="flex items-center gap-2 font-medium">
          <School className="w-4 h-4 text-primary" />
          {title}
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-12 border-2 font-normal"
            >
              <span className="truncate">
                {selectedItem?.label || `Select your ${title.toLowerCase()}`}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-full p-0 border border-border shadow-elevated"
            align="start"
            sideOffset={4}
          >
            <Command className="rounded-lg bg-green-500">
              <CommandInput placeholder="Search school..." />
              <CommandList>
                <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
                <CommandGroup>
                  {items.map(({ _id, label }) => (
                    <CommandItem
                      key={_id}
                      value={_id}
                      onSelect={() => handleValueSelect({ _id, label })}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedItem?._id === _id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {error && <p className="text-sm text-destructive">{error.message}</p>}
      </div>
    </div>
  );
}
