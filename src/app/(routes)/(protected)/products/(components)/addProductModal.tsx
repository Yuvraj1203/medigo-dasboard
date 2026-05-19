"use client";
import { FormField } from "@/components/custom";
import { FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addProductSchema, AddProductSchemaType } from "./addProduct.schema";

enum MedicineEnum {
  TABLET = "tablet",
  SYRUP = "syrup",
  INJECTION = "injection",
  CAPSULE = "capsule",
  DROPS = "drops",
  OINTMENT = "ointment",
  POWDER = "powder",
  OTHER = "other",
}

const AddProductModal = () => {
  //state for the radio group whether the category is active or not
  // const [isActiveCategory, setIsActiveCategory] = useState(false);

  //react hook form for handling the form state and validation
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProductSchemaType>({
    defaultValues: {
      name: "",
      generic_name: "",
      brand: "",
      category_id: "",
      requires_prescription: true,
      description: "",
      manufacturer: "",
      medicine_type: MedicineEnum.OTHER,
      image_url: [],
      is_active: true,
    },
    resolver: zodResolver(addProductSchema),
  });

  //on submitting the form
  const onSubmit = (data: AddProductSchemaType) => {
    console.log(data);
  };
  return (
    <form id={"addProduct-rhf"} onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="gap-4">
        <FormField
          control={control}
          name="name"
          formName="addProduct-rhf"
          label="Product Name"
          placeholder="Write product Name..."
        />
      </FieldGroup>
    </form>
  );
};

export default AddProductModal;
