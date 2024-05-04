export default function RootDashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="tw-relative tw-bg-whiten">{children}</div>
      </body>
    </html>
  );
}
