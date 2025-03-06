import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import {
  ChevronDown,
  FileTextIcon,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
const Header =  async() => {
  await checkUser();
  return (
    <header className="fixed top-0 border-b w-full bg-background/80 backdrop-blur-lg backdrop-filter z-50">
      <nav className="contianer mx-auto flex justify-between items-center px-4">
        <Link href={"/"}>
          <Image
            className="bg-transparent"
            src={"/logo.svg"}
            width={200}
            height={200}
            alt="LogoImage"
          />
        </Link>
        <div className="flex itmes-center space-x-2 md:space-x-4">
          <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block ">Growth tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileTextIcon className="h-4 w-4"/>
                  <span className="hidden md:block ">Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/ai-cover-letter"}
                  className="flex items-center gap-2"
                >
                  <PenBox className="h-4 w-4" />
                  <span className="hidden md:block ">Cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/interview"}
                  className="flex items-center gap-2"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden md:block ">InterView Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant={'outline'}>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
             appearance={{
               elements: {
                 avatarBox:"w-10 h-10",
                 userButtonPopoverActionCard:'shadow-xl',
                 userPreviewMainIdentifier:'font-semibold'
               },
             }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
