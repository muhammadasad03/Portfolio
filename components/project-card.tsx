import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  name: string
  description: string
  image?: string
  playStoreUrl?: string
  appStoreUrl?: string
  websiteUrl?: string
  tags: string[]
}

export function ProjectCard({
  name,
  description,
  image,
  playStoreUrl,
  appStoreUrl,
  websiteUrl,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5">
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${name} project screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{name}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {websiteUrl && (
          <Button variant="default" size="sm" asChild className="gap-2">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              Website
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        )}
        {playStoreUrl && (
          <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
              Play Store
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        )}
        {appStoreUrl && (
          <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
              App Store
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        )}
      </div>
    </Card>
  )
}
