import { useState } from "react";
import { RadioGroup } from "../elements/RadioGroup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs/Tabs";
import { ClientCoupleForm } from "./ClientCoupleForm";
import { ClientIndividualForm } from "./ClientIndividualForm";

const AddClient = () => {
  const [selectedTab, setSelectedTab] = useState<"individual" | "couple">(
    "individual"
  );
  return (
    <Tabs value={selectedTab}>
      <TabsList className="mb-6 flex flex-col items-start">
        <h1 className="text-sm font-medium text-secondary">
          Client type <span className="text-red-500">*</span>
        </h1>
        <div className="space-x-4">
          <TabsTrigger value="individual" className="border-none">
            <RadioGroup
              options={[{ label: "Individual", value: "individual" }]}
              value={selectedTab}
              onChange={() =>
                setSelectedTab(
                  selectedTab === "individual" ? "couple" : "individual"
                )
              }
            />
          </TabsTrigger>
          <TabsTrigger value="couple" className="border-none">
            <RadioGroup
              options={[{ label: "Couple", value: "couple" }]}
              value={selectedTab}
              onChange={() =>
                setSelectedTab(
                  selectedTab === "couple" ? "individual" : "couple"
                )
              }
            />
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="individual">
        <ClientIndividualForm />
      </TabsContent>
      <TabsContent value="couple">
        <ClientCoupleForm />
      </TabsContent>
    </Tabs>
  );
};

export default AddClient;
