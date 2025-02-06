export const InputField = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="border-brand-gray text-brand-gray font-brand w-full rounded-[8px] border bg-transparent px-4 py-3 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
  />
);
