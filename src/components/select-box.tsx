import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectBox = ({
  value,
  setValue,
  data,
  placeholder,
}: {
  value: string | undefined;
  setValue: (val: string) => void;
  data: object;
  placeholder?: string;
}) => {
  return (
    <Select value={value} onValueChange={(v) => setValue(v === "all" ? "" : v)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder || ""} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {Object.values(data).map((item) => {
          return (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
