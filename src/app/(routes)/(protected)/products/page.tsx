import { Download } from "lucide-react";

import { Screen } from "@/components/template";
import { Button } from "@/components/ui/button";
import AddProduct from "./(components)/addProduct";

const ProductsPage = () => {
  return (
    <Screen
      title="Products"
      subtitle="Manage all pharmacy products, stock, and availability."
      actions={[
        {
          id: "export",
          element: (
            <Button variant="outline" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          ),
        },
        {
          id: "add",
          element: <AddProduct />,
        },
      ]}
    >
      <div className="rounded-2xl border p-6">Your page content here...</div>
    </Screen>
  );
};

export default ProductsPage;
