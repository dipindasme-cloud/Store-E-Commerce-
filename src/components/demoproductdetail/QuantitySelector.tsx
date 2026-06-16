"use client";

import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (val: number) => void;
};

export default function QuantitySelector({
  value,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    if (!isNaN(parsed) && parsed >= min && parsed <= max) {
      onChange(parsed);
    }
  };

  return (
    <div className="inline-flex items-center border border-border rounded-full">
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex h-12 w-12 items-center justify-center text-muted-foreground transition hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInput}
        min={min}
        max={max}
        className="h-12 w-16 bg-transparent text-center text-body-sm font-medium outline-hidden [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="flex h-12 w-12 items-center justify-center text-muted-foreground transition hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
