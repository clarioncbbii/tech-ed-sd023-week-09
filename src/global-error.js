"use client"; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong! Here, let&apos;s get you back on track.</h2>
        <button onClick={() => reset()}>HOME</button>
      </body>
    </html>
  );
}
