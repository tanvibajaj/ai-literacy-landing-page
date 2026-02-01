# Visa Product Design System Stack Rules

## MANDATORY RULES, MUST FOLLOW EVERY TIME
1. Use the Visa Nova design system for all components and styles refrain from custom html and css at all costs
2. MAKE ABSOLUTELY SURE YOU RESEARCH COMPONENTS (i.e. the props, and api) before use: `@visa/nova-react/<component>`
3. Search `https://design.visa.com/developing/react/` as much as possible when using each component, before you use a given component research it at this url `https://design.visa.com/components/<component>/?code_library=react&version=3.0.0`
4. When you are done working make sure to call the architect to ensure compliance

## Your workflow (iterative)
1. Determine which visa components will be used
2. Research them on the visa website using the following url `https://design.visa.com/components/<component>/?code_library=react&version=3.0.0`
3. Research the component in the files `@visa/nova-react/<component>`
4. Build the design
5. Call the architect to review and make sure the code is compliant with visa and is clean
6. Take a screenshot to verify that the design. Make sure its layed out sensibly, nothing is overlapping, and its responsive
7. Iterate

## CRITICAL: Layout & Spacing Rules

### DO NOT USE Tailwind for spacing/layout
VPDS has CSS resets that override Tailwind spacing utilities. These classes will NOT work:
- `flex`, `flex-col`, `items-center`, `justify-between`
- `gap-*`, `space-y-*`, `space-x-*`
- `p-*`, `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*`
- `m-*`, `mx-*`, `my-*`, `mt-*`, `mb-*`, `ml-*`, `mr-*`

### USE the VPDS Utility component instead
```tsx
import { Utility } from "@visa/nova-react";

// Layout
<Utility vFlex vFlexCol vFlexWrap vFlexGrow>
<Utility vAlignItems="center" vJustifyContent="between">

// Spacing (values are pixels: 0-48)
<Utility vGap={16} vPadding={24} vMarginBottom={32}>
<Utility vPaddingHorizontal={24} vPaddingVertical={16}>
```

### Spacing Conversion Reference
| Tailwind | VPDS Utility |
|----------|--------------|
| `flex` | `vFlex` |
| `flex-col` | `vFlexCol` |
| `items-center` | `vAlignItems="center"` |
| `justify-between` | `vJustifyContent="between"` |
| `gap-4` (16px) | `vGap={16}` |
| `p-6` (24px) | `vPadding={24}` |
| `py-8` (32px) | `vPaddingVertical={32}` |
| `mb-4` (16px) | `vMarginBottom={16}` |

### Inline styles: ONLY for non-spacing properties
```tsx
// ✅ Correct - non-spacing in style prop
style={{ backgroundColor: "#fff", borderRadius: "8px", maxWidth: "672px" }}

// ✅ Correct - centering (no VPDS equivalent for "auto")
style={{ margin: "0 auto" }}

// ❌ Wrong - spacing in style prop
style={{ padding: "24px", gap: "16px" }}
```

### Component patterns
```tsx
// Surface with padding - wrap in Utility
<Surface>
  <Utility vPadding={32}>
    {/* content */}
  </Utility>
</Surface>

// Grid layout - use vGap, keep grid definition in style
<Utility vGap={24} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
```