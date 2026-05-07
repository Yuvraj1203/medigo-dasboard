// src/components/ui/Text.tsx
import clsx from "clsx";
import React from "react";

export enum TextVariant {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  body = "body",
  bodySm = "bodySm",
  muted = "muted",
  label = "label",
  error = "error",
  caption = "caption",
  custom = "custom",
}

const variantClasses: Record<TextVariant, string> = {
  [TextVariant.h1]: "text-2xl md:text-3xl font-bold tracking-tight",
  [TextVariant.h2]: "text-2xl font-semibold tracking-tight",
  [TextVariant.h3]: "text-xl font-semibold",
  [TextVariant.body]: "text-sm text-foreground",
  [TextVariant.bodySm]: "text-xs text-foreground",
  [TextVariant.muted]: "text-sm text-muted-foreground",
  [TextVariant.label]: "text-sm font-medium",
  [TextVariant.caption]: "text-xs text-muted-foreground",
  [TextVariant.error]: "text-sm font-medium text-destructive",
  [TextVariant.custom]: "", // No default styles for custom variant
};

type TextProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TextVariant;
  as?: keyof HTMLElementTagNameMap; //choose the html tag
  className?: string;
  children: React.ReactNode;
};

export const Text = ({
  variant = TextVariant.body,
  as: Component = "p",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component className={clsx(className, variantClasses[variant])} {...props}>
      {children}
    </Component>
  );
};
