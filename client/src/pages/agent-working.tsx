import {
  Typography,
  Utility,
  ProgressCircular,
  VisaLogo,
} from '@visa/nova-react';

export default function AgentWorking() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: 'var(--v-color-surface-1)'
    }}>
      <Utility vFlex vFlexCol vAlignItems="center" vGap={32}>
        <VisaLogo />
        <ProgressCircular indeterminate data-testid="spinner-agent" />
        <Typography variant="headline-3" tag="h1" data-testid="text-agent-working">Replit agent is working...</Typography>
        <Typography variant="body-1" className="v-text-subtle" data-testid="text-agent-subtitle">
          Please wait while your request is being processed.
        </Typography>
      </Utility>
    </div>
  );
}
