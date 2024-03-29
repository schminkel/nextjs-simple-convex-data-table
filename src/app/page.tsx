import React from "react";

import { DataTable } from "@/components/DataTable";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <DataTable />
    </main>
  );
}
