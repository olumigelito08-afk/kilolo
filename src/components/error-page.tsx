export function ErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#edf2f7] px-6 py-16 text-center">
      <img
        src="/images/logo444.svg"
        alt="Supreme Energy"
        width="2064"
        height="512"
        fetchPriority="high"
        decoding="async"
        className="intro-logo-breathe h-auto w-[min(82vw,760px)] bg-[#edf2f7] object-contain"
      />
      <section aria-labelledby="error-title" className="max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-x-6 gap-y-2 sm:flex-row sm:gap-y-0">
          <h1 id="error-title" className="text-3xl font-extrabold text-brand sm:text-5xl">
            Error 404
          </h1>
          <h2 className="text-3xl font-extrabold text-deep sm:text-5xl">PAGE Not Found.</h2>
        </div>
        <p className="mt-6 text-base font-medium leading-relaxed text-deep sm:text-xl">
          Please connect your device to the internet and refresh the page.
        </p>
      </section>
    </main>
  );
}
