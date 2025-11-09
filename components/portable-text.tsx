import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type {
  BlockContent,
  ContentBlock,
  ImageBlock,
  TextSpan,
  LinkAnnotation,
} from "@/lib/types";
import { getOptimizedImageUrl } from "@/lib/sanity";

interface PortableTextProps {
  value: ContentBlock[];
}

export function PortableText({ value }: PortableTextProps) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-strong:text-foreground">
      {value.map((block, idx) => {
        if (block._type === "imageBlock") {
          const imageBlock = block as ImageBlock;
          return (
            <ImageBlockRenderer key={block._key || idx} block={imageBlock} />
          );
        }

        if (block._type === "block") {
          const textBlock = block as BlockContent;
          return (
            <TextBlockRenderer key={block._key || idx} block={textBlock} />
          );
        }

        return null;
      })}
    </div>
  );
}

function TextBlockRenderer({ block }: { block: BlockContent }) {
  const style = block.style || "normal";
  const content = renderChildren(block.children, block.markDefs);

  // Handle list items
  if (block.listItem === "bullet") {
    return (
      <ul className="list-disc list-inside my-2!">
        <li className="text-foreground/90">{content}</li>
      </ul>
    );
  }

  if (block.listItem === "number") {
    return (
      <ol className="list-decimal list-inside my-2!">
        <li className="text-foreground/90">{content}</li>
      </ol>
    );
  }

  // Handle different text styles
  switch (style) {
    case "h1":
      return (
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight my-6! text-foreground">
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight my-5! text-foreground">
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight my-4! text-foreground">
          {content}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-xl sm:text-2xl font-semibold tracking-tight my-3! text-foreground">
          {content}
        </h4>
      );
    case "blockquote":
      return (
        <blockquote className="border-l-4 border-brand-primary pl-6 italic my-6 text-foreground/80 bg-muted/50 py-4 rounded-r-lg">
          {content}
        </blockquote>
      );
    default:
      return (
        <p className="text-base sm:text-lg leading-relaxed text-foreground/90 my-4">
          {content}
        </p>
      );
  }
}

function renderChildren(
  children: TextSpan[],
  markDefs?: LinkAnnotation[]
): React.ReactNode {
  return children.map((child, idx) => {
    let text: React.ReactNode = child.text;
    const marks = child.marks || [];

    // Apply text decorators
    if (marks.includes("strong")) {
      text = (
        <strong key={`strong-${idx}`} className="font-bold text-foreground">
          {text}
        </strong>
      );
    }
    if (marks.includes("em")) {
      text = (
        <em key={`em-${idx}`} className="italic">
          {text}
        </em>
      );
    }
    if (marks.includes("underline")) {
      text = (
        <span key={`underline-${idx}`} className="underline">
          {text}
        </span>
      );
    }
    if (marks.includes("code")) {
      text = (
        <code
          key={`code-${idx}`}
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        >
          {text}
        </code>
      );
    }

    // Apply link annotations
    const linkMark = marks.find((mark) =>
      markDefs?.some((def) => def._key === mark)
    );

    if (linkMark && markDefs) {
      const linkDef = markDefs.find((def) => def._key === linkMark);
      if (linkDef) {
        text = (
          <Link
            key={`link-${idx}`}
            href={linkDef.href}
            className="text-brand-primary hover:text-brand-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </Link>
        );
      }
    }

    return <Fragment key={child._key || idx}>{text}</Fragment>;
  });
}

function ImageBlockRenderer({ block }: { block: ImageBlock }) {
  const { layout, images } = block;

  switch (layout) {
    case "single":
      return (
        <figure>
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl">
            <Image
              src={
                getOptimizedImageUrl(images[0]?.asset, 1200, 600) ||
                "/placeholder.svg"
              }
              alt={
                images[0]?.asset?.alt ||
                images[0]?.caption ||
                "Case study image"
              }
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {images[0]?.caption && (
            <figcaption className="mt-4 text-center text-sm text-muted-foreground italic">
              {images[0].caption}
            </figcaption>
          )}
        </figure>
      );

    case "two":
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {images.slice(0, 2).map((image, idx) => (
            <figure key={image._key || idx}>
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl">
                <Image
                  src={
                    getOptimizedImageUrl(image?.asset, 600, 400) ||
                    "/placeholder.svg"
                  }
                  alt={
                    image?.asset?.alt || image?.caption || `Image ${idx + 1}`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {image?.caption && (
                <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "three":
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 3).map((image, idx) => (
            <figure key={image._key || idx}>
              <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src={
                    getOptimizedImageUrl(image?.asset, 400, 300) ||
                    "/placeholder.svg"
                  }
                  alt={
                    image?.asset?.alt || image?.caption || `Image ${idx + 1}`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {image?.caption && (
                <figcaption className="mt-3 text-center text-xs text-muted-foreground italic">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "grid":
      return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.slice(0, 8).map((image, idx) => (
            <figure key={image._key || idx}>
              <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={
                    getOptimizedImageUrl(image?.asset, 300, 300) ||
                    "/placeholder.svg"
                  }
                  alt={
                    image?.asset?.alt || image?.caption || `Image ${idx + 1}`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              {image?.caption && (
                <figcaption className="mt-2 text-center text-xs text-muted-foreground italic line-clamp-1">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    default:
      return null;
  }
}
