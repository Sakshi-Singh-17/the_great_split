import "./globals.css";


const metadata = {
  title: "Cine Stream",
  description: "Popular movies",
};

export { metadata};

function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
        { children}
      </body>
    </html>
  );
}
export default RootLayout;
