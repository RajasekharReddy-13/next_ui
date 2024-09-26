'use client';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Home() {
  const language = [
    { key: "english", label: "English" },
    { key: "tamil", label: "Tamil" },
    { key: "french", label: "French" },
    { key: "spanish", label: "Spanish" },
  ];

  const fileInput = React.useRef<HTMLInputElement>(null);
  const fileInput2 = React.useRef<HTMLInputElement>(null);

  return (
    <section>
      <h1 className="p-2">Create Job</h1>
      <div className="bg-content1 p-4 rounded-large shadow-small">
        <div className="w-full flex-wrap md:flex-nowrap px-2">
          <Input label="Name" placeholder="Type Your Name" type="text" />
        </div>
        <br />
        <div className="flex flex-wrap md:flex-nowrap">
          <Select className="max-w px-2" label="Select Language">
            {language.map((lang) => (
              <SelectItem key={lang.key} value={lang.key}>
                {lang.label}
              </SelectItem>
            ))}
          </Select>
          <Select className="max-w pe-2" label="Trigger Language">
            {language.map((lang) => (
              <SelectItem key={lang.key} value={lang.key}>
                {lang.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <br />
        <div>
          <h6 className="py-2 px-5" style={{ fontSize: "10px" }}>
            Word (Docx), Powerpoint (PPTX), XML files only
          </h6>
          <form className="flex flex-col px-2">
            <input
              ref={fileInput}
              accept=".doc,.docx,.ppt,.pptx,.xml"
              className="rounded-large shadow-small bg-content1 bg-default-100 text-small bg-default"
              name="file"
              type="file"
            />
          </form>
        </div>
        <br />
        <div className="px-2">
          <h6 className="py-2 px-5" style={{ fontSize: "10px" }}>
            CSV files only
          </h6>
          <Button
            className="rounded-large shadow-small bg-content1 bg-default-100 text-small bg-default"
            onClick={() => fileInput2.current?.click()}
          >
            Add Terminology
          </Button>
          <input
            ref={fileInput2}
            accept=".csv"
            style={{ display: "none" }}
            type="file"
          />
        </div>
      </div>
      <br />
      <div>
        <h1 className="p-2">Table Title</h1>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
