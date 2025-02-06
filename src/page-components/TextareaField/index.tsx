export const TextareaField = ({
  placeholder,
  rows,
}: {
  placeholder: string;
  rows: number;
}) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    className="border-brand-gray text-brand-gray font-brand w-full resize-none rounded-[8px] border bg-transparent px-4 py-3 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
  />
);
