import type { CSSProperties, ReactNode } from "react";
import { Typography, Utility } from "@visa/nova-react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  alternate?: boolean;
  children: ReactNode;
  style?: CSSProperties;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  alternate = false,
  children,
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      data-testid={id ? `section-${id}` : undefined}
      style={{
        backgroundColor: alternate
          ? "var(--palette-default-surface-2)"
          : "var(--palette-default-surface-1)",
        ...style,
      }}
    >
      <Utility
        vPaddingHorizontal={24}
        vPaddingVertical={48}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Utility vFlex vFlexCol vGap={32}>
          {(eyebrow || title || intro) && (
            <Utility vFlex vFlexCol vGap={12} style={{ maxWidth: "760px" }}>
              {eyebrow && (
                <Typography
                  variant="overline"
                  tag="span"
                  colorScheme="active"
                  data-testid={id ? `eyebrow-${id}` : undefined}
                >
                  {eyebrow}
                </Typography>
              )}
              {title && (
                <Typography
                  variant="headline-1"
                  tag="h2"
                  data-testid={id ? `title-${id}` : undefined}
                >
                  {title}
                </Typography>
              )}
              {intro && (
                <Typography variant="body-1" colorScheme="subtle">
                  {intro}
                </Typography>
              )}
            </Utility>
          )}
          {children}
        </Utility>
      </Utility>
    </section>
  );
}
