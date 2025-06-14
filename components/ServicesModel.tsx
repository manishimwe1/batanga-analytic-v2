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
      <DialogContent className="bg-gradient-to-b from-slate-800 via-slate-900 to-black border-stone-900">
        <DialogHeader>
          <DialogTitle className="text-white text-lg text-center mb-4">{services?.cardTitle}</DialogTitle>
          <DialogDescription className="text-pretty text-base text-white">
            {services?.cardDescription}
          </DialogDescription>
        </DialogHeader>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
            <Link href={'/services'}>
              {services?.buttonText}
            </Link>
            </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesModel;
