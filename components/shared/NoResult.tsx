import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
};

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      {/* Light img */}
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        priority
        className="block w-auto object-contain dark:hidden"
      />

      {/* Dark img */}
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        priority
        className="hidden w-auto object-contain dark:block"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-light-500">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
