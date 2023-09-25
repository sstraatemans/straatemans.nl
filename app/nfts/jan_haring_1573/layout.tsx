export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Kadena / @straatemans</h1>
      {children}
    </div>
  );
}
