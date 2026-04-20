import { useState, type FormEvent } from "react";
import {
  Button,
  Checkbox,
  Input,
  InputContainer,
  InputMessage,
  Label,
  SectionMessage,
  SectionMessageContent,
  Textarea,
  Typography,
  Utility,
} from "@visa/nova-react";
import CheckmarkTiny from "@visa/nova-icons-react/generic/checkmark-tiny";
import { eventConfig } from "@/config/event";
import { useEventStatus } from "@/hooks/use-event-status";

type FormState = {
  name: string;
  age: string;
  affiliation: string;
  reason: string;
  laptopAck: boolean;
};

const initial: FormState = {
  name: "",
  age: "",
  affiliation: "",
  reason: "",
  laptopAck: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const eventStatus = useEventStatus();

  if (eventStatus?.closed) {
    return (
      <SectionMessage messageType="warning" data-testid="message-apply-closed">
        <SectionMessageContent>
          <Typography variant="subtitle-1" tag="h3">
            Applications are closed
          </Typography>
          <Typography variant="body-2" colorScheme="subtle">
            We stopped accepting applications on{" "}
            {eventConfig.meta.deadlineLong} so the team has time to review
            submissions and confirm attendees ahead of {eventConfig.meta.dateLong}.
            If you applied and haven't heard back, please check your email
            (including spam).
          </Typography>
        </SectionMessageContent>
      </SectionMessage>
    );
  }

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    const ageNum = Number(form.age);
    if (!form.age.trim() || Number.isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      e.age = "Please enter a valid age.";
    }
    if (!form.reason.trim() || form.reason.trim().length < 10) {
      e.reason = "Tell us a sentence or two about why you'd like to join.";
    }
    if (!form.laptopAck) {
      e.laptopAck = "Please confirm you understand laptops are required.";
    }
    return e;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(eventConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          age: Number(form.age),
          affiliation: form.affiliation.trim() || null,
          reason: form.reason.trim(),
          laptopAcknowledged: form.laptopAck,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <SectionMessage messageType="success" data-testid="message-apply-success">
        <Utility vFlex vGap={12} vPaddingVertical={4}>
          <CheckmarkTiny aria-hidden style={{ marginTop: "4px" }} />
          <SectionMessageContent>
            <Typography variant="subtitle-1" tag="h3">
              Application received
            </Typography>
            <Typography variant="body-2" colorScheme="subtle">
              Thanks for applying. We review applications as they come in and will
              email you a confirmation with the exact address if you're confirmed.
              Remember: <strong>laptops are required</strong> to participate.
            </Typography>
            <Utility vMarginTop={12}>
              <Button
                colorScheme="tertiary"
                onClick={() => setStatus("idle")}
                data-testid="button-apply-again"
              >
                Submit another application
              </Button>
            </Utility>
          </SectionMessageContent>
        </Utility>
      </SectionMessage>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate data-testid="form-apply">
      <Utility vFlex vFlexCol vGap={20}>
        {status === "error" && (
          <SectionMessage messageType="error" data-testid="message-apply-error">
            <SectionMessageContent>
              <Typography variant="body-2">
                Something went wrong submitting your application. Please try again
                in a moment.
              </Typography>
            </SectionMessageContent>
          </SectionMessage>
        )}

        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor="apply-name">Name</Label>
          <InputContainer>
            <Input
              id="apply-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "apply-name-msg" : undefined}
              data-testid="input-apply-name"
            />
          </InputContainer>
          {errors.name && (
            <InputMessage id="apply-name-msg" role="alert">
              {errors.name}
            </InputMessage>
          )}
        </Utility>

        <Utility
          vGap={20}
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <Utility vFlex vFlexCol vGap={4}>
            <Label htmlFor="apply-age">Age</Label>
            <InputContainer>
              <Input
                id="apply-age"
                name="age"
                type="number"
                min={1}
                max={120}
                required
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                aria-invalid={Boolean(errors.age)}
                aria-describedby={errors.age ? "apply-age-msg" : undefined}
                data-testid="input-apply-age"
              />
            </InputContainer>
            {errors.age && (
              <InputMessage id="apply-age-msg" role="alert">
                {errors.age}
              </InputMessage>
            )}
          </Utility>

          <Utility vFlex vFlexCol vGap={4}>
            <Label htmlFor="apply-affiliation">
              Company or school{" "}
              <Typography
                variant="body-3"
                tag="span"
                colorScheme="subtle"
              >
                (optional)
              </Typography>
            </Label>
            <InputContainer>
              <Input
                id="apply-affiliation"
                name="affiliation"
                type="text"
                value={form.affiliation}
                onChange={(e) => update("affiliation", e.target.value)}
                data-testid="input-apply-affiliation"
              />
            </InputContainer>
          </Utility>
        </Utility>

        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor="apply-reason">Why do you want to participate?</Label>
          <InputContainer>
            <Textarea
              id="apply-reason"
              name="reason"
              rows={4}
              required
              placeholder="A sentence or two is plenty — what are you hoping to learn or build?"
              value={form.reason}
              onChange={(e) => update("reason", e.target.value)}
              aria-invalid={Boolean(errors.reason)}
              aria-describedby={errors.reason ? "apply-reason-msg" : undefined}
              data-testid="input-apply-reason"
            />
          </InputContainer>
          {errors.reason && (
            <InputMessage id="apply-reason-msg" role="alert">
              {errors.reason}
            </InputMessage>
          )}
        </Utility>

        <Utility vFlex vGap={12} vAlignItems="start">
          <Checkbox
            id="apply-laptop"
            name="laptopAck"
            required
            checked={form.laptopAck}
            onChange={(e) => update("laptopAck", e.target.checked)}
            aria-invalid={Boolean(errors.laptopAck)}
            aria-describedby={errors.laptopAck ? "apply-laptop-msg" : undefined}
            data-testid="checkbox-apply-laptop"
          />
          <Utility vFlex vFlexCol vGap={4}>
            <Label htmlFor="apply-laptop">
              I understand laptops are required to participate.
            </Label>
            {errors.laptopAck && (
              <InputMessage id="apply-laptop-msg" role="alert">
                {errors.laptopAck}
              </InputMessage>
            )}
          </Utility>
        </Utility>

        <Utility vFlex vFlexWrap vAlignItems="center" vGap={16} vMarginTop={4}>
          <Button
            type="submit"
            buttonSize="large"
            disabled={status === "submitting"}
            data-testid="button-apply-submit"
          >
            {status === "submitting" ? "Submitting…" : "Submit application"}
          </Button>
          <Typography variant="body-3" colorScheme="subtle">
            Limited seats. Confirmation by email.
          </Typography>
        </Utility>
      </Utility>
    </form>
  );
}
