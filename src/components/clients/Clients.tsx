import { useState } from "react";
import ClientsTable from "./Table";
import { Button } from "../elements/Button";
import SearchableSelect from "../elements/Select";
import Modal from "../modal/Modal";

import AddClient from "./AddClient";
import { deactivatedClients, inTreatmentclients } from "../../utils/constants";
import { Option } from "../../utils/types/clients";

const Clients = ({ selectedTab }: { selectedTab: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<Option | null>(null);
  const [clinicianName, setClinicianName] = useState<Option | null>(null);

  const handleSelectChange = (selectedOption: Option | null) => {
    setName(selectedOption);
  };
  const handleClinicianSelectChange = (selectedOption: Option | null) => {
    setClinicianName(selectedOption);
  };

  const clientNameOptions = Array.from(
    new Set(inTreatmentclients.map((c) => c.name))
  ).map((name) => ({ label: name, value: name }));

  const clinicianOptions = Array.from(
    new Set(deactivatedClients.map((c) => c.clinicianName))
  ).map((clinicianName) => ({ label: clinicianName, value: clinicianName }));

  return (
    <div>
      <div className="mb-4 flex flex-col md:flex-row space-x-0 space-y-4 md:space-x-4 md:space-y-0 items-start md:items-end">
        <div className="flex flex-col sm:flex-row w-full md:flex-1 space-x-0 sm:space-x-2 space-y-4 sm:space-y-0">
          <div className="flex flex-col space-y-2 w-full">
            <h2 className="text-sm">Client name</h2>
            <SearchableSelect
              options={clientNameOptions}
              onChange={handleSelectChange}
              value={name}
              placeholder="Select client"
              customStyles={{
                control: (provided: any) => ({
                  ...provided,
                  height: "44px",
                  borderRadius: 8,
                  border: "0.5px solid #D9D9D9",
                }),
              }}
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <h2 className="text-sm">Clinician name</h2>
            <SearchableSelect
              options={clinicianOptions}
              onChange={handleClinicianSelectChange}
              value={clinicianName}
              placeholder="Select clinician"
              customStyles={{
                control: (provided: any) => ({
                  ...provided,
                  height: "44px",
                  borderRadius: 8,
                  border: "0.5px solid #D9D9D9",
                }),
              }}
            />
          </div>
        </div>
        <div className="flex lg:flex-1 justify-between md:items-center space-x-0 md:space-x-2">
          <div className="flex-1 border-t border-gray-300 hidden lg:block"></div>
          <Button variant="outline" size={"lg"} onClick={() => setIsOpen(true)}>
            + Add new client
          </Button>
        </div>
      </div>

      <ClientsTable
        clients={
          selectedTab === "deactivated"
            ? deactivatedClients
            : inTreatmentclients
        }
      />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add new client"
        subtitle="This client information is essential for generating detailed clients documents"
      >
        <AddClient />
      </Modal>
    </div>
  );
};

export default Clients;
