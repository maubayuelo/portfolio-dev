import "./ProjectDesignSystem.scss";
import PropTypes from "prop-types";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import FadeInSection from "../components/FadeInSection";
import useSectionNavigation from "../hooks/useSectionNavigation";

import Img01Cover from "../assets/images/design-system/01-cover.jpg";
import Img02Inconsistencies from "../assets/images/design-system/02-inconsistencies.jpg";
import Img03aButtonVariants from "../assets/images/design-system/03a-button-variants.jpg";
import Img03bHeaderStates from "../assets/images/design-system/03b-header-states.jpg";
import Img03cCheckoutComponents from "../assets/images/design-system/03c-checkout-components.jpg";
import Img04HomeDesktop from "../assets/images/design-system/04-home-desktop.jpg";
import Img04HomePhone from "../assets/images/design-system/04-home-phone.jpg";
import Img05ColorContrast from "../assets/images/design-system/05-color-contrast.jpg";
import Img06FocusBeforeContact from "../assets/images/design-system/06-focus-before-contact.jpg";
import Img06FocusAfterContact from "../assets/images/design-system/06-focus-after-contact.jpg";
import Img06FocusBeforeCart from "../assets/images/design-system/06-focus-before-cart.jpg";
import Img06FocusAfterCart from "../assets/images/design-system/06-focus-after-cart.jpg";
// Full-size boards (same redactions as the web copies), opened from each figure
import Full02Inconsistencies from "../assets/images/design-system/full/02-inconsistencies-full.jpg";
import Full03aButtonVariants from "../assets/images/design-system/full/03a-button-variants-full.jpg";
import Full03bHeaderStates from "../assets/images/design-system/full/03b-header-states-full.jpg";
import Full03cCheckoutComponents from "../assets/images/design-system/full/03c-checkout-components-full.jpg";
import Full05ColorContrast from "../assets/images/design-system/full/05-color-contrast-full.jpg";

// Image captions / alt text (source: shamanicca-design-system-copy.md)
const IMAGES = {
  cover: {
    src: Img01Cover,
    width: 900,
    height: 562,
    alt: "Cover page of the Shamanicca design system in FigCraft, with the logo, title, chapter index and a product image.",
    caption: "The system's cover: tokens taken from the live codebase, imagery taken from the live store.",
  },
  inconsistencies: {
    src: Img02Inconsistencies,
    full: Full02Inconsistencies,
    width: 900,
    height: 1911,
    alt: "Inconsistencies page listing differences between the live site and the design system, each with priority and status.",
    caption: "Every gap between site and system, tracked with a priority and a status. 13 of 22 are now in production.",
  },
  buttonVariants: {
    src: Img03aButtonVariants,
    full: Full03aButtonVariants,
    width: 900,
    height: 974,
    alt: "Master components page showing button variants in three sizes and several states, plus input and badge variants.",
    caption: "Master components with variants. Templates use instances, so a change in one master updates every page.",
  },
  headerStates: {
    src: Img03bHeaderStates,
    full: Full03bHeaderStates,
    width: 900,
    height: 1108,
    alt: "Desktop and mobile header components shown in their different states.",
    caption: "Header states for desktop and mobile, built as variants of one component.",
  },
  colorContrast: {
    src: Img05ColorContrast,
    full: Full05ColorContrast,
    width: 900,
    height: 1462,
    alt: "Color palette with a table of measured WCAG contrast ratios for each text and background pair.",
    caption: "Measured WCAG contrast for every text/background pair in the palette.",
  },
  focusBeforeContact: {
    src: Img06FocusBeforeContact,
    width: 375,
    height: 116,
    alt: "Contact form on a phone before the fix: the focused Name field shows only a thin 1px border.",
    caption: "Before PR #53: keyboard focus is barely visible.",
  },
  focusAfterContact: {
    src: Img06FocusAfterContact,
    width: 375,
    height: 116,
    alt: "Contact form on a phone after the fix: the focused Name field shows a 2px ring with a white gap, and resting field borders are darker.",
    caption: "After PR #53: a 2px focus ring with offset, and field borders at 3:1 contrast.",
  },
  focusBeforeCart: {
    src: Img06FocusBeforeCart,
    width: 480,
    height: 180,
    alt: "Cart page on desktop before the fix: the focused quantity field has only a thin border.",
    caption: "Before PR #53: the cart quantity field in focus.",
  },
  focusAfterCart: {
    src: Img06FocusAfterCart,
    width: 480,
    height: 180,
    alt: "Cart page on desktop after the fix: the focused quantity field shows the 2px focus ring.",
    caption: "After PR #53: the same field, same state. Captured by the same harness from the code before and after the merge.",
  },
  homeDesktop: {
    src: Img04HomeDesktop,
    width: 900,
    height: 2274,
    alt: "Home page template on desktop in the design system, with hero banner, product grid and blog section.",
    caption: "The result: the Home template on desktop, built from component instances that mirror the live store.",
  },
  homePhone: {
    src: Img04HomePhone,
    width: 780,
    height: 2530,
    alt: "Home page template on a phone in the design system.",
    caption: "The same template on a phone.",
  },
  checkoutComponents: {
    src: Img03cCheckoutComponents,
    full: Full03cCheckoutComponents,
    width: 900,
    height: 1976,
    alt: "Prototype components for a custom checkout flow.",
    caption: "Next phase: components for a custom checkout. Prototype, not shipped.",
  },
};

const CaseImage = ({ name, eager = false, className = "" }) => {
  const { src, full, width, height, alt, caption } = IMAGES[name];
  const img = (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
  return (
    <FadeInSection className={className}>
      <figure className="content-img">
        {full ? (
          <a
            href={full}
            className="ds-zoom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full-size image: ${alt}`}
          >
            {img}
          </a>
        ) : (
          img
        )}
        {caption && (
          <figcaption className="type-sz-caption">
            {caption}
            {/* visual hint only; the link's aria-label already says it opens full size */}
            {full && (
              <span className="type-sz-caption-2 ds-zoom-hint" aria-hidden="true">
                <span className="ds-zoom-hint-tap">Tap to view full size</span>
                <span className="ds-zoom-hint-click">Click to view full size</span>
              </span>
            )}
          </figcaption>
        )}
      </figure>
    </FadeInSection>
  );
};

CaseImage.propTypes = {
  name: PropTypes.oneOf(Object.keys(IMAGES)).isRequired,
  eager: PropTypes.bool,
  className: PropTypes.string,
};

// External links: new tab, icon as in ProjectCard, and a screen-reader note
const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <FiExternalLink className="ds-external-icon" aria-hidden="true" />
    <span className="ds-sr-only"> (opens in a new tab)</span>
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const headingClass = "type-sz-xsm type-bold type-uppercase margin-top-md margin-bottom-sm";
const subheadingClass = "type-sz-xsm type-bold margin-top-md margin-bottom-sm";

const ProjectDesignSystem = () => {
  const handleNavigation = useSectionNavigation();

  return (
    <main className="project-design-system">
      {/* Hero */}
      <header className="header-project">
        <FadeInSection>
          <div className="container">
            <div className="content">
              <h1 className="type-sz-md type-bold type-center margin-top-md">
                Shamanicca Design System <span className="project-tag">Case Study</span>
              </h1>
              <p className="type-center">
                A design system built from a live store rather than a blank canvas. I
                extracted the visual language from production code, documented it as
                reusable components, measured where the site and the system disagreed,
                and shipped the fixes back to production.
              </p>
            </div>
          </div>
        </FadeInSection>
      </header>

      <div className="container padding-bottom-lg">
        <CaseImage name="cover" eager />

        <div className="ds-home-pair">
          <CaseImage name="homeDesktop" className="ds-home-desktop" />
          <CaseImage name="homePhone" className="ds-home-phone" />
        </div>

        <section className="content" aria-labelledby="ds-role">
          <h2 id="ds-role" className={headingClass}>
            Role &amp; stack
          </h2>
          <ul>
            <li>
              <p>
                <strong>Role:</strong> Front-end developer and UX/UI designer. Solo
                project, I own the product.
              </p>
            </li>
            <li>
              <p>
                <strong>Product:</strong>{" "}
                <ExternalLink href="https://shamanicca.com/">shamanicca.com</ExternalLink>, a
                headless eCommerce store (independent product). Code:{" "}
                <ExternalLink href="https://github.com/maubayuelo/shamanicca-ecommerce-graphql">
                  GitHub repository
                </ExternalLink>
              </p>
            </li>
            <li>
              <p>
                <strong>Stack:</strong> Next.js 15, React 18, TypeScript, Tailwind CSS
                v4, headless WordPress / WooCommerce (WPGraphQL + REST), Vercel, GitHub
                Actions
              </p>
            </li>
            <li>
              <p>
                <strong>Design tool:</strong> FigCraft
              </p>
            </li>
            <li>
              <p>
                <strong>Verification:</strong> ESLint, TypeScript, Vitest, and a custom
                Playwright capture harness for before/after screenshots
              </p>
            </li>
            <li>
              <p>
                <strong>AI assistance:</strong> Claude and Claude Code, working under
                the review rules described below
              </p>
            </li>
            <li>
              <p>
                <strong>Timeline:</strong> October 2026
              </p>
            </li>
          </ul>
        </section>

        <section className="content" aria-labelledby="ds-glance">
          <h2 id="ds-glance" className={headingClass}>
            At a glance
          </h2>
          <p>
            17 master components and 58 variants, each one traced back to the live
            site. Buttons come in three fixed sizes and every state, and the header
            adapts across desktop and mobile. The page templates are assembled from
            these pieces, not drawn screen by screen.
          </p>
        </section>
        <CaseImage name="buttonVariants" />
        <CaseImage name="headerStates" />

        <section className="content" aria-labelledby="ds-problem">
          <h2 id="ds-problem" className={headingClass}>
            The problem
          </h2>
          <p>
            Shamanicca is a live store, not a design exercise. After a large migration
            from SCSS to Tailwind CSS, the interface worked, but its design language
            lived only in code. No document showed the system as a whole, so there was
            no way to tell a deliberate decision from an accident.
          </p>
          <p>A closer look turned up concrete issues:</p>
          <ul>
            <li>
              <p>form controls fell back to the browser&apos;s default font;</p>
            </li>
            <li>
              <p>corner radii and spacing had drifted into one-off values;</p>
            </li>
            <li>
              <p>form fields had no clear keyboard focus state;</p>
            </li>
            <li>
              <p>the red used for SALE labels and errors failed WCAG AA contrast.</p>
            </li>
          </ul>
        </section>
        <CaseImage name="inconsistencies" />

        <section className="content" aria-labelledby="ds-approach">
          <h2 id="ds-approach" className={headingClass}>
            The approach
          </h2>
          <h3 className={subheadingClass}>1. Production is the source of truth.</h3>
          <p>
            I didn&apos;t design an idealized mockup. I rebuilt the system from what
            actually ships: the Tailwind tokens in the live codebase, a styles
            inventory, and 750 automated captures of the site.
          </p>
          <h3 className={subheadingClass}>2. A file that can be regenerated.</h3>
          <p>
            A script builds the design file from the code&apos;s tokens and the 53
            product and blog images the live store actually uses. Every change regenerates it, so the file can&apos;t
            drift from the code through manual edits.
          </p>
          <h3 className={subheadingClass}>3. Audit → decide → fix → mirror.</h3>
          <p>
            Every gap between what the site does and what the system says went onto an
            inconsistencies page, each with a priority and a status. I decided the
            target for each one. Fixes shipped as small, isolated pull requests, and
            each merged fix was mirrored back into the system.
          </p>
          <h3 className={subheadingClass}>4. Components, not drawings.</h3>
          <p>
            Eight page templates (desktop and phone) are built from instances of 17
            master components with 58 variants: buttons, inputs, badges, header states,
            product cards and more. Change a master and every template updates.
          </p>
          <p>
            The design file&apos;s documentation is written in Spanish, my working
            language with this product. The product&apos;s GitHub repository and the
            interface it documents are in English.
          </p>
          <h3 className={subheadingClass}>5. A harness that checks every pixel.</h3>
          <p>
            Speed from AI only counts if the result can be trusted, so every visual
            change goes through a verification harness built for this repository with
            Claude Code, under my review. Recorded API responses and a shared media
            cache make every capture repeatable. A full sweep takes 138 screenshots per
            side (25 routes at several viewports, plus 52 interaction states such as
            focus, hover and open menus) and compares them pixel by pixel. The rule is
            strict: any pixel difference blocks the change until its cause can be
            named. The same harness held the earlier SCSS-to-Tailwind migration to a
            zero-visual-change standard, and it produced the before/after pairs further
            down this page.
          </p>
        </section>
        <CaseImage name="colorContrast" />

        <section className="content" aria-labelledby="ds-production">
          <h2 id="ds-production" className={headingClass}>
            What changed in production
          </h2>
          <p>
            22 inconsistencies were documented.{" "}
            <strong>
              13 shipped to production through four reviewed pull requests
            </strong>
            , and the other 9 are scoped for the next phase.
          </p>
          <ul>
            <li>
              <p>
                <strong>PR #52 — Controls.</strong> Form controls now inherit Poppins.
                Added a shared corner-radius token (10px) and a three-size button scale
                with fixed heights (40 / 48 / 54px).
              </p>
            </li>
            <li>
              <p>
                <strong>PR #53 — Accessibility.</strong> Added a visible 2px keyboard
                focus ring with a 2px offset. Field borders now reach 3:1 contrast, and
                placeholder and help text reach at least 4.5:1.
              </p>
            </li>
            <li>
              <p>
                <strong>PR #54 — Color and type.</strong> The SALE / error red went
                from 4.20:1 to 5.06:1 against white, which passes WCAG AA. CMS headings
                and desktop navigation now follow the type scale.
              </p>
            </li>
            <li>
              <p>
                <strong>PR #55 — Tokens.</strong> Replaced loose color, shadow and
                spacing values with system tokens.
              </p>
            </li>
          </ul>
          <p>
            Every pull request passed lint, typecheck and tests in CI before merge. The
            before/after screenshots below come from the same capture harness run
            against the code before and after PR #53.
          </p>
        </section>
        <div className="ds-pair">
          <CaseImage name="focusBeforeContact" />
          <CaseImage name="focusAfterContact" />
        </div>
        <div className="ds-pair">
          <CaseImage name="focusBeforeCart" />
          <CaseImage name="focusAfterCart" />
        </div>

        <section className="content" aria-labelledby="ds-ai">
          <h2 id="ds-ai" className={headingClass}>
            My role vs. AI&apos;s role
          </h2>
          <ul>
            <li>
              <p>
                <strong>Me.</strong> I was the product owner and decision-maker. I set
                the rule (mirror production, don&apos;t invent), chose every target
                value and trade-off, reviewed each proposal, approved what shipped, and
                checked the components in the design tool myself.
              </p>
            </li>
            <li>
              <p>
                <strong>Claude.</strong> Analyzed the captures and the code, and wrote
                the script that generates the design file.
              </p>
            </li>
            <li>
              <p>
                <strong>Claude Code.</strong> Working inside the repository&apos;s own
                rules, it ran the captures and the verification harness and implemented
                the pull requests I approved.
              </p>
            </li>
            <li>
              <p>
                <strong>Guardrails.</strong> Nothing merged without my approval. Every
                pull request went through lint, typecheck, tests and before/after visual
                captures. The design file changes only through the generator.
              </p>
            </li>
          </ul>
        </section>

        <section className="content" aria-labelledby="ds-learned">
          <h2 id="ds-learned" className={headingClass}>
            What I learned
          </h2>
          <ul>
            <li>
              <p>
                <strong>
                  A system extracted from production earns trust faster than one
                  imposed on it.
                </strong>{" "}
                Every token traces back to a real use in the code.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  AI speeds up analysis and implementation, but trust comes from
                  verification.
                </strong>{" "}
                My first component test looked like a bug. Checking it in the real tool
                showed it was variant naming and defaults, and I fixed that.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  Once tokens existed, the accessibility fixes were the cheapest and
                  highest-value changes.
                </strong>
              </p>
            </li>
          </ul>
        </section>

        <section className="content" aria-labelledby="ds-next">
          <h2 id="ds-next" className={headingClass}>
            What&apos;s next
          </h2>
          <p>Phase 2 is planned, not done:</p>
          <ul>
            <li>
              <p>product states (SALE, out of stock);</p>
            </li>
            <li>
              <p>newsletter popup and announcement bar;</p>
            </li>
            <li>
              <p>a reviewed type scale;</p>
            </li>
            <li>
              <p>native auto layout in the design file;</p>
            </li>
            <li>
              <p>a custom checkout, currently at the prototype stage (shown below).</p>
            </li>
          </ul>
        </section>
        <CaseImage name="checkoutComponents" />

        <div className="content padding-bottom-md">
          <button
            type="button"
            className="btn btn_comp type-uppercase type-bold margin-top-lg center-block margin-bottom-xlg"
            onClick={() => handleNavigation("section_portfolio")}
          >
            <FiArrowLeft className="margin-right-xsm" /> Go To Portfolio
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProjectDesignSystem;
