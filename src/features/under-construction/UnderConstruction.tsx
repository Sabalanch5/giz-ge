import { getTranslations } from 'next-intl/server';

/**
 * Under-construction landing page content.
 * Server Component — no client state needed here.
 */
export async function UnderConstruction({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'underConstruction' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  return (
    <main className="bg-background relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background decoration - Blueprint / Logistics Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Soft industrial glows */}
      <div className="bg-primary/10 pointer-events-none absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full blur-[120px]" />
      <div className="bg-primary/5 pointer-events-none absolute right-[-10%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full blur-[100px]" />

      <div className="z-10 mx-auto flex w-full max-w-2xl flex-col items-center space-y-12 text-center">
        {/* Animated Warehousing SVG Graphic */}
        <div className="relative flex h-40 w-40 items-center justify-center">
          {/* Outer rotating dashed ring (Radar/Scanner effect) */}
          <svg
            className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary/30"
              strokeDasharray="10 10"
            />
            {/* Scanner tracking points */}
            <circle
              cx="50"
              cy="2"
              r="2.5"
              className="fill-primary drop-shadow-[0_0_5px_rgba(var(--color-primary),1)]"
            />
            <circle
              cx="50"
              cy="98"
              r="2.5"
              className="fill-primary drop-shadow-[0_0_5px_rgba(var(--color-primary),1)]"
            />
          </svg>

          {/* Inner rotating solid ring (Reverse) */}
          <svg
            className="absolute inset-3 h-34 w-34 animate-[spin_15s_linear_infinite_reverse]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground/20"
              strokeDasharray="20 5 5 5"
            />
          </svg>

          {/* Center Isometric Package / Logistics Box with hover float effect */}
          <div className="animate-[bounce_4s_ease-in-out_infinite] drop-shadow-[0_10px_15px_rgba(var(--color-primary),0.25)]">
            <svg
              className="text-primary h-16 w-16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Main box shape */}
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
              {/* Inner details / flaps */}
              <path d="m17 14.5-5-3-5 3" />
              <path d="M12 12 7.5 9.5" />
            </svg>
          </div>

          {/* Base shadow for 3D float effect */}
          <div className="bg-foreground/10 absolute bottom-5 left-1/2 h-1.5 w-14 -translate-x-1/2 animate-[pulse_4s_ease-in-out_infinite] rounded-[100%] blur-[4px]" />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
              {tc('siteName')}
            </p>
            <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-6xl">
              {t('heading')}
            </h1>
          </div>
          <div className="mx-auto max-w-md space-y-3">
            <p className="text-foreground text-lg font-medium sm:text-xl">{t('subheading')}</p>
            <p className="text-foreground-muted text-base">{t('description')}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="via-border-strong h-px w-24 bg-gradient-to-r from-transparent to-transparent" />

        {/* Contact Info Card */}
        <div className="border-border bg-surface/50 hover:bg-surface/80 w-full max-w-sm rounded-2xl border p-6 shadow-sm backdrop-blur-md transition-colors">
          <h2 className="text-foreground-muted mb-5 text-xs font-bold tracking-widest uppercase">
            {t('contact')}
          </h2>
          <div className="flex flex-col space-y-4">
            <a
              href={`mailto:${t('email')}`}
              className="group text-foreground hover:text-primary flex items-center gap-4 transition-colors"
            >
              <div className="border-border bg-background group-hover:border-primary/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-medium">{t('email')}</span>
            </a>
            <a
              href={`tel:${t('phone').replace(/\s/g, '')}`}
              className="group text-foreground hover:text-primary flex items-center gap-4 transition-colors"
            >
              <div className="border-border bg-background group-hover:border-primary/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="font-medium" dir="ltr">
                {t('phone')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
