import { useState } from "react";
import { Check, ChevronsUpDown, School } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

type Item = { _id: string; label: string };

interface Props {
  items: Item[];
  title: string;
  name: string;
}

export default function FormSelect({ name, items, title }: Props) {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const [open, setOpen] = useState(false);
  const {
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleValueSelect = (item: Item) => {
    setValue(name, item._id);
    setSelectedItem(item);
    setOpen(false);
  };

  const handleFilter = (value: string, search: string) => {
    if (!search) return 1;

    const item = items.find((i) => i._id === value);
    if (!item) return 0;

    const label = item.label.toLowerCase();
    const query = search.toLowerCase();

    // 1. Exact substring → highest priority
    if (label.includes(query)) return 1;

    // 2. Match acronyms / initials (e.g. "sist" → "School of Information Science & Technology")
    const words = label.split(/\s+/);
    const initials = words.map((w) => w[0]).join("");
    const shortForms = words.map((w) => w.slice(0, 3)).join(""); // sist, agr, etc.

    if (initials.includes(query) || shortForms.includes(query)) return 1;

    // 3. Match if query letters appear in order (fuzzy)
    let i = 0;
    for (const char of query) {
      i = label.indexOf(char, i);
      if (i === -1) return 0;
      i++;
    }
    return 0.9; // slightly lower than exact match
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
            <Command className="rounded-lg bg-green-500" filter={handleFilter}>
              <CommandInput placeholder={`Search ${title.toLowerCase()}...`} />
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
        {errors[name]?.message && (
          <p className="text-sm text-destructive">
            {errors[name]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
