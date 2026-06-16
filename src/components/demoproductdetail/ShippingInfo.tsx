import { Truck, RotateCcw } from "lucide-react";

const shippingItems = [
  {
    icon: Truck,
    text: "Estimate delivery times: ",
    bold: "12-26 days (International), 3-6 days (United States).",
  },
  {
    icon: RotateCcw,
    text: "Return within ",
    bold: "45 days of purchase. Duties & taxes are non-refundable.",
  },
];

export default function ShippingInfo() {
  return (
    <div className="flex flex-col gap-4 pt-4 border-t border-border">
      {shippingItems.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <item.icon
            size={20}
            className="shrink-0 mt-0.5 text-muted-foreground"
          />
          <p className="text-body-sm text-muted-foreground">
            {item.text}
            <strong className="text-foreground">{item.bold}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}
