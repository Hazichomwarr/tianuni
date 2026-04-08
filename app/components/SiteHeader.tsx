// // components/SiteHeader.tsx

// import Link from "next/link";
// import Image from "next/image";
// import Container from "./Container";
// import { ROUTES } from "../_lib/siteRoutes";
// import { HEADER_NAV } from "../_lib/nav";

// export default function SiteHeader() {
//   return (
//     <header className="border-b">
//       <Container>
//         {/* LOGO */}
//         <div className="flex items-center justify-between py-4">
//           <Link href={ROUTES.home} className="flex items-center gap-3">
//             <Image
//               src="/logo2.jpeg"
//               alt="Association Tianuni"
//               width={90}
//               height={90}
//               priority
//               className="rounded-full bg-gray-100 shadow-lg p-1.5 object-contain"
//               sizes="(max-width: 768px) 56px, 64px"
//             />

//             <span className="sr-only">Tianuni</span>
//           </Link>

//           {/* Nav links */}
//           <nav className="hidden gap-6 md:flex">
//             {HEADER_NAV.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className=" text-neutral-700 transition duration-200 hover:text-neutral-900 hover:underline"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA */}
//           <div className="flex items-center gap-2">
//             <Link
//               href={ROUTES.participate}
//               className="rounded-md border px-3 py-2 text-sm hover:bg-neutral-50"
//             >
//               Participer
//             </Link>
//             <Link
//               href={ROUTES.contact}
//               className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800 "
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { ROUTES } from "../_lib/siteRoutes";
import { HEADER_NAV } from "../_lib/nav";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* LOGO */}
          <Link href={ROUTES.home} className="flex items-center gap-3">
            <Image
              src="/logo2.jpeg"
              alt="Association Tianuni"
              width={90}
              height={90}
              priority
              className="rounded-full bg-gray-100 p-1.5 object-contain shadow-lg"
              sizes="(max-width: 768px) 56px, 64px"
            />
            <span className="sr-only">Tianuni</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-6 md:flex">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-700 transition hover:text-neutral-900 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={ROUTES.participate}
              className="rounded-md border px-3 py-2 text-sm hover:bg-neutral-50"
            >
              Participer
            </Link>
            <Link
              href={ROUTES.contact}
              className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800"
            >
              Contact
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-4 border-t pt-4">
              {HEADER_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-700 hover:text-neutral-900"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href={ROUTES.participate}
                  onClick={() => setOpen(false)}
                  className="rounded-md border px-3 py-2 text-sm text-center hover:bg-neutral-50"
                >
                  Participer
                </Link>
                <Link
                  href={ROUTES.contact}
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white text-center hover:bg-neutral-800"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
