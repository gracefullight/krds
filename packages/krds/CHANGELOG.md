# Changelog

## 1.0.0

### Major Changes

- c28e13f: KRDS 1.0.0 — stabilizes the component API for production use.
  
  - Complete coverage of the KRDS specification: all 55 components implemented in both the MUI (`@gracefullight/krds`) and Tailwind (`@gracefullight/krds-tw`) packages, including Calendar, Carousel, CoachMark, ContextualHelp, FileUpload, Toast, Snackbar, RangeSlider, QuantityToggle, and more.
  - Full design-token API (semantic gap/padding/size-height/font-size/gap-layout/padding-card/border-width getters).
  - TypeScript 7 native build (native `tsc` declaration emit, no TS6 compatibility shim).
  - Upgraded toolchain: MUI 9, Storybook 10, Vitest 5, Biome 2.

- 0.14.0: Added KRDS v1.0.0 missing layout/navigation blocks and v1.1.0 new components
  - Header, Footer, MainMenu (with viewport-height-aware dropdown — v1.1.0)
  - SideNavigation, InPageNavigation
  - HelpPanel (help / tutorial variants)
  - Textarea (with character counter)
  - VoiceAssist (음성지원, v1.1.0 신규)
  - StructuredList: added `table` variant (v1.1.0)
- 0.13.0: Added krds-icons into components
- 0.12.0: Separated design tokens into standalone krds-tokens package
- 0.11.0: Added MUI components and composite components
  - divider
  - info-box
  - top-button
- 0.10.1: Changed date input icon
- 0.10.0: Added composite components
  - chip
  - chip-group
  - masthead
  - skip-link
  - splash-screen
- 0.9.0: Added MUI components and composite components
  - critical-alerts
  - date-picker
  - tooltip
- 0.8.0: Added MUI components
  - stepper
  - switch
  - table
- 0.7.0: Added MUI components
  - menu
  - pagination
  - radio
  - select
- 0.6.0: Added MUI components
  - dialog
  - drawer
  - linear-progress
- 0.5.0: Added MUI components
  - checkbox
  - chip
  - circular-progress
- 0.4.0: Added MUI components
  - alert
  - badge
  - breadcrumbs
- 0.3.0: Added MUI components
  - link
  - tabs
- 0.2.0: Provided MUI theme
  - theme
  - button
  - typography
- 0.1.1: Provided reset styles
- 0.1.0: Provided design token helper
