import { Button, Link, Utility, VisaLogo } from "@visa/nova-react";

export function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--palette-default-surface-1)",
        borderBottom: "1px solid var(--palette-default-border)",
      }}
      data-testid="site-header"
    >
      <Utility
        vFlex
        vAlignItems="center"
        vJustifyContent="between"
        vPaddingHorizontal={24}
        vPaddingVertical={12}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Utility vFlex vAlignItems="center" vGap={12}>
          <VisaLogo aria-label="Visa" />
          <span
            aria-hidden="true"
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "var(--palette-default-border)",
            }}
          />
          <span
            style={{
              font: "var(--typography-subtitle-3)",
              fontFamily: "var(--typography-subtitle-3-font-family)",
              fontSize: "var(--typography-subtitle-3-font-size)",
              fontWeight: "var(--typography-subtitle-3-font-weight)",
              color: "var(--palette-default-text)",
            }}
            data-testid="text-header-event"
          >
            AI Literacy @ SF
          </span>
        </Utility>

        <Utility vFlex vAlignItems="center" vGap={24} vMediaHide="mobile">
          <Link href="#why" data-testid="link-nav-why">Why</Link>
          <Link href="#agenda" data-testid="link-nav-agenda">Agenda</Link>
          <Link href="#learn" data-testid="link-nav-learn">What you'll learn</Link>
          <Link href="#logistics" data-testid="link-nav-logistics">Logistics</Link>
          <Link href="#faq" data-testid="link-nav-faq">FAQ</Link>
        </Utility>

        <Button
          tag="a"
          href="#apply"
          buttonSize="small"
          data-testid="button-header-apply"
        >
          Apply to Attend
        </Button>
      </Utility>
    </header>
  );
}
