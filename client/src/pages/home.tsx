import {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  ContentCardSubtitle,
  Typography,
  Link,
  Utility,
  Nav,
  NavList,
  NavListItem,
  NavListLink,
  Divider,
  Badge,
  Input,
  Label,
  Checkbox,
  Radio,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Accordion,
  AccordionHeading,
  AccordionPanel,
  AccordionSection,
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogTitle,
  Progress,
  Toggle,
  Avatar,
  AvatarBadge,
  Listbox,
  ListboxOption,
  ListboxSection,
} from '@visa/nova-react';
import {
  VisaMaxLow,
  GenericAccountLow,
  GenericArrowRightTiny,
  GenericCheckmarkTiny,
  GenericCloseTiny,
  GenericGlobeTiny,
  GenericHeartTiny,
  GenericHomeLow,
  GenericInformationLow,
  GenericLightningTiny,
  GenericLockTiny,
  GenericMailLow,
  GenericSettingsLow,
  GenericStarTiny,
  GenericUserLow,
} from '@visa/nova-icons-react';
import { useState } from 'react';

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Utility vFlex vFlexCol className="v-min-h-screen">
      <Nav tag="header" className="v-bg-surface-1">
        <Utility vFlex vAlignItems="center" vJustifyContent="between" vPaddingHorizontal={24} vPaddingVertical={16} className="v-w-full v-max-w-7xl v-mx-auto">
          <Utility vFlex vAlignItems="center" vGap={8}>
            <VisaMaxLow />
            <Typography variant="headline-4" tag="span">VPDS Showcase</Typography>
          </Utility>
          <NavList>
            <NavListItem>
              <NavListLink href="#components" data-testid="link-components">Components</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink href="#forms" data-testid="link-forms">Forms</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink href="#features" data-testid="link-features">Features</NavListLink>
            </NavListItem>
          </NavList>
          <Utility vFlex vGap={8}>
            <Button variant="tertiary" data-testid="button-signin">
              <GenericAccountLow />
              Sign In
            </Button>
            <Button data-testid="button-getstarted">Get Started</Button>
          </Utility>
        </Utility>
      </Nav>

      <Utility tag="main" vFlex vFlexCol vFlexGrow={1}>
        <Utility className="v-bg-gradient-to-br v-from-surface-1 v-to-surface-2" vPaddingVertical={80}>
          <Utility vFlex vFlexCol vAlignItems="center" vGap={24} className="v-max-w-4xl v-mx-auto v-text-center" vPaddingHorizontal={24}>
            <Badge colorScheme="info">
              <GenericLightningTiny />
              Powered by Visa Design System
            </Badge>
            <Typography variant="display-2" tag="h1" data-testid="text-hero-title">
              Build Beautiful Experiences with VPDS
            </Typography>
            <Typography variant="body-1" className="v-text-subtle" data-testid="text-hero-subtitle">
              The Visa Product Design System provides pre-built, accessibility-approved components 
              to help you create world-class payment experiences faster.
            </Typography>
            <Utility vFlex vGap={16} vFlexWrap>
              <Button size="large" data-testid="button-explore">
                Explore Components
                <GenericArrowRightTiny />
              </Button>
              <Button variant="secondary" size="large" data-testid="button-documentation">
                View Documentation
              </Button>
            </Utility>
          </Utility>
        </Utility>

        <Utility id="features" vPaddingVertical={64} vPaddingHorizontal={24}>
          <Utility vFlex vFlexCol vGap={48} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2" data-testid="text-features-title">
                Why Choose VPDS?
              </Typography>
              <Typography variant="body-1" className="v-text-subtle v-max-w-2xl">
                Unlock the potential of your ideas on a global scale with our comprehensive design system.
              </Typography>
            </Utility>

            <Utility vFlex vFlexWrap vGap={24} vJustifyContent="center">
              <ContentCard className="v-w-80" data-testid="card-feature-accessibility">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={16}>
                    <Utility vFlex vAlignItems="center" vJustifyContent="center" className="v-w-12 v-h-12 v-rounded-full v-bg-surface-2">
                      <GenericCheckmarkTiny className="v-text-positive" />
                    </Utility>
                    <ContentCardTitle variant="headline-4">Accessibility First</ContentCardTitle>
                    <Typography variant="body-2" className="v-text-subtle">
                      All components are pre-tested for WCAG 2.2 AA compliance, ensuring inclusive experiences for everyone.
                    </Typography>
                  </Utility>
                </ContentCardBody>
              </ContentCard>

              <ContentCard className="v-w-80" data-testid="card-feature-scalable">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={16}>
                    <Utility vFlex vAlignItems="center" vJustifyContent="center" className="v-w-12 v-h-12 v-rounded-full v-bg-surface-2">
                      <GenericGlobeTiny className="v-text-info" />
                    </Utility>
                    <ContentCardTitle variant="headline-4">Globally Scalable</ContentCardTitle>
                    <Typography variant="body-2" className="v-text-subtle">
                      Design tokens enable consistent, scalable results across products and platforms worldwide.
                    </Typography>
                  </Utility>
                </ContentCardBody>
              </ContentCard>

              <ContentCard className="v-w-80" data-testid="card-feature-flexible">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={16}>
                    <Utility vFlex vAlignItems="center" vJustifyContent="center" className="v-w-12 v-h-12 v-rounded-full v-bg-surface-2">
                      <GenericLockTiny className="v-text-warning" />
                    </Utility>
                    <ContentCardTitle variant="headline-4">Enterprise Ready</ContentCardTitle>
                    <Typography variant="body-2" className="v-text-subtle">
                      Built with security best practices and minimal dependencies for production-grade applications.
                    </Typography>
                  </Utility>
                </ContentCardBody>
              </ContentCard>
            </Utility>
          </Utility>
        </Utility>

        <Divider />

        <Utility id="components" className="v-bg-surface-1" vPaddingVertical={64} vPaddingHorizontal={24}>
          <Utility vFlex vFlexCol vGap={48} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2" data-testid="text-components-title">
                Component Showcase
              </Typography>
              <Typography variant="body-1" className="v-text-subtle v-max-w-2xl">
                Explore our comprehensive library of pre-built, customizable components.
              </Typography>
            </Utility>

            <Tabs selectedIndex={selectedTab} onChange={(index) => setSelectedTab(index)}>
              <TabList>
                <Tab data-testid="tab-buttons">Buttons</Tab>
                <Tab data-testid="tab-cards">Cards</Tab>
                <Tab data-testid="tab-feedback">Feedback</Tab>
                <Tab data-testid="tab-navigation">Navigation</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Utility vPaddingTop={24} vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-5">Button Variants</Typography>
                    <Utility vFlex vFlexWrap vGap={16} vAlignItems="center">
                      <Button data-testid="button-primary">Primary</Button>
                      <Button variant="secondary" data-testid="button-secondary">Secondary</Button>
                      <Button variant="tertiary" data-testid="button-tertiary">Tertiary</Button>
                      <Button variant="subtle" data-testid="button-subtle">Subtle</Button>
                    </Utility>
                    <Typography variant="headline-5">Button Sizes</Typography>
                    <Utility vFlex vFlexWrap vGap={16} vAlignItems="center">
                      <Button size="small" data-testid="button-small">Small</Button>
                      <Button size="medium" data-testid="button-medium">Medium</Button>
                      <Button size="large" data-testid="button-large">Large</Button>
                    </Utility>
                    <Typography variant="headline-5">Button States</Typography>
                    <Utility vFlex vFlexWrap vGap={16} vAlignItems="center">
                      <Button data-testid="button-enabled">Enabled</Button>
                      <Button disabled data-testid="button-disabled">Disabled</Button>
                      <Button colorScheme="negative" data-testid="button-negative">Destructive</Button>
                    </Utility>
                    <Typography variant="headline-5">Buttons with Icons</Typography>
                    <Utility vFlex vFlexWrap vGap={16} vAlignItems="center">
                      <Button data-testid="button-with-icon-left">
                        <GenericHeartTiny />
                        Like
                      </Button>
                      <Button variant="secondary" data-testid="button-with-icon-right">
                        Continue
                        <GenericArrowRightTiny />
                      </Button>
                      <Button variant="tertiary" iconOnly aria-label="Settings" data-testid="button-icon-only">
                        <GenericSettingsLow />
                      </Button>
                    </Utility>
                  </Utility>
                </TabPanel>

                <TabPanel>
                  <Utility vPaddingTop={24} vFlex vFlexWrap vGap={24}>
                    <ContentCard className="v-w-72" data-testid="card-example-1">
                      <ContentCardBody>
                        <Utility vFlex vFlexCol vGap={12}>
                          <Avatar size="large">
                            <GenericUserLow />
                          </Avatar>
                          <ContentCardTitle variant="headline-5">Alex Johnson</ContentCardTitle>
                          <ContentCardSubtitle>Product Designer</ContentCardSubtitle>
                          <Typography variant="body-2" className="v-text-subtle">
                            Building beautiful experiences with VPDS components.
                          </Typography>
                          <Utility vFlex vGap={8}>
                            <Button size="small">Connect</Button>
                            <Button size="small" variant="secondary">Message</Button>
                          </Utility>
                        </Utility>
                      </ContentCardBody>
                    </ContentCard>

                    <ContentCard className="v-w-72" borderBlockEnd data-testid="card-example-2">
                      <ContentCardBody>
                        <Utility vFlex vFlexCol vGap={12}>
                          <Badge colorScheme="positive">New</Badge>
                          <ContentCardTitle variant="headline-5">Premium Plan</ContentCardTitle>
                          <Typography variant="display-3" tag="span">$29</Typography>
                          <Typography variant="body-2" className="v-text-subtle">/month</Typography>
                          <Utility vFlex vFlexCol vGap={8}>
                            <Utility vFlex vGap={8} vAlignItems="center">
                              <GenericCheckmarkTiny className="v-text-positive" />
                              <Typography variant="body-2">Unlimited projects</Typography>
                            </Utility>
                            <Utility vFlex vGap={8} vAlignItems="center">
                              <GenericCheckmarkTiny className="v-text-positive" />
                              <Typography variant="body-2">Priority support</Typography>
                            </Utility>
                            <Utility vFlex vGap={8} vAlignItems="center">
                              <GenericCheckmarkTiny className="v-text-positive" />
                              <Typography variant="body-2">Advanced analytics</Typography>
                            </Utility>
                          </Utility>
                          <Button className="v-w-full">Subscribe</Button>
                        </Utility>
                      </ContentCardBody>
                    </ContentCard>

                    <ContentCard className="v-w-72" data-testid="card-example-3">
                      <ContentCardBody>
                        <Utility vFlex vFlexCol vGap={12}>
                          <Utility vFlex vJustifyContent="between" vAlignItems="center">
                            <GenericMailLow />
                            <Badge colorScheme="warning">3 unread</Badge>
                          </Utility>
                          <ContentCardTitle variant="headline-5">Inbox</ContentCardTitle>
                          <Typography variant="body-2" className="v-text-subtle">
                            You have new messages waiting for your response.
                          </Typography>
                          <Link href="#" data-testid="link-view-messages">
                            View messages
                            <GenericArrowRightTiny />
                          </Link>
                        </Utility>
                      </ContentCardBody>
                    </ContentCard>
                  </Utility>
                </TabPanel>

                <TabPanel>
                  <Utility vPaddingTop={24} vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-5">Badges</Typography>
                    <Utility vFlex vFlexWrap vGap={12}>
                      <Badge data-testid="badge-default">Default</Badge>
                      <Badge colorScheme="info" data-testid="badge-info">Info</Badge>
                      <Badge colorScheme="positive" data-testid="badge-positive">Success</Badge>
                      <Badge colorScheme="warning" data-testid="badge-warning">Warning</Badge>
                      <Badge colorScheme="negative" data-testid="badge-negative">Error</Badge>
                    </Utility>

                    <Typography variant="headline-5">Progress</Typography>
                    <Utility vFlex vFlexCol vGap={12} className="v-w-full v-max-w-md">
                      <Progress value={25} max={100} label="25% Complete" data-testid="progress-25" />
                      <Progress value={50} max={100} label="50% Complete" data-testid="progress-50" />
                      <Progress value={75} max={100} label="75% Complete" data-testid="progress-75" />
                      <Progress value={100} max={100} label="100% Complete" data-testid="progress-100" />
                    </Utility>

                    <Typography variant="headline-5">Dialog</Typography>
                    <Button onClick={() => setDialogOpen(true)} data-testid="button-open-dialog">
                      Open Dialog
                    </Button>
                    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                      <DialogContent>
                        <DialogCloseButton onClick={() => setDialogOpen(false)} data-testid="button-close-dialog" />
                        <DialogTitle>Confirm Action</DialogTitle>
                        <Typography variant="body-1" className="v-py-4">
                          Are you sure you want to proceed with this action? This cannot be undone.
                        </Typography>
                        <Utility vFlex vGap={12} vJustifyContent="end">
                          <Button variant="secondary" onClick={() => setDialogOpen(false)} data-testid="button-dialog-cancel">
                            Cancel
                          </Button>
                          <Button onClick={() => setDialogOpen(false)} data-testid="button-dialog-confirm">
                            Confirm
                          </Button>
                        </Utility>
                      </DialogContent>
                    </Dialog>

                    <Typography variant="headline-5">Toggle</Typography>
                    <Utility vFlex vGap={16} vAlignItems="center">
                      <Toggle 
                        checked={toggleChecked} 
                        onChange={() => setToggleChecked(!toggleChecked)}
                        data-testid="toggle-example"
                      />
                      <Typography variant="body-1">
                        Notifications are {toggleChecked ? 'enabled' : 'disabled'}
                      </Typography>
                    </Utility>
                  </Utility>
                </TabPanel>

                <TabPanel>
                  <Utility vPaddingTop={24} vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-5">Accordion</Typography>
                    <Accordion>
                      <AccordionSection>
                        <AccordionHeading data-testid="accordion-heading-1">What is VPDS?</AccordionHeading>
                        <AccordionPanel>
                          <Typography variant="body-1">
                            The Visa Product Design System (VPDS) is a comprehensive design system 
                            built to help teams create world-class payment experiences with pre-built, 
                            accessibility-approved components.
                          </Typography>
                        </AccordionPanel>
                      </AccordionSection>
                      <AccordionSection>
                        <AccordionHeading data-testid="accordion-heading-2">How do I get started?</AccordionHeading>
                        <AccordionPanel>
                          <Typography variant="body-1">
                            Install the @visa/nova-react and @visa/nova-styles packages via npm, 
                            import the styles at your application root, and start using components.
                          </Typography>
                        </AccordionPanel>
                      </AccordionSection>
                      <AccordionSection>
                        <AccordionHeading data-testid="accordion-heading-3">Is VPDS accessible?</AccordionHeading>
                        <AccordionPanel>
                          <Typography variant="body-1">
                            Yes! All VPDS components are rigorously tested for WCAG 2.2 AA compliance 
                            using Axe and other accessibility testing tools.
                          </Typography>
                        </AccordionPanel>
                      </AccordionSection>
                    </Accordion>

                    <Typography variant="headline-5">Avatars</Typography>
                    <Utility vFlex vGap={16} vAlignItems="center">
                      <Avatar size="small" data-testid="avatar-small">
                        <GenericUserLow />
                      </Avatar>
                      <Avatar size="medium" data-testid="avatar-medium">
                        <GenericUserLow />
                      </Avatar>
                      <Avatar size="large" data-testid="avatar-large">
                        <GenericUserLow />
                      </Avatar>
                      <Avatar size="large" data-testid="avatar-with-badge">
                        <GenericUserLow />
                        <AvatarBadge colorScheme="positive" />
                      </Avatar>
                    </Utility>
                  </Utility>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Utility>
        </Utility>

        <Divider />

        <Utility id="forms" vPaddingVertical={64} vPaddingHorizontal={24}>
          <Utility vFlex vFlexCol vGap={48} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2" data-testid="text-forms-title">
                Form Elements
              </Typography>
              <Typography variant="body-1" className="v-text-subtle v-max-w-2xl">
                Build accessible forms with our comprehensive form component library.
              </Typography>
            </Utility>

            <Utility vFlex vFlexWrap vGap={48} vJustifyContent="center">
              <ContentCard className="v-w-96" data-testid="card-form-inputs">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={20}>
                    <ContentCardTitle variant="headline-4">Contact Form</ContentCardTitle>
                    
                    <Utility vFlex vFlexCol vGap={4}>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" data-testid="input-name" />
                    </Utility>

                    <Utility vFlex vFlexCol vGap={4}>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" data-testid="input-email" />
                    </Utility>

                    <Utility vFlex vFlexCol vGap={4}>
                      <Label htmlFor="subject">Subject</Label>
                      <Select id="subject" data-testid="select-subject">
                        <option value="">Select a subject</option>
                        <option value="support">Support Request</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </Select>
                    </Utility>

                    <Utility vFlex vFlexCol vGap={8}>
                      <Checkbox id="newsletter" data-testid="checkbox-newsletter">
                        Subscribe to newsletter
                      </Checkbox>
                      <Checkbox id="terms" data-testid="checkbox-terms">
                        I agree to the terms and conditions
                      </Checkbox>
                    </Utility>

                    <Button className="v-w-full" data-testid="button-submit-form">
                      Submit
                    </Button>
                  </Utility>
                </ContentCardBody>
              </ContentCard>

              <ContentCard className="v-w-96" data-testid="card-form-radios">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={20}>
                    <ContentCardTitle variant="headline-4">Preferences</ContentCardTitle>
                    
                    <Utility vFlex vFlexCol vGap={8}>
                      <Typography variant="label-1">Notification Frequency</Typography>
                      <Radio name="frequency" value="realtime" data-testid="radio-realtime">
                        Real-time
                      </Radio>
                      <Radio name="frequency" value="daily" data-testid="radio-daily">
                        Daily digest
                      </Radio>
                      <Radio name="frequency" value="weekly" data-testid="radio-weekly">
                        Weekly summary
                      </Radio>
                      <Radio name="frequency" value="none" data-testid="radio-none">
                        No notifications
                      </Radio>
                    </Utility>

                    <Divider />

                    <Utility vFlex vFlexCol vGap={8}>
                      <Typography variant="label-1">Theme Preference</Typography>
                      <Radio name="theme" value="light" data-testid="radio-light">
                        Light mode
                      </Radio>
                      <Radio name="theme" value="dark" data-testid="radio-dark">
                        Dark mode
                      </Radio>
                      <Radio name="theme" value="system" data-testid="radio-system">
                        System default
                      </Radio>
                    </Utility>

                    <Button variant="secondary" className="v-w-full" data-testid="button-save-preferences">
                      Save Preferences
                    </Button>
                  </Utility>
                </ContentCardBody>
              </ContentCard>
            </Utility>
          </Utility>
        </Utility>

        <Utility className="v-bg-surface-2" vPaddingVertical={64} vPaddingHorizontal={24}>
          <Utility vFlex vFlexCol vAlignItems="center" vGap={24} className="v-max-w-2xl v-mx-auto v-text-center">
            <Typography variant="headline-2" tag="h2" data-testid="text-cta-title">
              Ready to Get Started?
            </Typography>
            <Typography variant="body-1" className="v-text-subtle">
              Join thousands of developers building beautiful, accessible experiences with the Visa Product Design System.
            </Typography>
            <Utility vFlex vGap={16} vFlexWrap vJustifyContent="center">
              <Button size="large" data-testid="button-start-building">
                Start Building
                <GenericArrowRightTiny />
              </Button>
              <Button variant="tertiary" size="large" data-testid="button-view-docs">
                <GenericInformationLow />
                View Documentation
              </Button>
            </Utility>
          </Utility>
        </Utility>
      </Utility>

      <Utility tag="footer" className="v-bg-surface-1 v-border-t v-border-default" vPaddingVertical={48} vPaddingHorizontal={24}>
        <Utility vFlex vFlexCol vGap={32} className="v-max-w-7xl v-mx-auto">
          <Utility vFlex vFlexWrap vJustifyContent="between" vGap={32}>
            <Utility vFlex vFlexCol vGap={16}>
              <Utility vFlex vAlignItems="center" vGap={8}>
                <VisaMaxLow />
                <Typography variant="headline-5">VPDS Showcase</Typography>
              </Utility>
              <Typography variant="body-2" className="v-text-subtle v-max-w-xs">
                Built with the Visa Product Design System to demonstrate its comprehensive component library.
              </Typography>
            </Utility>

            <Utility vFlex vGap={48} vFlexWrap>
              <Utility vFlex vFlexCol vGap={12}>
                <Typography variant="label-1">Resources</Typography>
                <Link href="#" className="v-text-subtle" data-testid="link-documentation">Documentation</Link>
                <Link href="#" className="v-text-subtle" data-testid="link-components-footer">Components</Link>
                <Link href="#" className="v-text-subtle" data-testid="link-design-tokens">Design Tokens</Link>
              </Utility>
              <Utility vFlex vFlexCol vGap={12}>
                <Typography variant="label-1">Community</Typography>
                <Link href="#" className="v-text-subtle" data-testid="link-github">GitHub</Link>
                <Link href="#" className="v-text-subtle" data-testid="link-support">Support</Link>
                <Link href="#" className="v-text-subtle" data-testid="link-contributing">Contributing</Link>
              </Utility>
              <Utility vFlex vFlexCol vGap={12}>
                <Typography variant="label-1">Legal</Typography>
                <Link href="#" className="v-text-subtle" data-testid="link-privacy">Privacy Policy</Link>
                <Link href="#" className="v-text-subtle" data-testid="link-terms">Terms of Service</Link>
                <Link href="#" className="v-text-subtle" data-testid="link-license">License</Link>
              </Utility>
            </Utility>
          </Utility>

          <Divider />

          <Utility vFlex vJustifyContent="between" vAlignItems="center" vFlexWrap vGap={16}>
            <Typography variant="body-2" className="v-text-subtle" data-testid="text-copyright">
              Built with Visa Product Design System. All components are from @visa/nova-react.
            </Typography>
            <Utility vFlex vGap={8}>
              <Badge colorScheme="info">React 18+</Badge>
              <Badge colorScheme="positive">WCAG 2.2 AA</Badge>
            </Utility>
          </Utility>
        </Utility>
      </Utility>
    </Utility>
  );
}
