import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/tabs/Tabs";
import Clients from "../components/clients/Clients";
import { useState } from "react";
const ClientsPage = () => {
  const [selectedTab, setSelectedTab] = useState("treatment");
  const onChangeHandler = (value: string) => {
    setSelectedTab(value.toLocaleLowerCase());
  };
  return (
    <div className="px-10 md:px-12 lg:px-24">
      <h1 className="text-xl font-bold mb-4">Clients</h1>
      <Tabs
        defaultValue={selectedTab}
        className="w-full"
        onValueChange={onChangeHandler}
      >
        <TabsList className="w-full mb-4">
          <TabsTrigger className="w-full" value="treatment">
            In treatment (21)
          </TabsTrigger>
          <TabsTrigger className="w-full" value="Deactivated">
            Deactivated (10)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="treatment">
          <Clients selectedTab={selectedTab} />
        </TabsContent>
        <TabsContent value="Deactivated">
          <Clients selectedTab={selectedTab} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientsPage;
