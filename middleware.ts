import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default authMiddleware({
  // Called after Clerk checks auth
  afterAuth(auth, req: NextRequest) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.ip ||
      "Unknown IP";

    if (auth.userId) {
      console.log(`🔐 Authenticated user ${auth.userId} accessed ${req.nextUrl.pathname}`);
      console.log(`🌐 IP Address: ${ip}`);
    }

    return NextResponse.next();
  },
});

export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
//to capture IP details
 
