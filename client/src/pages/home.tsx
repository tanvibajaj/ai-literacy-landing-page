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
  Divider,
  Badge,
  Input,
  Label,
  Checkbox,
  Radio,
  Select,
  Accordion,
  AccordionHeading,
  AccordionPanel,
  Avatar,
  VisaLogo,
} from '@visa/nova-react';
import {
  GenericAccountLow,
  GenericArrowRightTiny,
  GenericCheckmarkTiny,
  GenericCloseTiny,
  GenericCheckInternationalTiny,
  GenericLikeTiny,
  GenericHomeLow,
  GenericInformationLow,
  GenericFastTiny,
  GenericSecurityLockTiny,
  GenericEmailLow,
  GenericSettingsLow,
  GenericFavoriteStarFillTiny,
} from '@visa/nova-icons-react';
import { useState } from 'react';

export default function Home() {
  const [toggleChecked, setToggleChecked] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);

  return (
    <Utility vFlex vFlexCol className="v-min-h-screen v-bg-surface-1">
      <Nav tag="header" className="v-bg-surface-2 v-border-b v-border-default">
        <Utility vFlex vAlignItems="center" vJustifyContent="between" vGap={24} vPaddingHorizontal={24} vPaddingVertical={16} className="v-w-full v-max-w-7xl v-mx-auto">
          <Utility vFlex vAlignItems="center" vGap={12}>
            <VisaLogo />
            <Typography variant="headline-4" tag="span">VPDS Showcase</Typography>
          </Utility>
          <Utility vFlex vGap={16}>
            <Link href="#components" data-testid="link-components">Components</Link>
            <Link href="#forms" data-testid="link-forms">Forms</Link>
            <Link href="#features" data-testid="link-features">Features</Link>
          </Utility>
          <Utility vFlex vGap={8}>
            <Button colorScheme="tertiary" data-testid="button-signin">
              <GenericAccountLow />
              Sign In
            </Button>
            <Button data-testid="button-getstarted">Get Started</Button>
          </Utility>
        </Utility>
      </Nav>

      <Utility tag="main" vFlex vFlexCol vFlexGrow>
        <Utility className="v-bg-surface-2" vPaddingVertical={48}>
          <Utility vFlex vFlexCol vAlignItems="center" vGap={24} className="v-max-w-4xl v-mx-auto v-text-center" vPaddingHorizontal={24}>
            <Badge badgeType="stable">
              <GenericFastTiny />
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
              <Button buttonSize="large" data-testid="button-explore">
                Explore Components
                <GenericArrowRightTiny />
              </Button>
              <Button colorScheme="secondary" buttonSize="large" data-testid="button-documentation">
                View Documentation
              </Button>
            </Utility>
          </Utility>
        </Utility>

        <Utility id="features" vPaddingVertical={48} vPaddingHorizontal={24}>
          <Utility vFlex vFlexCol vGap={48} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2" data-testid="text-features-title">
                Why Choose VPDS?
              </Typography>
              <Typography variant="body-1" className="v-text-subtle">
                Built by Visa, trusted by global enterprises
              </Typography>
            </Utility>

            <Utility vFlex vFlexWrap vJustifyContent="center" vGap={24}>
              <ContentCard className="v-w-80">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={12}>
                    <GenericSecurityLockTiny className="v-text-active" />
                    <ContentCardTitle>Enterprise Security</ContentCardTitle>
                    <ContentCardSubtitle>Built-in accessibility and security compliance for payment interfaces</ContentCardSubtitle>
                  </Utility>
                </ContentCardBody>
              </ContentCard>

              <ContentCard className="v-w-80">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={12}>
                    <GenericFastTiny className="v-text-active" />
                    <ContentCardTitle>Fast Development</ContentCardTitle>
                    <ContentCardSubtitle>Pre-built components reduce development time by up to 60%</ContentCardSubtitle>
                  </Utility>
                </ContentCardBody>
              </ContentCard>

              <ContentCard className="v-w-80">
                <ContentCardBody>
                  <Utility vFlex vFlexCol vGap={12}>
                    <GenericCheckInternationalTiny className="v-text-active" />
                    <ContentCardTitle>Global Standards</ContentCardTitle>
                    <ContentCardSubtitle>Consistent design language across all Visa touchpoints worldwide</ContentCardSubtitle>
                  </Utility>
                </ContentCardBody>
              </ContentCard>
            </Utility>
          </Utility>
        </Utility>

        <Divider />

        <Utility id="components" vPaddingVertical={48} vPaddingHorizontal={24} className="v-bg-surface-2">
          <Utility vFlex vFlexCol vGap={48} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2">
                Component Showcase
              </Typography>
              <Typography variant="body-1" className="v-text-subtle">
                Explore our rich library of components
              </Typography>
            </Utility>

            <Utility vFlex vFlexCol vGap={16}>
              <Utility vFlex vGap={8} role="tablist" aria-label="Component categories">
                <Button 
                  colorScheme={selectedTab === 0 ? "secondary" : "tertiary"} 
                  onClick={() => setSelectedTab(0)} 
                  data-testid="tab-buttons"
                  role="tab"
                  aria-selected={selectedTab === 0}
                  aria-controls="panel-buttons"
                  id="tab-btn-buttons"
                >
                  Buttons
                </Button>
                <Button 
                  colorScheme={selectedTab === 1 ? "secondary" : "tertiary"} 
                  onClick={() => setSelectedTab(1)} 
                  data-testid="tab-cards"
                  role="tab"
                  aria-selected={selectedTab === 1}
                  aria-controls="panel-cards"
                  id="tab-btn-cards"
                >
                  Cards
                </Button>
                <Button 
                  colorScheme={selectedTab === 2 ? "secondary" : "tertiary"} 
                  onClick={() => setSelectedTab(2)} 
                  data-testid="tab-feedback"
                  role="tab"
                  aria-selected={selectedTab === 2}
                  aria-controls="panel-feedback"
                  id="tab-btn-feedback"
                >
                  Feedback
                </Button>
                <Button 
                  colorScheme={selectedTab === 3 ? "secondary" : "tertiary"} 
                  onClick={() => setSelectedTab(3)} 
                  data-testid="tab-navigation"
                  role="tab"
                  aria-selected={selectedTab === 3}
                  aria-controls="panel-navigation"
                  id="tab-btn-navigation"
                >
                  Navigation
                </Button>
              </Utility>

              <Utility className="v-bg-surface-1 v-p-6 v-rounded-md" role="tabpanel" id={`panel-${['buttons', 'cards', 'feedback', 'navigation'][selectedTab]}`} aria-labelledby={`tab-btn-${['buttons', 'cards', 'feedback', 'navigation'][selectedTab]}`}>
                {selectedTab === 0 && (
                  <Utility vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-4">Button Variants</Typography>
                    <Utility vFlex vGap={12} vFlexWrap>
                      <Button data-testid="button-primary">Primary</Button>
                      <Button colorScheme="secondary" data-testid="button-secondary">Secondary</Button>
                      <Button colorScheme="tertiary" data-testid="button-tertiary">Tertiary</Button>
                      <Button subtle data-testid="button-subtle">Subtle</Button>
                    </Utility>
                    <Typography variant="headline-4">Button Sizes</Typography>
                    <Utility vFlex vGap={12} vFlexWrap vAlignItems="center">
                      <Button buttonSize="small" data-testid="button-small">Small</Button>
                      <Button data-testid="button-medium">Medium</Button>
                      <Button buttonSize="large" data-testid="button-large">Large</Button>
                    </Utility>
                    <Typography variant="headline-4">With Icons</Typography>
                    <Utility vFlex vGap={12} vFlexWrap>
                      <Button data-testid="button-icon-left">
                        <GenericLikeTiny />
                        Like
                      </Button>
                      <Button colorScheme="secondary" data-testid="button-icon-right">
                        Next
                        <GenericArrowRightTiny />
                      </Button>
                    </Utility>
                  </Utility>
                )}

                {selectedTab === 1 && (
                  <Utility vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-4">Content Cards</Typography>
                    <Utility vFlex vGap={16} vFlexWrap>
                      <ContentCard className="v-w-64" data-testid="card-1">
                        <ContentCardBody>
                          <ContentCardTitle>Card Title</ContentCardTitle>
                          <ContentCardSubtitle>This is a basic content card with title and subtitle</ContentCardSubtitle>
                        </ContentCardBody>
                      </ContentCard>
                      <ContentCard className="v-w-64" data-testid="card-2">
                        <ContentCardBody>
                          <Utility vFlex vFlexCol vGap={12}>
                            <GenericFavoriteStarFillTiny className="v-text-warning" />
                            <ContentCardTitle>Featured Card</ContentCardTitle>
                            <ContentCardSubtitle>Cards can include icons and other elements</ContentCardSubtitle>
                            <Button buttonSize="small">Learn More</Button>
                          </Utility>
                        </ContentCardBody>
                      </ContentCard>
                    </Utility>
                  </Utility>
                )}

                {selectedTab === 2 && (
                  <Utility vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-4">Badges</Typography>
                    <Utility vFlex vGap={12} vFlexWrap>
                      <Badge badgeType="neutral" data-testid="badge-info">
                        <GenericInformationLow />
                        Info
                      </Badge>
                      <Badge badgeType="stable" data-testid="badge-success">
                        <GenericCheckmarkTiny />
                        Success
                      </Badge>
                      <Badge badgeType="warning" data-testid="badge-warning">Warning</Badge>
                      <Badge badgeType="critical" data-testid="badge-error">
                        <GenericCloseTiny />
                        Error
                      </Badge>
                    </Utility>
                    <Typography variant="headline-4">Progress</Typography>
                    <Utility vFlex vFlexCol vGap={12} className="v-w-full v-max-w-md">
                      <div className="progress-bar" data-testid="progress-25">
                        <div className="progress-bar-fill" style={{ width: '25%' }} />
                      </div>
                      <div className="progress-bar" data-testid="progress-50">
                        <div className="progress-bar-fill" style={{ width: '50%' }} />
                      </div>
                      <div className="progress-bar" data-testid="progress-75">
                        <div className="progress-bar-fill" style={{ width: '75%' }} />
                      </div>
                    </Utility>
                    <Typography variant="headline-4">Toggle</Typography>
                    <Utility vFlex vAlignItems="center" vGap={12}>
                      <button 
                        type="button"
                        role="switch"
                        aria-checked={toggleChecked}
                        onClick={() => setToggleChecked(!toggleChecked)}
                        className={`toggle-switch ${toggleChecked ? 'toggle-switch-checked' : ''}`}
                        data-testid="toggle-switch"
                      >
                        <span className="toggle-switch-thumb" />
                      </button>
                      <Typography variant="body-2">
                        {toggleChecked ? 'Enabled' : 'Disabled'}
                      </Typography>
                    </Utility>
                  </Utility>
                )}

                {selectedTab === 3 && (
                  <Utility vFlex vFlexCol vGap={24}>
                    <Typography variant="headline-4">Links</Typography>
                    <Utility vFlex vGap={16} vFlexWrap>
                      <Link href="#" data-testid="link-default">Default Link</Link>
                      <Link href="#" data-testid="link-external">External Link</Link>
                    </Utility>
                    <Typography variant="headline-4">Accordion</Typography>
                    <Accordion>
                      <Utility vFlex vFlexCol className="v-border v-border-default v-rounded-md">
                        <AccordionHeading 
                          aria-expanded={accordionOpen === 0}
                          onClick={() => setAccordionOpen(accordionOpen === 0 ? null : 0)}
                          data-testid="accordion-heading-1"
                        >
                          What is VPDS?
                        </AccordionHeading>
                        <AccordionPanel aria-hidden={accordionOpen !== 0}>
                          <Utility vPadding={16}>
                            <Typography variant="body-2">
                              VPDS is the Visa Product Design System, a comprehensive design system for building payment experiences.
                            </Typography>
                          </Utility>
                        </AccordionPanel>
                        <Divider />
                        <AccordionHeading 
                          aria-expanded={accordionOpen === 1}
                          onClick={() => setAccordionOpen(accordionOpen === 1 ? null : 1)}
                          data-testid="accordion-heading-2"
                        >
                          How do I get started?
                        </AccordionHeading>
                        <AccordionPanel aria-hidden={accordionOpen !== 1}>
                          <Utility vPadding={16}>
                            <Typography variant="body-2">
                              Install the packages from npm and import the components you need.
                            </Typography>
                          </Utility>
                        </AccordionPanel>
                        <Divider />
                        <AccordionHeading 
                          aria-expanded={accordionOpen === 2}
                          onClick={() => setAccordionOpen(accordionOpen === 2 ? null : 2)}
                          data-testid="accordion-heading-3"
                        >
                          Is it accessible?
                        </AccordionHeading>
                        <AccordionPanel aria-hidden={accordionOpen !== 2}>
                          <Utility vPadding={16}>
                            <Typography variant="body-2">
                              Yes! All VPDS components are built with accessibility in mind and meet WCAG 2.1 AA standards.
                            </Typography>
                          </Utility>
                        </AccordionPanel>
                      </Utility>
                    </Accordion>
                  </Utility>
                )}
              </Utility>
            </Utility>
          </Utility>
        </Utility>

        <Divider />

        <Utility id="forms" vPaddingVertical={48} vPaddingHorizontal={24}>
          <Utility vFlex vFlexCol vGap={48} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2">
                Form Components
              </Typography>
              <Typography variant="body-1" className="v-text-subtle">
                Accessible form elements for any use case
              </Typography>
            </Utility>

            <Utility vFlex vFlexWrap vGap={48} vJustifyContent="center">
              <Utility vFlex vFlexCol vGap={24} className="v-w-80">
                <Typography variant="headline-4">Text Inputs</Typography>
                <Utility vFlex vFlexCol vGap={4}>
                  <Label htmlFor="name-input">Full Name</Label>
                  <Input id="name-input" placeholder="Enter your name" data-testid="input-name" />
                </Utility>
                <Utility vFlex vFlexCol vGap={4}>
                  <Label htmlFor="email-input">Email Address</Label>
                  <Input id="email-input" type="email" placeholder="you@example.com" data-testid="input-email" />
                </Utility>
              </Utility>

              <Utility vFlex vFlexCol vGap={24} className="v-w-80">
                <Typography variant="headline-4">Selection Controls</Typography>
                <Utility vFlex vFlexCol vGap={4}>
                  <Label htmlFor="country-select">Country</Label>
                  <Select id="country-select" data-testid="select-country">
                    <option value="">Select a country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </Select>
                </Utility>
                <Utility vFlex vFlexCol vGap={8}>
                  <Utility vFlex vGap={8} vAlignItems="center">
                    <Checkbox id="checkbox-terms" data-testid="checkbox-terms" />
                    <Label htmlFor="checkbox-terms">I agree to the terms and conditions</Label>
                  </Utility>
                  <Utility vFlex vGap={8} vAlignItems="center">
                    <Checkbox id="checkbox-newsletter" data-testid="checkbox-newsletter" />
                    <Label htmlFor="checkbox-newsletter">Subscribe to newsletter</Label>
                  </Utility>
                </Utility>
              </Utility>

              <Utility vFlex vFlexCol vGap={24} className="v-w-80">
                <Typography variant="headline-4">Radio Buttons</Typography>
                <Utility vFlex vFlexCol vGap={8}>
                  <Utility vFlex vGap={8} vAlignItems="center">
                    <Radio name="payment" value="card" id="radio-card" data-testid="radio-card" />
                    <Label htmlFor="radio-card">Credit Card</Label>
                  </Utility>
                  <Utility vFlex vGap={8} vAlignItems="center">
                    <Radio name="payment" value="bank" id="radio-bank" data-testid="radio-bank" />
                    <Label htmlFor="radio-bank">Bank Transfer</Label>
                  </Utility>
                  <Utility vFlex vGap={8} vAlignItems="center">
                    <Radio name="payment" value="paypal" id="radio-paypal" data-testid="radio-paypal" />
                    <Label htmlFor="radio-paypal">Digital Wallet</Label>
                  </Utility>
                </Utility>
              </Utility>
            </Utility>
          </Utility>
        </Utility>

        <Divider />

        <Utility vPaddingVertical={48} vPaddingHorizontal={24} className="v-bg-surface-2">
          <Utility vFlex vFlexCol vGap={32} className="v-max-w-7xl v-mx-auto">
            <Utility vFlex vFlexCol vAlignItems="center" vGap={16} className="v-text-center">
              <Typography variant="headline-2" tag="h2">
                More Components
              </Typography>
            </Utility>

            <Utility vFlex vFlexWrap vGap={32} vJustifyContent="center">
              <Utility vFlex vFlexCol vGap={16} vAlignItems="center" className="v-w-64">
                <Typography variant="headline-4">Avatar</Typography>
                <Utility vFlex vGap={12}>
                  <Avatar data-testid="avatar-1">AB</Avatar>
                  <Avatar data-testid="avatar-2">CD</Avatar>
                  <Avatar data-testid="avatar-3">EF</Avatar>
                </Utility>
              </Utility>

              <Utility vFlex vFlexCol vGap={16} vAlignItems="center" className="v-w-64">
                <Typography variant="headline-4">Divider</Typography>
                <Utility vFlex vFlexCol vGap={8} className="v-w-full">
                  <Typography variant="body-2">Content above</Typography>
                  <Divider />
                  <Typography variant="body-2">Content below</Typography>
                </Utility>
              </Utility>

              <Utility vFlex vFlexCol vGap={16} vAlignItems="center" className="v-w-64">
                <Typography variant="headline-4">Typography</Typography>
                <Utility vFlex vFlexCol vGap={4} vAlignItems="start">
                  <Typography variant="headline-2">Headline 2</Typography>
                  <Typography variant="headline-4">Headline 4</Typography>
                  <Typography variant="body-1">Body 1 text</Typography>
                  <Typography variant="body-2" className="v-text-subtle">Body 2 subtle</Typography>
                </Utility>
              </Utility>
            </Utility>
          </Utility>
        </Utility>
      </Utility>

      <Utility tag="footer" className="v-bg-surface-3 v-border-t v-border-default" vPaddingVertical={48} vPaddingHorizontal={24}>
        <Utility vFlex vFlexCol vGap={32} className="v-max-w-7xl v-mx-auto">
          <Utility vFlex vFlexWrap vJustifyContent="between" vGap={32}>
            <Utility vFlex vFlexCol vGap={16}>
              <Utility vFlex vAlignItems="center" vGap={8}>
                <VisaLogo />
                <Typography variant="headline-4">VPDS</Typography>
              </Utility>
              <Typography variant="body-2" className="v-text-subtle v-max-w-xs">
                The Visa Product Design System for building world-class payment experiences.
              </Typography>
            </Utility>

            <Utility vFlex vGap={48}>
              <Utility vFlex vFlexCol vGap={12}>
                <Typography variant="label">Resources</Typography>
                <Link href="#" data-testid="link-documentation">Documentation</Link>
                <Link href="#" data-testid="link-github">GitHub</Link>
                <Link href="#" data-testid="link-storybook">Storybook</Link>
              </Utility>
              <Utility vFlex vFlexCol vGap={12}>
                <Typography variant="label">Community</Typography>
                <Link href="#" data-testid="link-support">Support</Link>
                <Link href="#" data-testid="link-blog">Blog</Link>
                <Link href="#" data-testid="link-contact">Contact</Link>
              </Utility>
            </Utility>
          </Utility>

          <Divider />

          <Utility vFlex vFlexWrap vJustifyContent="between" vAlignItems="center" vGap={16}>
            <Typography variant="body-3" className="v-text-subtle">
              2025 Visa. All rights reserved.
            </Typography>
            <Utility vFlex vGap={24}>
              <Link href="#" data-testid="link-privacy">Privacy</Link>
              <Link href="#" data-testid="link-terms">Terms</Link>
              <Link href="#" data-testid="link-cookies">Cookies</Link>
            </Utility>
          </Utility>
        </Utility>
      </Utility>
    </Utility>
  );
}
