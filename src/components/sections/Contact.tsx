"use client";

import { InstagramOutlined, MailOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import { MotionFadeUp, MotionSection } from "@/components/ui/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/lib/constants";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const social = [
  { icon: <YoutubeOutlined />, href: "https://youtube.com", label: "Youtube" },
  { icon: <InstagramOutlined />, href: "https://instagram.com", label: "Instagram" },
];

export function Contact() {
  const [form] = Form.useForm<ContactForm>();

  const onFinish = (values: ContactForm) => {
    console.log("Contact submission:", values);
  };

  return (
    <MotionSection
      id={SECTION_IDS.contact}
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-[#080808] border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reach out"
          title="Contact Us"
          subtitle="Let&apos;s shape your next experience into something unforgettable. Send a note — we&apos;ll get back to you shortly."
        />

        <Row gutter={[40, 40]}>
          <Col xs={24} lg={14}>
            <MotionFadeUp>
              <div className="rounded-xl border border-white/[0.08] bg-zinc-900/40 p-6 md:p-8 shadow-[0_0_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <Form<ContactForm>
                  form={form}
                  layout="vertical"
                  requiredMark={false}
                  onFinish={onFinish}
                  className="contact-form"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input size="large" placeholder="Your name" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                  >
                    <Input size="large" placeholder="you@company.com" />
                  </Form.Item>
                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: "Tell us about your project" }]}
                  >
                    <Input.TextArea
                      rows={5}
                      placeholder="Dates, cities, format, audience…"
                      className="!resize-none"
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    className="!h-12 !rounded-lg !font-semibold"
                  >
                    Send
                  </Button>
                </Form>
              </div>
            </MotionFadeUp>
          </Col>

          <Col xs={24} lg={10}>
            <MotionFadeUp delay={0.1}>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5b00]/90 mb-4">
                    Connect With Us
                  </p>
                  <div className="flex gap-4">
                    {social.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] !text-white hover:bg-[#ff5b00] hover:!text-white hover:border-[#ff5b00] transition-colors"
                        aria-label={s.label}
                      >
                        {s.icon}
                      </a>
                    ))}
                    <a
                      href="mailto:hello@irenicevents.com"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] !text-white hover:bg-[#ff5b00] hover:!text-white hover:border-[#ff5b00] transition-colors"
                      aria-label="Email"
                    >
                      <MailOutlined />
                    </a>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@irenicevents.com"
                      className="!text-zinc-400 hover:!text-[#ff5b00] transition-colors"
                    >
                      hello@irenicevents.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+0000000000"
                      className="!text-zinc-400 hover:!text-[#ff5b00] transition-colors"
                    >
                      +00 000 000 0000
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      Location
                    </p>
                    <p className="text-zinc-400">Mumbai, India</p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/[0.08] aspect-[4/3] min-h-[200px] bg-zinc-900">
                  <iframe
                    title="Office location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571358398!2d72.74109995!3d19.08219765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full grayscale opacity-85 hover:grayscale-[30%] transition-all"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </MotionFadeUp>
          </Col>
        </Row>
      </div>
    </MotionSection>
  );
}
