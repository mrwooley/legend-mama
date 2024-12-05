import * as React from "react"
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils/utils";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FormControl} from "@/components/ui/form";

interface PromptFieldProps extends React.ComponentProps<'div'> {
  className?: string;
}

class PromptField extends React.Component<PromptFieldProps> {
  render() {
    const { className, ...props } = this.props;

    return (
      <div
        className={cn(
          "bg-accent-2 rounded-l-md min-w-[115px] place-content-center pl-4 text-md text-text-1 text-nowrap",
          className
        )}
        {...props}
      />
    );
  }
}

interface InputFieldProps extends React.ComponentPropsWithoutRef<typeof Input> {
  className?: string;
}

class InputField extends React.Component<InputFieldProps> {
  render() {
    const { className, ...props } = this.props;
    return (
      <Input
        variant="light"
        className={cn("rounded-none rounded-r-md font-medium", className)}
        {...props}
      />
    );
  }
}

interface SelectFieldProps extends React.ComponentPropsWithoutRef<typeof Select> {
  items: Array<string>;
  placeholder?: string;
}

class SelectField extends React.Component<SelectFieldProps> {
  static defaultProps: Partial<SelectFieldProps> = {placeholder: "Placeholder"}

  render() {
    let {items, placeholder, ...props} = this.props;
    const selectItems = []
    let val;
    for (let i = 0; i < items.length; i++) {
      selectItems.push(<SelectItem value={items[i]} key={i}>{items[i]}</SelectItem>);
    }

    return (
      <Select
        {...props}
      >
        <SelectTrigger variant="light" className="h-full rounded-none rounded-r-md">
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent variant="light">
          {selectItems}
        </SelectContent>
      </Select>
    );
  }
}

interface PromptsProps extends React.ComponentProps<'div'> {
  className?: string;
}

class Prompts extends React.Component<PromptsProps> {
  render() {
    let {className, ...props} = this.props;
    return (
      <div
        className={cn(
          "flex flex-row w-full h-10 bg-transparent",
          className
        )}
        {...props}
      />
    );
  }
}

export {PromptField, InputField, SelectField, Prompts}
