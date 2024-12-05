import React, { useState } from "react";
import { Input } from "../elements/Input";
import SearchableSelect from "../elements/Select";
import { Button } from "../elements/Button";
import { RadioGroup } from "../elements/RadioGroup";
import { diagnosisOptions } from "../../utils/constants";
import Switch from "../switch/Switch";

export function ClientIndividualForm() {
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "1",
    yearOfBirth: "",
    diagnosis: "",
    isHighRisk: false,
    extraNotes: "",
  });
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleSelectChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    setSelectedOption(selectedOption);
    setFormData((prevFormData) => ({
      ...prevFormData,
      diagnosis: selectedOption?.value || "",
    }));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={onChangeHandler}
        required
        type="text"
        placeholder="Enter client's name"
      />

      <div className="space-y-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Pronouns <span className="text-red-500">*</span>
          </label>
          <RadioGroup
            options={[
              { label: "He/Him", value: "1" },
              { label: "She/Her", value: "2" },
              { label: "They/Them", value: "3" },
            ]}
            value={formData.pronouns}
            onChange={(e) => {
              setFormData({ ...formData, pronouns: e });
            }}
          />
        </div>
      </div>
      <Input
        label="Year of birth"
        name="yearOfBirth"
        value={formData.yearOfBirth}
        onChange={onChangeHandler}
        required
        type="text"
        placeholder="YYYY"
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Diagnosis
        </label>
        <SearchableSelect
          options={diagnosisOptions}
          onChange={handleSelectChange}
          value={selectedOption}
          placeholder="Select client"
          customStyles={{
            control: (provided: any) => ({
              ...provided,
              height: "44px",
              borderRadius: 8,
              border: "0.5px solid #D9D9D9",
            }),
          }}
          isSearchable={false}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-gray-700">High risk client</p>
        <Switch
          value={formData.isHighRisk}
          onChange={(e) => {
            setFormData({ ...formData, isHighRisk: e.target.checked });
          }}
          name="isHighRisk"
        />
      </div>
      <Input
        label="Extra notes"
        name="extraNotes"
        value={formData.extraNotes}
        onChange={onChangeHandler}
        required
        type="text"
        placeholder="Extra information about your client"
      />
      <div className="flex justify-end">
        <Button type="submit" variant={"primary"}>
          Add client
        </Button>
      </div>
    </form>
  );
}
