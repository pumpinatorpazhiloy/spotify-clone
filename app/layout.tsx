import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SideBar from "./components/SideBar";
import SupabaseProvider from "./providers/supabaseProvider";
import UserProvider from "./providers/UserProvider";
import ModalProvider from "./providers/ModalProvider";
import ToasterProvider from "./providers/Toaster";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
			<ToasterProvider/>
			<SupabaseProvider>
				<UserProvider>
					<ModalProvider/>
					<SideBar>
						{children}
					</SideBar>
				</UserProvider>
			</SupabaseProvider>
		</body>
    </html>
  );
}
