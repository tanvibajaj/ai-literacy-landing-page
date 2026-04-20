import { useRef } from "react";
import {
  Accordion,
  AccordionHeading,
  AccordionPanel,
  AccordionToggleIcon,
  Typography,
  Utility,
  useAccordion,
} from "@visa/nova-react";
import { eventConfig } from "@/config/event";

export function FaqList() {
  const items = eventConfig.faqs;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const { isIndexExpanded, onKeyNavigation, toggleIndexExpanded, ref } =
    useAccordion({ ref: refs });

  return (
    <Utility vFlex vFlexCol vGap={12} style={{ maxWidth: "880px" }}>
      {items.map((item, i) => {
        const open = isIndexExpanded(i);
        return (
          <Accordion
            key={item.q}
            tag="div"
            data-testid={`faq-item-${i}`}
            style={{
              backgroundColor: "var(--palette-default-surface-1)",
              border: "1px solid var(--palette-default-border)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <AccordionHeading
              ref={(el: HTMLButtonElement | null) => (ref.current[i] = el)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              id={`faq-heading-${i}`}
              onClick={() => toggleIndexExpanded(i)}
              onKeyDown={onKeyNavigation}
              data-testid={`faq-toggle-${i}`}
            >
              <Typography variant="subtitle-1" tag="span">
                {item.q}
              </Typography>
              <AccordionToggleIcon accordionOpen={open} />
            </AccordionHeading>
            <AccordionPanel
              id={`faq-panel-${i}`}
              aria-labelledby={`faq-heading-${i}`}
              hidden={!open}
            >
              <Typography variant="body-2" colorScheme="subtle">
                {item.a}
              </Typography>
            </AccordionPanel>
          </Accordion>
        );
      })}
    </Utility>
  );
}
