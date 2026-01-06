# Visa Product Design System Implementation Guidelines

## Design System Mandate
**Critical Constraint**: Use EXCLUSIVELY the Visa Product Design System (VPDS) components, patterns, and design tokens. No custom components permitted. All elements must be sourced from the official VPDS React library.

## Design Approach
Following the VPDS framework which emphasizes:
- Pre-built, accessibility-approved components
- Design tokens for theming and consistency
- Standardized spacing, typography, and interaction patterns
- Global scalability and flexibility

## Typography System
Implement VPDS typography hierarchy strictly:
- Use VPDS font families and type scales as defined in their design tokens
- Establish clear heading hierarchy (H1-H6) using system-defined sizes
- Body text using VPDS text components with proper line-height ratios
- Maintain consistent type treatment across all sections

## Layout & Spacing Framework
Use VPDS spacing tokens exclusively:
- Apply the system's standardized spacing scale (typically 4px, 8px, 16px, 24px, 32px, 48px, 64px units)
- Maintain consistent section padding using VPDS spacing primitives
- Grid layouts using VPDS grid system and breakpoints
- Responsive spacing that scales according to VPDS responsive patterns

## Component Library Implementation
Leverage VPDS component catalog:

**Navigation**: VPDS header/navigation components with standard patterns
**Buttons**: VPDS button variants (primary, secondary, tertiary) with built-in states
**Cards**: VPDS card components for content grouping
**Forms**: VPDS input fields, checkboxes, radio buttons, selects - all accessibility-tested
**Data Display**: Tables, lists, and data visualization components from VPDS
**Feedback**: VPDS alert, toast, and modal components
**Layout**: Container, grid, and flex utilities from VPDS

## Page Structure Strategy

**Hero Section**:
- Full-width VPDS hero component
- Large typography using VPDS heading styles
- VPDS button components for CTAs
- If using hero images, implement VPDS image components with proper aspect ratios

**Content Sections**:
- Use VPDS section containers with standardized padding
- Multi-column layouts using VPDS grid system (2-3 columns on desktop, stack on mobile)
- VPDS card components for feature showcases
- Proper vertical rhythm using system spacing tokens

**Forms & Interactions**:
- VPDS form components throughout
- Validation states using VPDS error/success patterns
- VPDS loading and disabled states

## Accessibility
All VPDS components are pre-tested for accessibility - maintain this by:
- Using semantic VPDS components as intended
- Following VPDS form patterns for proper labeling
- Implementing VPDS focus states and keyboard navigation
- Using VPDS color contrast ratios (already built into components)

## Images
Include strategic imagery using VPDS image components:
- **Hero**: Large hero image using VPDS image wrapper with proper responsive handling
- **Feature sections**: Supporting images in VPDS card components
- **Content illustrations**: Use VPDS aspect ratio utilities for consistent image presentation

**Image Placement**:
- Hero section: Full-width background or split layout
- Feature cards: Icon or image tops on cards
- Content sections: Alternating image-text layouts using VPDS grid

## Theming with Design Tokens
While not specifying colors, note that VPDS provides:
- Comprehensive token system for consistent theming
- Semantic token naming for light/dark mode support
- Component-level token customization for brand alignment

## Critical Success Factors
- Every component must be from VPDS library
- Spacing must use VPDS tokens exclusively
- Typography must follow VPDS type scale
- No custom CSS beyond VPDS utilities
- Maintain VPDS interaction patterns and states
- Use VPDS responsive breakpoints for all layout decisions

This approach ensures a production-ready, globally scalable solution that leverages Visa's enterprise-grade design system for consistency, accessibility, and professional polish.