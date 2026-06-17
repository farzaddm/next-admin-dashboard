import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const popularContent = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    badge: "Tutorial",
    image: "https://picsum.photos/id/0/40/40",
    count: 18420,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS Layouts",
    badge: "Design",
    image: "https://picsum.photos/id/20/40/40",
    count: 14305,
  },
  {
    id: 3,
    title: "TypeScript Best Practices in 2024",
    badge: "Article",
    image: "https://picsum.photos/id/48/40/40",
    count: 11980,
  },
  {
    id: 4,
    title: "Building a SaaS with Supabase",
    badge: "Video",
    image: "https://picsum.photos/id/60/40/40",
    count: 9870,
  },
  {
    id: 5,
    title: "React Server Components Explained",
    badge: "Tutorial",
    image: "https://picsum.photos/id/96/40/40",
    count: 8654,
  },
]


export const latestTransactions = [
  {
    id: 1,
    title: "Pro Plan — Farzad Dehghan",
    badge: "Subscription",
    image: "https://picsum.photos/id/10/40/40",
    count: 49,
  },
  {
    id: 2,
    title: "One-time Purchase — Sara Loren",
    badge: "Purchase",
    image: "https://picsum.photos/id/21/40/40",
    count: 129,
  },
  {
    id: 3,
    title: "Team Plan — Acme Corp",
    badge: "Subscription",
    image: "https://picsum.photos/id/30/40/40",
    count: 299,
  },
  {
    id: 4,
    title: "Refund — James Martin",
    badge: "Refund",
    image: "https://picsum.photos/id/42/40/40",
    count: -49,
  },
  {
    id: 5,
    title: "Enterprise Plan — Globex Inc",
    badge: "Subscription",
    image: "https://picsum.photos/id/55/40/40",
    count: 799,
  },
]
const CardList= ({title}: {title: string}) => {
  const list = title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div>
      <h1 className="text-lg font-medium">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item, index) => (
          <Card key={index} className="p-3">
            <div className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-md relative overflow-hidden shrink-0">
                <Image src={item.image} alt={item.title} fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-1 items-center justify-between min-w-0">
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <Badge variant="secondary" className="w-fit text-xs">{item.badge}</Badge>
                </div>
                <span className="text-sm font-semibold text-muted-foreground shrink-0 ml-3">
                  {item.count < 0 ? `-$${Math.abs(item.count)}` : item.count >= 1000 ? `${(item.count / 1000).toFixed(1)}K` : item.count}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CardList;