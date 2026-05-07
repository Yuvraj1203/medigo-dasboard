import * as React from "react";

import { Text, TextVariant } from "@/components/common";
import { cn } from "@/lib/utils";

export type ScreenAction = {
  id?: string;
  element: React.ReactNode;
};

type ScreenProps = {
  title: string;
  subtitle?: string;
  actions?: ScreenAction[];
  children: React.ReactNode;
  className?: string;
};

export function Screen({
  title,
  subtitle,
  actions = [],
  children,
  className,
}: ScreenProps) {
  return (
    <div className={cn("flex flex-col gap-6 p-4", className)}>
      <ScreenHeader title={title} subtitle={subtitle} actions={actions} />

      {children}
    </div>
  );
}

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: ScreenAction[];
};

export function ScreenHeader({
  title,
  subtitle,
  actions = [],
}: ScreenHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      {/* Left */}
      <div className="min-w-0 space-y-1">
        <Text as="h1" variant={TextVariant.h1} className="truncate font-bold">
          {title}
        </Text>

        {subtitle ? <Text className="max-w-2xl">{subtitle}</Text> : null}
      </div>
      {/* Right */}
      {actions.length > 0 ? (
        <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">
          {actions.map((action, index) => (
            <div key={action.id || index} className="flex-1 sm:flex-none">
              {action.element}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
