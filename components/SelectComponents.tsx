import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { Dispatch } from "react";
import { ControllerRenderProps } from "react-hook-form";

const SelectComponents = ({
  
  value,
  onChange,
  title,
}: {

  value?: string;
  onChange: (value: string) => void;
  title?: string;
}) => {
  const handleValueChange = (newValue: string) => {
    onChange(newValue);
  };
  return (
    <div className=" w-full">
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Please select" />
        </SelectTrigger>
        <SelectContent className="">
          {title === "solution" && (
            <>
              <SelectItem value="training" className="w-full cursor-pointer">
                Training
              </SelectItem>
              <SelectItem value="cybersecurity-services" className="w-full">
                Cybersecurity Services
              </SelectItem>
              <SelectItem value="data-Analytics">Data Analytics</SelectItem>
              <SelectItem value="ai-solutions">AI Solutions </SelectItem>
              <SelectItem value="custom-digital-solutions">
                Custom Digital Solutions
              </SelectItem>
              <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
            </>
          )}
          {title === "training" && (
            <>
              <SelectItem value="data-science" className="w-full cursor-pointer">
                Data science
              </SelectItem>
              <SelectItem value="cybersecurity" className="w-full">
                Cybersecurity 
              </SelectItem>
              
            </>
          )}
          {title === "industry" && (
            <>
              <SelectItem value="Telecommunications" className="w-full">
                Telecommunications
              </SelectItem>
              <SelectItem value=" Banking-Finance">
                {" "}
                Banking & Finance{" "}
              </SelectItem>
              <SelectItem value="Insurance">Insurance</SelectItem>
              <SelectItem value="Government-public-sector">
                Government & Public Sector
              </SelectItem>
              <SelectItem value="Health-life-sciences">
                {" "}
                Health & Life Sciences
              </SelectItem>
              <SelectItem value="Retail-E-commerce">
                {" "}
                Retail & E-commerce
              </SelectItem>
              <SelectItem value="Energy-utilities-infrastructure">
                Energy, Utilities & Infrastructure
              </SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponents;
