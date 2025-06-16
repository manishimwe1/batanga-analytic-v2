import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ServicesType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ServicesModel = ({
  openModel,
  setIsOpen,
  services,
}: {
  openModel: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  services: ServicesType | undefined;
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
          <DialogTitle className="text-black text-lg text-center ">
            {services?.cardTitle}
          </DialogTitle>
          <DialogDescription className="text-balance text-justify text-base text-black"></DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[250px] w-full rounded-md  px-4">
          {services?.cardDescription}
        </ScrollArea>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          <Link href={"/services"}>{services?.buttonText}</Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesModel;
