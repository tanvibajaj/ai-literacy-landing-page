import {
  Badge,
  Divider,
  Surface,
  Typography,
  Utility,
  VisaLogo,
} from "@visa/nova-react";
import CheckmarkTiny from "@visa/nova-icons-react/generic/checkmark-tiny";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ApplyForm } from "@/components/apply-form";
import { FaqList } from "@/components/faq-list";
import { eventConfig } from "@/config/event";

export default function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--palette-default-surface-1)",
        color: "var(--palette-default-text)",
      }}
      data-testid="page-landing"
    >
      <SiteHeader />

      <main>
        <Hero />

        {/* Why */}
        <Section
          id="why"
          eyebrow="Why this event"
          title={eventConfig.why.title}
          intro={eventConfig.why.intro}
        >
          <Utility
            vGap={24}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {eventConfig.why.points.map((p) => (
              <Surface
                key={p.title}
                tag="article"
                data-testid={`card-why-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  border: "1px solid var(--palette-default-border)",
                  borderRadius: "12px",
                }}
              >
                <Utility vPadding={24} vFlex vFlexCol vGap={8}>
                  <Typography variant="subtitle-1" tag="h3">
                    {p.title}
                  </Typography>
                  <Typography variant="body-2" colorScheme="subtle">
                    {p.body}
                  </Typography>
                </Utility>
              </Surface>
            ))}
          </Utility>
        </Section>

        {/* Agenda */}
        <Section
          id="agenda"
          alternate
          eyebrow="Agenda"
          title="Two hours, two parts"
          intro="A quick panel to set the stage, then a long, hands-on workshop where the actual building happens."
        >
          <Utility vFlex vFlexCol vGap={16} style={{ maxWidth: "880px" }}>
            {eventConfig.agenda.map((item) => (
              <Surface
                key={item.title}
                tag="article"
                data-testid={`agenda-${item.title.toLowerCase().split(" ")[0]}`}
                style={{
                  border: "1px solid var(--palette-default-border)",
                  borderRadius: "12px",
                  backgroundColor: "var(--palette-default-surface-1)",
                }}
              >
                <Utility vPadding={24} vFlex vFlexCol vGap={12}>
                  <Utility vFlex vFlexWrap vAlignItems="center" vGap={12}>
                    <Badge badgeType="stable">{item.time}</Badge>
                    <Typography variant="headline-3" tag="h3">
                      {item.title}
                    </Typography>
                  </Utility>
                  <Typography variant="body-2" colorScheme="subtle">
                    {item.body}
                  </Typography>
                  {item.bullets && (
                    <Utility
                      vFlex
                      vFlexCol
                      vGap={8}
                      vMarginTop={4}
                      tag="ul"
                      style={{ paddingLeft: 0, listStyle: "none" }}
                    >
                      {item.bullets.map((b) => (
                        <Utility
                          key={b}
                          tag="li"
                          vFlex
                          vAlignItems="center"
                          vGap={10}
                        >
                          <CheckmarkTiny
                            aria-hidden
                            style={{ color: "var(--palette-default-active)" }}
                          />
                          <Typography variant="body-2" tag="span">
                            {b}
                          </Typography>
                        </Utility>
                      ))}
                    </Utility>
                  )}
                </Utility>
              </Surface>
            ))}
          </Utility>
        </Section>

        {/* What you'll learn */}
        <Section
          id="learn"
          eyebrow="What you'll learn"
          title="Tools and workflows you can use the next day"
          intro="Everything we cover is meant to translate directly into something you can re-open at home tomorrow."
        >
          <Utility
            vGap={20}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {eventConfig.learn.map((item, i) => (
              <Surface
                key={item.title}
                tag="article"
                data-testid={`card-learn-${i}`}
                style={{
                  border: "1px solid var(--palette-default-border)",
                  borderRadius: "12px",
                }}
              >
                <Utility vPadding={24} vFlex vFlexCol vGap={12}>
                  <div
                    aria-hidden
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "var(--palette-default-active)",
                      color: "var(--palette-default-text-on-active)",
                      fontFamily: "var(--typography-subtitle-3-font-family)",
                      fontWeight: 600,
                    }}
                  >
                    {i + 1}
                  </div>
                  <Typography variant="subtitle-1" tag="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body-2" colorScheme="subtle">
                    {item.body}
                  </Typography>
                </Utility>
              </Surface>
            ))}
          </Utility>
        </Section>

        {/* Who should apply */}
        <Section
          id="audience"
          alternate
          eyebrow="Who should apply"
          title={eventConfig.audience.title}
          intro={eventConfig.audience.intro}
        >
          <Utility
            vGap={12}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              maxWidth: "880px",
            }}
          >
            {eventConfig.audience.list.map((item) => (
              <Utility
                key={item}
                vFlex
                vAlignItems="center"
                vGap={12}
                vPadding={16}
                style={{
                  backgroundColor: "var(--palette-default-surface-1)",
                  border: "1px solid var(--palette-default-border)",
                  borderRadius: "10px",
                }}
                data-testid={`audience-${item.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CheckmarkTiny
                  aria-hidden
                  style={{ color: "var(--palette-default-active)" }}
                />
                <Typography variant="body-2-medium" tag="span">
                  {item}
                </Typography>
              </Utility>
            ))}
          </Utility>
        </Section>

        {/* Logistics */}
        <Section
          id="logistics"
          eyebrow="Logistics"
          title="The practical details"
        >
          <Utility
            vGap={0}
            vFlex
            vFlexCol
            style={{
              maxWidth: "880px",
              border: "1px solid var(--palette-default-border)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {eventConfig.logistics.map((row, i) => (
              <Utility
                key={row.label}
                vGap={16}
                vPadding={20}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(120px, 180px) 1fr",
                  borderTop:
                    i === 0 ? "none" : "1px solid var(--palette-default-border)",
                  backgroundColor: "var(--palette-default-surface-1)",
                }}
                data-testid={`logistics-${row.label.toLowerCase()}`}
              >
                <Typography variant="body-2-bold" tag="dt">
                  {row.label}
                </Typography>
                <Typography variant="body-2" colorScheme="subtle" tag="dd">
                  {row.value}
                </Typography>
              </Utility>
            ))}
          </Utility>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          alternate
          eyebrow="FAQ"
          title="Questions, answered"
        >
          <FaqList />
        </Section>

        {/* Apply */}
        <Section
          id="apply"
          eyebrow="Apply"
          title="Apply to attend"
          intro="A short form — under a minute. We'll review and confirm by email with the exact address."
        >
          <Surface
            style={{
              maxWidth: "720px",
              border: "1px solid var(--palette-default-border)",
              borderRadius: "12px",
              boxShadow: "var(--elevation-small)",
            }}
          >
            <Utility vPadding={32}>
              <ApplyForm />
            </Utility>
          </Surface>
        </Section>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--palette-default-border)",
          backgroundColor: "var(--palette-default-surface-2)",
        }}
        data-testid="site-footer"
      >
        <Utility
          vPaddingHorizontal={24}
          vPaddingVertical={32}
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Utility vFlex vFlexCol vGap={20}>
            <Utility vFlex vAlignItems="center" vGap={12}>
              <VisaLogo aria-label="Visa" />
              <Typography variant="body-3" colorScheme="subtle">
                {eventConfig.brand.sponsorLine}
              </Typography>
            </Utility>
            <Divider dividerType="decorative" />
            <Utility vFlex vFlexWrap vJustifyContent="between" vGap={16}>
              <Typography variant="body-3" colorScheme="subtle">
                We expect respectful, inclusive conduct from all attendees.
                Information you share in your application is used only to process
                your attendance and is not shared outside the event team.
              </Typography>
            </Utility>
            <Typography variant="body-3" colorScheme="subtle" data-testid="text-copyright">
              © {new Date().getFullYear()} Visa. All rights reserved.
            </Typography>
          </Utility>
        </Utility>
      </footer>
    </div>
  );
}
