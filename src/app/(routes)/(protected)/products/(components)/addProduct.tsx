import { CustomButton, CustomModal } from "@/components/custom";
import { useTranslations } from "next-intl";

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
      children={<form>hi</form>}
    />
  );
};

export default AddProduct;
