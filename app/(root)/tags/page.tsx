import Link from "next/link";

import { SearchParamsProps } from "@/types";
import { TagFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import { getAllTags } from "@/lib/actions/tag.action";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

const Tags = async ({ searchParams }: SearchParamsProps) => {
  const data = await getAllTags({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: Number(searchParams.page) || 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags..."
          otherClasses="flex-1"
        />

        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {data.tags.length > 0 ? (
          data.tags.map((tag) => (
            <Link
              key={tag._id}
              href={`/tags/${tag._id}`}
              className="shadow-light100_darknone"
            >
              <article className="background-light900_dark200 light-border flex w-full flex-col rounded-2xl px-8 py-10 sm:w-[260px]">
                <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
                  <p className="paragraph-semibold text-dark300_light900">
                    {tag.name}
                  </p>
                </div>

                <p className="small-medium text-dark400_light500 mt-3.5">
                  <span className="body-semibold primary-text-gradient mr-2.5">
                    {tag.questions.length}+
                  </span>{" "}
                  Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="No Tags Found"
            description="It seems there are no tags yet."
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </section>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? Number(searchParams.page) : 1}
          isNext={data.isNext}
        />
      </div>
    </>
  );
};

export default Tags;
