import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/shared/Select";
import { TextField } from "components/shared/TextField";
import { HTMLInputTypeAttribute } from "react";

type SelectItemsT = {
    title: string;
    icon: string;
};
type TransferBoxProps = {
    title: string;
    value?: string;
    helperText?: string;
    selectItems: SelectItemsT[];
    actionButton: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
    label?: string;
};
export default function TransferBox({
    onChange,
    helperText,
    label,
    placeholder,
    title,
    selectItems,
    actionButton,
    value,
    inputType,
}: TransferBoxProps) {
    console.log();
    return (
        <div className=" p-sp7 rounded-xl bg-[#0C0E0ECC] bg-opacity-80 border border-[#181B1D]">
            <div className="flex items-center justify-between py-[6px] mb-sp5">
                <div id="transfer-box" className="text-gray-400 body-1">
                    {title}
                </div>

                {selectItems.length > 1 ? (
                    <Select defaultValue={selectItems[0].title ?? "Pactus"}>
                        <SelectGroup>
                            <SelectTrigger className="w-[200px] truncate">
                                <SelectValue placeholder="Select an cryptocurrency" />
                            </SelectTrigger>
                            <SelectContent>
                                {selectItems.map((item, key) => (
                                    <SelectItem
                                        className=" gap-2 "
                                        value={item.title}
                                        key={key}
                                    >
                                        <div className="flex body-2 text-gray-50 gap-2 items-center justify-between w-full">
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                width={36}
                                                height={36}
                                            />
                                            <span className="text-start  whitespace-nowrap">
                                                {item.title}
                                            </span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </SelectGroup>
                    </Select>
                ) : (
                    <div className="flex gap-2 body-2 text-gray-50  items-center justify-end w-full max-w-[250px] truncate">
                        <img
                            src={selectItems[0].icon}
                            alt={selectItems[0].title}
                            width={36}
                            height={36}
                        />
                        <span className="text-start  whitespace-nowrap">
                            {selectItems[0].title}
                        </span>
                    </div>
                )}
            </div>
            <div className="border-t border-gray-900 py-sp5">
                <TextField
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    helperText={helperText}
                    placeholder={placeholder}
                    leftIcon={<span className="min-w-[54px]">PAC</span>}
                    label={label}
                    labelClasses="!text-gray-100"
                    rightIcon={actionButton}
                />
            </div>
        </div>
    );
}
