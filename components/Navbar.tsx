import {LogOut, Moon, Settings, User} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import avatar from "../assets/avatar.png";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav>
      navbar
      <div className="flex flex-row justify-between">
        dashboard
        <div className="flex flex-row gap-4 mx-3">

          <Moon/>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={avatar.src} alt="Avatar"/>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem><User className="mr-1"/> Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-1"/> Setting</DropdownMenuItem>
              <DropdownMenuSeparator/>
              <DropdownMenuItem variant="destructive"><LogOut className="mr-1"/> Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;