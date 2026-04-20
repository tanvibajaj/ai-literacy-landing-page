import { useEffect, useState, type FormEvent } from "react";
import {
  Badge,
  Button,
  Input,
  InputContainer,
  Label,
  SectionMessage,
  SectionMessageContent,
  Surface,
  Typography,
  Utility,
  VisaLogo,
} from "@visa/nova-react";

type Application = {
  id: string;
  receivedAt: string;
  name: string;
  age: number;
  affiliation: string | null;
  reason: string;
  laptopAcknowledged: boolean;
};

const TOKEN_KEY = "visa-ai-literacy-admin-token";

export default function Admin() {
  const [token, setToken] = useState<string>(
    () => localStorage.getItem(TOKEN_KEY) ?? ""
  );
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<Application[] | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = async (t: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/applications", {
        headers: { "x-admin-token": t },
      });
      if (res.status === 401) {
        setError("That token didn't match. Try again.");
        setData(null);
        return;
      }
      if (res.status === 503) {
        const body = await res.json().catch(() => ({}));
        setError(
          body.error ??
            "Admin access isn't configured. Set the ADMIN_TOKEN environment variable to enable this page."
        );
        setData(null);
        return;
      }
      if (!res.ok) {
        setError(`Request failed: ${res.status}`);
        setData(null);
        return;
      }
      const json = await res.json();
      setData(json.applications);
      setCount(json.count);
      localStorage.setItem(TOKEN_KEY, t);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) load(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const t = input.trim();
    if (!t) return;
    setToken(t);
    load(t);
  };

  const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    setData(null);
    setInput("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--palette-default-surface-1)",
      }}
      data-testid="page-admin"
    >
      <Utility
        vFlex
        vAlignItems="center"
        vJustifyContent="between"
        vPaddingHorizontal={24}
        vPaddingVertical={16}
        style={{
          borderBottom: "1px solid var(--palette-default-border)",
          backgroundColor: "var(--palette-default-surface-1)",
        }}
      >
        <Utility vFlex vAlignItems="center" vGap={12}>
          <VisaLogo aria-label="Visa" />
          <Typography variant="body-2-medium">Applications · Admin</Typography>
        </Utility>
        {token && (
          <Button colorScheme="tertiary" onClick={signOut} data-testid="button-admin-signout">
            Sign out
          </Button>
        )}
      </Utility>

      <Utility
        vPaddingHorizontal={24}
        vPaddingVertical={32}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <Utility vFlex vFlexCol vGap={24}>
          {!token && (
            <Surface
              style={{
                border: "1px solid var(--palette-default-border)",
                borderRadius: "12px",
                maxWidth: "520px",
              }}
            >
              <Utility vPadding={24}>
                <form onSubmit={onSubmit} data-testid="form-admin-login">
                  <Utility vFlex vFlexCol vGap={16}>
                    <Typography variant="headline-3" tag="h1">
                      Sign in
                    </Typography>
                    <Typography variant="body-2" colorScheme="subtle">
                      Enter the admin token (the value of the{" "}
                      <code>ADMIN_TOKEN</code> environment variable) to view
                      submitted applications.
                    </Typography>
                    <Utility vFlex vFlexCol vGap={4}>
                      <Label htmlFor="admin-token">Admin token</Label>
                      <InputContainer>
                        <Input
                          id="admin-token"
                          type="password"
                          autoComplete="off"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          data-testid="input-admin-token"
                        />
                      </InputContainer>
                    </Utility>
                    <Utility vFlex vGap={12}>
                      <Button type="submit" data-testid="button-admin-signin">
                        View applications
                      </Button>
                    </Utility>
                  </Utility>
                </form>
              </Utility>
            </Surface>
          )}

          {error && (
            <SectionMessage messageType="error" data-testid="message-admin-error">
              <SectionMessageContent>
                <Typography variant="body-2">{error}</Typography>
              </SectionMessageContent>
            </SectionMessage>
          )}

          {token && !error && (
            <>
              <Utility vFlex vFlexWrap vAlignItems="center" vJustifyContent="between" vGap={16}>
                <Utility vFlex vAlignItems="center" vGap={12}>
                  <Typography variant="headline-2" tag="h1">
                    Applications
                  </Typography>
                  {count !== null && (
                    <Badge badgeType="stable">{count} total</Badge>
                  )}
                </Utility>
                <Utility vFlex vGap={12}>
                  <Button
                    colorScheme="secondary"
                    onClick={() => load(token)}
                    disabled={loading}
                    data-testid="button-admin-refresh"
                  >
                    {loading ? "Refreshing…" : "Refresh"}
                  </Button>
                  <Button
                    tag="a"
                    href={`/api/applications.csv?token=${encodeURIComponent(token)}`}
                    colorScheme="tertiary"
                    data-testid="button-admin-download"
                  >
                    Download CSV
                  </Button>
                </Utility>
              </Utility>

              {data && data.length === 0 && (
                <SectionMessage messageType="subtle">
                  <SectionMessageContent>
                    <Typography variant="body-2">
                      No applications yet. They'll show up here as people
                      submit the form.
                    </Typography>
                  </SectionMessageContent>
                </SectionMessage>
              )}

              {data && data.length > 0 && (
                <Utility vFlex vFlexCol vGap={16}>
                  {data.map((a) => (
                    <Surface
                      key={a.id}
                      style={{
                        border: "1px solid var(--palette-default-border)",
                        borderRadius: "12px",
                      }}
                      data-testid={`admin-application-${a.id}`}
                    >
                      <Utility vPadding={20} vFlex vFlexCol vGap={12}>
                        <Utility
                          vFlex
                          vFlexWrap
                          vAlignItems="center"
                          vJustifyContent="between"
                          vGap={12}
                        >
                          <Utility vFlex vAlignItems="center" vGap={12}>
                            <Typography variant="subtitle-1" tag="h3">
                              {a.name}
                            </Typography>
                            <Badge badgeType="subtle">Age {a.age}</Badge>
                            {a.affiliation && (
                              <Badge badgeType="subtle">{a.affiliation}</Badge>
                            )}
                          </Utility>
                          <Typography variant="body-3" colorScheme="subtle">
                            {new Date(a.receivedAt).toLocaleString()}
                          </Typography>
                        </Utility>
                        <Typography variant="body-2">{a.reason}</Typography>
                      </Utility>
                    </Surface>
                  ))}
                </Utility>
              )}
            </>
          )}
        </Utility>
      </Utility>
    </div>
  );
}
