import { Check, X } from "lucide-react";

export type ComparisonRow = {
  label: string;
  left: string | boolean;
  right: string | boolean;
};

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4.5 w-4.5 text-orange" />
    ) : (
      <X className="mx-auto h-4.5 w-4.5 text-slate opacity-40" />
    );
  }
  return <span>{value}</span>;
}

export function ComparisonTable({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="bg-mist text-left">
            <th className="px-5 py-4 font-semibold text-navy">Factor</th>
            <th className="px-5 py-4 text-center font-semibold text-navy">{leftLabel}</th>
            <th className="px-5 py-4 text-center font-semibold text-orange-dark">{rightLabel}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-5 py-4 font-medium text-navy">{row.label}</td>
              <td className="px-5 py-4 text-center text-slate">
                <Cell value={row.left} />
              </td>
              <td className="px-5 py-4 text-center text-slate">
                <Cell value={row.right} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
