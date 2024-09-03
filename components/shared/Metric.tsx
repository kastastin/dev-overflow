import Link from "next/link";
import Image from "next/image";

type MetricProps = {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  isAuthor?: boolean;
  textStyles?: string;
};

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  isAuthor,
  textStyles,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`${href && "rounded-full"} ${isAuthor ? "size-[20px] object-cover" : "object-contain"}`}
      />

      <p className={`flex items-center gap-1 ${textStyles}`}>
        {value}

        <span
          className={`small-regular line-clamp-1 ${isAuthor && "max-sm:hidden"}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
