'use client';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ComboboxProps<T> {
  items: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  placeholder?: string;
}

export const Combobox = <T,>({
  items,
  labelKey,
  valueKey,
  placeholder = 'Select item...',
}: ComboboxProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | number | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between dark:bg-[#181818] dark:text-zinc-400"
        >
          <h6 className="dark:text-white text-xs md:text-sm lg:text-base">
            {value
              ? String(
                  items.find((item) => item[valueKey] === value)?.[labelKey]
                )
              : placeholder}
          </h6>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`${placeholder.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {items?.map((item) => (
                <CommandItem
                  key={item[valueKey] as string | number}
                  value={String(item[valueKey])}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? null : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item[valueKey] ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {String(item[labelKey])}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
