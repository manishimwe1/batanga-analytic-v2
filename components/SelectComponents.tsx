import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const SelectComponents = ({ field, title }: any) => {
  return (
    <div className=" w-full">
      <Select {...field}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent className="">
          {title === "solution" && (
            <>
              <SelectItem value="cybersecurity-services" className="w-full">
              Cybersecurity Services
              </SelectItem>
              <SelectItem value="data-Analytics">Data Analytics</SelectItem>
              <SelectItem value="ai-solutions">AI Solutions </SelectItem>
              <SelectItem value="custom-digital-solutions">Custom Digital Solutions</SelectItem>
              <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
              
            </>
          )}
          {title === 'industry' && (
            <>
            <SelectItem value="Telecommunications" className="w-full">
            Telecommunications
            </SelectItem>
            <SelectItem value=" Banking-Finance"> Banking & Finance </SelectItem>
            <SelectItem value="Insurance">Insurance</SelectItem>
            <SelectItem value="Government-public-sector">Government & Public Sector</SelectItem>
            <SelectItem value="Health-life-sciences"> Health & Life Sciences</SelectItem>
            <SelectItem value="Retail-E-commerce">  Retail & E-commerce</SelectItem>
            <SelectItem value="Energy-utilities-infrastructure">Energy, Utilities & Infrastructure</SelectItem>
            
          </>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponents;
