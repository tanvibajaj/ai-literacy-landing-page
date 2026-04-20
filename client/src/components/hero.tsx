import { Badge, Button, Surface, Typography, Utility } from "@visa/nova-react";
import CheckmarkTiny from "@visa/nova-icons-react/generic/checkmark-tiny";
import CalendarTiny from "@visa/nova-icons-react/generic/calendar-tiny";
import { eventConfig } from "@/config/event";

export function Hero() {
  return (
    <Surface
      surfaceType="alternate"
      tag="section"
      data-testid="section-hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 85% -10%, rgba(252, 192, 21, 0.18), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <Utility
        vPaddingHorizontal={24}
        vPaddingTop={48}
        vPaddingBottom={48}
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        <Utility vFlex vFlexCol vGap={24} style={{ maxWidth: "960px" }}>
          <Utility vFlex vAlignItems="center" vGap={8}>
            <CalendarTiny aria-hidden />
            <Typography variant="overline" tag="span">
              {eventConfig.meta.dateLong} · {eventConfig.meta.time}
            </Typography>
          </Utility>

          <Utility vFlex vFlexCol vGap={8}>
            <Typography variant="display-2" tag="h1" data-testid="text-hero-title">
              {eventConfig.hero.title}
            </Typography>
            <Typography
              variant="display-2"
              tag="p"
              data-testid="text-hero-subtitle"
              style={{
                color: "#fcc015",
                whiteSpace: "nowrap",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
              }}
            >
              {eventConfig.hero.subtitle}
            </Typography>
          </Utility>

          <Typography
            variant="body-1-bold"
            tag="p"
            data-testid="text-hero-deadline"
            style={{ color: "#fcc015" }}
          >
            Apply by {eventConfig.meta.deadlineShort}
          </Typography>

          <Utility vFlex vFlexWrap vGap={8} vMarginTop={4}>
            {eventConfig.badges.map((b) => (
              <Badge
                key={b}
                badgeType="subtle"
                clear
                data-testid={`badge-${b.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                {b}
              </Badge>
            ))}
          </Utility>

          <Utility vFlex vFlexWrap vAlignItems="center" vGap={12} vMarginTop={8}>
            <Button
              tag="a"
              href="#apply"
              buttonSize="large"
              data-testid="button-hero-primary"
            >
              {eventConfig.hero.primaryCta}
            </Button>
            <Button
              tag="a"
              href="#agenda"
              buttonSize="large"
              colorScheme="secondary"
              alternate
              data-testid="button-hero-secondary"
            >
              {eventConfig.hero.secondaryCta}
            </Button>
          </Utility>

          <Utility
            vFlex
            vAlignItems="center"
            vGap={10}
            vPadding={12}
            vMarginTop={4}
            style={{
              backgroundColor: "rgba(252, 192, 21, 0.18)",
              border: "1px solid rgba(252, 192, 21, 0.5)",
              borderRadius: "8px",
              maxWidth: "640px",
            }}
            data-testid="callout-hero-laptop"
          >
            <CheckmarkTiny aria-hidden style={{ flexShrink: 0 }} />
            <Typography variant="body-2-medium" tag="span">
              {eventConfig.hero.laptopCallout}
            </Typography>
          </Utility>
        </Utility>
      </Utility>
    </Surface>
  );
}
