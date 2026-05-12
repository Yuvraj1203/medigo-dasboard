import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CustomModalProps = {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
};

export const CustomModal = ({ ...props }: CustomModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {props.title && <DialogTitle>{props.title}</DialogTitle>}
          {props.description && (
            <DialogDescription>{props.description}</DialogDescription>
          )}
        </DialogHeader>
        {props.children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          {props.actionButton && props.actionButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
