import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ServicesType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ServicesModel = ({
  openModel,
  setIsOpen,
  services
}: {
  openModel: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  services:ServicesType | undefined
}) => {
  return (
    <Dialog
      open={openModel}
      onOpenChange={() => {
        setIsOpen(!openModel);
      }}
    >
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="bg-slate-50 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-black text-lg text-center mb-4">{services?.cardTitle}</DialogTitle>
          <DialogDescription className="text-balance text-justify text-base text-black">
            {services?.cardDescription}
          </DialogDescription>
        </DialogHeader>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
            <Link href={'/services'}>
              {services?.buttonText}
            </Link>
            </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesModel;
