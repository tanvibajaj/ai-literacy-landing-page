import {
  Typography,
  Utility,
  ContentCard,
  ContentCardBody,
  Button,
} from '@visa/nova-react';
import { GenericWarningLow } from '@visa/nova-icons-react';

export default function NotFound() {
  return (
    <Utility vFlex vAlignItems="center" vJustifyContent="center" className="v-min-h-screen v-bg-surface-1" vPadding={16}>
      <ContentCard className="v-max-w-md" data-testid="card-not-found">
        <ContentCardBody>
          <Utility vFlex vFlexCol vGap={16}>
            <Utility vFlex vAlignItems="center" vGap={12}>
              <GenericWarningLow className="v-text-warning" />
              <Typography variant="headline-3" tag="h1" data-testid="text-404-title">
                404 Page Not Found
              </Typography>
            </Utility>
            <Typography variant="body-1" className="v-text-subtle" data-testid="text-404-message">
              The page you're looking for doesn't exist or has been moved.
            </Typography>
            <Button onClick={() => window.location.href = '/'} data-testid="button-go-home">
              Go Home
            </Button>
          </Utility>
        </ContentCardBody>
      </ContentCard>
    </Utility>
  );
}
