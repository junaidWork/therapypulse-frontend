import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/Table";
import { Badge } from "../badge/Badge";

type Client = {
  id: number;
  name: string;
  clinicianName: string;
  type: string;
  plan: string;
  lastSession: string;
  unSavedNotes: number;
};
const ClientsTable = ({ clients }: { clients: Client[] }) => {
  const getVariant = (type: string) => {
    switch (type) {
      case "individual":
        return "primary";
      case "couple":
        return "secondary";
      case "child":
        return "success";
      case "group":
        return "info";
      case "family":
        return "warning";
      default:
        return "primary";
    }
  };

  return (
    <Table className="bg-white rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Client name</TableHead>
          <TableHead className="font-bold">Clinician name</TableHead>
          <TableHead className="font-bold">Client type</TableHead>
          <TableHead className="font-bold">Treatment plan</TableHead>
          <TableHead className="font-bold">Last session</TableHead>
          <TableHead className="font-bold">Unsaved notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id} className="hover:bg-blue-100">
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.clinicianName}</TableCell>
            <TableCell>
              <Badge variant={getVariant(client.type.toLocaleLowerCase())}>
                {client.type}
              </Badge>
            </TableCell>
            <TableCell>{client.plan}</TableCell>
            <TableCell>{client.lastSession}</TableCell>
            <TableCell>{client.unSavedNotes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientsTable;
