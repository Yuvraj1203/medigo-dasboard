"use client";

import { CustomRadioGroup, FormField } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { categorySchema, CategorySchemaType } from "./category.schema";

//data for the radio group whether the category is active or not
const isActiveData = [
  { label: "Active", value: true },
  { label: "Inactive", value: false },
];

const CategoryFrom = () => {
  //state for the radio group whether the category is active or not
  const [isActiveCategory, setIsActiveCategory] = useState(isActiveData[0]);

  //react hook form for handling the form state and validation
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    defaultValues: {
      name: "",
      description: "",
      is_active: true,
    },
    resolver: zodResolver(categorySchema),
  });

  //on submitting the form
  const onSubmit = (data: CategorySchemaType) => {
    console.log(data);
  };

  return (
    <form id="category-rhf" onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="gap-4">
        <FormField
          control={control}
          name="name"
          formName="category-rhf-name"
          label="Category Name"
          placeholder="Write Category Name..."
        />

        <FormField
          control={control}
          name="description"
          formName="category-rhf-description"
          label="Category description"
          placeholder="Write Category description..."
        />

        <CustomRadioGroup
          value={isActiveCategory}
          data={isActiveData}
          label="label"
          id="value"
          onChange={(value) => setIsActiveCategory(value)}
          title={"Is the category active?"}
        />
      </FieldGroup>

      <Button type="submit" className="flex mt-4 justify-self-end">
        Submit
      </Button>
    </form>
  );
};

export default CategoryFrom;
