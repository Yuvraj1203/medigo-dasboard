import { Button } from "@/components/ui/button";

type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
};
export const CustomButton = ({ ...props }: CustomButtonProps) => {
  return <Button className={props.className}>{props.children}</Button>;
};
