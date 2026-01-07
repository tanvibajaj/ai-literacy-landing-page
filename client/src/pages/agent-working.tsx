import {
  Typography,
  Utility,
  ProgressCircular,
  VisaLogo,
} from '@visa/nova-react';

export default function AgentWorking() {
  return (
    <Utility vFlex vFlexCol vAlignItems="center" vJustifyContent="center" className="v-h-screen v-bg-surface-1">
      <Utility vFlex vFlexCol vAlignItems="center" vGap={32}>
        <VisaLogo />
        <ProgressCircular data-testid="spinner-agent" />
        <Typography variant="headline-3" tag="h1" data-testid="text-agent-working">
          Agent is working...
        </Typography>
        <Typography variant="body-1" className="v-text-subtle" data-testid="text-agent-subtitle">
          Please wait while your request is being processed.
        </Typography>
      </Utility>
    </Utility>
  );
}
