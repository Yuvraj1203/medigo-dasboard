import { CustomButton, CustomModal } from "@/components/custom";
import { useTranslations } from "next-intl";
import AddProductModal from "./addProductModal";

const AddProduct = () => {
  const t = useTranslations();

  return (
    <CustomModal
      title={t("NewProduct")}
      trigger={
        <CustomButton className="w-full sm:w-auto">
          {t("AddProduct")}
        </CustomButton>
      }
      actionButton={
        <CustomButton className="w-full sm:w-auto">{t("Save")}</CustomButton>
      }
      children={<AddProductModal />}
    />
  );
};

export default AddProduct;
