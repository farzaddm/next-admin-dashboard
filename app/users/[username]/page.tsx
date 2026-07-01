import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import CardList from "@/components/CardList";
import {Button} from "@/components/ui/button";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {BadgeCheck, Crown, Trophy, Users} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import {Badge} from "@/components/ui/badge";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import EditUser from "@/components/EditUser";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";


const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          <BreadcrumbItem>
            <BreadcrumbPage>Test</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/*CONTAINER*/}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/*LEFT*/}
        <div className="w-full xl:w-1/3 space-y-6">
          {/*BADGES*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-blue-500/50 p-2"/>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">✔️ Verified User</h1>
                  <p className="text-sm text-muted-foreground">This user has been verified by the admin</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Crown size={36} className="rounded-full bg-yellow-500/30 border-yellow-500/50 p-2"/>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">⭐ Premium Member</h1>
                  <p className="text-sm text-muted-foreground">Access to exclusive features and priority support</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Trophy size={36} className="rounded-full bg-green-500/30 border-green-500/50 p-2"/>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">🏆 Task Master</h1>
                  <p className="text-sm text-muted-foreground">Completed over 100 tasks with 95% success rate</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Users size={36} className="rounded-full bg-purple-500/30 border-purple-500/50 p-2"/>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">👥 Team Lead</h1>
                  <p className="text-sm text-muted-foreground">Managing a team of 12 developers across 3 projects</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/*INFORMATION*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <SheetContent>
                  <EditUser/>
                </SheetContent>
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">Profile completion</p>
                <Progress value={84}/>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>farzad.dehghan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Full Name:</span>
                <span>Farzad Dehghan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>farzad@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Tehran, Iran</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Tasks Completed:</span>
                <span className="font-semibold text-green-500">147</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Joined on 2025.01.01</p>

            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions"/>
          </div>
        </div>

        {/*RIGHT*/}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="" alt=""/>
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>

              <h1 className="text-xl font-semibold">Farzad Dehghan</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the
              layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to
              be on design, not content.
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SingleUserPage;